import { useState } from 'react';
const sermons = [
  { img:'/roc-photo4.jpg', series:'Preparing the Bride', title:'Walking in Holiness & Truth', pastor:'Ps. Liliose Kaligirwa Tayi', date:'Apr 6, 2025', verse:'Ephesians 5:27 — "holy and blameless"' },
  { img:'/roc-photo2.jpg', pos:'center 20%', series:'Abiding in the Word', title:'The Power of Abiding', pastor:'Ps. Liliose Kaligirwa Tayi', date:'Mar 30, 2025', verse:'John 8:31 — "If you abide in my word…"' },
  { img:'/roc-photo3.jpg', series:'Prayer & Power', title:'The House of Prayer', pastor:'Ps. Liliose Kaligirwa Tayi', date:'Mar 23, 2025', verse:'Isaiah 56:7 — "A house of prayer for all nations"' },
  { img:'/roc-photo4.jpg', pos:'center 20%', series:'Foundations of Faith', title:'Faith That Moves Mountains', pastor:'Ps. Liliose Kaligirwa Tayi', date:'Mar 16, 2025', verse:'Matthew 17:20 — "Faith as a mustard seed"' },
  { img:'/roc-photo2.jpg', pos:'center 20%', series:'Preparing the Bride', title:'A Spotless Garment', pastor:'Ps. Liliose Kaligirwa Tayi', date:'Mar 9, 2025', verse:'Revelation 19:8 — "Fine linen, bright and clean"' },
  { img:'/roc-photo3.jpg', series:'Abiding in the Word', title:'Disciples Indeed', pastor:'Ps. Liliose Kaligirwa Tayi', date:'Mar 2, 2025', verse:'John 8:31 — "You will know the truth…"' },
];
const seriesData = [
  { name:'Preparing the Bride', count:'8 Messages', bg:'var(--bur-dk)' },
  { name:'Abiding in the Word', count:'6 Messages', bg:'var(--grn-dk)' },
  { name:'Prayer & Power', count:'5 Messages', bg:'#1a1a2e' },
  { name:'Foundations of Faith', count:'7 Messages', bg:'#1e3060' },
];
export default function Sermons() {
  const [search, setSearch] = useState('');
  const [series, setSeries] = useState('All Series');
  const filtered = sermons.filter(s => {
    const ms = s.title.toLowerCase().includes(search.toLowerCase()) || s.series.toLowerCase().includes(search.toLowerCase());
    const msr = series==='All Series' || s.series===series;
    return ms && msr;
  });
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage:"url('/roc-photo4.jpg')", backgroundPosition:'center 20%' }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><p className="page-eyebrow">Watch & Listen</p><h1 className="page-title">Latest <span>Sermons</span></h1></div>
      </div>
      <div className="featured-sermon">
        <div className="feat-visual"><img src="/roc-photo4.jpg" alt="Latest Sermon" /><div className="feat-play-wrap"><button className="play-btn">▶</button></div></div>
        <div className="feat-info">
          <span className="feat-badge">Latest Message</span>
          <p className="feat-series">Series: Preparing the Bride</p>
          <h2 className="feat-title">Walking in Holiness & Truth</h2>
          <p className="feat-meta">Pastor Liliose Kaligirwa Tayi · Sunday, April 6, 2025</p>
          <blockquote className="feat-verse">"That he might present her to himself as a radiant church, without stain or wrinkle or any other blemish, but holy and blameless." — Ephesians 5:27</blockquote>
          <div className="feat-actions"><button className="btn-watch">▶ Watch Now</button><button className="btn-listen">🎧 Listen</button></div>
        </div>
      </div>
      <section className="sermons-lib">
        <div className="container">
          <div className="lib-header">
            <div><div className="section-tag">Message Archive</div><h2 className="section-h">All <em>Sermons</em></h2></div>
            <div className="lib-controls">
              <input type="text" placeholder="Search sermons…" value={search} onChange={e => setSearch(e.target.value)} />
              <select value={series} onChange={e => setSeries(e.target.value)}>
                <option>All Series</option><option>Preparing the Bride</option><option>Abiding in the Word</option><option>Foundations of Faith</option><option>Prayer & Power</option>
              </select>
            </div>
          </div>
          <div className="sermon-cards">
            {filtered.map(s => (
              <div key={s.title} className="sc">
                <div className="sc-thumb"><img src={s.img} alt={s.title} style={s.pos?{objectPosition:s.pos}:{}} /><div className="sc-overlay"><div className="sc-play-btn">▶</div></div></div>
                <div className="sc-body">
                  <p className="sc-series">{s.series}</p>
                  <h3 className="sc-title">{s.title}</h3>
                  <div className="sc-meta"><span>{s.pastor}</span><span>{s.date}</span></div>
                  <p className="sc-verse">{s.verse}</p>
                  <div className="sc-actions"><button className="sc-btn sc-btn-watch">▶ Watch</button><button className="sc-btn sc-btn-listen">🎧 Listen</button></div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length===0 && <div style={{textAlign:'center',padding:'3rem',color:'var(--gray-400)'}}>No sermons found.</div>}
        </div>
      </section>
      <section className="series-section">
        <div className="container">
          <div style={{ textAlign:'center' }}><div className="section-tag" style={{ justifyContent:'center' }}>Browse by Series</div><h2 className="section-h">Sermon <em>Series</em></h2></div>
          <div className="series-grid">
            {seriesData.map(s => (
              <div key={s.name} className="series-card" onClick={() => setSeries(s.name)}>
                <div className="series-thumb" style={{ background:s.bg }}><span>{s.name}</span></div>
                <div className="series-info"><p className="series-count">{s.count}</p><p className="series-name">{s.name}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="subscribe-block">
        <h2>Never Miss a Message</h2>
        <p>Subscribe to receive the latest sermons directly in your inbox.</p>
        <div className="sub-form"><input type="email" placeholder="Your email address" /><button type="button">Subscribe</button></div>
      </div>
    </>
  );
}
