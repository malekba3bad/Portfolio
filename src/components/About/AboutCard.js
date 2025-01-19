import React from 'react';
import Card from 'react-bootstrap/Card';
import { CgGames } from "react-icons/cg";
import { CgGym } from "react-icons/cg";
import { TbWriting } from "react-icons/tb";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Malek Ba Abbad </span>
            from <span className="purple"> Hadhramout, Yemen.</span>
            <br />
            I am currently employed as a Front-End developer at Arab WareDoss.
            <br />
            I completed my bachelor's in Management Information Systems at
            Yarmouk University, Jordan, where I also served as the Head of the
            Yemeni community, actively contributing to its activities and
            initiatives.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <CgGym /> Go to GYM
            </li>
            <li className="about-activity">
              <TbWriting /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <CgGames /> Playing Games
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
