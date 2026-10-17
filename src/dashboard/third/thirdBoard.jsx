import React from 'react';
import './thirdBoard.scss';

export default function ThirdDashboard () {

    return (
        <div className='contain'>
            <div className='ques'>
                <h4> How might we help planters remember to water their plants? </h4>
                <p> The problem is pretty broad. I thought maybe everybody needed watering reminder. But my mother who is an avid gardner seemed to not need any help remembering to water. So I asked: </p>

                <div className='a'>
                    <span> a. </span>
                    <p> who needs reminder to water their plants? </p>
                </div>

                <div className='b'>
                    <span> b. </span>
                    <p> what are they using now to remember to water? </p>
                </div>

                <div className='c'>
                    <span> c. </span>
                    <p> what factors are contributing to their plants growth or deterioration? </p>
                </div>

            </div>
            
        </div>
    )
}