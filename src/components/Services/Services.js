import React from "react";
import "./Services.css"; 
import "../../style.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t("services.portfolio.title"),
      description: t("services.portfolio.description"),
    },
    {
      title: t("services.corporate.title"),
      description: t("services.corporate.description"),
    },
    {
      title: t("services.system.title"),
      description: t("services.system.description"),
    },
    {
      title: t("services.marketing.title"),
      description: t("services.marketing.description"),
    },
    {
      title: t("services.react.title"),
      description: t("services.react.description"),
    },
    {
      title: t("services.api.title"),
      description: t("services.api.description"),
    },
    {
      title: t("services.performance.title"),
      description: t("services.performance.description"),
    },
    {
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
    },
    {
      title: t("services.seo.title"),
      description: t("services.seo.description"),
    },
    {
      title: t("services.uiux.title"),
      description: t("services.uiux.description"),
    }
  ];

  return (
    <div className="services-section">
      <div className="services-intro">
        <h1 className="project-heading">
          {t("services.heading")} <strong className="purple">{t("services.headingBold")}</strong>
        </h1>
        <p className="services-description">{t("services.description")}</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;