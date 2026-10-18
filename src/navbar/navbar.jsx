import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Asterisk, Menu, X } from 'lucide-react';

const links = [['story', 'Overview'], ['research', 'Research'], ['design', 'Sketchbook'], ['outcome', 'The design']];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('story');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -55% 0px' });
    links.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  return <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-10 lg:px-16">
      <a href="#top" aria-label="Mahiya H. home" className="flex items-center gap-2.5"><Asterisk size={34} strokeWidth={1.4} className="text-terracotta" aria-hidden="true" /><span className="text-lg font-semibold tracking-tight">mahiya<span className="text-terracotta">.</span><span className="ml-3 hidden text-[10px] font-normal uppercase tracking-[.16em] text-muted lg:inline">Product designer</span></span></a>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
        {links.map(([id, label]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} className={'border-b py-2 text-xs transition-colors hover:text-terracotta ' + (active === id ? 'border-terracotta text-ink' : 'border-transparent text-muted')}>{label}</a>)}
      </nav>
      <a href="#contact" className="hidden items-center gap-4 border-b border-ink py-2 text-xs font-semibold sm:inline-flex">Let’s talk <ArrowUpRight size={17} aria-hidden="true" /></a>
      <button type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(value => !value)} className="grid size-11 place-items-center border border-line md:hidden">{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    {open && <nav id="mobile-nav" aria-label="Mobile navigation" onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }} className="grid border-t border-line px-5 py-3 md:hidden">
      {[...links, ['contact', 'Let’s talk']].map(([id, label]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)} className="border-b border-line py-4 text-base last:border-0">{label}</a>)}
    </nav>}
  </header>;
}
