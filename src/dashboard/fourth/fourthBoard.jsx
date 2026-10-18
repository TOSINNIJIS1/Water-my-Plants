import React from 'react';
import Key from '../../key.jpg'
// import ArrowDown from '../../assets/arrowdown.jpg'


export default function FourthBoard() {


    return (
        <div className='bg-paper px-0 py-16 sm:py-28'>
            <div className='mx-auto w-[min(86%,1040px)]'>
                <span className='mb-3 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>04 / SYNTHESIZE</span>
                <h4 className="mb-5 font-display text-4xl tracking-tight text-fern-dark sm:text-5xl">Key takeaways</h4>

                <p className="max-w-3xl text-lg leading-relaxed text-muted">I spoke with four planters and my mother about their gardening needs, goals, and blockers. Here are my key takeaways:</p>
                <img className="my-6 w-full rounded-2xl shadow-lg" src={Key} alt='key' />

                <div className='grid grid-cols-[2rem_1fr] gap-3'><span className="font-display text-2xl font-bold text-terracotta">a.</span><p className="m-0 text-muted">Gardeners and those with large backyards tend not to need help with remembering to water.</p>
                </div>

                <div className='mt-5 grid grid-cols-[2rem_1fr] gap-3'><span className="font-display text-2xl font-bold text-terracotta">b.</span><p className="m-0 text-muted">Most outdoor plants are easily taken care of with rain and missing water a few days does not harm them.</p>
                </div>

                <div className='mt-5 grid grid-cols-[2rem_1fr] gap-3'><span className="font-display text-2xl font-bold text-terracotta">c.</span><p className="m-0 text-muted">Planters however, who do not have a large backyard or live indoor in small spaces have drastically different struggles.</p>
                </div>
{/* 
                <div>
                <img src={ArrowDown} alt='arrowdown' />
                </div> */}
            </div>

            <div className='mt-16 rounded-3xl border border-[#f0dfc9] bg-[#fff7ed] p-6 sm:p-12'>
                <span className='mb-6 block text-[.7rem] font-extrabold uppercase tracking-[.18em] text-terracotta'>THE FRICTION</span>
                <div className='space-y-5'>
                        <div className='grid grid-cols-[1.5rem_1fr] items-start gap-3'><span className="mt-2 size-3 rounded-full bg-marigold" /><p className="m-0 text-base text-ink">It’s hard to keep up with which plants have been watered, which haven’t and their individual watering needs.</p>
                    </div>

                    <div className='grid grid-cols-[1.5rem_1fr] items-start gap-3'><span className="mt-2 size-3 rounded-full bg-marigold" /><p className="m-0 text-base text-ink">It’s hard to identify plants when you have a lot of them at home.</p>
                    </div>

                    <div className='grid grid-cols-[1.5rem_1fr] items-start gap-3'><span className="mt-2 size-3 rounded-full bg-marigold" /><p className="m-0 text-base text-ink">It’s challenging to remember the varying needs of each plant because house plants tend to have particular care instructions.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
