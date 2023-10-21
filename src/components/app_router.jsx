import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Presupuesto from '../pages/presupuesto'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/presupuesto' element={<Presupuesto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
