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
import ArabWD from "../../Assets/Projects/ArabWD.png";
import SahelTeam from "../../Assets/Projects/sahel.png";
import meoh from "../../Assets/Projects/meoh.png";
import newBank from "../../Assets/Projects/newBank.png";
import gold from "../../Assets/Projects/gold.png";
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
              imgPath={gold}
              isBlog={false}
              title={t("projects.gold.title")}
              description={t("projects.gold.description")}
              techStack={["NextJS", "Tailwind", "Typescript", "API", "Charts", "Auth", "CMS"]}
              progress={20}
              
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newBank}
              isBlog={false}
              title={t("projects.newBank.title")}
              description={t("projects.newBank.description")}
              techStack={["NextJS", "Tailwind", "Typescript"]}
              progress={100}
              demoLink="https://bdbankui.arabwaredos.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meoh}
              isBlog={false}
              title={t("projects.meoh.title")}
              description={t("projects.meoh.description")}
              techStack={["Laravel" , "JS", "Bootstrap","Auth", "CMS"]}
              progress={100}
              demoLink="https://meohgov.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SahelTeam}
              isBlog={false}
              title={t("projects.sahel.title")}
              description={t("projects.sahel.description")}
              techStack={["NextJS", "Tailwind", "Typescript"]}
              progress={100}
              demoLink="https://sahil-team.vercel.app/"
              
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ArabWD}
              isBlog={false}
              title={t("projects.arabwd.title")}
              description={t("projects.arabwd.description")}
              techStack={["JS", "GSAP", "Bootstrap"]}
              progress={100}
              
              demoLink="https://arabwaredos.com/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Balleghny}
              isBlog={false}
              title={t("projects.balleghny.title")}
              description={t("projects.balleghny.description")}
              techStack={["React", "Tailwind", "Charts", "Auth", "API"]}
              progress={100}
              
              
            />
          </Col>
        
        
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BinDowalPay}
              isBlog={false}
              title={t("projects.binDowal.title")}
              description={t("projects.binDowal.description")}
              techStack={["React", "Tailwind", "API"]}
              progress={100}
              
              demoLink="https://bin-dowal-pay-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logistics}
              isBlog={false}
              title={t("projects.logistics.title")}
              description={t("projects.logistics.description")}
              techStack={["React", "SEO", "Forms"]}
              progress={100}
              
              demoLink="https://bdlogisticsc.com/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Radiation}
              isBlog={false}
              title={t("projects.radiation.title")}
              description={t("projects.radiation.description")}
              techStack={["React", "Accessibility", "CMS", "Forms"]}
              progress={100}
              
              demoLink="https://mrcmed.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dalil}
              isBlog={false}
              title={t("projects.dalil.title")}
              description={t("projects.dalil.description")}
              techStack={["React", "Search", "Filters", "Maps"]}
              progress={100}
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MikroTik}
              isBlog={false}
              title={t("projects.mikrotik.title")}
              description={t("projects.mikrotik.description")}
              techStack={["HTML", "CSS", "JS", "Responsive"]}
              progress={100}
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title={t("projects.bank.title")}
              description={t("projects.bank.description")}
              techStack={["React", "UI", "Forms", "i18n"]}
              progress={100}
              
              demoLink="https://www.bank-bindowal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlArab}
              isBlog={false}
              title={t("projects.arab.title")}
              description={t("projects.arab.description")}
              techStack={["React", "Landing", "SEO", "Forms"]}
              progress={100}
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title={t("projects.cinema.title")}
              description={t("projects.cinema.description")}
              techStack={["React", "API", "Search", "State"]}
              progress={100}
              ghLink="https://github.com/malekba3bad/movie-app"
              
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
