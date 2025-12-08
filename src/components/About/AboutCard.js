import React from 'react';
import Card from 'react-bootstrap/Card';
import { CgGames } from "react-icons/cg";
import { CgGym } from "react-icons/cg";
import { TbWriting } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            {t("about.description")}
            <br />
            <br />
            {t("about.activities")}
          </p>
          <ul>
            <li className="about-activity">
              <CgGym /> {t("about.gym")}
            </li>
            <li className="about-activity">
              <TbWriting /> {t("about.blogs")}
            </li>
            <li className="about-activity">
              <CgGames /> {t("about.games")}
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
