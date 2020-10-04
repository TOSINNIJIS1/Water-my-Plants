import React from 'react';
import './fifthBoard.scss';
import Feng from '../../feng.png';
import Stat from '../../stat.png';
import Dashboard from '../../DB.png';
import Schedule from '../../SC.png';



export default function () {
    return (
        <div class='fifthContainer'>
            <h4> Creating empathy </h4>
            <p class='emp'> Because I’m not the one experiencing these challanges, I needed to empathize with the planters who do. I defined the typical planter who needs a solution to these challenges. </p>

            <div class='feng'>
                <h4> The feng shui enthusiast </h4>
                
                <div class='img'>
                    <p> Loves adopting plants, but can’t get them organized to save her life. Her partner thinks she owns too many plants for their small apartment. She feels frustrated because often these plants have different needs and not many ways to tell them apart.   </p>
                    <img src={Feng} alt='lady' />
                </div>
            </div>

            <div class='journey'>
                <p> I put myself in her shoes and stopped at every point in her <bold class='bold'> journey </bold> to understand her needs, goals, and frustrations. </p>
                <img src={Stat} alt='stat'  />
            </div>

            <div class='arch'>
                <h4> Information Architecture </h4>
                <p> Using my new found growth, I was ready to create the userflow using some predetermined tasks. </p>
                <div class='image'>
                    <img src={Dashboard} alt='Dashboard' class='img' />
                    <img src={Schedule} alt='schedule' />
                </div>
            </div>

        </div>
    )
}