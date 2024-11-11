import React, { useState , useRef} from 'react'

function Clock() {

    const [time , setTime] = useState(0) ; 
    const timer = useRef(); 
    function start(){
         const value = setInterval(() => {
            // setTime(time+1)  
            setTime(c=>c+1) 
            // timer.current = value ; 
            
        }, 1000);
        timer.current = value ; 
    }

    function stop(){
        clearInterval(timer.current) ; 
    }
    
  return (
    <div className='p-5'>
    <h1 className='mb-2'>StopWatch</h1>
    <div>{time}</div>
    <button className='border-2 border-black px-2 py-1' onClick={start}>start</button>
    <button className='border-2 border-black py-1 px-2 ml-2' onClick={stop}>stop</button>
    </div>
  )
}

export default Clock 