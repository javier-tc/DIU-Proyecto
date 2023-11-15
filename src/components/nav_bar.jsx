import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='navbar-container'>
			<nav className='navbar'>
				<NavLink className='navbar-link' to="/" exact>Meal Planner</NavLink>
				<NavLink className='navbar-link' to="/calendar">Calendario</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;


