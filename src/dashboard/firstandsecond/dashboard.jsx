import React from 'react';
import SecondDashBoard from './secondBoard';
import ThirdDashBoard from '../third/thirdBoard';
import FourthDashBoard from '../fourth/fourthBoard';
import FifthDashBoard from '../fifth/fifthBoard';
import UserFlow from '../userFlow/userflow';

export default function Dashboard () {


    return (
        <div>
            <div id='story'>
                <div className='relative isolate mx-auto mt-8 grid w-[min(86%,1040px)] max-w-6xl grid-cols-1 items-center gap-10 overflow-hidden rounded-[2rem] border border-[#c7dcc8] bg-gradient-to-br from-sage to-[#f4eddb] px-6 py-10 shadow-[0_24px_70px_rgba(32,53,43,.1)] sm:px-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-24 lg:py-24'>
                    <div className="relative z-10">
                        <span className='mb-5 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>UX CASE STUDY · 2024</span>
                        <h1 className='mb-6 max-w-[9ch] font-display text-[clamp(3.6rem,9vw,7.8rem)] font-bold leading-[.88] tracking-[-.075em] text-fern-dark'>Water my <em className="not-italic text-terracotta">Plants</em></h1>
                        <p className="mb-8 max-w-xl text-[clamp(1.08rem,2vw,1.35rem)] leading-relaxed text-muted">A kinder way to care for the plants that make a house feel like home.</p>
                        <a className="inline-flex items-center gap-3 rounded-full bg-fern-dark px-5 py-3 text-sm font-extrabold text-paper no-underline hover:-translate-y-0.5 hover:bg-fern" href="#projects">Explore the case study <span className="text-xl text-marigold" aria-hidden="true">↓</span></a>
                        <div className="mt-16 grid max-w-2xl grid-cols-2 gap-4 border-t border-fern/25 pt-5 sm:grid-cols-3">
                            <div><span className="mb-2 block text-[.63rem] font-extrabold tracking-[.14em] text-terracotta">ROLE</span><strong className="block text-sm text-fern-dark">Product design</strong></div>
                            <div><span className="mb-2 block text-[.63rem] font-extrabold tracking-[.14em] text-terracotta">DURATION</span><strong className="block text-sm text-fern-dark">6 weeks</strong></div>
                            <div className="col-span-2 sm:col-span-1"><span className="mb-2 block text-[.63rem] font-extrabold tracking-[.14em] text-terracotta">TEAM</span><strong className="block text-sm text-fern-dark">Cross-functional</strong></div>
                        </div>
                        <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="Case study sections">
                            <a className="text-xs font-extrabold text-fern-dark no-underline hover:text-terracotta" href="#projects"><span className="mr-2 text-[.62rem] text-terracotta">01</span>The brief</a>
                            <a className="text-xs font-extrabold text-fern-dark no-underline hover:text-terracotta" href="#research"><span className="mr-2 text-[.62rem] text-terracotta">02</span>The insight</a>
                            <a className="text-xs font-extrabold text-fern-dark no-underline hover:text-terracotta" href="#design"><span className="mr-2 text-[.62rem] text-terracotta">03</span>The solution</a>
                        </nav>
                    </div>
                    <div className='relative grid min-h-[22rem] place-items-end justify-center lg:min-h-[34rem]'>
                        <div className="absolute inset-[8%_7%_0] -z-10 rounded-[48%_48%_1.5rem_1.5rem] bg-paper/70" />
                        <img className="w-full max-w-sm max-h-[38rem] object-contain drop-shadow-[0_1.8rem_1.4rem_rgba(40,83,58,.22)]" src='/assets/monstera.png' alt='Monstera plant in a ceramic pot' />
                        <div className='absolute bottom-[8%] right-0 grid size-28 rotate-[9deg] place-items-center rounded-full bg-terracotta p-4 text-center text-paper shadow-lg'><span className="text-[.55rem] font-extrabold tracking-[.2em]">CARE</span><strong className="font-display text-lg leading-[.92]">starts<br />small</strong></div>
                    </div>
                </div>

                <div className='mx-auto mt-16 w-[min(86%,1040px)] border-b border-[#d9e3d8] pb-16' id='process'>
                    <span className='mb-3 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>THE APPROACH</span>
                    <h4 className="mb-6 font-display text-4xl tracking-tight text-fern-dark sm:text-5xl">My Process at a glance</h4>
                    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3'>
                      {['User Research','Research Synthesis','Ideation','Lo-fi Wireframes','Visual design','Test & Iterate'].map((label, index) => <div key={label} className={`min-h-36 rounded-2xl border border-[#d9e3d8] bg-paper p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${index === 2 ? 'border-t-4 border-t-marigold' : ''}`}><h5 className='mb-8 font-sans text-xs font-extrabold tracking-[.14em] text-terracotta'>WEEK {index + 1}</h5><p className='m-0 text-base font-bold leading-tight text-ink'>{label}</p></div>)}
                    </div>
                </div>
                <SecondDashBoard />
                </div>
                
                <div>
                    <div id='research'><ThirdDashBoard /></div>
                    <FourthDashBoard />
                    <FifthDashBoard />
                    <div id='design'><UserFlow /></div>

                </div>
        </div>
    )
}
