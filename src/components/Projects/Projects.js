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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BinDowalPay}
              isBlog={false}
              title="Bin Dowal Pay Wallet"
              description="The leading online payment gateway in Yemen – secure financial transactions anytime, anywhere."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://bin-dowal-pay-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logistics}
              isBlog={false}
              title="Bin Dowal Contracting and Logistics"
              description="company specializes in general contracting, focusing on construction, building projects, infrastructure development, roadworks and maintenance, water solutions, and electrical engineering solutions."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://bdlogisticsc.com/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Radiation}
              isBlog={false}
              title="Mukalla Radiation Center"
              description="A streamlined design that provides easy access to critical information about their radiotherapy services."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://mrcmed.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dalil}
              isBlog={false}
              title="Employees Information System"
              description="An integrated platform for easily and efficiently searching for bank employees. Search by entering the employee's name, job title, telephone number, or even mobile number and email."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MikroTik}
              isBlog={false}
              title="Mikrotik Login Page"
              description="Design and develop a login page for local MikroTik networks to access the internet using prepaid cards."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Bin Dowal's Bank"
              description="Bin Dowal's Bank website offers a clean, user-friendly interface that focuses on providing access to Islamic microfinance solutions."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.bank-bindowal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlArab}
              isBlog={false}
              title="Arab Exchange Company"
              description="Offers banking services compliant with Central Bank regulations."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
{/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
