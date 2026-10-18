import React from 'react';
import solution from '../../solution.png';
import solutions from '../../solutions.png';

export default function SDash() {


    return (
        <div className='mx-auto mt-16 w-[min(86%,1040px)] pb-16' id='projects'>
            <div className='pb-16'>
                <span className='mb-3 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>01 / DEFINE</span>
                <h4 className="mb-4 font-display text-4xl tracking-tight text-fern-dark sm:text-5xl">Problem</h4>
                <p className="max-w-3xl text-lg leading-relaxed text-muted">Building a schedule around ensuring that all your plants are watered is actually pretty difficult. Water my Plants helps to solve those problems by providing an easy to use interface for creating a plant watering schedule that will remind users to water their plants on a regular basis.</p>
            </div>

            <div className='rounded-3xl border border-[#dfd6ed] bg-lavender p-6 sm:p-12'>
                <span className='mb-3 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>02 / EXPLORE</span>
                <h4 className="mb-4 font-display text-4xl tracking-tight text-[#5a3b89] sm:text-5xl">Solution Overview</h4>
                <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted">A simple home for plant care: see what needs attention, understand why, and build a habit that sticks.</p>
                <div className='grid gap-4 md:grid-cols-2'>
                    <img className="w-full rounded-2xl border border-[#5a3b89]/10 bg-paper transition hover:-translate-y-1 hover:shadow-xl" src={solution} alt='solution' />
                    <img className="w-full rounded-2xl border border-[#5a3b89]/10 bg-paper transition hover:-translate-y-1 hover:shadow-xl" src={solutions} alt='solutions' />
                </div>
            </div>
        </div>
    )
}
