import React from 'react';
import Wireframe from '../../WF.png';
import './userFlow.scss';
import SixthBoard from '../sixth/sixthBoard';


export default function UserFlow () {

    return(
        <div className='uf'>
            <div className='w'>
                <img src={Wireframe} alt='wireframe' className='zoom' />                
            </div>

            <SixthBoard />
        </div>
    )
}
