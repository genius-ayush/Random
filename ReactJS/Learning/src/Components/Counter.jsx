import React, { useState } from 'react'

function Counter() {

    const [counter , setCounter] =  useState(0) ; 

    function handleClickIncrease(){
        setCounter(counter+1) ; 
    }

    function handleClickDecrease(){
        setCounter(counter-1) ; 
    }
  return (
    <div>
    <button className='bg-blue-300 px-5 py-2 rounded-md font-semibold' onClick={handleClickIncrease}>increase me </button>
    <div>{counter}</div>
    <button className='bg-blue-300 px-5 py-2 rounded-md font-semibold' onClick={handleClickDecrease}>decrease me </button>
    </div>
  )
}

export default Counter