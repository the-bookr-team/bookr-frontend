import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';

const Navigation = () => {
  return(
    <div className="header">
      <img src={logo} alt="Logo" />

      <nav>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Sign in</a>
        <a href="#">Get started</a>
      </nav>
    </div>
  )
};

export default Navigation;
