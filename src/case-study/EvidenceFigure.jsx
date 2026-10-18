import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X, ZoomIn, ZoomOut } from 'lucide-react';

export function EvidenceImage({ item, className = '' }) {
  if (item.viewBox) {
    return <svg viewBox={item.viewBox} role="img" aria-label={item.alt} className={className}>
      <image href={item.src} width="1500" height="2100" />
    </svg>;
  }
  return <img src={item.src} width={item.width} height={item.height} alt={item.alt} loading="lazy" decoding="async" className={className} />;
}

export default function EvidenceFigure({ item, onOpen, className = '', imageClassName = '' }) {
  return <figure className={className}>
    <button type="button" onClick={() => onOpen(item)} aria-label={'Enlarge ' + item.title} className="group relative block w-full overflow-hidden border border-ink/10 bg-paper p-4 text-left transition-colors hover:border-fern sm:p-6">
      <EvidenceImage item={item} className={'mx-auto h-auto w-full object-contain ' + imageClassName} />
      <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors group-hover:bg-marigold"><ArrowUpRight size={17} aria-hidden="true" /></span>
    </button>
    <figcaption className="mt-3 flex justify-between gap-4 text-xs leading-relaxed text-muted"><span>{item.title}</span><span className="shrink-0">View detail ↗</span></figcaption>
  </figure>;
}

export function ImageViewer({ item, onClose }) {
  const dialog = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    if (!item) return;
    const element = dialog.current;
    setZoomed(false);
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = previousOverflow; };
  }, [item]);
  return <dialog ref={dialog} aria-labelledby="image-title" onClose={onClose} onClick={event => { if (event.target === dialog.current) onClose(); }} className="fixed inset-0 m-auto max-h-[94dvh] w-[94vw] max-w-6xl overflow-hidden border-0 bg-cream p-0 text-ink shadow-2xl">
    {item && <>
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
        <h2 id="image-title" className="text-sm font-semibold">{item.title}</h2>
        <div className="flex gap-2">
          <button type="button" aria-label={zoomed ? 'Fit image' : 'Zoom image'} aria-pressed={zoomed} onClick={() => setZoomed(value => !value)} className="grid size-11 place-items-center rounded-full border border-line hover:bg-sage">{zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}</button>
          <button type="button" autoFocus aria-label="Close image viewer" onClick={onClose} className="grid size-11 place-items-center rounded-full bg-ink text-cream hover:bg-fern"><X size={20} /></button>
        </div>
      </div>
      <div className="max-h-[76dvh] overflow-auto p-4 sm:p-8">
        <EvidenceImage item={item} className={zoomed ? 'mx-auto h-auto w-[1400px] max-w-none' : 'mx-auto max-h-[65dvh] w-auto max-w-full object-contain'} />
      </div>
      <p className="border-t border-line px-5 py-3 text-xs text-muted">{zoomed ? 'Scroll to explore the detail. ' : ''}Press Esc to close.</p>
    </>}
  </dialog>;
}
