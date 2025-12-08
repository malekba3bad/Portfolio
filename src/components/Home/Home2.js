import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2.introduction")} <span className="purple"> {t("home2.intro_bold")} </span>
            </h1>
            <p className="home-about-body">
            {t("home2.passion")}
              <br />
              <br />{t("home2.fluent")}
              <i>
                <b className="purple"> {t("home2.fluent_bold")} </b>
              </i>
              <br />
              <br />
              {t("home2.interest")} &nbsp;
              <i>
                <b className="purple">{t("home2.interest_ui")}</b> and
                {" "}
                <b className="purple">
                {t("home2.interest_build")}
                </b>
              </i>
              <br />
              <br />
              {t("home2.designs")} <b className="purple">{t("home2.designs_bold")}</b> and
              <i>
                <b className="purple">
                  {" "}
                  {t("home2.frameworks")}
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> {t("home2.react")}</b>
              </i>
              &nbsp; along with a focus on <i>
                <b className="purple"> {t("home2.uiux")} </b> &nbsp;
              </i>  {t("home2.principles")}.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("home2.findme")}</h1>
            <p>
              {t("home2.connect")} <span className="purple">{t("home2.connect_bold")} </span>{t("home2.with_me")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/malekba3bad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/malekba3bad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/malik-baabbad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/97.oi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
