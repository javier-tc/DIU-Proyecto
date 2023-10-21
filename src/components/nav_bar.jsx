import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-danger">
      <NavLink className="navbar-brand text-white" to="/">Meal Planner</NavLink>
    </nav>
  );
};

export default NavBar;

