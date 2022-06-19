import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Welcome.css'

export const WelcomeScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/primera-generacion', {
      replace: true
    })
  };

  return (
    <div className='welcome'>
      <div className="welcome__banner"></div>
      <div className="welcome__text">
        <h1>Welcome to the Pokedex</h1>
        <h2>Click on the button below to get started</h2>
        <button
          className="welcome__button btn"
          onClick={handleLogin}
        >
          Get Started</button>
      </div>
    </div>
  )
}
