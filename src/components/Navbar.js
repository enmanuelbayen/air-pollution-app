import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FaRegSun } from 'react-icons/fa';

const Navbar = () => (
  <header className="header">
    <div className="nav-container flex">
      <nav className="nav flex">
        <BsChevronLeft className="backBttn" />
        <NavLink to="/">Back</NavLink>
      </nav>
      <NavLink to="/" className="logo">Most Recent data</NavLink>
      <div className="simbols flex">
        <BiSolidMicrophone />
        <FaRegSun />
      </div>
    </div>
  </header>
);

export default Navbar;
