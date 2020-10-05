import React from 'react';
import Wireframe from '../../WF.png';
import './userFlow.scss';
import SixthBoard from '../sixth/sixthBoard';
import mediumZoom from 'medium-zoom'


export default function UserFlow () {

    mediumZoom('.zoom', {
        margin: 50,
    })

    return(
        <div class='uf'>
            <div class='w'>
                <img src={Wireframe} alt='wireframe' class='zoom' />                
            </div>

            <SixthBoard />
        </div>
    )
}