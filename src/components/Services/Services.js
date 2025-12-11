import React from "react";
import "./Services.css"; 
import "../../style.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: "🖥️",
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
      
    },
    {
      icon: "🎨",
      title: t("services.uiux.title"),
      description: t("services.uiux.description"),
      
    },
    {
      icon: "🔧",
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      
    },
  ];

  return (
    <div className="services-section">
      <h1 className="project-heading">
      {t("services.heading")}  <strong className="purple">{t("services.headingBold")} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("services.description")}
        </p>
      <div className="services-container">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ background: service.gradient }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;