import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="nav-wraper red darken-3">

    <div className="container">
      <a className="brand-logo">Poke'Times</a>
      <ul className="right">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/features">Features</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>

    </nav>
  )
}