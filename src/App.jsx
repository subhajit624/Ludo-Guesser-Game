import React from 'react'
import { NavLink } from 'react-router-dom'
import dice from './assets/dices.png'

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col md:flex-row items-center justify-center h-screen p-4">

      {/* Dice Image */}
      <div className="mb-8 md:mb-0">
        <img 
          src={dice} 
          className="w-48 sm:w-64 md:w-240 mx-auto"
          alt="Ludo Dice"
        />
      </div>

      {/* Text & Button */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">DICE GAME</h1>

        <NavLink to="/play">
          <button className="bg-black text-white font-bold py-2 px-8 sm:px-14 rounded cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 ease-in-out">
            START
          </button>
        </NavLink>
      </div>

    </div>
  )
}

export default App
