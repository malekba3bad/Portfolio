import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bank from "../../Assets/Projects/bank.png";
import Dalil from "../../Assets/Projects/Dalil.png";
import logistics from "../../Assets/Projects/logistics.png";
import AlArab from "../../Assets/Projects/AlArab.png";
import Radiation from "../../Assets/Projects/Radiation.png";
import BinDowalPay from "../../Assets/Projects/BinDowalPay.png";
import MikroTik from "../../Assets/Projects/MikroTik-login-page.png";
import movies from "../../Assets/Projects/movie-app.png";
import Balleghny from "../../Assets/Projects/Balleghny.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.heading")} <strong className="purple">{t("projects.headingBold")} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("projects.description")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Balleghny}
              isBlog={false}
              title={t("projects.balleghny.title")}
              description={t("projects.balleghny.description")}
              
              
            />
          </Col>
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title={t("projects.cinema.title")}
              description={t("projects.cinema.description")}
              ghLink="https://github.com/malekba3bad/movie-app"
              
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BinDowalPay}
              isBlog={false}
              title={t("projects.binDowal.title")}
              description={t("projects.binDowal.description")}
              
              demoLink="https://bin-dowal-pay-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logistics}
              isBlog={false}
              title={t("projects.logistics.title")}
              description={t("projects.logistics.description")}
              
              demoLink="https://bdlogisticsc.com/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Radiation}
              isBlog={false}
              title={t("projects.radiation.title")}
              description={t("projects.radiation.description")}
              
              demoLink="https://mrcmed.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dalil}
              isBlog={false}
              title={t("projects.dalil.title")}
              description={t("projects.dalil.description")}
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MikroTik}
              isBlog={false}
              title={t("projects.mikrotik.title")}
              description={t("projects.mikrotik.description")}
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title={t("projects.bank.title")}
              description={t("projects.bank.description")}
              
              demoLink="https://www.bank-bindowal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlArab}
              isBlog={false}
              title={t("projects.arab.title")}
              description={t("projects.arab.description")}
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
