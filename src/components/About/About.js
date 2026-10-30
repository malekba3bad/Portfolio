import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const timeline = t("about.timeline", { returnObjects: true }) || [];

  return (
    <section className="about-section" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="editorial-section-header">
          <div className="editorial-header-left">
            <span className="editorial-index">01 — {t("about.eyebrow")}</span>
            <h1 className="editorial-section-title">
              {t("about.heading")} {t("about.headingBold")}
            </h1>
          </div>
        </div>

        <Row className="gy-5 align-items-start mb-5 pb-4">
          <Col lg={7}>
            <Aboutcard />
          </Col>

          {/* Open Architectural Timeline (Zero Boxes) */}
          <Col lg={5}>
            <div className="editorial-timeline-wrap">
              <span className="editorial-index mb-3 d-block">
                {t("about.timelineTitle")} {t("about.timelineHighlight")}
              </span>
              <div className="editorial-timeline-list">
                {Array.isArray(timeline) &&
                  timeline.map((item, idx) => (
                    <div key={idx} className="editorial-timeline-item">
                      <span className="timeline-period">{item.period}</span>
                      <h4 className="timeline-role">{item.role}</h4>
                      <span className="timeline-org">{item.org}</span>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
          </Col>
        </Row>

        <div className="editorial-section-header mt-5">
          <div className="editorial-header-left">
            <span className="editorial-index">02 — STACK</span>
            <h2 className="editorial-section-title">
              {t("about.skillsetBold")} {t("about.skillsetHeading")}
            </h2>
          </div>
        </div>
        <Techstack />

        <div className="editorial-section-header mt-5">
          <div className="editorial-header-left">
            <span className="editorial-index">03 — WORKFLOW</span>
            <h2 className="editorial-section-title">
              {t("about.toolsHeading")} {t("about.toolsBold")}
            </h2>
          </div>
        </div>
        <Toolstack />
      </Container>
    </section>
  );
}

export default About;
