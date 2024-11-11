import React, { useRef } from 'react'

function UseRef() {

    const inputRef1 = useRef() ; 
    const inputRef2 = useRef() ; 
    function focusOnInput1(){
        // document.getElementById("name").focus() ;
        inputRef1.current.focus() ; 
    }

    function focusOnInput2(){
      inputRef2.current.focus();  
    }
  return (
    <div className='ml-2'>
        <h1>Signup</h1>
        <input type="text" ref={inputRef1} id="name" className='border-2  border-black mb-2'/>
        <br />
        <input type="text" ref={inputRef2} id='password' className='border-2  border-black mb-2 '/>
        <br/>
        <button className='border-2 p-1  border-black mr-2' onClick={focusOnInput1}>click me 1</button>
        <button className='border-2 p-1  border-black' onClick={focusOnInput2}>click me 2</button>
    </div>
  )
}

export default UseRef