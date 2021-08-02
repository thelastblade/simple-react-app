import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mountains from "./assets/mountains";
import food from "./assets/food";
import birds from "./assets/birds";
import beaches from "./assets/beaches";

function App() {
  document.title = "Simple React App"

  const selection = {
    0: [mountains, "Mountain"],
    1: [beaches, "Beach"],
    2: [birds, "Bird"],
    3: [food, "Food"],
  }

  const [state, setState] = useState(0);

  return (
    <>
      <div className="Buttons">
        <Button variant="dark" onClick={() => setState(0)}>
          Mountain
        </Button>
        <Button variant="dark" onClick={() => setState(1)}>
          Beaches
        </Button>
        <Button variant="dark" onClick={() => setState(2)}>
          Bird
        </Button>
        <Button variant="dark" onClick={() => setState(3)}>
          Food
        </Button>
      </div>

      <div className="Title">
        <h2>{selection[state][1]} Pictures</h2>
      </div>

      <div className="Images">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Image src={selection[state][0].image1} thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <Image src={selection[state][0].image2} thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <Image src={selection[state][0].image3} thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <Image src={selection[state][0].image4} thumbnail />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3}>
              <Image src={selection[state][0].image5} thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <Image src={selection[state][0].image6} thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <Image src={selection[state][0].image7} thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <Image src={selection[state][0].image8} thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
