import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravin Kaur </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />I am a Software Developer with over 3 years of industry expreince across companies such as Morgan Stanley, Wipro Technologies etc.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nobody cares about your story till you win, SO WIN!"{" "}
          </p>
          <footer className="blockquote-footer">Ravin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
