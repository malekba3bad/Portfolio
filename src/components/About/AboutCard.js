import React from 'react';
import Card from 'react-bootstrap/Card';
import { CgLaptop } from 'react-icons/cg';
import { CgGym } from 'react-icons/cg';
import { TbWriting } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            {t('about.description')}
            <br />
            <br />
            {t('about.focus')}
            <br />
            <br />
            {t('about.arabwdoss')}
          </p>
          <ul>
            <li className="about-activity">
              1-
              <span> {t('about.bank')}</span>
            </li>
            <br />
            <li className="about-activity">
              2-
              <span> {t('about.wallet')} </span>
            </li>
            <br />
            <li className="about-activity">
              3-
              <span> {t('about.baligne')} </span>
            </li>
          </ul>

          <p style={{ textAlign: 'justify' }}>{t('about.responsive')}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
