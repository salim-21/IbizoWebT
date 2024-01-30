
import React, { useState } from 'react';
import App from "../App";
import Footer from './Footer';

import './Nav.css'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='container-flex'>
      <img
        loading="lazy"
        srcSet="/image/2.svg"
        alt="Logo"
        className='img-11'
      />
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <Link to={'/'}> <li>Home</li></Link>
      <Link to={'/About'}> <li>About</li></Link>
      <div class="dropdown">
    <li class="dropbtn">Services 
      <i class="fa fa-caret-down"></i>
    </li>
    <div class="dropdown-content">
    <Link to={'/Affiliate'}><span className='aa'>Affiliate Marketing</span></Link>
    <Link to={'/Performance'}><span className='aa'>Performance Marketing</span></Link>
    </div>
  </div> 
      <Link to={'/Contact'}> <li>Contact</li></Link>
      </ul>
        <Link to={'/Contact'} id="zy"> Talk to an expert </Link>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
    
    
  );
};

export default Nav;
