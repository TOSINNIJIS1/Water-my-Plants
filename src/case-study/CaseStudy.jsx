import React from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk, Droplets, Leaf, MoveUpRight } from 'lucide-react';
import EvidenceFigure, { EvidenceImage } from './EvidenceFigure';
import overview from '../solution.png';
import plantDetail from '../solutions.png';
import research from '../key.jpg';
import persona from '../feng.png';
import journey from '../stat.png';
import architecture from '../DB.png';
import schedule from '../SC.png';
import userFlow from '../WF.png';
import groups from '../assets/group.jpg';
import collage from '../assets/image.png';
import dashboard from '../assets/wireframe-dashboard.png';
import instructions from '../assets/snake.jpg';
import addPlants from '../assets/addPlant.jpg';
import settings from '../assets/settings.jpg';
import tracking from '../assets/track.png';
import exploration from '../assets/explore.png';
import dropletA from '../assets/dropletA.png';
import dropletB from '../assets/dropletB.png';
import dropletC from '../assets/dropletC.png';

const container = 'mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16';
const body = 'text-base leading-[1.8] text-muted sm:text-lg';
const title = 'font-display text-[clamp(2.5rem,4.8vw,4.8rem)] leading-[1.06] tracking-[-.045em]';
const sketches = [
  { title: 'Create', src: groups, width: 1276, height: 2069, alt: 'Paper sketch of the groups screen with a create group button' },
  { title: 'Cancel', src: collage, viewBox: '470 0 490 710', alt: 'Name your group dialog with Cancel and Create controls' },
  { title: 'Delete group', src: collage, viewBox: '960 0 470 650', alt: 'Succulents group paper sketch with Delete group control' },
  { title: 'Dashboard', src: dashboard, width: 450, height: 600, alt: 'Hand-drawn dashboard with Groups and Plants grids' },
  { title: 'Plant instruction', src: instructions, width: 755, height: 2137, alt: 'Snake plant sketch with watering frequency, history, and care instructions' },
  { title: 'Add plants', src: addPlants, width: 1185, height: 1737, alt: 'Plant grid paper sketch with an Add plant button' },
  { title: 'Settings', src: settings, width: 1466, height: 2218, alt: 'Settings paper sketch with profile fields and notification controls' },
];
const steps = [
  ['01', 'Listen', 'User research'],
  ['02', 'Understand', 'Research synthesis'],
  ['03', 'Explore', 'Ideation'],
  ['04', 'Sketch', 'Lo-fi wireframes'],
  ['05', 'Refine', 'Visual design'],
  ['06', 'Learn', 'Test & iterate'],
];

function Eyebrow({ children, light = false }) {
  return <p className={'mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] ' + (light ? 'text-marigold' : 'text-terracotta')}><span className={'h-px w-7 ' + (light ? 'bg-marigold' : 'bg-terracotta')} aria-hidden="true" />{children}</p>;
}

function SectionHeading({ number, label, children, description }) {
  return <div className="mb-12 grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
    <div><Eyebrow>{number} / {label}</Eyebrow><h2 className={title}>{children}</h2></div>
    {description && <p className={body + ' max-w-xl'}>{description}</p>}
  </div>;
}

