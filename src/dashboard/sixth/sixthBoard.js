import React from 'react';
import './sixthBoard.scss';
import Image from '../../assets/image.png'
import Track from '../../assets/track.png';
import Explore from '../../assets/explore.png';
import DropletA from '../../assets/dropletA.png';
import DropletB from '../../assets/dropletB.png';
import DropletC from '../../assets/dropletC.png';

export default function SixthBoard () {

    return (
        <div class='sixthContainer'>
            <div class='idea'>
                <h4> How might we differentiate between watered and unwatered plants? </h4>
                <p class='grey'> I had a couples ideas on how to denote a plant that needs water from a plant that’s not ready to be watered yet. I looked at how apps apply different states to selected and deselected items. I also considered symbols as a way to differentiate. In the end symbols are fitting in this scenario where a droplet of water could signify “dry” and plants without the droplet could mean watered already or not ready to be watered yet. </p>
                
                <div class='images'>
                    <img class='image' src={Image} alt='7image'  />
                    
                </div>
            </div>

            <div class='diff'>
                <h4> Tracking watering </h4>
                <p> Because indoor plant care is individual to each plants, users need to be able to see water history and set watering frequencies for them. </p>
                <div class='track'>
                    <img src={Track} alt='track' />
                </div>

                <p> I explored using filters denoting dehydrated plants from the rest. Perhaps tapping on the plant, could show it’s been watered. </p>
                <div>
                    <img src={Explore} alt='explore' />
                </div>

                <div class='solution'>
                    <h4> Final Solution </h4>
                    <p> I thought if a water droplet could signify dehydration, then perhaps you could tap that plant and mark it watered. But this is where I needed to get grounded with the goal of my users: they need to see all the plants that are dehydrated. </p>                    

                    <div class='drop'>
                        <img src={DropletA} alt='droplet' class='dropA' />
                        <img src={DropletB} alt='droplet' />
                        <img src={DropletC} alt='droplet' />
                    </div>
                    

                </div>

                <div>
                    <h4> Prototype </h4>
                </div>
            </div>
        </div>
    )
}