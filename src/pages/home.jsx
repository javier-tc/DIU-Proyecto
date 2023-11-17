import React from 'react';
import NavBar from '../components/nav_bar';

const HomePage = () => {
	return (
		<div id='fill-container' className='layout_shift_spacer tomato_background tomato_background_left'>
			<div className="home-container">
				<NavBar />
				<header className="main-header">
					<h1 className="app-title">Planificador de Comidas</h1>
					<p className="app-description">
						¡Organiza tu semana con deliciosas comidas para el desayuno, almuerzo y cena!
					</p>
				</header>
				<div className="central-section">
					<p className="web-description">
						Bienvenido a <strong>Meal Planner</strong>, donde la organización se encuentra con la deliciosa cocina. Nuestra aplicación te permite planificar y disfrutar de comidas nutritivas y equilibradas a lo largo de la semana. Con características intuitivas y flexibles, simplificamos tu experiencia culinaria para que puedas concentrarte en saborear cada bocado.
					</p>
					<div className='caracteristicas'>
						<p className="web-description">
							Planificar tus comidas en <strong>Meal Planner</strong> te permite:
						</p>
						<div className="image-and-text">
							<img src='/images/save_time_and_money.png' alt="Ahorro de tiempo y dinero" className="left-image" />
							<p className="importance">
								Ahorrar tiempo y dinero.
							</p>
						</div>
						<div className="image-and-text">
							<img src='/images/healthy_food.png' alt="Comida sana" className="left-image food" />
							<p className="importance">
								Tener una alimentación más sana y consciente.
							</p>
						</div>
					</div>
				</div>
			</div>
			<footer className="main-footer">
				<p>&copy; 2023 Meal Planner</p>
			</footer>
		</div>
	);
};

export default HomePage;
