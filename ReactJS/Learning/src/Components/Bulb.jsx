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
        <div>
            <BulbState on={on}/>
            <br />
            <ToggleBulbState on={on} setOn={setOn}/>
        </div>
    )
}

function BulbState({on}){
    return <>

        {on?"BulbOn":"BuldOff"}
    </>
}

function ToggleBulbState({on , setOn}){

    function toggle(){
        setOn(!on) ; 
    }
    return (
        <>
            <button className='border-black border-2 px-2 py-1' onClick={toggle}>Switch</button>
        </>
    )
}

export default Bulb