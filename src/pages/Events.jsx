import { useState } from 'react';
const evs = [
  { bg:'var(--bur-dk)', tag:'weekly', label:'Weekly', title:'Sunday Worship Service', meta:'📅 Every Sunday · 9:00 AM & 11:00 AM', desc:'Join us every Sunday for powerful worship, prayer, and the preaching of God\'s Word. Both services are identical.', loc:'Kagugu, Gasabo', thumb:<div style={{fontFamily:'Inter',fontWeight:800,fontSize:'2rem',color:'#fff',lineHeight:1,letterSpacing:'-0.02em'}}>SUNDAY<div style={{fontSize:'.7rem',fontWeight:500,letterSpacing:'.1em',color:'rgba(255,255,255,.5)',marginTop:'.3rem',textTransform:'uppercase'}}>Worship Service</div></div> },
  { bg:'var(--grn-dk)', tag:'weekly', label:'Weekly', title:'Midweek Service', meta:'📅 Every Wednesday · 6:00 PM', desc:'Midweek is your spiritual reset. Expect deep prayer, Spirit-led worship, and a Word that strengthens you.', loc:'Kagugu, Gasabo', thumb:<div style={{fontFamily:'Inter',fontWeight:800,fontSize:'2rem',color:'#fff',lineHeight:1,letterSpacing:'-0.02em'}}>MIDWEEK<div style={{fontSize:'.7rem',fontWeight:500,letterSpacing:'.1em',color:'rgba(255,255,255,.5)',marginTop:'.3rem',textTransform:'uppercase'}}>Prayer & Worship</div></div> },
  { bg:'#1a1a2e', tag:'prayer', label:'Prayer', title:'Early Morning Prayer', meta:'📅 Monday–Friday · 6:00 AM', desc:'Start your day in the presence of God. Join our dedicated prayer warriors every weekday morning.', loc:'Kagugu, Gasabo', thumb:<div style={{fontFamily:'Inter',fontWeight:800,fontSize:'1.8rem',color:'#fff',lineHeight:1,letterSpacing:'-0.02em'}}>MORNING<div style={{background:'linear-gradient(90deg,#9e2a4a,#c97a90)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>PRAYER</div></div> },
  { bg:'linear-gradient(135deg,var(--bur-dk),#2a1030)', tag:'special', label:'Special', title:"Women's Prayer & Fellowship", meta:'📅 Monthly · 10:00 AM', desc:'ROC Women gather monthly for an intimate time of prayer, sharing, and encouragement.', loc:'ROC Main Hall', thumb:<div style={{fontFamily:'Inter',fontWeight:800,fontSize:'1.6rem',color:'#fff',lineHeight:1.2,letterSpacing:'-0.02em'}}>WOMEN'S<br/>PRAYER &<br/>FELLOWSHIP</div> },
  { bg:'linear-gradient(135deg,var(--grn-dk),#1a2e18)', tag:'special', label:'Special', title:"Men's Breakfast & Talk", meta:'📅 Monthly · 7:30 AM', desc:'Men of ROC gather for breakfast, brotherhood, and a challenging conversation about faith, family, and purpose.', loc:'ROC Main Hall', thumb:<div style={{fontFamily:'Inter',fontWeight:800,fontSize:'1.6rem',color:'#fff',lineHeight:1.2,letterSpacing:'-0.02em'}}>MEN'S<br/>BREAKFAST<br/>& TALK</div> },
  { bg:'linear-gradient(135deg,#1a2550,#0d1530)', tag:'weekly', label:'Youth', title:'Youth Friday Night', meta:'📅 Every Friday · 5:30 PM', desc:'ROC Youth gathers every Friday for worship, games, a relevant message, and genuine community. Ages 13–25.', loc:'Youth Hall', thumb:<div style={{fontFamily:'Inter',fontWeight:800,fontSize:'1.6rem',color:'#fff',lineHeight:1.2,letterSpacing:'-0.02em'}}>YOUTH<br/>FRIDAY<br/>NIGHT</div> },
];
const tagMap = { weekly:'tag-weekly', prayer:'tag-prayer', special:'tag-special' };
const sched = [
  { day:'Mon–Fri', name:'Early Morning Prayer', time:'6:00 AM', loc:'ROC Main Hall', badge:'sb-prayer', bl:'Prayer' },
  { day:'Sunday', name:'1st Worship Service', time:'9:00 AM', loc:'Main Sanctuary', badge:'sb-all', bl:'All' },
  { day:'Sunday', name:'2nd Worship Service', time:'11:00 AM', loc:'Main Sanctuary', badge:'sb-all', bl:'All' },
  { day:'Wednesday', name:'Midweek Prayer & Worship', time:'6:00 PM', loc:'Main Sanctuary', badge:'sb-all', bl:'All' },
  { day:'Friday', name:'Youth Night', time:'5:30 PM', loc:'Youth Hall', badge:'sb-youth', bl:'Youth' },
];
export default function Events() {
  const [f, setF] = useState('all');
  const filtered = f==='all' ? evs : evs.filter(e => e.tag===f);
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage:"url('/roc-photo3.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><p className="page-eyebrow">What's Happening</p><h1 className="page-title">Upcoming <span>Events</span></h1></div>
      </div>
      <section className="events-main">
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'3rem', flexWrap:'wrap', gap:'1.5rem' }}>
            <div><div className="section-tag">Latest Happenings</div><h2 className="section-h">Don't Miss <em>What's Coming</em></h2></div>
            <div className="events-filters">
              {['all','weekly','special','prayer'].map(tab => (
                <button key={tab} className={`ftab${f===tab?' active':''}`} onClick={() => setF(tab)}>{tab.charAt(0).toUpperCase()+tab.slice(1)}</button>
              ))}
            </div>
          </div>
          <div className="ev-cards">
            {filtered.map(ev => (
              <div key={ev.title} className="evc">
                <div className="evc-thumb" style={{ background:ev.bg }}>{ev.thumb}</div>
                <div className="evc-body">
                  <span className={`evc-tag ${tagMap[ev.tag]}`}>{ev.label}</span>
                  <h3>{ev.title}</h3>
                  <div className="evc-meta">{ev.meta}</div>
                  <p>{ev.desc}</p>
                  <div className="evc-foot"><a href="#">Add to Calendar →</a><span className="evc-loc">📍 {ev.loc}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="schedule-wrap section">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <div className="section-tag" style={{ justifyContent:'center' }}>Regular Schedule</div>
            <h2 className="section-h">Weekly <em>Service Times</em></h2>
          </div>
          <table className="sched-table">
            <thead><tr><th>Day</th><th>Service</th><th>Time</th><th>Location</th><th>For</th></tr></thead>
            <tbody>{sched.map(r => (
              <tr key={r.name}>
                <td><div className="sched-day">{r.day}</div></td>
                <td><div className="sched-name">{r.name}</div></td>
                <td className="sched-time">{r.time}</td>
                <td className="sched-loc">{r.loc}</td>
                <td><span className={`sbadge ${r.badge}`}>{r.bl}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>
      <div className="prayer-cta-block">
        <h2>Need Prayer?</h2>
        <p>Our dedicated prayer team intercedes for every request. Submit yours and we will stand with you in faith.</p>
        <a href="mailto:omegachurchrwanda@gmail.com?subject=Prayer Request" className="btn btn-ghost btn-lg">Submit a Prayer Request</a>
      </div>
    </>
  );
}
