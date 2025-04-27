import React from 'react'
import { NavLink } from 'react-router-dom'
import dice from './assets/dices.png'
function App() { 

  return (
    <div className="flex h-screen">
    <div>
      <img 
        src={dice} 
        className="h-screen w-240 mx-20" 
        alt="Ludo Dice"
      />
    </div>
    <div className="flex flex-col justify-center gap-8">
      <h1 className="text-5xl font-bold ">DICE GAME</h1>
      <NavLink to="/play">
        <button className="bg-black ml-24 text-white font-bold py-2 px-14 rounded cursor-pointer hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 ease-in-out">
          START
        </button>
      </NavLink>
    </div>
  </div>
  
  
  )
}

export default App
