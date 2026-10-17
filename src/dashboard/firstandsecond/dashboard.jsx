import React from 'react';
import './dashboard.scss';
import SecondDashBoard from './secondBoard';
import ThirdDashBoard from '../third/thirdBoard';
import FourthDashBoard from '../fourth/fourthBoard';
import FifthDashBoard from '../fifth/fifthBoard';
import UserFlow from '../userFlow/userflow';

export default function Dashboard () {


    return (
        <div>
            <div id='story' className='dashContainer'>
                <div className='firstDash'>
                    <h1> Water my Plants </h1>
                    <p> Designed to organize, track, and record plant watering with an emphasis on the wellbeing of indoor plants. </p>

                    <h4> DURATION </h4>
                    <p> 6 weeks</p>

                    <h4> CROSSFUNCTIONAL TEAM </h4>
                    <p> Front-end developers, back-end developers, project lead, and UX </p>
                </div>


                <div className='secondDash' id='process'>
                    <h4>My Process at a glance</h4>

                    <div className='wks'>
                        <div className='one'>
                            <h5> WEEK 1 </h5>
                            <p> User Research </p>
                        </div>

                        <div className='two'>
                            <h5> WEEK 2 </h5>
                            <p> Research Synthesis </p>
                        </div>
                        
                        <div className='three'>
                            <h5> WEEK 3 </h5>
                            <p> Ideation </p>
                        </div>
                    </div>

                    <div className='wks'>
                        <div className='four'>
                            <h5> WEEK 4 </h5>
                            <p> Lo-fi Wireframes </p>
                        </div>
                    
                        <div className='five'>
                            <h5> WEEK 5 </h5>
                            <p> Visual design </p>
                        </div>

                        <div className='six'>
                            <h5> WEEK 6 </h5>
                            <p> Test & Iterate </p>
                        </div>
                    </div>
                </div>
                <SecondDashBoard />
                </div>
                
                <div>
                    <ThirdDashBoard />
                    <FourthDashBoard />
                    <FifthDashBoard />
                    <UserFlow />

                </div>
        </div>
    )
}
