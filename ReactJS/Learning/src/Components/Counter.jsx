import React, { useState } from 'react'

function useCounter(){
    const [counter , setCounter] = useState(0) ; 
    function increaseCounter(){
        setCounter(counter+1) ; 
    }

    return {
        counter : counter , 
        increaseCounter : increaseCounter
    }
}

function Counter() {


  return (

    <div className='text-center mt-10'>
        <Count/>
        <Count/>
        <Count/>
        <Count/>
    </div>
  )
}

function Count(){

    const {counter , increaseCounter} = useCounter() ; 
    return<>
        <div>{counter}</div>
        <button className='border-2 border-black px-2 py-1 rounded-md  bg-blue-300' onClick={increaseCounter}>click me</button>
    </>
}

export default Counter