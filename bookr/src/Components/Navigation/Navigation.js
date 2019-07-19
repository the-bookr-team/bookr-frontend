import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './navigation.css';
import Login from '../Login';

const Navigation = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About Us</Link>
			<Login buttonLabel="Sign In" className="login" />
			<Login buttonLabel="Get Started" className="login" />
		</nav>
	);
};

export default Navigation;
