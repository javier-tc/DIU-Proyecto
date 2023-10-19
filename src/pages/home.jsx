import React from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../components/nav_bar';
import App from '../components/app_calendar'
import LogoUSM from '../assets/usm.png';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="mt-3 text-white">Meal Planner</h1>
      <NavBar />
      <h2 className="mt-3 text-white">Tu Calendario</h2>

      <div>
        <h3 className="mt-3 text-white">Octubre - Semana 3</h3>
        <App />
      </div>

      <div>
        <h3 className="mt-3 text-white">Octubre - Semana 4</h3>
        <App />
      </div>
    </div>
  );
};

export default HomePage;