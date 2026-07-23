import { Router, Route } from './router.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Ministries from './pages/Ministries.jsx';
import Events from './pages/Events.jsx';
import Sermons from './pages/Sermons.jsx';
import Give from './pages/Give.jsx';
import Contact from './pages/Contact.jsx';

function AppContent() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/ministries" component={Ministries} />
        <Route path="/events" component={Events} />
        <Route path="/sermons" component={Sermons} />
        <Route path="/give" component={Give} />
        <Route path="/contact" component={Contact} />
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  return <Router><AppContent /></Router>;
}
