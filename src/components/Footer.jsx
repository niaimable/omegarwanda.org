import { Link } from '../router.jsx';
export default function Footer() {
  return (
    <>
      <div className="contact-strip">
        {[
          { icon:'📍', label:'Address', value:'Kagugu, Gasabo, Kigali, Rwanda' },
          { icon:'📞', label:'Phone', value:'+250 780 001 122' },
          { icon:'🕊', label:'Sunday Services', value:'9:00 AM & 11:00 AM' },
          { icon:'✉️', label:'Email', value:'omegachurchrwanda@gmail.com' },
        ].map(i => (
          <div key={i.label} className="c-item">
            <div className="c-icon">{i.icon}</div>
            <div><div className="c-label">{i.label}</div><div className="c-value">{i.value}</div></div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-grid">
          <div className="f-brand">
            <Link to="/"><img src="/roc-logo.png" alt="ROC" /></Link>
            <p>Revelation of Omega Church — Preparing the Bride of Christ for His glorious return. Kagugu, Gasabo, Kigali, Rwanda.</p>
            <p className="f-verse">"If you abide in my word, you are my disciples indeed." — John 8:31</p>
            <div className="f-socials">
              <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
            </div>
          </div>
          <div className="f-col"><h4>Explore</h4><ul>
            <li><Link to="/about">About ROC</Link></li><li><Link to="/sermons">Sermons</Link></li>
            <li><Link to="/events">Events</Link></li><li><Link to="/ministries">Ministries</Link></li>
            <li><Link to="/give">Give</Link></li>
          </ul></div>
          <div className="f-col"><h4>Ministries</h4><ul>
            <li><Link to="/ministries">Children</Link></li><li><Link to="/ministries">Youth</Link></li>
            <li><Link to="/ministries">Women</Link></li><li><Link to="/ministries">Men's Fellowship</Link></li>
            <li><Link to="/ministries">Prayer</Link></li>
          </ul></div>
          <div className="f-col"><h4>Contact</h4><ul>
            <li><a href="mailto:omegachurchrwanda@gmail.com">omegachurchrwanda@gmail.com</a></li>
            <li><a href="tel:+250780001122">+250 780 001 122</a></li>
            <li><a href="#">Kagugu, Gasabo, Kigali</a></li>
            <li><a href="#">Sun: 9:00 AM & 11:00 AM</a></li>
            <li><Link to="/contact">Get in Touch →</Link></li>
          </ul></div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Revelation of Omega Church Rwanda. All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></span>
        </div>
      </footer>
    </>
  );
}
