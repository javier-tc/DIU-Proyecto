import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <NavLink className="navbar-brand text-white" to="/">Página de inicio</NavLink>
      <NavLink className="nav-link text-white" to="/internal">Página Interna</NavLink>
    </nav>
  );
};

export default NavBar;

