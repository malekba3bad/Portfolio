import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function HeroSphere3D() {
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

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

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.3;

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const getPalette = () => {
      const isDusk =
        document.documentElement.getAttribute("data-theme") === "dusk";
      return isDusk
        ? {
            outer: "#93C5FD",
            outerOpacity: 0.28,
            points: "#FDE68A",
            inner: "#F4845F",
            innerOpacity: 0.35,
            ring: "#F4A261",
          }
        : {
            outer: "#1E3A8A", // Deep Ocean Indigo on Warm Cream
            outerOpacity: 0.24,
            points: "#E05A47", // Warm Terracotta Coral nodes
            inner: "#E05A47", // Terracotta inner core
            innerOpacity: 0.34,
            ring: "#D97706", // Warm Amber ring
          };
    };

    const initialPalette = getPalette();

    // 1. Outer Morphing Architectural Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(1.56, 4);
    const posAttr = outerGeo.attributes.position;
    const basePositions = new Float32Array(posAttr.array.length);
    basePositions.set(posAttr.array);

    const outerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(initialPalette.outer),
      wireframe: true,
      transparent: true,
      opacity: initialPalette.outerOpacity,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 2. Coral / Gold Vertex Points
    const pointsMat = new THREE.PointsMaterial({
      color: new THREE.Color(initialPalette.points),
      size: 0.036,
      transparent: true,
      opacity: 0.85,
    });
    const surfacePoints = new THREE.Points(outerGeo, pointsMat);
    mainGroup.add(surfacePoints);

    // 3. Inner Geometric Core (Warm Terracotta Coral)
    const innerGeo = new THREE.OctahedronGeometry(0.86, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(initialPalette.inner),
      wireframe: true,
      transparent: true,
      opacity: initialPalette.innerOpacity,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 4. Delicate Orbital Ring
    const ringGeo = new THREE.TorusGeometry(2.12, 0.006, 16, 140);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(initialPalette.ring),
      transparent: true,
      opacity: 0.32,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    ring.rotation.y = Math.PI / 9;
    mainGroup.add(ring);

    // Watch theme changes live so 3D sculpture adapts immediately
    const themeObserver = new MutationObserver(() => {
      const p = getPalette();
      outerMat.color.set(p.outer);
      outerMat.opacity = p.outerOpacity;
      pointsMat.color.set(p.points);
      innerMat.color.set(p.inner);
      innerMat.opacity = p.innerOpacity;
      ringMat.color.set(p.ring);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetX = Math.max(-1, Math.min(1, x)) * 0.5;
      targetY = Math.max(-1, Math.min(1, y)) * 0.5;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 460;
      const newH = container.clientHeight || 460;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let animFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const t = clock.getElapsedTime();

      const positions = outerGeo.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];

        const wave =
          Math.sin(bx * 2.1 + t * 1.2) *
          Math.cos(by * 2.1 + t * 1.0) *
          Math.sin(bz * 2.1 + t * 0.9) *
          0.08;

        const scale = 1 + wave;
        positions[i] = bx * scale;
        positions[i + 1] = by * scale;
        positions[i + 2] = bz * scale;
      }
      outerGeo.attributes.position.needsUpdate = true;

      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      mainGroup.rotation.y = t * 0.14 + currentX;
      mainGroup.rotation.x = currentY * 0.65;

      innerMesh.rotation.y = -t * 0.25;
      innerMesh.rotation.z = t * 0.15;
      ring.rotation.z = t * 0.16;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      outerGeo.dispose();
      outerMat.dispose();
      pointsMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return <div className="hero-sphere-fallback" aria-hidden="true" />;
  }

  return (
    <div className="hero-sphere-wrapper" aria-hidden="true">
      <div className="hero-sphere-warm-aura" />
      <div ref={mountRef} className="hero-sphere-canvas" />
    </div>
  );
}

export default HeroSphere3D;
