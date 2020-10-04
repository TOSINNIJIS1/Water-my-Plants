import React from 'react';
import './fifthBoard.scss';
import Feng from '../../feng.png';
import Stat from '../../stat.png'

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

            <div>
                <h4> Information Architecture </h4>
                <p> Using my new found growth, I was ready to create the userflow using some predetermined tasks. </p>
                <div>
                    <img src='' alt='Dashboard' />
                    <img src='' alt='schedule' />
                </div>
            </div>

            <div>
                <img src='' alt='wireframe' />
            </div>

            <div>
                <h4> How might we differentiate between watered and unwatered plants? </h4>
                <p> I had a couples ideas on how to denote a plant that needs water from a plant that’s not ready to be watered yet. I looked at how apps apply different states to selected and deselected items. I also considered symbols as a way to differentiate. In the end symbols are fitting in this scenario where a droplet of water could signify “dry” and plants without the droplet could mean watered already or not ready to be watered yet. </p>
                <div>
                    <img src='' alt='Dashboard' />
                    <img src='' alt='schedule' />
                    <img src='' alt='schedule' />
                    <img src='' alt='schedule' />
                    <img src='' alt='schedule' />
                    <img src='' alt='schedule' />
                    <img src='' alt='schedule' />
                </div>
            </div>

            <div>
                <h4> Version One </h4>
                <div>
                    <img src='' alt='one' />
                    <img src='' alt='two' />
                    <img src='' alt='three' />
                </div>
            </div>
        </div>
    )
}