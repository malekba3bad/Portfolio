import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/* ==========================================================================
   CONTACT COMPANION 3D
   An interactive wireframe character (same visual language as HeroSphere3D)
   that lives in the contact section and reacts to:
     - pointer movement inside the contact zone (head + eyes follow cursor)
     - project scope selection (jump, happy eyes, core morphs per scope)
     - typing in the brief note input (reads along the caret, talks, antenna pulse)
     - clicking the character itself (playful spin)
   ========================================================================== */

const SCOPE_KEYS = ["corporate", "erp", "uiux"];

const MESSAGES = {
  idle: {
    ar: "مرحباً! اختر نوع مشروعك وسأجهّز رسالتك.",
    en: "Hi! Pick your project type and I'll prep your message.",
  },
  corporate: {
    ar: "موقع رسمي؟ سنبني حضوراً رقمياً يليق بالجهة.",
    en: "An official portal? Let's build a presence worthy of it.",
  },
  erp: {
    ar: "نظام مؤسسي؟ أحب ترتيب البيانات المعقدة!",
    en: "An enterprise system? I love taming complex data!",
  },
  uiux: {
    ar: "واجهات وتجربة مستخدم؟ هنا يبدأ السحر.",
    en: "UI/UX work? This is where the magic starts.",
  },
  typing: {
    ar: "أقرأ معك...",
    en: "Reading along...",
  },
  ready: {
    ar: "رائع! رسالتك جاهزة للإرسال عبر واتساب.",
    en: "Great — your message is ready for WhatsApp.",
  },
};

const normalizeScope = (scope) =>
  SCOPE_KEYS.includes(scope) ? scope : SCOPE_KEYS[0];

