import React from "react";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <div className="editorial-about-content">
      <p className="about-lead-paragraph">{t("about.description")}</p>
      <p className="about-body-paragraph">{t("about.focus")}</p>
      <p className="about-body-paragraph">{t("about.arabwdoss")}</p>

      <ol className="editorial-numbered-list my-4">
        <li className="editorial-numbered-item">
          <span className="numbered-idx">01</span>
          <span>{t("about.bank")}</span>
        </li>
        <li className="editorial-numbered-item">
          <span className="numbered-idx">02</span>
          <span>{t("about.wallet")}</span>
        </li>
        <li className="editorial-numbered-item">
          <span className="numbered-idx">03</span>
          <span>{t("about.baligne")}</span>
        </li>
      </ol>

      <p className="about-footer-paragraph">{t("about.responsive")}</p>
    </div>
  );
}

export default AboutCard;
