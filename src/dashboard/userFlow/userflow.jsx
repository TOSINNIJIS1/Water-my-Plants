import React from 'react';
import Wireframe from '../../WF.png';
import SixthBoard from '../sixth/sixthBoard';


export default function UserFlow () {

    return(
        <div className='bg-fern-dark px-0 pb-0 pt-16 sm:pt-28'>
            <div className='mx-auto w-[min(86%,1040px)] pb-12'>
                <img src={Wireframe} alt='wireframe' className='w-full rounded-3xl shadow-2xl' />
            </div>

            <SixthBoard />
        </div>
    )
}