function ContactCompanion3D({ zoneRef, inputRef, scope, note, isRTL }) {
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [bubbleKey, setBubbleKey] = useState("idle");
  const [bubbleTick, setBubbleTick] = useState(0);

  // Live state shared with the render loop (avoids re-initialising WebGL)
  const liveRef = useRef({
    scope: normalizeScope(scope),
    scopeChangedAt: -10,
    keystrokeAt: -10,
    keystrokes: 0,
  });

  const isFirstScope = useRef(true);
  const isFirstNote = useRef(true);
  const readyTimer = useRef(null);

  const showBubble = (key) => {
    setBubbleKey(key);
    setBubbleTick((n) => n + 1);
  };

  // React to scope selection
  useEffect(() => {
    liveRef.current.scope = normalizeScope(scope);
    if (isFirstScope.current) {
      isFirstScope.current = false;
      return;
    }
    liveRef.current.scopeChangedAt = performance.now() / 1000;
    showBubble(normalizeScope(scope));
  }, [scope]);

  // React to typing
  useEffect(() => {
    if (isFirstNote.current) {
      isFirstNote.current = false;
      return;
    }
    liveRef.current.keystrokeAt = performance.now() / 1000;
    liveRef.current.keystrokes += 1;

    clearTimeout(readyTimer.current);
    if (note && note.trim()) {
      setBubbleKey("typing");
      readyTimer.current = setTimeout(() => showBubble("ready"), 1100);
    } else {
      showBubble(liveRef.current.scope);
    }
  }, [note]);

  useEffect(() => () => clearTimeout(readyTimer.current), []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const zone = (zoneRef && zoneRef.current) || container;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 420;
    const height = container.clientHeight || 460;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    const disposables = [];
    const track = (obj) => {
      disposables.push(obj);
      return obj;
    };

    /* ----------------------------- Palette ----------------------------- */
    const getPalette = () => {
      const isDusk =
        document.documentElement.getAttribute("data-theme") === "dusk";
      return isDusk
        ? {
            outer: "#93C5FD",
            outerOpacity: 0.3,
            points: "#FDE68A",
            inner: "#F4845F",
            innerOpacity: 0.55,
            ring: "#F4A261",
            sclera: "#1B2238",
            pupil: "#FDE68A",
            glint: "#FFFFFF",
            blush: "#F4845F",
          }
        : {
            outer: "#1E3A8A",
            outerOpacity: 0.26,
            points: "#E05A47",
            inner: "#E05A47",
            innerOpacity: 0.5,
            ring: "#D97706",
            sclera: "#FFFDF9",
            pupil: "#1E3A8A",
            glint: "#FFFFFF",
            blush: "#E05A47",
          };
    };
    const pal = getPalette();

    /* ----------------------------- Materials --------------------------- */
    const wireMat = track(
      new THREE.MeshBasicMaterial({
        color: pal.outer,
        wireframe: true,
        transparent: true,
        opacity: pal.outerOpacity,
      })
    );
    const pointsMat = track(
      new THREE.PointsMaterial({
        color: pal.points,
        size: 0.034,
        transparent: true,
        opacity: 0.85,
      })
    );
    const coreMat = track(
      new THREE.MeshBasicMaterial({
        color: pal.inner,
        wireframe: true,
        transparent: true,
        opacity: pal.innerOpacity,
      })
    );
    const ringMat = track(
      new THREE.MeshBasicMaterial({
        color: pal.ring,
        transparent: true,
        opacity: 0.38,
      })
    );
    const lineMat = track(
      new THREE.MeshBasicMaterial({
        color: pal.outer,
        transparent: true,
        opacity: 0.75,
      })
    );
    const scleraMat = track(new THREE.MeshBasicMaterial({ color: pal.sclera }));
    const pupilMat = track(new THREE.MeshBasicMaterial({ color: pal.pupil }));
    const glintMat = track(new THREE.MeshBasicMaterial({ color: pal.glint }));
    const accentMat = track(new THREE.MeshBasicMaterial({ color: pal.inner }));
    const tipMat = track(
      new THREE.MeshBasicMaterial({ color: pal.ring, transparent: true })
    );
    const blushMat = track(
      new THREE.MeshBasicMaterial({
        color: pal.blush,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      })
    );

    /* ----------------------------- Character --------------------------- */
    const BASE_Y = -0.25; // leaves headroom for the speech bubble
    const character = new THREE.Group();
    scene.add(character);

    const HEAD_R = 1.12;
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.5;
    character.add(headGroup);

    // Head — morphing wireframe icosphere (same DNA as the hero sculpture)
    const headGeo = track(new THREE.IcosahedronGeometry(HEAD_R, 3));
    const headBase = new Float32Array(headGeo.attributes.position.array);
    headGroup.add(new THREE.Mesh(headGeo, wireMat));
    headGroup.add(new THREE.Points(headGeo, pointsMat));

    // Face helpers
    const surfaceZ = (x, y, lift = 0.1) =>
      Math.sqrt(Math.max(0, HEAD_R * HEAD_R - x * x - y * y)) + lift;
    const orientToSurface = (obj, x, y) => {
      obj.rotation.y = Math.asin(x / HEAD_R) * 0.9;
      obj.rotation.x = -Math.asin(y / HEAD_R) * 0.9;
    };

    // Eyes
    const EYE_X = 0.38;
    const EYE_Y = 0.14;
    const scleraGeo = track(new THREE.CircleGeometry(0.21, 40));
    const rimGeo = track(new THREE.RingGeometry(0.205, 0.232, 48));
    const pupilGeo = track(new THREE.CircleGeometry(0.095, 32));
    const glintGeo = track(new THREE.CircleGeometry(0.028, 16));
    const happyGeo = track(
      new THREE.TorusGeometry(0.13, 0.024, 8, 28, Math.PI)
    );
    const blushGeo = track(new THREE.CircleGeometry(0.11, 24));

    const makeEye = (x) => {
      const root = new THREE.Group();
      root.position.set(x, EYE_Y, surfaceZ(x, EYE_Y));
      orientToSurface(root, x, EYE_Y);

      const open = new THREE.Group();
      root.add(open);

      const sclera = new THREE.Mesh(scleraGeo, scleraMat);
      const rim = new THREE.Mesh(rimGeo, lineMat);
      rim.position.z = 0.002;
      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.z = 0.006;
      const glint = new THREE.Mesh(glintGeo, glintMat);
      glint.position.set(0.032, 0.034, 0.004);
      pupil.add(glint);
      open.add(sclera, rim, pupil);

      const happy = new THREE.Mesh(happyGeo, lineMat);
      happy.position.y = -0.04;
      happy.visible = false;
      root.add(happy);

      headGroup.add(root);
      return { root, open, pupil, happy };
    };
    const eyes = [makeEye(-EYE_X), makeEye(EYE_X)];

    // Cheeks (blush when happy)
    [-0.62, 0.62].forEach((x) => {
      const y = -0.16;
      const cheek = new THREE.Mesh(blushGeo, blushMat);
      cheek.position.set(x, y, surfaceZ(x, y, 0.08));
      orientToSurface(cheek, x, y);
      headGroup.add(cheek);
    });

    // Mouth — smile arc that "talks" while the visitor types
    const MOUTH_Y = -0.3;
    const mouthGeo = track(
      new THREE.TorusGeometry(0.15, 0.02, 8, 32, Math.PI)
    );
    const mouthRoot = new THREE.Group();
    mouthRoot.position.set(0, MOUTH_Y, surfaceZ(0, MOUTH_Y));
    orientToSurface(mouthRoot, 0, MOUTH_Y);
    const mouth = new THREE.Mesh(mouthGeo, accentMat);
    mouth.rotation.z = Math.PI; // lower half = smile
    mouthRoot.add(mouth);
    headGroup.add(mouthRoot);

    // Antenna with a glowing tip
    const antenna = new THREE.Group();
    antenna.position.y = HEAD_R - 0.04;
    const stalkGeo = track(new THREE.CylinderGeometry(0.012, 0.012, 0.42, 6));
    const stalk = new THREE.Mesh(stalkGeo, lineMat);
    stalk.position.y = 0.21;
    const tipGeo = track(new THREE.SphereGeometry(0.075, 16, 16));
    const tip = new THREE.Mesh(tipGeo, tipMat);
    tip.position.y = 0.46;
    const haloGeo = track(new THREE.RingGeometry(0.11, 0.125, 32));
    const halo = new THREE.Mesh(haloGeo, ringMat);
    halo.position.y = 0.46;
    antenna.add(stalk, tip, halo);
    headGroup.add(antenna);

    // Floating core (body) — morphs to represent the selected project scope
    const coreGroup = new THREE.Group();
    coreGroup.position.y = -1.32;
    character.add(coreGroup);

    const coreGeos = {
      corporate: track(new THREE.BoxGeometry(0.58, 0.74, 0.58, 2, 3, 2)), // building
      erp: track(new THREE.TorusGeometry(0.36, 0.13, 10, 28)), // dashboard gauge
      uiux: track(new THREE.OctahedronGeometry(0.48, 0)), // crafted gem
    };
    const cores = {};
    SCOPE_KEYS.forEach((key) => {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(coreGeos[key], coreMat));
      g.add(new THREE.Points(coreGeos[key], pointsMat));
      const active = key === liveRef.current.scope;
      g.scale.setScalar(active ? 1 : 0.0001);
      g.userData = { s: active ? 1 : 0, v: 0 };
      coreGroup.add(g);
      cores[key] = g;
    });

    // Orbital ring + satellite
    const ringGeo = track(new THREE.TorusGeometry(1.95, 0.006, 16, 160));
    const ring = new THREE.Mesh(ringGeo, ringMat);
    const ringPivot = new THREE.Group();
    ringPivot.rotation.x = Math.PI / 2.4;
    ringPivot.rotation.y = -Math.PI / 10;
    ringPivot.position.y = 0.1;
    ringPivot.add(ring);
    const satGeo = track(new THREE.SphereGeometry(0.05, 12, 12));
    const satellite = new THREE.Mesh(satGeo, accentMat);
    ringPivot.add(satellite);
    character.add(ringPivot);

    /* --------------------------- Theme sync ---------------------------- */
    const themeObserver = new MutationObserver(() => {
      const p = getPalette();
      wireMat.color.set(p.outer);
      wireMat.opacity = p.outerOpacity;
      pointsMat.color.set(p.points);
      coreMat.color.set(p.inner);
      coreMat.opacity = p.innerOpacity;
      ringMat.color.set(p.ring);
      lineMat.color.set(p.outer);
      scleraMat.color.set(p.sclera);
      pupilMat.color.set(p.pupil);
      glintMat.color.set(p.glint);
      accentMat.color.set(p.inner);
      tipMat.color.set(p.ring);
      blushMat.color.set(p.blush);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    /* ------------------------ Interaction state ------------------------ */
    const now = () => performance.now() / 1000;
    const pointer = { x: 0, y: 0, inside: false, at: -10 };
    let enteredAt = -10;
    let spinAt = -10;
    let inputFocused = false;
    let caretFont = "";
    const measureCtx = document.createElement("canvas").getContext("2d");

    const onZoneMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.at = now();
      if (!pointer.inside) {
        pointer.inside = true;
        enteredAt = now();
      }
    };
    const onZoneLeave = () => {
      pointer.inside = false;
    };
    const onCharacterClick = () => {
      spinAt = now();
    };
    const onFocus = () => {
      inputFocused = true;
      caretFont = window.getComputedStyle(inputRef.current).font;
    };
    const onBlur = () => {
      inputFocused = false;
    };

    zone.addEventListener("pointermove", onZoneMove, { passive: true });
    zone.addEventListener("pointerleave", onZoneLeave, { passive: true });
    container.addEventListener("pointerdown", onCharacterClick);
    const inputEl = inputRef && inputRef.current;
    if (inputEl) {
      inputEl.addEventListener("focus", onFocus);
      inputEl.addEventListener("blur", onBlur);
    }

    // Screen point of the caret inside the note input (so the eyes "read along")
    const getCaretPoint = () => {
      if (!inputEl) return null;
      const rect = inputEl.getBoundingClientRect();
      if (caretFont) measureCtx.font = caretFont;
      const textW = Math.min(
        measureCtx.measureText(inputEl.value || "").width,
        rect.width
      );
      const rtl = window.getComputedStyle(inputEl).direction === "rtl";
      return {
        x: rtl ? rect.right - textW : rect.left + textW,
        y: rect.top + rect.height / 2,
      };
    };

    /* ----------------------------- Resize ------------------------------ */
    const handleResize = () => {
      const w = container.clientWidth || 420;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", handleResize, { passive: true });
    }

    let isVisible = true;
    const visObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    visObserver.observe(container);

    /* ---------------------------- Animation ---------------------------- */
    const clamp = (v, min = -1, max = 1) => Math.max(min, Math.min(max, v));
    const easeInOut = (x) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

    const look = { x: 0, y: 0 };
    const pupilLook = { x: 0, y: 0 };
    let nextBlink = now() + 2.5;
    let blinkStart = -10;
    let lastKeystrokes = liveRef.current.keystrokes;
    let tipPulse = 0;
    let ringSpeedBoost = 0;
    let lastFrame = now();
    let animFrameId;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const t = now();
      const dt = Math.min(0.05, t - lastFrame);
      lastFrame = t;
      const live = liveRef.current;

      // 1. Breathing head morph (gentler than the hero sphere)
      const pos = headGeo.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        const bx = headBase[i];
        const by = headBase[i + 1];
        const bz = headBase[i + 2];
        const wave =
          Math.sin(bx * 2.2 + t * 1.3) *
          Math.cos(by * 2.2 + t * 1.1) *
          Math.sin(bz * 2.2 + t * 0.9) *
          0.045;
        const s = 1 + wave;
        pos[i] = bx * s;
        pos[i + 1] = by * s;
        pos[i + 2] = bz * s;
      }
      headGeo.attributes.position.needsUpdate = true;

      // 2. Decide where to look
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.45; // approx. head centre
      const typingRecently = t - live.keystrokeAt < 1.4;
      let target = null;

      if (typingRecently || (inputFocused && !pointer.inside)) {
        target = getCaretPoint();
      } else if (pointer.inside) {
        target = { x: pointer.x, y: pointer.y };
      } else if (inputFocused) {
        target = getCaretPoint();
      }

      let lookX;
      let lookY;
      if (target) {
        lookX = clamp((target.x - cx) / (rect.width * 0.85));
        lookY = clamp((target.y - cy) / (rect.height * 0.85));
      } else {
        // Idle curiosity: slowly glance around
        lookX = Math.sin(t * 0.45) * 0.4 + Math.sin(t * 1.3) * 0.08;
        lookY = Math.sin(t * 0.32) * 0.18;
      }

      look.x += (lookX - look.x) * 0.07;
      look.y += (lookY - look.y) * 0.07;
      pupilLook.x += (lookX - pupilLook.x) * 0.2;
      pupilLook.y += (lookY - pupilLook.y) * 0.2;

      // 3. Reactions
      const sinceScope = t - live.scopeChangedAt;
      const sinceEnter = t - enteredAt;
      const sinceSpin = t - spinAt;
      const happy =
        sinceScope < 1.5 ||
        sinceSpin < 1.2 ||
        (!typingRecently && t - live.keystrokeAt < 3.2 && live.keystrokes > 0);

      if (live.keystrokes !== lastKeystrokes) {
        lastKeystrokes = live.keystrokes;
        tipPulse = 1;
      }
      tipPulse = Math.max(0, tipPulse - dt * 3);
      if (sinceScope < 0.05) ringSpeedBoost = 1;
      ringSpeedBoost = Math.max(0, ringSpeedBoost - dt * 0.8);

      // Jump on scope change
      const jumpP = sinceScope < 0.6 ? sinceScope / 0.6 : 1;
      const jump = Math.sin(jumpP * Math.PI) * 0.38;
      const squash = sinceScope < 0.6 ? 1 + Math.sin(jumpP * Math.PI * 2) * 0.05 : 1;

      // Float + lean
      character.position.y = BASE_Y + Math.sin(t * 1.4) * 0.07 + jump;
      character.rotation.z = -look.x * 0.07;

      // Spin when the character is clicked
      const spinP = sinceSpin < 0.9 ? easeInOut(sinceSpin / 0.9) : 0;

      headGroup.rotation.y = look.x * 0.6 + spinP * Math.PI * 2;
      headGroup.rotation.x =
        look.y * 0.42 + (typingRecently ? Math.sin(t * 9) * 0.025 : 0);
      headGroup.scale.set(1 / squash, squash, 1 / squash);

      // Eyes: blink, follow, surprise and happy states
      if (t > nextBlink) {
        blinkStart = t;
        nextBlink = t + 2.2 + Math.random() * 3.2;
      }
      const blinkP = (t - blinkStart) / 0.16;
      const blink = blinkP >= 0 && blinkP <= 1 ? Math.sin(blinkP * Math.PI) : 0;
      const surprise = sinceEnter < 0.8 ? Math.sin((sinceEnter / 0.8) * Math.PI) * 0.18 : 0;

      eyes.forEach((eye) => {
        eye.open.visible = !happy;
        eye.happy.visible = happy;
        const s = 1 + surprise;
        eye.open.scale.set(s, s * (1 - blink * 0.92), 1);
        eye.pupil.position.x = pupilLook.x * 0.085;
        eye.pupil.position.y = -pupilLook.y * 0.085;
      });

      blushMat.opacity += ((happy ? 0.32 : 0) - blushMat.opacity) * 0.1;

      // Mouth: talks while typing, grins when happy
      const talking = typingRecently && t - live.keystrokeAt < 0.45;
      const mouthOpen = talking ? 1 + Math.abs(Math.sin(t * 22)) * 0.9 : 1;
      const grin = happy ? 1.25 : 1;
      mouth.scale.set(grin, mouthOpen * (happy ? 1.15 : 1), 1);

      // Antenna sway + keystroke pulse
      antenna.rotation.z = Math.sin(t * 2.1) * 0.08 - (lookX - look.x) * 1.2;
      antenna.rotation.x = Math.sin(t * 1.7) * 0.05;
      const tipScale = 1 + tipPulse * 0.9 + (inputFocused ? Math.sin(t * 4) * 0.08 : 0);
      tip.scale.setScalar(tipScale);
      tipMat.opacity = 0.75 + tipPulse * 0.25;
      halo.scale.setScalar(1 + tipPulse * 1.6);

      // Core morph (spring pop between scope shapes)
      SCOPE_KEYS.forEach((key) => {
        const g = cores[key];
        const d = g.userData;
        const tgt = key === live.scope ? 1 : 0;
        d.v += (tgt - d.s) * 0.12;
        d.v *= 0.78;
        d.s += d.v;
        g.scale.setScalar(Math.max(0.0001, d.s));
        g.visible = d.s > 0.01;
      });
      coreGroup.position.y = -1.32 + Math.sin(t * 1.4 + 0.9) * 0.08;
      coreGroup.rotation.y = t * 0.5 + look.x * 0.4;
      coreGroup.rotation.x = Math.sin(t * 0.6) * 0.25;

      // Orbit ring
      ring.rotation.z = t * (0.18 + ringSpeedBoost * 2.4);
      const satA = t * (0.6 + ringSpeedBoost * 3);
      satellite.position.set(Math.cos(satA) * 1.95, Math.sin(satA) * 1.95, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      visObserver.disconnect();
      themeObserver.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener("resize", handleResize);
      zone.removeEventListener("pointermove", onZoneMove);
      zone.removeEventListener("pointerleave", onZoneLeave);
      container.removeEventListener("pointerdown", onCharacterClick);
      if (inputEl) {
        inputEl.removeEventListener("focus", onFocus);
        inputEl.removeEventListener("blur", onBlur);
      }
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!webglSupported) return null;

  const message = MESSAGES[bubbleKey] || MESSAGES.idle;

  return (
    <div className="contact-companion-wrapper" aria-hidden="true">
      <div className="contact-companion-aura" />
      <div className="contact-companion-bubble" key={`${bubbleKey}-${bubbleTick}`}>
        {isRTL ? message.ar : message.en}
      </div>
      <div ref={mountRef} className="contact-companion-canvas" />
      <div className="contact-companion-shadow" />
    </div>
  );
}

export default ContactCompanion3D;
