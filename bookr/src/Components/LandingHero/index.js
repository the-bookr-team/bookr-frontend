import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import Login from '../Login';

import heroImg from '../../assets/hero-img.png';

const LandingHero = () => {
  return (
    <Jumbotron className="bookr-hero bg-salmon">
      <Container>
        <Row className="flex-column flex-md-row justify-content-center align-items-center">
          <Col>
            <h1 className="font-secondary font-weight-bolder text-left">
              Looking for your next book? Look no further.
            </h1>
            <br />
            <br />
            <Login button buttonLabel="Get Started - It's Free" className="login" />
          </Col>
          <Col>
            <img className="w-100" src={heroImg} alt="person reading" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default LandingHero;
