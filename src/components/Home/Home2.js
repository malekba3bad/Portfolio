import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with front-end development and design, and I’m always learning something new, I think… 🎨💻
              <br />
              <br />I am fluent in languages and modern frameworks like
              <i>
                <b className="purple"> Javascript and React JS. </b>
              </i>
              <br />
              <br />
              My field of interest lies in crafting beautiful &nbsp;
              <i>
                <b className="purple">user-friendly interfaces</b> and
                {" "}
                <b className="purple">
                building seamless web experiences.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I love bringing my designs to life using <b className="purple">Modern Front-End Libraries</b> and
              <i>
                <b className="purple">
                  {" "}
                  Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js,</b>
              </i>
              &nbsp; along with a focus on <i>
                <b className="purple"> UI/UX </b> &nbsp;
              </i>  principles to create intuitive and engaging products.
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
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
