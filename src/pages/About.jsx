import { Link } from '../router.jsx';
const values = [
  { num:'01', icon:'✝️', title:'Rooted in the Word', desc:'Everything we do flows from the living Word of God. The Bible is our ultimate authority for all of life.' },
  { num:'02', icon:'🙏', title:'A Culture of Prayer', desc:'Prayer is the heartbeat of ROC. We believe everything flows from intimacy with God.' },
  { num:'03', icon:'🕊️', title:'Spirit-Led Worship', desc:'We pursue authentic worship that transforms hearts and brings God\'s presence into every service.' },
  { num:'04', icon:'🤝', title:'Community & Family', desc:'We are a family committed to knowing and being known, bearing one another\'s burdens.' },
  { num:'05', icon:'🌍', title:'Reaching the World', desc:'Our vision extends beyond our walls — to impact Kigali, Rwanda, and the nations with the Gospel.' },
  { num:'06', icon:'👑', title:'Preparing the Bride', desc:'Our ultimate calling — to present a holy, blameless Bride for Christ\'s return. (Eph. 5:27)' },
];
const steps = [
  { num:'01', icon:'🚪', title:'Visit Us', desc:'Come to a Sunday service at 9 AM or 11 AM. You\'ll be warmly welcomed.' },
  { num:'02', icon:'📖', title:'Get Connected', desc:'Join a midweek service or ministry team and go deeper in faith.' },
  { num:'03', icon:'💧', title:'Get Baptised', desc:'Take the step of baptism as a declaration of your new life in Christ.' },
  { num:'04', icon:'🌱', title:'Serve & Grow', desc:'Discover your gifts. There is a God-given place for everyone at ROC.' },
];
export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage:"url('/roc-photo3.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><p className="page-eyebrow">Who We Are</p><h1 className="page-title">About <span>ROC</span></h1></div>
      </div>
      <section className="section" style={{ background:'#fff' }}>
        <div className="container">
          <div className="about-story">
            <div className="about-img-wrap">
              <img src="/roc-photo1.jpg" alt="ROC Church" />
              <div className="about-img-badge"><div className="about-img-badge-num">2004</div><div className="about-img-badge-txt">Founded</div></div>
            </div>
            <div className="about-text">
              <div className="section-tag">Our Story</div>
              <h2 className="section-h">A Church Born Out of <em>Purpose</em></h2>
              <div className="founded-chip"><div className="founded-year">21</div><div><div className="founded-lbl">Years of Ministry</div><div style={{fontSize:'.8rem',color:'#7B1F3A',marginTop:'.1rem'}}>Kagugu, Gasabo, Rwanda</div></div></div>
              <p>Revelation of Omega Church (ROC) was established in 2004 in Kigali, Rwanda, under the visionary leadership of Pastor Liliose Kaligirwa Tayi. Located at Rubagura's building in Kagugu, Gasabo, ROC has grown into a thriving community of faith serving hundreds of families.</p>
              <p>Our church is built on the unshakeable foundation of God's Word, with a singular mission: to prepare the Bride of Christ for His glorious return, as proclaimed in Ephesians 5:27.</p>
              <div style={{ display:'flex', gap:'1rem', marginTop:'2rem', flexWrap:'wrap' }}>
                <a href="#nextsteps" className="btn btn-primary" onClick={e=>{e.preventDefault();document.getElementById('nextsteps')?.scrollIntoView({behavior:'smooth'});}}>Plan Your Visit</a>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background:'var(--off)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="section-tag" style={{ justifyContent:'center' }}>Leadership</div>
            <h2 className="section-h">Meet Our <em>Senior Pastor</em></h2>
          </div>
          <div className="pastor-grid">
            <div className="pastor-photo">
              <img src="/roc-pastor.jpg" alt="Pastor Liliose Kaligirwa Tayi" />
              <div className="pastor-badge"><div style={{fontFamily:'Inter',fontSize:'0.85rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.06em'}}>Since 2004</div><div style={{fontSize:'0.65rem',opacity:.75,marginTop:'.15rem'}}>Founder & Senior Pastor</div></div>
            </div>
            <div>
              <h2 className="pastor-info-name">Pastor Liliose<br/>Kaligirwa Tayi</h2>
              <p className="pastor-info-role">Founder & Senior Pastor — Revelation of Omega Church</p>
              <div className="pastor-divider"></div>
              <p style={{color:'var(--gray-600)',lineHeight:1.85,marginBottom:'1.1rem',fontSize:'0.95rem'}}>Pastor Liliose Kaligirwa Tayi is the eloquent and inspirational Founder of Omega Ministries and Senior Pastor of Omega Church, located at Rubagura's building in Kagugu, Gasabo, Rwanda.</p>
              <p style={{color:'var(--gray-600)',lineHeight:1.85,marginBottom:'1.1rem',fontSize:'0.95rem'}}>Established in 2004, several Kigali dwellers have benefited from the living word of truth preached and shared under her remarkable leadership. Pastor Liliose has built ROC into a house of genuine worship, discipleship, and transformation.</p>
              <p style={{color:'var(--gray-600)',lineHeight:1.85,marginBottom:'1.1rem',fontSize:'0.95rem'}}>Her ministry is characterized by bold proclamation of scripture, compassionate pastoral care, and an unwavering commitment to raising up a people who are holy and blameless before God.</p>
              <blockquote className="pastor-quote">"If you abide in my word, you are my disciples indeed, and you shall know the truth, and the truth shall make you free." — John 8:31–32</blockquote>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <Link to="/sermons" className="btn btn-primary">Watch Sermons</Link>
                <Link to="/give" className="btn btn-secondary">Support Ministry</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background:'#fff' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <div className="section-tag" style={{ justifyContent:'center' }}>What We Believe</div>
            <h2 className="section-h">Our Core <em>Values</em></h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.num} className="val-card">
                <div className="val-num">{v.num}</div>
                <div className="val-icon">{v.icon}</div>
                <div className="val-title">{v.title}</div>
                <p className="val-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="nextsteps" style={{ background:'var(--bur-dk)', padding:'6rem 4rem' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <div className="section-tag" style={{ color:'rgba(255,255,255,0.45)', justifyContent:'center' }}>Get Started</div>
          <h2 className="section-h" style={{ color:'#fff', marginBottom:'1rem' }}>Your Next Steps <em style={{ color:'rgba(255,255,255,0.4)' }}>at ROC</em></h2>
          <p style={{ color:'rgba(255,255,255,0.5)', maxWidth:480, margin:'0 auto 3.5rem', lineHeight:1.8 }}>Whether you're new to faith or have been walking with God for years, there's a place for you here.</p>
          <div className="steps-grid">
            {steps.map(s => (
              <div key={s.num} className="step-card">
                <div className="step-num">{s.num}</div>
                <div className="step-icon">{s.icon}</div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
