import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import Login from '../Login/Login';

import heroImg from '../../assets/hero-img.png';

import './index.css';

const LandingHero = () => {
	return (
		<Jumbotron className="bookr-hero">
			<Container>
				<Row className="hero-container flex-column flex-md-row justify-content-center align-items-center">
					<Col>
						<h1 className="hero-header font-secondary font-weight-bolder text-left">
							Looking for your next book?
							<br />
							Look no further.
						</h1>
						<br />
					</Col>
					<Col>
						<img className="hero-img" src={heroImg} alt="person reading" />
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default LandingHero;
