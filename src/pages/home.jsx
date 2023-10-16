import React from 'react'

import NavBar from '../components/nav_bar'
import App from '../components/app_calendar.jsx'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2 className='home_title'>Tu Calendario</h2>

      <div>
        <h3 className='calendar_title'>Octubre - Semana 3</h3>
        <App />
      </div>

      <div>
        <h3 className='calendar_title'>Octubre - Semana 4</h3>
        <App />
      </div>
      
    </div>
  )
}

export default HomePage
