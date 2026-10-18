import React, { useState } from 'react';
import { ArrowUpRight, ArrowUp, Asterisk } from 'lucide-react';
import NavBar from './navbar/navbar';
import CaseStudy from './case-study/CaseStudy';
import { ImageViewer } from './case-study/EvidenceFigure';
import UserFlow from './user-flow/UserFlow';

export default function App() {
  if (window.location.pathname === '/user-flow') return <UserFlow />;
  const [selectedImage, setSelectedImage] = useState(null);
  return <div id="top">
    <a href="#main" className="fixed left-4 top-4 z-50 -translate-y-24 bg-marigold px-5 py-3 text-ink focus:translate-y-0">Skip to content</a>
    <NavBar />
    <main id="main"><CaseStudy onOpen={setSelectedImage} /></main>
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-10 sm:pt-24 lg:px-16">
        <div className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-marigold"><Asterisk size={20} aria-hidden="true" /> Good design starts with a little care.</div>
        <a href="mailto:hello@mahiya.design" className="group flex items-center justify-between gap-4 border-b border-cream/25 pb-12 font-display text-[clamp(2.5rem,8vw,8rem)] leading-none tracking-[-.05em]"><span className="min-w-0">Let’s grow something.</span><ArrowUpRight className="size-8 shrink-0 text-marigold transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 sm:size-20" strokeWidth={1} aria-hidden="true" /></a>
        <div className="mt-8 flex items-center justify-between gap-5 text-xs text-cream/65"><span>Mahiya H. <span className="ml-3 hidden sm:inline">Product design · Water my Plants</span></span><a href="#top" className="inline-flex items-center gap-3 py-3 text-cream">Back to top <ArrowUp size={15} aria-hidden="true" /></a></div>
      </div>
    </footer>
    <ImageViewer item={selectedImage} onClose={() => setSelectedImage(null)} />
  </div>;
}
