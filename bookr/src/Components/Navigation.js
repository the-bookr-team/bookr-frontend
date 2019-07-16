import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../App.css';
import Login from './Login';

const Navigation = () => {
  return(
    <nav>
      <Link to="/">Home</Link>
      <a href="#">About us</a>
      <Login buttonLabel="Sign in" className="login" />
      <Login buttonLabel="Get started" className="login" />
    </nav>
  )
};

export default Navigation;
