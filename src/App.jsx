import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import School from './pages/School';
import Academics from './pages/Academics';
import Hostel from './pages/Hostel';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import About from './pages/Contact';
import MPD from './Sub-Tabs/MPD';
import Studentlife from './Sub-Tabs/Student_life';
import Facility from './Sub-Tabs/Facilities';
import SelfReliance from './Sub-Tabs/Self_relience';
import Admissions_Process from './Sub-Tabs/Admissions_Process';
import Aboutus from './Sub-Tabs/Our_journey';
import Activities from './Sub-Tabs/Activities_hostel';
import SpritualD from './Sub-Tabs/Spiritual_Dim';
import TempleOL from './Sub-Tabs/Temple_of_learning';
import FAQ from './Sub-Tabs/Q&A';
import Curriculam from './Sub-Tabs/Curriculum';

function AppInner() {
  const location = useLocation();

  /*    
    renderedPath — the path we actually render in <Routes>.
    We only update it AFTER a short delay (200ms), giving the
    transition overlay time to appear and cover the old page first.
    This prevents the new page from flashing before the overlay.
  */
  const [renderedPath, setRenderedPath] = useState(location.pathname);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      setRenderedPath(location.pathname);
      return;
    } 
    // Scroll instantly to top so old page's bottom doesn't peek under overlay
    window.scrollTo(0, 0);
    // Delay page swap so overlay is already covering the screen
    const t = setTimeout(() => {
      setRenderedPath(location.pathname);
    }, 200);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // Build a fake location for <Routes> based on renderedPath
  const displayLocation = { ...location, pathname: renderedPath };

  return (
    <div style={{ background: '#FDFAF5', minHeight: '100vh' }}>
      {/* Overlay — always mounted, handles its own visibility */}
      <PageTransition />

      <Navbar />

      <Routes location={displayLocation} key={renderedPath}>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<About />} />
        <Route path="/mpd" element={<MPD />} />
        <Route path="/Student_life" element={<Studentlife />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/self_reliance" element={<SelfReliance />} />
        <Route path="/admission_process" element={<Admissions_Process />} />
        <Route path="/our_journey" element={<Aboutus />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/temple_of_learning" element={<TempleOL />} />
        <Route path="/spritual_dimension" element={<SpritualD />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/Our_Curriculam" element={<Curriculam />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}