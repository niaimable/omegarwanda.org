import { useState } from 'react';
export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const h = e => setForm({...form, [e.target.name]:e.target.value});
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage:"url('/roc-photo1.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><p className="page-eyebrow">We'd Love to Hear From You</p><h1 className="page-title">Contact <span>Us</span></h1></div>
      </div>
      <section className="section" style={{ background:'#fff' }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="section-tag">Get In Touch</div>
              <h2 className="section-h">We're Here <em>For You</em></h2>
              <p style={{ color:'var(--gray-600)', lineHeight:1.85, marginBottom:'2.5rem' }}>Whether you have a question, need prayer, want to know more, or are planning your first visit — we'd love to connect.</p>
              {[
                {icon:'📍',label:'Address',value:'Kagugu, Gasabo, Kigali, Rwanda',sub:"Rubagura's Building"},
                {icon:'📞',label:'Phone',value:'+250 780 001 122',sub:'Mon–Sat · 8:00 AM – 6:00 PM'},
                {icon:'✉️',label:'Email',value:'omegachurchrwanda@gmail.com',sub:'We reply within 24 hours'},
                {icon:'🕊',label:'Sunday Services',value:'9:00 AM & 11:00 AM',sub:'Main Sanctuary'},
                {icon:'🙏',label:'Midweek Service',value:'Wednesdays · 6:00 PM',sub:'Prayer & Worship'},
              ].map(i => (
                <div key={i.label} className="contact-info-item">
                  <div className="contact-info-icon">{i.icon}</div>
                  <div><div className="contact-info-label">{i.label}</div><div className="contact-info-value">{i.value}</div><div className="contact-info-sub">{i.sub}</div></div>
                </div>
              ))}
            </div>
            <div className="contact-form-wrap">
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.5rem', fontWeight:700, marginBottom:'0.4rem' }}>Send a Message</h3>
              <p style={{ color:'var(--gray-600)', fontSize:'0.88rem', marginBottom:'2rem' }}>We'll get back to you as soon as possible.</p>
              {sent ? (
                <div style={{ background:'var(--grn-pale)', border:'1px solid var(--grn)', borderRadius:'var(--radius)', padding:'2.5rem', textAlign:'center' }}>
                  <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>🙏</div>
                  <h4 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.3rem', fontWeight:700, color:'var(--grn-dk)', marginBottom:'.5rem' }}>Message Sent!</h4>
                  <p style={{ color:'var(--grn-dk)', opacity:.75, marginBottom:'1.5rem' }}>Thank you for reaching out. We'll reply within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn btn-grn">Send Another</button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  <div className="form-row">
                    <div className="form-group"><label className="form-label">Full Name *</label><input className="form-input" type="text" name="name" placeholder="John Doe" value={form.name} onChange={h} required /></div>
                    <div className="form-group"><label className="form-label">Email *</label><input className="form-input" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={h} required /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label className="form-label">Phone</label><input className="form-input" type="tel" name="phone" placeholder="+250 700 000 000" value={form.phone} onChange={h} /></div>
                    <div className="form-group"><label className="form-label">Subject *</label><input className="form-input" type="text" name="subject" placeholder="How can we help?" value={form.subject} onChange={h} required /></div>
                  </div>
                  <div className="form-group"><label className="form-label">Message *</label><textarea className="form-input" name="message" rows={5} placeholder="Write your message here…" value={form.message} onChange={h} required style={{ resize:'vertical' }} /></div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width:'100%', justifyContent:'center' }}>Send Message →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <div style={{ background:'var(--bur)', padding:'5rem 4rem', textAlign:'center' }}>
        <div className="section-tag" style={{ color:'rgba(255,255,255,0.45)', justifyContent:'center' }}>We Pray With You</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3.5vw,2.5rem)', fontWeight:700, color:'#fff', marginBottom:'1rem' }}>Submit a Prayer Request</h2>
        <p style={{ color:'rgba(255,255,255,0.65)', maxWidth:460, margin:'0 auto 2.5rem', lineHeight:1.8 }}>Our prayer team intercedes for every request submitted. You are not alone — we stand with you in faith.</p>
        <a href="mailto:omegachurchrwanda@gmail.com?subject=Prayer Request" className="btn btn-grn btn-lg">Submit Prayer Request</a>
      </div>
    </>
  );
}
