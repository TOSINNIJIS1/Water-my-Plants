import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Bell, CalendarDays, Check, ChevronRight, Droplets, Home, Leaf, Menu, Plus, Search, Settings, Sprout, TrendingUp, X } from 'lucide-react';
import './styles.css';

const plants = [
  { name: 'Monstera', detail: 'Today · 10:00 AM', days: 0, color: 'terracotta', image: '/assets/monstera.png' },
  { name: 'Snake Plant', detail: 'In 2 days', days: 2, color: 'sage', image: '/assets/snake.jpg' },
  { name: 'Pothos', detail: 'In 3 days', days: 3, color: 'lime', image: '/assets/plants.jpg' },
  { name: 'ZZ Plant', detail: 'In 5 days', days: 5, color: 'forest', image: '/assets/succulent.jpg' },
  { name: 'Peace Lily', detail: 'In 6 days', days: 6, color: 'sand', image: '/assets/plants.jpg' },
];

const navItems = [
  { label: 'My plants', icon: Home },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Insights', icon: TrendingUp },
  { label: 'Settings', icon: Settings },
];

function App() {
  const [activeNav, setActiveNav] = useState('My plants');
  const [watered, setWatered] = useState(false);
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [toast, setToast] = useState('');
  const filteredPlants = useMemo(() => plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase())), [search]);

  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2600); };
  const markWatered = () => { setWatered(true); notify('Monstera marked as watered'); };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark"><Leaf size={24} strokeWidth={2.2} /></span><span>Water My Plants</span></div>
        <nav aria-label="Primary navigation">
          {navItems.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${activeNav === label ? 'active' : ''}`} onClick={() => { setActiveNav(label); notify(`${label} view selected`); }}><Icon size={21} /><span>{label}</span></button>)}
        </nav>
        <div className="sidebar-plant"><div className="sidebar-plant-glow" /><img src="/assets/monstera.png" alt="Leafy houseplant" /></div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu" aria-label="Open menu"><Menu size={21} /></button>
          <label className="search-box"><Search size={19} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search plants..." aria-label="Search plants" />{search && <button onClick={() => setSearch('')} aria-label="Clear search"><X size={15} /></button>}</label>
          <div className="top-actions"><button className="icon-button" onClick={() => notify('You are all caught up')} aria-label="Notifications"><Bell size={22} /></button><div className="avatar">T</div></div>
        </header>

        <div className="page-heading"><div><p className="eyebrow">Tuesday, April 23</p><h1>Good morning, Tosin</h1></div><button className="add-button" onClick={() => setShowAdd(true)}><Plus size={18} /> Add plant</button></div>

        <section className="overview-grid">
          <article className={`next-card ${watered ? 'complete' : ''}`}>
            <div className="next-copy"><span className="section-label">Next up</span><h2>{watered ? 'All watered for today' : 'Water Monstera'}</h2><p>{watered ? 'You’re giving your plants a great start.' : 'Today · 10:00 AM'}</p><button className="primary-button" onClick={markWatered}>{watered ? <><Check size={17} /> Watered</> : <><Droplets size={17} /> Mark as watered</>}</button></div>
            <img src="/assets/monstera.png" alt="Monstera plant in a ceramic pot" />
          </article>
          <article className="week-card"><div className="card-heading"><h3>This week</h3><span>3 / 7</span></div><div className="week-bars">{['M','T','W','T','F','S','S'].map((day, i) => <div className="day" key={`${day}-${i}`}><div className={`bar ${i < 3 ? 'filled' : ''}`} style={{ '--fill': `${[64, 82, 55, 0, 0, 0, 0][i]}%` }}><span /></div><small>{day}</small></div>)}</div><p className="thriving"><Sprout size={18} /> Your plants are thriving</p></article>
        </section>

        <section className="plants-section"><div className="section-heading"><h2>My plants</h2><span>{filteredPlants.length} plants</span></div><div className="plant-grid">{filteredPlants.map((plant) => <article className="plant-card" key={plant.name} onClick={() => notify(`${plant.name} details opened`)}><div className={`plant-image ${plant.color}`}><img src={plant.image} alt={`${plant.name} plant`} style={{ objectPosition: plant.position }} /><button className="more-button" onClick={(e) => { e.stopPropagation(); notify(`${plant.name} options`); }} aria-label={`More options for ${plant.name}`}>•••</button></div><div className="plant-info"><h3>{plant.name}</h3><p className={plant.days === 0 ? 'due' : ''}>{plant.days === 0 && <Droplets size={14} />}{plant.detail}</p></div></article>)}</div>{filteredPlants.length === 0 && <div className="empty-state"><Leaf size={24} /><p>No plants match “{search}”.</p></div>}</section>

        <section className="bottom-grid"><article className="activity-card"><div className="section-heading"><h2>Recent activity</h2><button className="text-button" onClick={() => notify('Showing all activity')}>View all <ChevronRight size={15} /></button></div>{[['Snake Plant', 'Yesterday · 9:00 AM'], ['Pothos', 'Apr 22, 2024'], ['Peace Lily', 'Apr 20, 2024']].map(([name, date]) => <div className="activity-row" key={name}><div className="activity-thumb"><Leaf size={17} /></div><span>Watered {name}</span><time>{date}</time></div>)}</article><article className="shelf-card"><img src="/assets/sunlit-shelf.png" alt="Sunlit shelf with houseplants" /><div className="shelf-caption"><span>Care tip</span><p>Rotate your plants every few weeks for even growth.</p></div></article></section>
      </main>

      {showAdd && <div className="modal-backdrop" onClick={() => setShowAdd(false)}><div className="modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setShowAdd(false)} aria-label="Close"><X size={19} /></button><div className="modal-icon"><Plus size={22} /></div><h2>Add a new plant</h2><p>Keep your little corner of green growing.</p><label>Plant name<input placeholder="e.g. Fiddle leaf fig" /></label><label>Watering frequency<select defaultValue="Weekly"><option>Weekly</option><option>Every 10 days</option><option>Biweekly</option></select></label><button className="primary-button full" onClick={() => { setShowAdd(false); notify('Plant added to your collection'); }}>Add plant</button></div></div>}
      {toast && <div className="toast"><Check size={17} /> {toast}</div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
