import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Presupuesto from '../pages/presupuesto'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/presupuesto' element={<Presupuesto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
