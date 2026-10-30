import React from "react";
import { Container } from "react-bootstrap";
import "./Services.css";
import "../../style.css";
import { useTranslation } from "react-i18next";
import { BsArrowUpRight } from "react-icons/bs";

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const processSteps = t("services.process", { returnObjects: true }) || [];

  const services = [
    {
      key: "corporate",
      title: t("services.corporate.title"),
      description: t("services.corporate.description"),
    },
    {
      key: "react",
      title: t("services.react.title"),
      description: t("services.react.description"),
    },
    {
      key: "system",
      title: t("services.system.title"),
      description: t("services.system.description"),
    },
    {
      key: "fullstack",
      title: t("services.fullstack.title"),
      description: t("services.fullstack.description"),
    },
    {
      key: "api",
      title: t("services.api.title"),
      description: t("services.api.description"),
    },
    {
      key: "uiux",
      title: t("services.uiux.title"),
      description: t("services.uiux.description"),
    },
    {
      key: "performance",
      title: t("services.performance.title"),
      description: t("services.performance.description"),
    },
    {
      key: "marketing",
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
    },
    {
      key: "portfolio",
      title: t("services.portfolio.title"),
      description: t("services.portfolio.description"),
    },
    {
      key: "hosting",
      title: t("services.hosting.title"),
      description: t("services.hosting.description"),
    },
    {
      key: "seo",
      title: t("services.seo.title"),
      description: t("services.seo.description"),
    },
    {
      key: "maintenance",
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
    },
  ];

  return (
    <section className="services-section" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        {/* Editorial Section Header */}
        <div className="editorial-section-header">
          <div className="editorial-header-left">
            <span className="editorial-index">
              01 — {t("services.eyebrow")}
            </span>
            <h1 className="editorial-section-title">
              {t("services.heading")} {t("services.headingBold")}
            </h1>
          </div>
          <div className="editorial-header-right">
            <p className="editorial-section-desc">
              {t("services.description")}
            </p>
          </div>
        </div>

        {/* All 12 Services as Interactive Editorial Hairline Rows */}
        <div className="editorial-services-list mb-5">
          {services.map((service, idx) => (
            <article key={service.key} className="editorial-service-row">
              <span className="service-row-num">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <h3 className="service-row-title">{service.title}</h3>
              <p className="service-row-desc">{service.description}</p>
              <span className="service-row-arrow" aria-hidden="true">
                <BsArrowUpRight />
              </span>
            </article>
          ))}
        </div>

        {/* 4-Step Open Architectural Workflow Strip */}
        {Array.isArray(processSteps) && processSteps.length > 0 && (
          <div className="services-process-wrapper">
            <div className="editorial-section-header">
              <div className="editorial-header-left">
                <span className="editorial-index">02 — WORKFLOW</span>
                <h2 className="editorial-section-title">
                  {t("services.processTitle")} {t("services.processHighlight")}
                </h2>
              </div>
            </div>

            <div className="editorial-process-strip">
              {processSteps.map((stepObj) => (
                <div key={stepObj.step} className="editorial-process-col">
                  <span className="process-col-num">{stepObj.step}</span>
                  <h4>{stepObj.title}</h4>
                  <p>{stepObj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Services;
