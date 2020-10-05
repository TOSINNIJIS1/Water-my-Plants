import React from 'react';
import Group from '../../assets/group.jpg';
import Dashboard from '../../assets/dashboard.jpg';
import Succulents from '../../assets/succulent.jpg';
import Plants from '../../assets/plants.jpg';
import Snake from '../../assets/snake.jpg';
import Add from '../../assets/addPlant.jpg';
import Settings from '../../assets/settings.jpg';
import Track from '../../assets/track.png';
import Explore from '../../assets/explore.png';
import DropletA from '../../assets/dropletA.png';
import DropletB from '../../assets/dropletB.png';
import DropletC from '../../assets/dropletC.png';

import './image.scss'


export default function Image () {


    return (
        <div class='img'>
            <img src={Group} alt='group' />
            <img src={Dashboard} alt='group' />
            <img src={Group} alt='group' />
            <img src={Group} alt='group' />
            <img src={Group} alt='group' />
            <img src={Group} alt='group' />
            <img src={Group} alt='group' />
        </div>
    )
}