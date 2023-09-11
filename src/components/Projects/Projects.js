import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import scientificCalculator from "../../Assets/Projects/scientificCalculator.png";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scientificCalculator}
              isBlog={false}
              title="Scientific Calculator"
              description="An intuitive Calculator layout that includes a display for input and output, a keypad for numbers and operations, and a toggle button for the theme"
              ghLink="https://github.com/ravinkaur1997/Calculator.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
