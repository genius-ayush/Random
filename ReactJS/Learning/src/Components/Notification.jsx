import React, { useEffect, useState } from 'react'

function Notification() {

    const [count , setCount] = useState(1) ; 

    useEffect(function(){
        console.log("above set interval")
        setInterval(increaseCount , 1000) ; 
        // console.log("below set interval")
    } , [])

    function increaseCount(){
        setCount(current => current+1) ; 
    }

    // function decreaseCount(){
    //     setCount(count-1); 
    // }
  return (

    <div>
    <div className='flex justify-center pt-10'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXrDYIdCrdQoXJZCETkOEUsuKoAo-DfJ14A&s" alt="" className='size-8 mt-3' />
        <div className='bg-red-600 rounded-full h-6 w-6 text-center mb'>{count}</div>
    </div>
    {/* <div className='flex justify-center'>
    <button className=' mt-10 border-2 p-1 rounded-md bg-blue-300' onClick={increaseCount}> increase count </button>
    <button className=' mt-10 border-2 p-1 rounded-md bg-blue-300' onClick={decreaseCount}> decrease count </button>
    </div> */}
    </div>
  )
}

export default Notification