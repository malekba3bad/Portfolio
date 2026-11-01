import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import clientsData from "../../data/clientsData";
import { PROJECTS_DATA } from "../../data/projectsData";

function ClientsSection({ onSelectProject }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const handleSelectClient = (client) => {
    if (!onSelectProject || !client.projectIds?.length) return;
    const targetProject = PROJECTS_DATA.find(
      (p) => p.id === client.projectIds[0]
    );
    if (targetProject) {
      onSelectProject(targetProject);
    }
  };

  return (
    <section className="clients-minimal-section" id="clients">
      <Container>
        <div className="clients-minimal-layout reveal-block">
          {/* Side Heading Column */}
          <div className="clients-minimal-heading-col">
            <span className="editorial-index">
              01 — {t("home.clientsSection.eyebrow")}
            </span>
            <h2 className="clients-minimal-title">
              {t("home.clientsSection.title")}
              <br />
              <span className="clients-minimal-title-highlight">
                {t("home.clientsSection.titleHighlight")}
              </span>
            </h2>
            
          </div>

          {/* 3x4 Minimalist Logo Grid (Horizontal row hairlines only) */}
          <div className="clients-minimal-grid">
            {clientsData.map((client) => {
              const copy = isRTL ? client.ar : client.en;
              return (
                <button
                  type="button"
                  key={client.id}
                  className="client-minimal-cell"
                  onClick={() => handleSelectClient(client)}
                  title={copy.shortName}
                >
                  <img
                    src={client.icon}
                    alt={copy.shortName}
                    className={`client-minimal-icon ${
                      client.invertOnDusk ? "client-minimal-icon--invert-dusk" : ""
                    }`}
                    loading="lazy"
                  />
                  <span className="client-minimal-name">{copy.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ClientsSection;
