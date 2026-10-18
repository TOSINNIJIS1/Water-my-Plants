import React from 'react';

export default function ThirdDashboard () {

    return (
        <div className='border-y border-[#d9e3d8] bg-sage px-0 py-16 sm:py-28'>
            <div className='mx-auto w-[min(86%,1040px)]'>
                <span className='mb-3 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>03 / RESEARCH</span>
                <h4 className="mb-5 max-w-xl font-display text-4xl tracking-tight text-fern-dark sm:text-5xl">How might we help planters remember to water their plants?</h4>
                <p className="max-w-3xl text-lg leading-relaxed text-muted">The problem is pretty broad. I thought maybe everybody needed watering reminder. But my mother who is an avid gardner seemed to not need any help remembering to water. So I asked:</p>

                <div className='mt-6 grid grid-cols-[2rem_1fr] items-start gap-3'>
                    <span className="font-display text-2xl font-bold text-terracotta">a.</span>
                    <p className="m-0 text-base font-bold text-fern-dark">who needs reminder to water their plants?</p>
                </div>

                <div className='mt-5 grid grid-cols-[2rem_1fr] items-start gap-3'>
                    <span className="font-display text-2xl font-bold text-terracotta">b.</span>
                    <p className="m-0 text-base font-bold text-fern-dark">what are they using now to remember to water?</p>
                </div>

                <div className='mt-5 grid grid-cols-[2rem_1fr] items-start gap-3'>
                    <span className="font-display text-2xl font-bold text-terracotta">c.</span>
                    <p className="m-0 text-base font-bold text-fern-dark">what factors are contributing to their plants growth or deterioration?</p>
                </div>

            </div>
            
        </div>
    )
}
