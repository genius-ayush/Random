import React, { useState } from 'react'

function IncreaseDecrease() {
    let [counter , setCounter] = useState(10) ; 

    function add(){
        setCounter(counter+1) ; 
    }

    function substract(){
        setCounter(counter-1) ; 
    }
  return (
    <div>
        <div>Counter: {counter}</div>
        <br />
        <br />
        <button onClick={add}>increase</button>
        <br />
        <br />
        <button onClick={substract}>decrease</button>
    </div>
  )
}

export default IncreaseDecrease