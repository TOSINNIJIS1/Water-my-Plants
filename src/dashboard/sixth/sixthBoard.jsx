import React from 'react';
import Track from '../../assets/track.png';
import Explore from '../../assets/explore.png';
import DropletA from '../../assets/dropletA.png';
import DropletB from '../../assets/dropletB.png';
import DropletC from '../../assets/dropletC.png';
import Groups from '../../assets/group.jpg';
import AddPlant from '../../assets/addPlant.jpg';
import SnakePlant from '../../assets/snake.jpg';
import Settings from '../../assets/settings.jpg';
import WireframeCollage from '../../assets/image.png';
import DashboardSketch from '../../assets/wireframe-dashboard.png';

export default function SixthBoard () {

    return (
        <div className='bg-cream px-0 py-16 sm:py-28'>
            <div className='mx-auto w-[min(86%,1040px)]'>
                <span className='mb-3 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>06 / DESIGN</span>
                <h4 className="mb-5 font-display text-4xl tracking-tight text-fern-dark sm:text-5xl">How might we differentiate between watered and unwatered plants?</h4>
                <p className='max-w-3xl text-lg leading-relaxed text-muted'>I had a couple ideas on how to denote a plant that needs water from a plant that’s not ready to be watered yet. I looked at how apps apply different states to selected and deselected items. I also considered symbols as a way to differentiate. In the end symbols are fitting in this scenario where a droplet of water could signify “dry” and plants without the droplet could mean watered already or not ready to be watered yet.</p>
                
                <div className='wireframe-gallery' aria-label='Individual paper wireframes'>
                    <figure className='wireframe-card'><img src={Groups} alt='Create group paper wireframe' /><figcaption>01 · Create</figcaption>
                    </figure>
                    <figure className='wireframe-card'>
                        <div className='wireframe-crop crop-create-group'><img src={WireframeCollage} alt='Cancel create group paper wireframe' /></div>
                        <figcaption>02 · Cancel</figcaption>
                    </figure>
                    <figure className='wireframe-card'>
                        <div className='wireframe-crop crop-succulent-group'><img src={WireframeCollage} alt='Delete group paper wireframe' /></div>
                        <figcaption>03 · Delete group</figcaption>
                    </figure>
                    <figure className='wireframe-card'><img src={DashboardSketch} alt='Dashboard paper wireframe' />
                        <figcaption>04 · Dashboard</figcaption>
                    </figure>
                    <figure className='wireframe-card'>
                        <img src={SnakePlant} alt='Plant detail paper wireframe' />
                        <figcaption>05 · Plant instruction</figcaption>
                    </figure>
                    <figure className='wireframe-card'>
                        <img src={AddPlant} alt='Add plant paper wireframe' />
                        <figcaption>06 · Add plants</figcaption>
                    </figure>
                    <figure className='wireframe-card'>
                        <img src={Settings} alt='Settings paper wireframe' />
                        <figcaption>07 · Settings</figcaption>
                    </figure>
                </div>
            </div>

            <div className='mx-auto mt-24 w-[min(86%,1040px)]'>
                <h4 className="mb-5 font-display text-4xl tracking-tight text-fern-dark sm:text-5xl">Tracking watering</h4>
                <p className="max-w-3xl text-lg leading-relaxed text-muted">Because indoor plant care is individual to each plant, users need to be able to see water history and set watering frequencies for them.</p>
                <div className='mt-8'><img className="w-full rounded-2xl" src={Track} alt='track' />
                </div>

                <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">I explored using filters denoting dehydrated plants from the rest. Perhaps tapping on the plant could show it’s been watered.</p>
                <div className="mt-8">
                    <img className="w-full rounded-2xl" src={Explore} alt='explore' />
                </div>

                <div className='mt-16'>
                    <h4 className="mb-5 font-display text-4xl tracking-tight text-fern-dark sm:text-5xl">Final Solution</h4>
                    <p className="max-w-3xl text-lg leading-relaxed text-muted">I thought if a water droplet could signify dehydration, then perhaps you could tap that plant and mark it watered. But this is where I needed to get grounded with the goal of my users: they need to see all the plants that are dehydrated.</p>

                    <div className='drop'>
                        <img className="w-full rounded-2xl bg-paper p-4" src={DropletA} alt='droplet' />
                        <img className="w-full rounded-2xl bg-paper p-4" src={DropletB} alt='droplet' />
                        <img className="w-full rounded-2xl bg-paper p-4" src={DropletC} alt='droplet' />
                    </div>
                    

                </div>

            </div>
        </div>
    )
}
