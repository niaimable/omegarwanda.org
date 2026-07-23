import { useState } from 'react';
export default function Give() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', amount:'', category:'Tithe & Offering' });
  const h = e => setForm({...form, [e.target.name]:e.target.value});
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage:"url('/roc-photo3.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><p className="page-eyebrow">Support the Mission</p><h1 className="page-title">Give <span>Online</span></h1></div>
      </div>
      <section className="section" style={{ background:'#fff' }}>
        <div className="container"><div style={{ maxWidth:900, margin:'0 auto' }}>
          <div className="section-tag">Your Generosity Matters</div>
          <h2 className="section-h">Partner With <em>ROC</em></h2>
          <p style={{ color:'var(--gray-600)', lineHeight:1.85, marginBottom:'3rem', maxWidth:600 }}>Every gift you give helps us prepare the Bride of Christ, reach more souls in Rwanda, support our ministries, and impact our community.</p>
          <div className="give-grid">
            {[{icon:'🙏',title:'Tithe & Offering',desc:'Your regular giving sustains our Sunday services and operations.'},{icon:'🌍',title:'Missions Fund',desc:'Support evangelism and outreach in Rwanda and across Africa.'},{icon:'🏗',title:'Building Fund',desc:'Help us expand our facilities to accommodate our growing family.'}].map(c => (
              <div key={c.title} className="give-card"><div className="give-card-icon">{c.icon}</div><div className="give-card-title">{c.title}</div><p className="give-card-desc">{c.desc}</p></div>
            ))}
          </div>
          <div className="give-form">
            <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.5rem', fontWeight:700, marginBottom:'0.4rem' }}>Make a Donation</h3>
            <p style={{ color:'var(--gray-600)', fontSize:'0.88rem', marginBottom:'2rem' }}>Fill in your details below to complete your donation.</p>
            <div className="form-row" style={{ marginBottom:'1.2rem' }}>
              {[{n:'name',l:'Full Name',t:'text',p:'John Doe'},{n:'email',l:'Email',t:'email',p:'john@example.com'}].map(f => (
                <div key={f.n} className="form-group" style={{ marginBottom:0 }}><label className="form-label">{f.l}</label><input className="form-input" type={f.t} name={f.n} placeholder={f.p} value={form[f.n]} onChange={h} /></div>
              ))}
            </div>
            <div className="form-row" style={{ marginBottom:'1.2rem' }}>
              {[{n:'phone',l:'Phone',t:'tel',p:'+250 700 000 000'},{n:'amount',l:'Amount (RWF)',t:'number',p:'e.g. 10000'}].map(f => (
                <div key={f.n} className="form-group" style={{ marginBottom:0 }}><label className="form-label">{f.l}</label><input className="form-input" type={f.t} name={f.n} placeholder={f.p} value={form[f.n]} onChange={h} /></div>
              ))}
            </div>
            <div className="form-group">
              <label className="form-label">Giving Category</label>
              <select className="form-input" name="category" value={form.category} onChange={h}>
                <option>Tithe & Offering</option><option>Missions Fund</option><option>Building Fund</option><option>Children's Ministry</option><option>Youth Ministry</option>
              </select>
            </div>
            <button className="btn btn-primary btn-lg" style={{ width:'100%', justifyContent:'center', marginTop:'0.5rem' }}>Complete Donation →</button>
          </div>
          <div style={{ background:'var(--bur-dk)', borderRadius:'var(--radius)', padding:'2rem 2.5rem', marginTop:'1.5rem', color:'#fff' }}>
            <h4 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.1rem', fontWeight:700, marginBottom:'0.75rem' }}>Bank Transfer Details</h4>
            <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.9rem', lineHeight:1.8 }}>Bank: Bank of Kigali · Account Name: Revelation of Omega Church<br/>Account Number: 00000 000 0000 · Branch: Kagugu, Gasabo</p>
          </div>
        </div></div>
      </section>
    </>
  );
}
