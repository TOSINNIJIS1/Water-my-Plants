import React from 'react';
import Wireframe from '../../WF.png';
import './userFlow.scss';
import SixthBoard from '../sixth/sixthBoard';




export default function UserFlow () {


    return(
        <div class='uf'>
            <div class='w'>
                <img src={Wireframe} alt='wireframe' class='wf' />
            </div>

            <SixthBoard />
        </div>
    )
}