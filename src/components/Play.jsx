import React from 'react'
import { useState } from 'react'
import dice1 from '../assets/dice_1.png'
import dice2 from '../assets/dice_2.png'
import dice3 from '../assets/dice_3.png'
import dice4 from '../assets/dice_4.png'
import dice5 from '../assets/dice_5.png'  
import dice6 from '../assets/dice_6.png'
import rules from '../assets/Rules.png'

function Play() {
  const [rule , setRule] = React.useState(false)
  const [selectNumber , setSelectNumber] = useState(null)
  const [dice , setDice] = useState(dice1)
  const [total , setTotal] = useState(0)
  const [numbernotselect , setnumbernotselect ] = useState(false)
  const [counter , setCounter] = useState(0)
  const [selectedElement, setSelectedElement] = useState(null);



  const selectNumberHandler = (number) => {
    if(selectedElement){
      selectedElement.classList.remove('bg-black', 'text-white');
    }
  
    setSelectNumber(number.target.innerText);
    setnumbernotselect(false);
  
    number.target.classList.add('bg-black', 'text-white');
    setSelectedElement(number.target);
  }
  
  const rollDiceHandler = () => {
    if(selectNumber == null) {
      setnumbernotselect(true)
      return  
    }
    const randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1:
        setDice(dice1)
        break
      case 2:
        setDice(dice2)
        break
      case 3:
        setDice(dice3)
        break
      case 4:
        setDice(dice4)
        break
      case 5:
        setDice(dice5)
        break
      case 6:
        setDice(dice6)
        break
      default:
        break
    }
    if (selectNumber == randomNumber) {
      setTotal(total + randomNumber)
    }
    else {
      setTotal(total - 2)
    }
    setSelectNumber(null)
    setCounter(counter + 1)
    const numberElements = document.querySelectorAll('h1')
    numberElements.forEach((element) => {
      element.classList.remove('bg-black')
      element.classList.remove('text-white')
    })
  }


  const rulechecker = () => {
    setRule(!rule)
  }
  



  return (
    <div>
             <div className='flex justify-between items-center p-4 mt-3 '>
                  {counter < 5 ? <div className='flex flex-col items-center m-3 text-2xl font-medium'>
                      <h2 className='text-5xl font-mono text-red-800'>{total}</h2>
                      <h1>Total Score</h1>
                      {selectNumber != null ? <> <br /><h2 className=''>You Choose: {selectNumber}</h2></> : <></>}
                  </div> : <></>}

                      {counter < 5 ?  <div className="flex justify-center items-center mt-6">
  <h1 className="text-xl ml-39 md:text-4xl font-extrabold text-black text-center animate-pulse tracking-wide">
    Make the Total Positive in 5 Rolls!
  </h1>
</div>
: <></>}
                     {counter < 5 ?  <div>
                        {numbernotselect ? <h1 className='text-2xl text-red-600 ml-6'>select a number</h1> : <></>}
                         <div className='flex flex-row gap-2 m-3'>
                         <h1 onClick={selectNumberHandler} className='text-2xl font-bold border-2 border-black px-3 p-2 cursor-pointer hover:bg-black hover:text-white'>1</h1>
                         <h1 onClick={selectNumberHandler} className='text-2xl font-bold border-2 border-black px-3 p-2 cursor-pointer hover:bg-black hover:text-white'>2</h1>
                         <h1 onClick={selectNumberHandler} className='text-2xl font-bold border-2 border-black px-3 p-2 cursor-pointer hover:bg-black hover:text-white'>3</h1>
                         <h1 onClick={selectNumberHandler} className='text-2xl font-bold border-2 border-black px-3 p-2 cursor-pointer hover:bg-black hover:text-white'>4</h1>
                         <h1 onClick={selectNumberHandler} className='text-2xl font-bold border-2 border-black px-3 p-2 cursor-pointer hover:bg-black hover:text-white'>5</h1>
                         <h1 onClick={selectNumberHandler} className='text-2xl font-bold border-2 border-black px-3 p-2 cursor-pointer hover:bg-black hover:text-white'>6</h1>

                         </div>
                         <h1 className='text-2xl font-bold ml-33'>Select Number</h1>
                      </div> : <></>}
             </div>
                          {/* mid portion */}
                          <div className='flex justify-center items-center mt-7 flex-col gap-3 mb-3'>
                          
                                      {counter < 5 ? (<img onClick={rollDiceHandler} src={dice} alt="dice" className='cursor-pointer' /> ):
                                      (total > 0 ? <h1 className='text-4xl font-bold text-green-600'>You Win</h1> : <h1 className='text-4xl font-bold text-red-600'>You Lose</h1>)}
                                      {counter < 5 ? <h1 className='text-2xl font-bold'>Roll The Dice</h1> : <h1 className='text-2xl font-bold'>Game Over</h1>}
                                      {counter < 1 ? <h2 className='font-semibold'>Click On Dice To Roll</h2> : <><h2 className='text-2xl font-bold'>Rolls Left: {5 - counter}</h2></>}
                                     {counter < 5 ?  <h2 onClick={() => {setTotal(0), setCounter(0)}} className='font-semibold  border-2 border-black p-2 px-5 rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out'>Reset Score</h2> : <></>}
                                      {counter < 5 ? <h2 onClick={rulechecker} className='mt-4 px-6 py-3 bg-black border-2 border-black text-white font-semibold rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>Rules</h2> : <></>}
                                         {counter < 5 ? (rule ? <img src={rules} alt="rules" /> : null) : (<div className="mt-2 px-6 py-3 border-2 border-black bg-white text-black font-semibold rounded-xl shadow-md hover:bg-black hover:text-white hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => window.location.reload()}>Restart Game</div>)}
                                  </div>
    </div>
  )
}

export default Play
