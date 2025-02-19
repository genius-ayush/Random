import React, { useContext } from 'react'
import { IncreaseDecreaseContext } from '../Context'
import { count } from '../Provider';

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

function Value() {
    // const {count} = useContext(IncreaseDecreaseContext) ; 
    const count2 = useRecoilState(count) ;
  return (
    <div>{count2}</div>
  )
}

export default Value