import { useState, useEffect } from 'react';
import { Link, useRouter } from '../router.jsx';

const links = [
  { to:'/', label:'Home' }, { to:'/about', label:'About' },
  { to:'/ministries', label:'Ministries' }, { to:'/events', label:'Events' },
  { to:'/sermons', label:'Sermons' }, { to:'/give', label:'Give' },
  { to:'/contact', label:'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { path } = useRouter();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [path]);
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="navbar-logo"><img src="/roc-logo.png" alt="ROC" /></Link>
        <ul className="navbar-links">
          {links.map(l => <li key={l.to}><Link to={l.to} className={path===l.to?'active':''}>{l.label}</Link></li>)}
        </ul>
        <Link to="/about" className="navbar-cta">Plan a Visit</Link>
        <button className="navbar-hamburger" onClick={() => setMenuOpen(p => !p)} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <>
          <div onClick={() => setMenuOpen(false)} style={{ position:'fixed',inset:0,zIndex:298,background:'rgba(0,0,0,0.4)' }} />
          <div className="mobile-drawer">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`mobile-link${path===l.to?' active':''}`}>{l.label}</Link>
            ))}
            <Link to="/about" className="mobile-cta">Plan a Visit</Link>
          </div>
        </>
      )}
    </>
  );
}
