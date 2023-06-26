import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="header flex">
    <div className="nav-container flex">
      <logo className="logo">CLEAN-AIR</logo>
      <nav className="nav flex">
        <NavLink to="/" className="home">Home</NavLink>
        <NavLink to="/Details" className="details">Details</NavLink>
      </nav>
    </div>
  </header>
);

export default Navbar;
