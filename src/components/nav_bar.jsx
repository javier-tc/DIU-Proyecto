import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <nav className="navbar fixed-top bg-danger">
        <NavLink className="navbar-brand text-white" to="/" onClick={() => window.location.reload(true)}>Meal Planner</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

