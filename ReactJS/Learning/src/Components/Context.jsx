import React, { createContext, useContext, useState } from 'react'
const CountContext = createContext() ; 



function Context({children}) {
    const [count, setCount] = useState(0);
    return (
        <div className='text-center bg-gray-100 w-full h-screen'>
            <CountContext.Provider value={{count , setCount}}>
            {children}
            </CountContext.Provider>
        </div>
    )
}

function Parent({count , setCount}){
    return <>
        <div className='flex gap-10 justify-center pt-32'>
            <CountContextProvier>
                
                <Decrease setCount={setCount} count={count}/>
                <Counter setCount={setCount} count={count}/>
                <Increase setCount={setCount} count={count}/>
                </CountContextProvier>
            </div>
    </>
}

function Decrease(){
    const {count , setCount} = useContext(CountContext) ; 
    function handleDecrease() {
        setCount(count - 1);
    }
    return <>
        <div className='px-2 py-2 w-20 h-10 rounded-lg bg-blue-200' onClick={handleDecrease}>Decrease</div>
    </>
}

function Increase(){
    const {count , setCount} = useContext(CountContext); 
    function handleIncrease() {
        setCount(count + 1);
    }
    return <>
        <div onClick={handleIncrease} className='px-2 py-2 w-20 h-10 rounded-lg bg-blue-200'>Increase</div>
    </>
}

function Counter(){
    const count = useContext(CountContext); 
    return <>
        <div>{count} </div>
    </>
}

export default Context