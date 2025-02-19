import { useState } from "react";
import { IncreaseDecreaseContext } from "./Context";
import {
    atom,
  } from 'recoil';

export function Provider({children}){
    const [count , setCount] = useState(0) ; 

    return <IncreaseDecreaseContext.Provider value={{count , setCount}}>{children}</IncreaseDecreaseContext.Provider>
}

export const  count = atom({
    key : 'countState' , 
    default : 0 ,
})