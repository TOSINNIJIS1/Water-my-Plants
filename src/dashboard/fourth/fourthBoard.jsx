import React from 'react';
import './fourthBoard.scss';
import Key from '../../key.jpg'
// import ArrowDown from '../../assets/arrowdown.jpg'


export default function FourthBoard() {


    return (
        <div className='contained'>
            <div className='take'>
                <h4> Key takeaways </h4>

                <p> I spoke with four planters and my mother about their gardening needs, goals, and blockers. Here are my key takeaways:  </p>
                <img src={Key} alt='key' />

                <div className='keya'>
                    <span> a. </span>
                    <p> Gardeners and those with large backyards tend not to need help with remembering to water.  </p>
                </div>

                <div className='keyb'>
                    <span> b. </span>
                    <p> Most outdoor plants are easily taken care of with rain and missing water a few days does not harm them. </p>
                </div>

                <div className='keyc'>
                    <span className='c'> c. </span>
                    <p className='c'> Planters however, who do not have a large backyard or live indoor in small spaces have drastically different struggles- </p>
                </div>
{/* 
                <div>
                <img src={ArrowDown} alt='arrowdown' />
                </div> */}
            </div>

            <div className='note'>
                <div className='main'>
                    <div className='notea'>
                        <ul className='a'> <li></li> </ul>
                        <p> It’s hard to keep up with which plants have been watered, which haven’t and their individual watering needs. </p>
                    </div>

                    <div className='noteb'>
                        <ul className='b'> <li></li> </ul>
                        <p> It’s hard to identify plants when you have a lot of them at home. </p>
                    </div>

                    <div className='notec'>
                        <ul className='c'> <li></li> </ul>
                        <p> It’s challenging to remember the varying needs of each plant because house plants tend to have particular care instructions. </p>
                    </div>
                </div>
            </div>

        </div>
    )
}