import React from 'react';
import { NavLink } from 'react-router-dom';
import mealPlannerLogo from '../../public/images/icono_proyecto_diu_3.png';

const NavBar = () => {
	return (
		<div className='navbar-container'>
			<nav className='navbar'>
				<NavLink to="/" exact>
					<img src={mealPlannerLogo} alt="Meal Planner" className='navbar-logo' />
				</NavLink>
				<NavLink className='navbar-link' to="/calendar">Calendario</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;


