import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../App.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return(
    <div className="header">
    <Link to="/"><img src={logo} alt="Logo" /></Link>
      <Navigation />
    </div>
  )
}

export default Header;
