import React from 'react';
import './dashboard.scss';
import solution from '../../solution.png';
import solutions from '../../solutions.png';

export default function SDash() {


    return (
        <div class='cont'>
            <div class='prob'>
                <h4>Problem</h4>
                <p> Building a schedule around ensuring that all your plants are watered is actually pretty difficult. Water my Plants helps to solve those problems by providing an easy to use interface for creating a plant watering schedule that will remind users to water their plants on a regular basis.  </p>
            </div>

            <div class='sol'>
                <h4> Solution Overview </h4>
                <div class='img'>
                    <img src={solution} alt='solution' />
                    <img src={solutions} alt='solutions' />
                </div>
            </div>
        </div>
    )
}