import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return(
    <div className="header">
      <img src={logo} alt="Logo" />
      <Navigation />
    </div>
  )
}

export default Header;
