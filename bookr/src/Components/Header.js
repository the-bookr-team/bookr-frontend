import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../App.css';
import Navigation from './Navigation/Navigation';
import Searchbar from './Searchbar/Searchbar';

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<img src={logo} alt="Logo" />
			</Link>
			<div className="searchbar">
				<Searchbar />
			</div>
			<div className="nav-menu">
				<Navigation />
			</div>
		</div>
	);
};

export default Header;
