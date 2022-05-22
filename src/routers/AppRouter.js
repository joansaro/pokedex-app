import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WelcomeScreen } from '../components/welcome/WelcomeScreen'
import { DashboarsRoutes } from './DashboarsRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomeScreen />} />

        <Route path='/*' element={<DashboarsRoutes />} />

      </Routes>
    </BrowserRouter>
  )
}
