import React from 'react'
import Increase from './Increase'
import { Provider } from '../Provider'
import Value from './Value'
import Decrease from './Decrease'
import {
    RecoilRoot,
} from 'recoil';

function IncreaseDecrease() {
    return (
        <div className='flex justify-center items-center gap-5 mt-10'>
            {/* <Provider> */}
                <Decrease />
                <Value />
                <Increase />
            {/* </Provider> */}
        </div>
    )
}

export default IncreaseDecrease