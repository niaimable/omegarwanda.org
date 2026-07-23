import { Link, useRouter } from '../router.jsx';

export default function Home() {
  const { navigate } = useRouter();
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage:"url('/roc-photo3.jpg')" }}></div>
        <div className="hero-content">
          <div className="hero-pill"><span className="hero-pill-dot"></span>Live Sundays · 9:00 AM & 11:00 AM</div>
          <h1 className="hero-h1">Revelation of Omega<em>Preparing the Bride of Christ</em></h1>
          <p className="hero-sub">A community of faith rooted in God's Word, worshipping in Kagugu, Gasabo, Kigali, Rwanda since 2004.</p>
          <div className="hero-btns">
            <button className="hero-btn-primary" onClick={() => navigate('/about')}>Plan a Visit</button>
            <button className="hero-btn-secondary" onClick={() => navigate('/sermons')}>Watch Latest Message</button>
          </div>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* SERVICE BAR */}
      <div className="service-bar">
        {[
          { icon:'📅', label:'Sunday Services', value:'9:00 AM & 11:00 AM' },
          { icon:'🙏', label:'Midweek Service', value:'Wednesday · 6:00 PM' },
          { icon:'☀️', label:'Morning Prayer', value:'Mon–Fri · 6:00 AM' },
          { icon:'📍', label:'Location', value:'Kagugu, Gasabo, Kigali' },
        ].map(i => (
          <div key={i.label} className="service-bar-item">
            <span className="service-bar-icon">{i.icon}</span>
            <div><div className="service-bar-label">{i.label}</div><div className="service-bar-value">{i.value}</div></div>
          </div>
        ))}
      </div>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(2)].map((_, r) => (
            ['Preparing the Bride of Christ','✦','Kagugu · Gasabo · Kigali','✦','Ephesians 5:27','✦','Welcome Home','✦'].map((t,i) => (
              <span key={`${r}-${i}`} className={`m-item${t==='✦'||t==='Welcome Home'||t==='Kagugu · Gasabo · Kigali'?'':' italic'}`}>{t}</span>
            ))
          ))}
        </div>
      </div>

      {/* FEATURE CARDS */}
      <section className="section" style={{ background:'#fff' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'1rem' }}>
            <div><div className="section-tag">Discover ROC</div><h2 className="section-h">Everything You Need <em>to Know</em></h2></div>
            <Link to="/about" className="btn btn-outline">Explore More →</Link>
          </div>
          <div className="feature-grid">
            {[
              { img:'/roc-photo1.jpg', tag:'Our Church', title:'Get To Know Us', to:'/about', pos:'center' },
              { img:'/roc-photo2.jpg', tag:'Gatherings', title:'Upcoming Events', to:'/events', pos:'center 20%' },
              { img:'/roc-photo3.jpg', tag:'New Here?', title:'Your Next Steps', to:'/about', pos:'center' },
            ].map(c => (
              <Link key={c.title} to={c.to} className="feature-card">
                <img src={c.img} alt={c.title} style={{ objectPosition:c.pos }} />
                <div className="feature-card-overlay">
                  <div className="feature-card-tag">{c.tag}</div>
                  <div className="feature-card-title">{c.title}</div>
                  <div className="feature-card-link">Learn More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section" style={{ background:'var(--off)' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'1rem' }}>
            <div><div className="section-tag">What's On</div><h2 className="section-h">Upcoming <em>Events</em></h2></div>
            <button className="btn btn-outline" onClick={() => navigate('/events')}>View All Events →</button>
          </div>
          <div className="event-row">
            {[
              { bg:'var(--bur-dk)', cat:'Weekly', name:'Sunday Worship Service', meta:'📅 Every Sunday · 9:00 & 11:00 AM', thumb:<div style={{fontFamily:'Inter',fontSize:'2rem',fontWeight:800,color:'#fff',lineHeight:1,letterSpacing:'-0.02em'}}>SUNDAY<div style={{fontSize:'.7rem',fontWeight:500,letterSpacing:'.1em',color:'rgba(255,255,255,.5)',marginTop:'.3rem',textTransform:'uppercase'}}>Worship Service</div></div> },
              { bg:'var(--grn-dk)', cat:'Weekly', name:'Midweek Service', meta:'📅 Every Wednesday · 6:00 PM', thumb:<div style={{fontFamily:'Inter',fontSize:'2rem',fontWeight:800,color:'#fff',lineHeight:1,letterSpacing:'-0.02em'}}>MIDWEEK<div style={{fontSize:'.7rem',fontWeight:500,letterSpacing:'.1em',color:'rgba(255,255,255,.5)',marginTop:'.3rem',textTransform:'uppercase'}}>Prayer & Worship</div></div> },
              { bg:'#1a1a2e', cat:'Daily', name:'Early Morning Prayer', meta:'📅 Mon–Fri · 6:00 AM', thumb:<div style={{fontFamily:'Inter',fontSize:'1.8rem',fontWeight:800,color:'#fff',lineHeight:1,letterSpacing:'-0.02em'}}>MORNING<div style={{background:'linear-gradient(90deg,#9e2a4a,#c97a90)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>PRAYER</div></div> },
            ].map(e => (
              <div key={e.name} className="event-chip">
                <div className="event-chip-thumb" style={{ background:e.bg }}>{e.thumb}</div>
                <div className="event-chip-body">
                  <div className="event-chip-cat">{e.cat}</div>
                  <div className="event-chip-name">{e.name}</div>
                  <div className="event-chip-meta">{e.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERMONS FEATURE */}
      <section className="sermons-feature">
        <div className="sermons-feature-text">
          <div className="section-tag" style={{ color:'rgba(255,255,255,0.45)' }}>Watch & Listen</div>
          <h2 className="section-h" style={{ color:'#fff', marginBottom:'1rem' }}>Latest <em style={{ color:'rgba(255,255,255,0.45)' }}>Sermons</em></h2>
          <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'0.95rem', lineHeight:1.8, marginBottom:'2.5rem', maxWidth:340 }}>Grow in faith through the preaching of God's Word. Watch or listen to our most recent messages anytime.</p>
          <button className="btn btn-ghost btn-lg" onClick={() => navigate('/sermons')}>Browse All Sermons →</button>
        </div>
        <div className="sermons-feature-photos">
          {['/roc-photo4.jpg','/roc-photo2.jpg','/roc-photo3.jpg','/roc-photo4.jpg'].map((s,i) => (
            <div key={i} className="sermon-photo"><img src={s} alt="" style={{ objectPosition:'center 15%' }} /></div>
          ))}
        </div>
      </section>

      {/* SCRIPTURE */}
      <div className="scripture-block">
        <p className="scripture-text">"If you abide in my word, you are my disciples indeed, and you shall know the truth, and the truth shall make you free."</p>
        <p className="scripture-ref">John 8:31–32</p>
      </div>

      {/* GIVE / VISIT */}
      <div className="two-col-cta">
        <div className="cta-panel cta-panel-dark">
          <div className="cta-panel-bg" style={{ backgroundImage:"url('/roc-photo1.jpg')" }}></div>
          <div className="cta-inner">
            <div className="cta-icon cta-icon-dark">🙌</div>
            <h3 className="cta-title">Give Online</h3>
            <p className="cta-desc">Support the mission. Your generosity helps prepare the Bride of Christ and reach more souls across Rwanda.</p>
            <Link to="/give" className="btn btn-primary btn-lg">Give Now →</Link>
          </div>
        </div>
        <div className="cta-panel cta-panel-light">
          <div className="cta-inner">
            <div className="cta-icon cta-icon-light">🚪</div>
            <h3 className="cta-title">Plan Your Visit</h3>
            <p className="cta-desc">New to ROC? We'd love to welcome you. Find out everything you need to know before you come.</p>
            <Link to="/about" className="btn btn-grn btn-lg">Learn More →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