export default function CaseStudy({ onOpen }) {
  return <>
    <section id="story" className={container + ' pb-0 pt-8 sm:pt-12'}>
      <div className="mb-6 flex items-center justify-between gap-4 text-[9px] uppercase tracking-[.12em] text-muted sm:mb-8 sm:text-[10px] sm:tracking-[.18em]">
        <span className="flex shrink-0 items-center gap-2"><span className="size-1.5 rounded-full bg-terracotta" /> Selected work / 01</span>
        <span className="text-right">UX research · Product design</span>
      </div>
      <div className="grid items-center gap-10 pb-12 md:grid-cols-[1fr_1fr] md:gap-8 lg:gap-16">
        <div className="relative py-4 lg:py-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[10px] uppercase tracking-wider"><Leaf size={12} aria-hidden="true" /> A little care goes a long way</div>
          <h1 className="text-[clamp(3.8rem,7.6vw,7.8rem)] leading-[.94] tracking-[-.065em]"><span className="block font-medium">Water my</span><span className="block font-display text-[1.25em] italic text-fern">Plants<span className="text-terracotta">.</span></span></h1>
          <p className="mt-8 max-w-[26rem] text-base leading-relaxed text-muted lg:text-lg">Less guesswork. More growing.<br />Designing a calmer way for indoor plant owners to keep their little jungle alive.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#projects" className="group inline-flex items-center gap-5 border-b border-ink pb-3 text-xs font-semibold">Explore the case study <span className="grid size-9 place-items-center rounded-full bg-ink text-cream transition-colors group-hover:bg-terracotta"><ArrowDown size={16} aria-hidden="true" /></span></a>
            <a href="/user-flow" className="inline-flex items-center gap-2 rounded-full bg-fern-dark px-5 py-3 text-xs font-semibold text-paper transition hover:bg-terracotta">Explore the user flow <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <div className="mt-7 flex items-center gap-2 text-[10px] uppercase tracking-[.15em] text-muted sm:mt-12"><span className="h-px w-10 bg-line" /> Designed by Mahiya H.</div>
        </div>
        <div className="relative isolate aspect-[1/1.05] overflow-hidden rounded-t-[45%] bg-[#dfe5cc] md:aspect-[.85/1] lg:aspect-square">
          <div className="absolute inset-[12%] rounded-full border border-ink/10" aria-hidden="true" />
          <div className="absolute inset-[23%] rounded-full border border-ink/10" aria-hidden="true" />
          <img src="/assets/monstera.png" alt="" className="absolute -right-[19%] top-[2%] w-[84%] opacity-80" />
          <img src={plantDetail} width="828" height="1764" alt="Original Water my Plants mobile design showing individual plant care details" className="absolute right-[9%] top-[20%] w-[37%] rotate-[12deg] drop-shadow-2xl" />
          <img src={overview} width="828" height="1764" alt="Original Water my Plants mobile dashboard design" fetchPriority="high" className="absolute left-[13%] top-[12%] w-[42%] -rotate-[9deg] drop-shadow-2xl" />
          <div className="absolute bottom-6 left-6 flex size-[78px] -rotate-12 flex-col items-center justify-center rounded-full bg-terracotta text-cream shadow-lg sm:bottom-8 sm:left-8"><Asterisk size={29} strokeWidth={1} aria-hidden="true" /><span className="mt-1 text-[8px] uppercase tracking-widest">Made to grow</span></div>
          <span className="absolute bottom-5 right-5 text-[8px] uppercase tracking-[.16em] text-ink/75">The original interface ↗</span>
        </div>
      </div>
      <dl className="grid grid-cols-2 gap-y-7 border-y border-line py-7 sm:grid-cols-4">
        {[['Discipline', 'UX / UI design'], ['Timeline', '6-week process'], ['Focus', 'Indoor plant care'], ['Deliverables', 'Research → interface']].map(([label, value]) => <div key={label} className="border-l border-line pl-4 first:border-0 first:pl-0 sm:pl-7"><dt className="mb-2 text-[9px] uppercase tracking-[.18em] text-muted">{label}</dt><dd className="text-xs font-medium sm:text-sm">{value}</dd></div>)}
      </dl>
    </section>

    <section id="projects" className={container + ' py-20 sm:py-28'}>
      <div className="grid gap-10 md:grid-cols-[.45fr_1fr] md:gap-16">
        <div><Eyebrow>01 / The brief</Eyebrow><ArrowDownRight size={78} strokeWidth={.7} className="hidden text-terracotta md:block" aria-hidden="true" /></div>
        <div><h2 className={title}>Buying a plant is easy.<br /><span className="italic text-fern">Keeping it happy?</span></h2><p className={body + ' mt-8 max-w-2xl'}>A growing plant collection comes with a growing list of needs. Different watering schedules, different care instructions, and one very human problem: remembering it all.</p><p className={body + ' mt-5 max-w-2xl'}>Water my Plants brings those details into one place, helping people see which plants need attention and build a care routine around them.</p></div>
      </div>
      <div id="process" className="mt-20">
        <div className="mb-8 flex items-center justify-between border-b border-line pb-4"><h3 className="text-xs font-semibold">From a question to a considered interface</h3><span className="ml-4 shrink-0 text-[10px] text-muted">THE PROCESS ↘</span></div>
        <ol className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map(([number, name, detail]) => <li key={number}><span className="font-display text-4xl italic text-fern/45">{number}</span><h4 className="mb-1 mt-4 text-sm font-semibold">{name}</h4><p className="text-xs text-muted">{detail}</p></li>)}
        </ol>
      </div>
    </section>

    <section id="research" className="bg-ink py-20 text-cream sm:py-28">
      <div className={container}>
        <div className="grid gap-12 md:grid-cols-[1.3fr_.7fr] md:gap-20">
          <div><Eyebrow light>02 / Listen before designing</Eyebrow><h2 className={title}>Not everyone needs<br />a watering reminder.</h2><p className="mt-8 max-w-xl text-base leading-[1.8] text-cream/70">My first assumption was that everyone forgets to water. But my mother, an avid gardener, didn’t need a reminder. That changed the question: who actually needs help, and why?</p></div>
          <div className="border-l border-cream/20 pl-7 md:pt-10"><span className="font-display text-[100px] leading-none text-marigold">05<span className="text-4xl">↗</span></span><p className="mt-3 text-sm">conversations about plant care</p><p className="mt-2 max-w-xs text-xs leading-relaxed text-cream/55">Four planters and my mother. Different spaces, different routines, different struggles.</p></div>
        </div>
        <div className="mt-14 grid border-t border-cream/20 md:grid-cols-3">
          {[
            ['01', 'Who needs the reminder?', 'Understand which plant owners struggle to stay on top of care.'],
            ['02', 'What do they do today?', 'Explore existing habits, workarounds, and watering routines.'],
            ['03', 'What gets in the way?', 'Find the factors behind healthy plants and deteriorating ones.'],
          ].map(([n, heading, text]) => <div key={n} className="border-b border-cream/20 py-8 md:border-b-0 md:pr-9"><span className="text-[10px] text-marigold">{n} / RESEARCH QUESTION</span><h3 className="mb-3 mt-5 font-display text-2xl">{heading}</h3><p className="text-sm leading-relaxed text-cream/60">{text}</p></div>)}
        </div>
      </div>
    </section>

    <section className={container + ' py-20 sm:py-28'}>
      <SectionHeading number="03" label="The insight" description="The conversations pointed to a distinction: outdoor gardeners often have established routines. Indoor plant owners face a different kind of complexity.">Small spaces.<br /><em>Many different needs.</em></SectionHeading>
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <EvidenceFigure onOpen={onOpen} item={{ src: research, width: 2898, height: 1937, title: 'Research synthesis · the original notes', alt: 'Research synthesis documenting plant owners’ needs and blockers' }} imageClassName="max-h-[480px]" />
        <div className="border-t border-line">
          {[
            ['The memory problem', 'Which plants have been watered? Which haven’t? Keeping track gets harder as a collection grows.'],
            ['The identification problem', 'Many plants in one home can be difficult to tell apart, especially when their names are unfamiliar.'],
            ['The care problem', 'Houseplants have individual needs. A single watering routine doesn’t work for every plant.'],
          ].map(([heading, text], i) => <div key={heading} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-line py-7"><span className="pt-1 text-xs text-terracotta">0{i + 1}</span><div><h3 className="mb-3 text-lg font-medium">{heading}</h3><p className="text-sm leading-[1.8] text-muted">{text}</p></div></div>)}
        </div>
      </div>
      <div className="mt-16 border-l-2 border-terracotta py-2 pl-6 sm:pl-10"><p className="mb-4 text-[10px] uppercase tracking-[.18em] text-terracotta">Design opportunity</p><p className="max-w-4xl font-display text-3xl leading-snug tracking-tight sm:text-4xl">Make the next act of care obvious, <br className="hidden sm:block" /><span className="italic text-fern">without asking people to remember everything.</span></p></div>
    </section>

    <section className="bg-[#e8eadf] py-20 sm:py-28">
      <div className={container}>
        <div className="grid items-center gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <img src={persona} width="2697" height="2736" alt="Portrait used for the feng shui enthusiast persona" loading="lazy" className="aspect-[4/5] w-full rounded-t-full object-cover" />
            <div className="absolute -bottom-4 right-0 bg-marigold px-5 py-4 text-[10px] uppercase tracking-[.14em] sm:-right-5">The plant lover, not the expert.</div>
          </div>
          <div><Eyebrow>04 / Designing for someone</Eyebrow><h2 className={title}>The feng shui<br /><em>enthusiast.</em></h2><p className={body + ' mt-7 max-w-xl'}>She loves adopting plants. Organizing them is another story. Her small apartment is filling up, her plants all need different things, and she’s frustrated by how hard it is to tell them apart.</p><div className="mt-8 grid grid-cols-2 gap-5 border-t border-ink/15 pt-6"><div><h3 className="text-[10px] uppercase tracking-[.15em] text-terracotta">The goal</h3><p className="mt-2 text-sm leading-relaxed">A home full of healthy plants.</p></div><div><h3 className="text-[10px] uppercase tracking-[.15em] text-terracotta">The need</h3><p className="mt-2 text-sm leading-relaxed">Less remembering. More clarity.</p></div></div></div>
        </div>
        <div className="mt-20"><div className="mb-6 flex items-end justify-between gap-6"><h3 className="font-display text-3xl tracking-tight">Walking through her day.</h3><span className="hidden text-[10px] uppercase tracking-widest text-muted sm:block">The journey map</span></div><EvidenceFigure onOpen={onOpen} item={{ src: journey, width: 1440, height: 1024, title: 'Journey map · needs, goals, and frustrations', alt: 'Journey map from plant-care struggles through consideration, goal setting, and relief' }} /></div>
      </div>
    </section>

    <section className={container + ' py-20 sm:py-28'}>
      <SectionHeading number="05" label="Give the experience a structure" description="The research became a set of practical tasks: organize plants, find their care needs, and keep track of watering. The architecture connects those tasks into one experience.">A place for every plant.<br /><em>A path for every task.</em></SectionHeading>
      <div className="grid gap-8 md:grid-cols-2">
        <EvidenceFigure onOpen={onOpen} item={{ src: architecture, width: 270, height: 485, title: '01 / Dashboard architecture', alt: 'Information architecture for the plant dashboard' }} imageClassName="max-h-80" />
        <EvidenceFigure onOpen={onOpen} item={{ src: schedule, width: 272, height: 450, title: '02 / Watering schedule architecture', alt: 'Information architecture for plant watering schedules' }} imageClassName="max-h-80" />
      </div>
      <EvidenceFigure className="mt-10" onOpen={onOpen} item={{ src: userFlow, width: 3672, height: 1572, title: '03 / Connecting the tasks · the user flow', alt: 'User flow showing paths through the plant care experience' }} imageClassName="max-h-[480px]" />
    </section>

    <section id="design" className="border-y border-line bg-[#ece9de] py-20 sm:py-28">
      <div className={container}>
        <SectionHeading number="06" label="The sketchbook" description="Before pixels, pencil. Seven paper screens explore the everyday moments of plant care, from making a group to finding out what a plant needs.">Good ideas start<br /><em>a little messy.</em></SectionHeading>
        <div className="mb-8 flex justify-between border-y border-ink/20 py-3 text-[10px] uppercase tracking-[.15em]"><span>Paper wireframes / 07 screens</span><span className="text-muted">Open any sketch ↗</span></div>
        <div aria-label="Seven paper wireframes" className="grid grid-cols-1 gap-x-6 gap-y-10 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {sketches.map((item, i) => <figure key={item.title}>
            <button type="button" aria-label={'Enlarge ' + item.title + ' sketch'} onClick={() => onOpen({ ...item, title: item.title + ' · original paper wireframe' })} className="group relative flex h-80 w-full items-center justify-center border border-ink/10 bg-paper p-4 shadow-[3px_5px_0_0_rgba(36,59,46,.06)] transition-colors hover:border-terracotta">
              <EvidenceImage item={item} className="h-full w-full object-contain" />
              <span className="absolute bottom-2 right-2 grid size-8 place-items-center rounded-full bg-cream text-ink group-hover:bg-marigold"><ArrowUpRight size={16} aria-hidden="true" /></span>
            </button>
            <figcaption className="mt-4 flex items-baseline gap-3"><span className="font-display text-xl italic text-terracotta">0{i + 1}</span><span className="text-sm font-medium">{item.title}</span></figcaption>
          </figure>)}
          <div className="flex min-h-52 flex-col justify-between border-t border-ink/25 py-6"><Asterisk size={38} strokeWidth={1} className="text-terracotta" aria-hidden="true" /><p className="mt-6 max-w-[14rem] font-display text-3xl leading-tight italic">Make the care visible.<br />Keep the effort small.</p><p className="mt-5 text-[10px] uppercase tracking-widest text-muted">A guiding design principle</p></div>
        </div>
      </div>
    </section>

    <section className={container + ' py-20 sm:py-28'}>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div><Eyebrow>07 / Explore the interaction</Eyebrow><h2 className={title}>A small symbol.<br /><em>A useful signal.</em></h2><p className={body + ' mt-7'}>How do you tell a watered plant from a thirsty one? I explored selected states, filters, and symbols. A water droplet offered a simple visual cue for plants that need attention.</p><div className="mt-8 flex gap-4 border-y border-line py-6"><Droplets size={27} strokeWidth={1.3} className="shrink-0 text-terracotta" aria-hidden="true" /><p className="text-sm leading-relaxed text-muted">The important question wasn’t just “has this plant been watered?” It was “which plants need me now?”</p></div></div>
        <div className="grid grid-cols-1 gap-6 bg-sage p-5 min-[520px]:grid-cols-2 sm:p-8">
          <EvidenceFigure onOpen={onOpen} item={{ src: tracking, width: 375, height: 812, title: 'Care history', alt: 'Early concept showing individual plant watering history and instructions' }} imageClassName="max-h-[400px]" />
          <EvidenceFigure className="min-[520px]:pt-12" onOpen={onOpen} item={{ src: exploration, width: 375, height: 812, title: 'Selected states', alt: 'Early plant grid concept with checkmarks marking watered plants' }} imageClassName="max-h-[400px]" />
        </div>
      </div>
    </section>

    <section id="outcome" className="bg-[#e6dfec] py-20 sm:py-28">
      <div className={container}>
        <SectionHeading number="08" label="The final direction" description="Bring the plants that need water into focus. Keep their history and care instructions close. Make the next step easy to understand.">Know what needs you.<br /><em>Then get on with growing.</em></SectionHeading>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-12">
          {[
            [dropletA, '01', 'See what’s thirsty.', 'A droplet draws attention to plants that need water.'],
            [dropletB, '02', 'Focus on the next step.', 'Bring watering needs together in a dedicated view.'],
            [dropletC, '03', 'Know you’re done.', 'The droplets clear and “All watered” confirms the task is complete.'],
          ].map(([src, number, heading, text]) => <div key={number}>
            <button type="button" aria-label={'Enlarge final design ' + number} onClick={() => onOpen({ src, width: 411, height: 868, title: 'Final design ' + number, alt: heading })} className="mx-auto block w-full max-w-[290px] rounded-[1.75rem] border-[7px] border-[#29282a] bg-white p-1 shadow-[0_20px_40px_-15px_rgba(30,20,40,.35)] transition-transform hover:-translate-y-1">
              <img src={src} width="411" height="868" alt={heading} loading="lazy" className="w-full rounded-[1.1rem]" />
            </button>
            <div className="mx-auto mt-7 max-w-[290px]"><span className="text-[10px] tracking-widest text-terracotta">{number} /</span><h3 className="mb-2 mt-3 font-display text-2xl tracking-tight">{heading}</h3><p className="text-sm leading-relaxed text-muted">{text}</p></div>
          </div>)}
        </div>
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-fern-dark p-7 text-paper sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10">
          <div><Eyebrow>Try the experience</Eyebrow><h3 className="mt-3 max-w-xl font-display text-3xl leading-tight sm:text-4xl">See the product flow from dashboard to daily care.</h3><p className="mt-3 max-w-lg text-sm leading-6 text-paper/70">Step through the decisions, states, and routines behind the final direction.</p></div>
          <a href="/user-flow" className="mt-7 inline-flex shrink-0 items-center gap-3 rounded-full bg-marigold px-6 py-3 text-sm font-bold text-ink transition hover:bg-cream sm:mt-0">Explore the user flow <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="mt-16 grid gap-5 border-t border-ink/20 pt-8 sm:grid-cols-[.4fr_1fr]"><p className="text-[10px] uppercase tracking-[.17em] text-muted">Looking back</p><p className="max-w-3xl font-display text-2xl leading-relaxed tracking-tight sm:text-3xl">The most useful shift was in the question: from remembering to water, to understanding <em>which plant needs care.</em></p></div>
      </div>
    </section>
    <div className={container + ' flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center'}><p className="text-xs text-muted">From the first conversation to the final screen.</p><a href="#design" className="inline-flex items-center gap-3 text-xs font-semibold">Revisit the sketchbook <MoveUpRight size={16} aria-hidden="true" /></a></div>
  </>;
}
