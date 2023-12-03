import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/icons8-home-security-64.png'; 

const LandingNavbar = () => {
  return (
    <nav className="navbar">
      <img src={logoImage} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Admin Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LandingNavbar;
