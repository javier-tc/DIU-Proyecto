import React from 'react';
import NavBar from '../components/nav_bar';
import App from '../components/app_calendar'

const HomePage = () => {
  return (
    <div className="container">
      <NavBar />
      <h1 className="calendar-title">Tu Calendario</h1>

      <div>
        <h3 className="mt-3 text-black">Octubre - Semana 3</h3>
        <App />
      </div>

      <div>
        <h3 className="mt-3 text-black">Octubre - Semana 4</h3>
        <App />
      </div>
    </div>
  );
};

export default HomePage;