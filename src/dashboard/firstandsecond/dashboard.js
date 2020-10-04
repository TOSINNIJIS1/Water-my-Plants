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
            <div class='dashContainer'>
                <div class='firstDash'>
                    <h1> Water my Plants </h1>
                    <p> Designed to organize, track, and record plant watering with an emphasis on the wellbeing of indoor plants. </p>

                    <h4> DURATION </h4>
                    <p> 6 weeks</p>

                    <h4> CROSSFUNCTIONAL TEAM </h4>
                    <p> Front-end developers, back-end developers, project lead, and UX </p>
                </div>


                <div class='secondDash'>
                    <h4>My Process at a glance</h4>

                    <div class='wks'>
                        <div class='one'>
                            <h5> WEEK 1 </h5>
                            <p> User Research </p>
                        </div>

                        <div class='two'>
                            <h5> WEEK 2 </h5>
                            <p> Research Synthesis </p>
                        </div>
                        
                        <div class='three'>
                            <h5> WEEK 3 </h5>
                            <p> Ideation </p>
                        </div>
                    </div>

                    <div class='wks'>
                        <div class='four'>
                            <h5> WEEK 4 </h5>
                            <p> Lo-fi Wireframes </p>
                        </div>
                    
                        <div class='five'>
                            <h5> WEEK 5 </h5>
                            <p> Visual design </p>
                        </div>

                        <div class='six'>
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