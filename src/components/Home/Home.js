import React, { Suspense, lazy, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation } from "react-i18next";
import { BsArrowUpRight, BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import gsap from "gsap";

const HeroSphere3D = lazy(() => import("./HeroSphere3D"));

function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".editorial-stat-item",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          delay: 0.4,
          ease: "power2.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [i18n.language]);

  const scrollToFeatured = (e) => {
    const el = document.getElementById("featured-projects");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ScrollArrow = isRTL ? BsArrowDownLeft : BsArrowDownRight;

  return (
    <main ref={heroRef} dir={isRTL ? "rtl" : "ltr"}>
      <section className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center gy-5">
            <Col lg={7} className="home-header">
              {/* Minimalist Editorial Index + Status */}
              <div className="hero-animate-item editorial-kicker">
                <span className="kicker-live-dot" />
                <span>00 — {t("home.badge")}</span>
              </div>

              {/* Commanding Single-Tone Display Name */}
              <h1 className="hero-animate-item editorial-hero-title">
                {t("home.fullName")}
              </h1>

              <h2 className="hero-animate-item editorial-hero-role">
                {t("home.roleTitle")}
              </h2>

              <p className="hero-animate-item editorial-hero-lead">
                {t("home.subtitle")}
              </p>

              {/* Borderless Inline Typewriter Specialization */}
              <div className="hero-animate-item editorial-typewriter-row">
                <span className="typewriter-prefix">{t("home.experiences")}:</span>
                <div className="typewriter-line">
                  <Type />
                </div>
              </div>

              {/* Clean Editorial Actions (1 Solid Primary + 2 Borderless Links) */}
              <div className="hero-animate-item editorial-hero-actions">
                <a
                  href="#featured-projects"
                  onClick={scrollToFeatured}
                  className="btn-editorial-solid"
                >
                  <span>{t("home.ctaProjects")}</span>
                  <ScrollArrow />
                </a>

                <a
                  href="https://wa.me/+967773250384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial"
                >
                  <span>{t("home.ctaContact")}</span>
                  <BsArrowUpRight />
                </a>

                <Link to="/resume" className="link-editorial">
                  <span>{t("home.ctaResume")}</span>
                  <BsArrowUpRight />
                </Link>
              </div>
            </Col>

            {/* Open 3D Wireframe Sphere */}
            <Col lg={5} className="d-flex justify-content-center">
              <Suspense
                fallback={
                  <div className="hero-sphere-fallback" aria-hidden="true" />
                }
              >
                <HeroSphere3D />
              </Suspense>
            </Col>
          </Row>

          {/* Open Architectural Hairline Metrics Strip (Zero Boxes) */}
          <div className="editorial-stats-strip">
            <div className="editorial-stat-item">
              <span className="editorial-stat-num">{t("home.stats.years")}</span>
              <span className="editorial-stat-label">
                {t("home.stats.yearsLabel")}
              </span>
            </div>
            <div className="editorial-stat-item">
              <span className="editorial-stat-num">
                {t("home.stats.projects")}
              </span>
              <span className="editorial-stat-label">
                {t("home.stats.projectsLabel")}
              </span>
            </div>
            <div className="editorial-stat-item">
              <span className="editorial-stat-num">
                {t("home.stats.fintech")}
              </span>
              <span className="editorial-stat-label">
                {t("home.stats.fintechLabel")}
              </span>
            </div>
            <div className="editorial-stat-item">
              <span className="editorial-stat-num">
                {t("home.stats.performance")}
              </span>
              <span className="editorial-stat-label">
                {t("home.stats.performanceLabel")}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Home2 />
    </main>
  );
}

export default Home;
