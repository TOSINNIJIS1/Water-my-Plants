import React from 'react';
import Feng from '../../feng.png';
import Stat from '../../stat.png';
import Dashboard from '../../DB.png';
import Schedule from '../../SC.png';



export default function () {
    return (
        <div className='bg-lavender px-0 py-16 sm:py-28'>
            <div className="mx-auto w-[min(86%,1040px)]">
            <span className='mb-3 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>05 / EMPATHIZE</span>
            <h4 className="mb-5 font-display text-4xl tracking-tight text-[#5a3b89] sm:text-5xl">Creating empathy</h4>
            <p className='max-w-3xl text-lg leading-relaxed text-muted'>Because I’m not the one experiencing these challenges, I needed to empathize with the planters who do. I defined the typical planter who needs a solution to these challenges.</p>

            <div className='mt-16'>
                <h4 className="mb-5 font-display text-3xl text-[#5a3b89]">The feng shui enthusiast</h4>
                
                <div className='grid items-center gap-8 md:grid-cols-[1.1fr_.9fr]'>
                    <p className="text-lg leading-relaxed text-ink">Loves adopting plants, but can’t get them organized to save her life. Her partner thinks she owns too many plants for their small apartment. She feels frustrated because often these plants have different needs and not many ways to tell them apart.</p>
                    <img className="order-first mx-auto w-full max-w-xs rounded-full border-[.6rem] border-white/65 shadow-xl md:order-none" src={Feng} alt='lady' />
                </div>
            </div>

            <div className='mt-16'>
                <p className="text-lg leading-relaxed text-muted">I put myself in her shoes and stopped at every point in her <strong>journey</strong> to understand her needs, goals, and frustrations.</p>
                <img className="w-full rounded-2xl bg-paper shadow-lg" src={Stat} alt='stat'  />
            </div>

            <div className='mt-16'>
                <h4 className="mb-5 font-display text-3xl text-[#5a3b89]">Information Architecture</h4>
                <p className="text-lg leading-relaxed text-muted">Using my new found growth, I was ready to create the userflow using some predetermined tasks.</p>
                <div className='grid gap-4 md:grid-cols-2'>
                    <img className="w-full rounded-2xl bg-paper shadow-lg" src={Dashboard} alt='Dashboard' />
                    <img className="w-full rounded-2xl bg-paper shadow-lg" src={Schedule} alt='schedule' />
                </div>
            </div>
            </div>

        </div>
    )
}
