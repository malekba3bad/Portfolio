import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/avatar.webp";
import { useTranslation } from "react-i18next";
import ProjectCard from "../Projects/ProjectCards";
import ProjectModal from "../Projects/ProjectModal";
import ClientsSection from "./ClientsSection";
import { PROJECTS_DATA } from "../../data/projectsData";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";

function Home2() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedScope, setSelectedScope] = useState("fintech");
  const [briefNote, setBriefNote] = useState("");
  const sectionsRef = useRef(null);

  const inquiryScopes = [
    {
      id: "fintech",
      ar: "منصة بنكية / مالية (FinTech)",
      en: "FinTech & Banking Platform",
    },
    {
      id: "erp",
      ar: "نظام مؤسسي / لوحة تحكم (ERP)",
      en: "Enterprise ERP & Dashboard",
    },
    {
      id: "webapp",
      ar: "تطبيق ويب (React / Next.js / Laravel)",
      en: "Full-Stack Web App (React / Next.js)",
    },
    {
      id: "corporate",
      ar: "موقع رسمي لشركة أو مؤسسة",
      en: "Corporate & Official Portal",
    },
    {
      id: "uiux",
      ar: "تطوير واجهات واستشارة تقنية",
      en: "UI/UX & Technical Consultation",
    },
  ];

  const activeScopeObj =
    inquiryScopes.find((s) => s.id === selectedScope) || inquiryScopes[0];
  const scopeLabel = isRTL ? activeScopeObj.ar : activeScopeObj.en;

  const whatsappMessage = isRTL
    ? `مرحباً مهندس مالك، أتواصل معك بخصوص مشروع: (${scopeLabel})${
        briefNote.trim() ? `\nتفاصيل إضافية: ${briefNote.trim()}` : ""
      }`
    : `Hello Eng. Malek, I'm reaching out regarding a project: (${scopeLabel})${
        briefNote.trim() ? `\nAdditional details: ${briefNote.trim()}` : ""
      }`;

  const whatsappHref = `https://wa.me/967773250384?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  const coreServices = [
    "corporate",
    "react",
    "system",
    "fullstack",
    "performance",
    "uiux",
  ];

  const specColumns = [
    {
      title: isRTL ? "هندسة الواجهات الأمامية" : "Frontend Architecture",
      items: [
        "React.js / Next.js (SSR & SPA)",
        "TypeScript / JavaScript (ES6+)",
        "Tailwind CSS / Modern CSS",
        "GSAP / Three.js WebGL",
      ],
    },
    {
      title: isRTL ? "الأنظمة الخلفية والبيانات" : "Backend & Data Systems",
      items: [
        "Laravel Framework & Custom CMS",
        "RESTful API Integration",
        "MySQL & Database Design",
        "Authentication & RBAC",
      ],
    },
    {
      title: isRTL ? "التجربة وسير العمل" : "Design & Engineering Ops",
      items: [
        "UI/UX Systems (Figma)",
        "Core Web Vitals & Speed",
        "Git / GitHub & Cloud CI/CD",
        "Technical SEO & Accessibility",
      ],
    },
  ];

  useEffect(() => {
    const root = sectionsRef.current;
    if (!root) return;

    const blocks = root.querySelectorAll(".reveal-block");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    blocks.forEach((b) => {
      gsap.set(b, { opacity: 0, y: 28 });
      observer.observe(b);
    });

    return () => observer.disconnect();
  }, [i18n.language]);

  return (
    <div ref={sectionsRef} className="home-integrated-sections">
      {/* =========================================================
          01. OFFICIAL CLIENTS & INSTITUTIONS SHOWCASE + LOGO RIBBON
         ========================================================= */}
      <ClientsSection onSelectProject={setSelectedProject} />

      {/* =========================================================
          02. SELECTED FLAGSHIP WORKS (Borderless Editorial Gallery)
         ========================================================= */}
      <section className="featured-projects-section" id="featured-projects">
        <Container>
          <div className="editorial-section-header reveal-block">
            <div className="editorial-header-left">
              <span className="editorial-index">
                02 — {t("home.featuredSection.eyebrow")}
              </span>
              <h2 className="editorial-section-title">
                {t("home.featuredSection.title")}{" "}
                {t("home.featuredSection.titleHighlight")}
              </h2>
            </div>
            <div className="editorial-header-right">
              <p className="editorial-section-desc">
                {t("home.featuredSection.subtitle")}
              </p>
              <Link to="/project" className="link-editorial mt-2">
                <span>{t("home.featuredSection.viewAll")}</span>
                <BsArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="editorial-projects-grid reveal-block">
            {featuredProjects.map((project, idx) => (
              <div key={project.id} className="editorial-project-cell">
                <ProjectCard
                  indexNum={`0${idx + 1}`}
                  imgPath={project.imgPath}
                  isBlog={false}
                  featured={true}
                  title={t(`projects.${project.i18nKey}.title`)}
                  description={t(`projects.${project.i18nKey}.description`)}
                  techStack={project.techStack}
                  status={project.status}
                  category={project.category}
                  demoLink={project.demoLink}
                  ghLink={project.ghLink}
                  onSelect={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>

          <div className="editorial-section-footer reveal-block">
            <Link to="/project" className="btn-editorial-solid">
              <span>{t("home.featuredSection.viewAll")}</span>
              <BsArrowUpRight />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================
          03. CAPABILITIES & SERVICES (Interactive Hairline List)
         ========================================================= */}
      <section className="home-services-preview">
        <Container>
          <div className="editorial-section-header reveal-block">
            <div className="editorial-header-left">
              <span className="editorial-index">
                03 — {t("home.servicesPreview.eyebrow")}
              </span>
              <h2 className="editorial-section-title">
                {t("home.servicesPreview.title")}{" "}
                {t("home.servicesPreview.titleHighlight")}
              </h2>
            </div>
            <div className="editorial-header-right">
              <p className="editorial-section-desc">
                {t("home.servicesPreview.subtitle")}
              </p>
              <Link to="/Services" className="link-editorial mt-2">
                <span>{t("home.servicesPreview.viewAll")}</span>
                <BsArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="editorial-services-list reveal-block">
            {coreServices.map((srvKey, idx) => (
              <Link
                to="/Services"
                key={srvKey}
                className="editorial-service-row"
              >
                <span className="service-row-num">0{idx + 1}</span>
                <h3 className="service-row-title">
                  {t(`services.${srvKey}.title`)}
                </h3>
                <p className="service-row-desc">
                  {t(`services.${srvKey}.description`)}
                </p>
                <span className="service-row-arrow" aria-hidden="true">
                  <BsArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          04. ENGINEER PROFILE & SPECIFICATION MATRIX
         ========================================================= */}
      <section className="home-about-section" id="about">
        <Container>
          <div className="editorial-section-header reveal-block">
            <div className="editorial-header-left">
              <span className="editorial-index">
                04 — {t("home.skillsPreview.eyebrow")}
              </span>
              <h2 className="editorial-section-title">
                {t("home2.introduction")} {t("home2.intro_bold")}
              </h2>
            </div>
            <div className="editorial-header-right">
              <Link to="/about" className="link-editorial">
                <span>{t("home.skillsPreview.moreAbout")}</span>
                <BsArrowUpRight />
              </Link>
            </div>
          </div>

          <Row className="align-items-start gy-5 reveal-block">
            <Col lg={7} className="home-about-description">
              <div className="editorial-bio-copy">
                <p className="bio-lead">{t("home2.passion")}</p>
                <p>
                  {t("home2.fluent")} <strong>{t("home2.fluent_bold")}</strong>{" "}
                  {t("home2.interest")} <strong>{t("home2.interest_ui")}</strong>{" "}
                  {t("home2.and")} <strong>{t("home2.interest_build")}</strong>
                </p>
                <p>
                  {t("home2.designs")}{" "}
                  <strong>{t("home2.designs_bold")}</strong> {t("home2.and")}{" "}
                  <strong>{t("home2.frameworks")}</strong>
                </p>
              </div>
            </Col>

            <Col lg={5} className="d-flex justify-content-lg-end">
              <div className="editorial-portrait-wrap">
                <img
                  src={myImg}
                  className="editorial-portrait-img"
                  alt="Malek Ba Abbad"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>

          {/* 3-Column Open Architectural Spec Matrix (Zero Pills/Boxes) */}
          <div className="editorial-spec-matrix reveal-block">
            {specColumns.map((col, idx) => (
              <div key={idx} className="spec-column">
                <span className="spec-col-index">0{idx + 1}</span>
                <h4 className="spec-col-title">{col.title}</h4>
                <ul className="spec-col-list">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* =========================================================
              05. OPEN EDITORIAL CONTACT STATEMENT
             ========================================================= */}
          <div className="editorial-contact-block reveal-block">
            <span className="editorial-index">
              05 — {t("home.ctaBanner.badge")}
            </span>
            <h2 className="editorial-contact-heading">
              {t("home.ctaBanner.title")}{" "}
              <span>{t("home.ctaBanner.titleHighlight")}</span>
            </h2>
            <p className="editorial-contact-desc">
              {t("home.ctaBanner.description")}
            </p>

            {/* Minimalist Quick Project Inquiry Selector */}
            <div className="quick-inquiry-wrap">
              <span className="quick-inquiry-label">
                {isRTL
                  ? "حدد نوع المشروع لتجهيز رسالة تواصل مباشرة:"
                  : "Select your project scope to prepare a direct message:"}
              </span>
              <div className="quick-inquiry-scopes" role="group">
                {inquiryScopes.map((scope) => (
                  <button
                    key={scope.id}
                    type="button"
                    className={`quick-scope-btn ${
                      selectedScope === scope.id ? "is-selected" : ""
                    }`}
                    onClick={() => setSelectedScope(scope.id)}
                  >
                    {isRTL ? scope.ar : scope.en}
                  </button>
                ))}
              </div>

              <div className="quick-inquiry-input-wrap">
                <input
                  type="text"
                  className="quick-inquiry-input"
                  value={briefNote}
                  onChange={(e) => setBriefNote(e.target.value)}
                  placeholder={
                    isRTL
                      ? "اسم الجهة أو ملاحظة مختصرة عن المشروع (اختياري)..."
                      : "Company name or brief note about your project (optional)..."
                  }
                  aria-label={
                    isRTL
                      ? "اسم الجهة أو ملاحظة مختصرة"
                      : "Company name or brief note"
                  }
                />
              </div>
            </div>

            <div className="editorial-contact-actions">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-solid"
              >
                <span>{t("home.ctaBanner.whatsapp")}</span>
                <BsArrowUpRight />
              </a>
              <Link to="/project" className="link-editorial">
                <span>{t("home.ctaBanner.viewProjects")}</span>
                <BsArrowUpRight />
              </Link>
            </div>

            <div className="editorial-social-strip">
              <a
                href="https://github.com/malekba3bad"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/malik-baabbad/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://x.com/MalikAl3bbadi"
                target="_blank"
                rel="noreferrer"
              >
                X (Twitter) ↗
              </a>
              <a
                href="https://www.instagram.com/97.oi"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
              <a
                href="https://wa.me/+967773250384"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>
        </Container>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          projectsList={PROJECTS_DATA}
          onSelectProject={setSelectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Home2;
