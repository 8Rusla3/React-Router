import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <ul className="menu__items-wrapper">
        <li className="menu__items-link"><Link to="/">Home</Link></li>
        <li className="menu__items-link"><Link to="/login">Login</Link></li>
        <li className="menu__items-link"><Link to="/contact">Contact</Link></li>
        <li className="menu__items-link"><Link to="/fallback">Fallback</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
