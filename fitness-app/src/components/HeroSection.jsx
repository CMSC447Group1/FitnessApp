import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import Hero from "../assets/hero.png";
const HeroSection = () => {
  return (
    <div className={{}}>
      <Container fluid>
        <Row>
          <Col>
            <h1 class="text-primary">Welcome to Group 1's Fitness Webapp</h1>
            <h4 class="text-info">
              Find exercises for your next workout, or take a look at our
              premade workout sheets.
            </h4>
            <Button variant="primary" size="lg" onClick={" "}>
              Exercises
            </Button>{" "}
            <Button variant="secondary" size="sm" onClick={" "}>
              Workout sheets
            </Button>{" "}
          </Col>

          <Col>
            <Image
              src="https://img.freepik.com/free-photo/exercise-weights-iron-dumbbell-with-extra-plates_1423-223.jpg?w=900&t=st=1678220069~exp=1678220669~hmac=f188694fa332fa47df49db5c622cfdb15615269630b2e989479cd4dde9d2a085')"
              fluid
              rounded
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
