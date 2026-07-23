const mins = [
  { img:'/roc-photo3.jpg', flip:false, theme:'theme-bur', icon:'🧒', tag:'For Ages 0–12', title:"Children's Ministry", desc:"A safe, fun, faith-filled environment where kids encounter the love of Jesus every Sunday.", points:['Sunday School during both services','Age-appropriate Bible curriculum','Trained and dedicated volunteers','Safe and nurturing environment'] },
  { img:'/roc-photo2.jpg', pos:'center 20%', flip:true, theme:'theme-grn', icon:'🔥', tag:'Ages 13–25', title:'Youth Ministry', desc:"A vibrant Spirit-filled community where youth can worship freely and discover their God-given purpose.", points:['Friday night youth gatherings — 5:30 PM','Worship, discipleship & life skills','Outreach and community service','Youth camps and conferences'] },
  { img:'/roc-photo3.jpg', flip:false, theme:'theme-light', icon:'🌸', tag:'For Women of All Ages', title:"Women's Ministry", desc:"A community walking together in faith, friendship, and purpose. We gather for prayer, Bible study, and fellowship.", points:["Monthly women's prayer & fellowship",'Bible study & discipleship groups',"Annual women's conference",'Mentorship and support networks'] },
  { img:'/roc-photo4.jpg', pos:'center 15%', flip:true, theme:'theme-dark', icon:'💪', tag:'For Men of All Ages', title:"Men's Fellowship", desc:"A brotherhood committed to being godly leaders in their homes, workplaces, and communities.", points:["Monthly men's breakfasts & talks",'Accountability groups','Leadership and character development','Family and marriage support'] },
  { img:'/roc-photo2.jpg', pos:'center 20%', flip:false, theme:'theme-cream', icon:'🙏', tag:'The Heart of ROC', title:'Prayer Ministry', desc:"Prayer is the foundation of everything we do. Our prayer ministry intercedes for the church, Rwanda, and the nations.", points:['Early morning prayer (Mon–Fri, 6:00 AM)','Midweek prayer & worship (Wednesdays)','24-hour prayer chains','Personal prayer support available'] },
];
export default function Ministries() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage:"url('/roc-photo4.jpg')", backgroundPosition:'center 20%' }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><p className="page-eyebrow">Get Involved</p><h1 className="page-title">Our <span>Ministries</span></h1></div>
      </div>
      <section className="section" style={{ background:'#fff', textAlign:'center' }}>
        <div className="container">
          <div className="section-tag" style={{ justifyContent:'center' }}>Built to Serve</div>
          <h2 className="section-h">A Ministry for <em>Every Season of Life</em></h2>
          <p className="section-sub" style={{ margin:'0 auto' }}>At ROC we believe every person is called and gifted by God. Our ministries exist to help every member find their place, grow in faith, and make a lasting impact.</p>
        </div>
      </section>
      {mins.map(m => (
        <div key={m.title} className={`min-block ${m.theme}${m.flip?' flip':''}`}>
          <div className="min-img"><img src={m.img} alt={m.title} style={m.pos?{objectPosition:m.pos}:{}} /></div>
          <div className="min-body">
            <div className="min-icon">{m.icon}</div>
            <p className="min-tag">{m.tag}</p>
            <h2 className="min-title">{m.title}</h2>
            <p className="min-desc">{m.desc}</p>
            <ul className="min-list">{m.points.map(p => <li key={p}>{p}</li>)}</ul>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      ))}
      <section className="section" style={{ background:'var(--off)', textAlign:'center' }}>
        <div className="container">
          <div className="section-tag" style={{ justifyContent:'center' }}>Ready to Serve?</div>
          <h2 className="section-h">Find Your Place in <em>Ministry</em></h2>
          <p className="section-sub" style={{ margin:'0 auto' }}>Whether you're a musician, teacher, intercessor, or servant — there is a place for your gifts at ROC.</p>
          <div className="serve-grid">
            {[{icon:'🎵',title:'Worship Team',desc:'Join our praise team and help usher in the presence of God every Sunday.'},{icon:'🤝',title:'Hospitality',desc:'Be the first smile people see. Make everyone feel at home at ROC.'},{icon:'📺',title:'Media Team',desc:'Use your skills in sound, video, and streaming to extend the Gospel.'}].map(c => (
              <div key={c.title} className="serve-card"><div className="serve-ico">{c.icon}</div><div className="serve-title">{c.title}</div><p className="serve-desc">{c.desc}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
