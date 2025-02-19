import React, { useContext } from 'react'
import { IncreaseDecreaseContext } from '../Context'
import { count } from '../Provider';
import {
  RecoilRoot,
  atom,
  selector,
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function Decrease() {
    
    // const { setCount} = useContext(IncreaseDecreaseContext)
    const setCount = useSetRecoilState(count) ;
  return (
    <div>
        <button onClick={()=>{setCount(currCount => currCount-1)}} className='px-4 py-2 bg-blue-100'>Decrease</button>
    </div>
  )
}

export default Decrease