import React, { useContext } from 'react'
import { IncreaseDecreaseContext } from '../Context'
import { count } from '../Provider';

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useSetRecoilState ,
    useRecoilValue,
  } from 'recoil';

function Increase() {
    // const {  setCount} = useContext(IncreaseDecreaseContext)
    const setCount = useSetRecoilState(count) ;
  return (
    <div>
        <button onClick={()=>{setCount(currentCount => currentCount+1 )}} className='px-4 py-2 bg-blue-100'>Increase</button>
    </div>
  )
}

export default Increase