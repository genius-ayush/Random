import React, { useState } from 'react'

function Bulb() {
  return (
    <div>
        <LightBuld/>
    </div>
  )
}

function LightBuld(){

    const [on , setOn] = useState(false) ; 
    return (
        <div className='bg-gray-300 w-full h-screen'>
            <div className='text-center pt-32 flex justify-center'>
                <BulbState on={on}/>
            </div>
                <br />
                <div className='flex justify-center'>
                <ToggleBulbState on={on} setOn={setOn}/>
                </div>
            
        </div>
    )
}

function BulbState({on}){
    return <>

        {on? <div className='bg-yellow-300 text-black w-44 h-44 text-center'>Bulb On</div>:<div className='bg-black text-white w-44 h-44'>Bulb Off</div>}
    </>
}

function ToggleBulbState({on , setOn}){

    function toggle(){
        setOn(!on) ; 
    }
    return (
        <>
            <button className='border-black border-2 px-2 py-1 rounded-lg bg-blue-400' onClick={toggle}>Switch</button>
        </>
    )
}

export default Bulb