import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================================================
   DATA & CONFIG
   ============================================================ */

const milestones = [
  {
    id: 1,
    period: "2007–2012",
    title: "The Humble Beginning",
    description: "Established in 2007 as a modest orphanage on the city’s outskirts, Sai Anandam began with the sacred blessings of Bhagwan. Our journey started by nurturing a small group of students, focusing deeply on human values to ensure their holistic growth and providing a sanctuary where character and heart blossomed together.",
    image: "/Images/IMG_0207.jpg",
    subEvents: [
      { year: "2007", title: "Establishment of Trust", desc: "Started with small group of students as an orphanage on the outskirts of the city." },
      { year: "2010", title: "Divine Blessings", desc: "A landmark moment in our history occurred when our students had the rare and sacred opportunity to perform in the Physical Presence of the Divine Director." },
      { year: "2011", title: "Vision for Expansion", desc: "As the needs of our growing family increased, the mission reached a new horizon with the acquisition of dedicated land." }
    ]
  },
  {
    id: 2,
    period: "2012–2017",
    title: "Campus Expansion",
    description: "By Bhagwan’s immense grace, our vision found a permanent home on a dedicated plot of land. Within just one year, a sprawling new campus was completed—not merely as a school, but as a big home for our growing family. This transformative phase saw the inauguration of our hostel.",
    image: "/Images/hostel.jpg",
    subEvents: [
      { year: "2012", title: "Inaguration of Hostel", desc: "Sai Anandam's new hostel was inaugurated by the SSSO All India Vice President, Sri Nimesh Pandya." },
      { year: "2015", title: "Inaguration of School", desc: "A state-of-the-art school building was inaugurated, catering to students from Kindergarten through Grade 8." },
      { year: "2016", title: "Tech Integration", desc: "Implemented 1-to-1 device program for all students." }
    ]
  },
  {
    id: 3,
    period: "2017–2022",
    title: "The Era of High Growth",
    description: "Guided by a vision for the future, we expanded our academic curriculum to integrate world-class facilities, including advanced science laboratories and a robust ICT infrastructure. This phase marked our official affiliation for the AISCE examinations, solidifying our commitment to combining technological advancement with the timeless values that define our holistic mission.",
    image: "/Images/Independence.jpg",
    subEvents: [
      { year: "2018", title: "Expansion of Community", desc: "Hostel facilities expanded to accommodate a growing family of students, ensuring a nurturing, communal home." },
      { year: "2020", title: "Virtual Campus", desc: "Successfully transitioned to advanced remote learning." },
      { year: "2022", title: "National Recognition", desc: "Achieved official CBSE affiliation for AISCE examinations, solidifying our commitment to rigorous national academic standards." }
    ]
  },
  {
    id: 4,
    period: "2022–Present",
    title: "A Modern Legacy",
    description: "Today, we continue the sacred saga of love and service, seamlessly blending academic excellence with all-round development. Our mission remains steadfast: to nurture students who are intellectually brilliant and spiritually grounded, ensuring that every graduate emerges as a compassionate leader dedicated to the selfless service of humanity.",
    image: "/Images/IMG_1448 (1).JPG",
    subEvents: [
      { year: "2023", title: "Academic Triumph", desc: "Achieved 100% success in Board examinations, with students securing top honors and flying colors." },
      { year: "2024", title: "Digital Transformation", desc: "Implemented comprehensive digitalization across all classrooms, integrating modern technology into our value-based teaching.." },
      { year: "2025", title: "Scientific expansion", desc: "Advanced science labs equipped with high end computing facilities was inagurated ." }
    ]
  }
];

// --- Custom Hook for Scroll Animations ---
function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [options]);

  return [ref, isVisible];
}

/* ============================================================
   COMPONENTS
   ============================================================ */

const AnimatedSVGOverlay = () => (
  <svg className="modal-svg-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
    <motion.path
      d="M-10,40 Q30,20 60,50 T110,40"
      fill="none"
      stroke="rgba(212,175,55,0.4)"
      strokeWidth="0.3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />
    {[...Array(6)].map((_, i) => (
      <motion.circle
        key={`particle-${i}`}
        cx={15 + i * 15}
        r={0.6}
        fill="rgba(212,175,55,0.8)"
        initial={{ cy: 110, opacity: 0 }}
        animate={{ cy: -10, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 6 + (i % 3) * 2, ease: "linear", repeat: Infinity, delay: i * 0.8 }}
      />
    ))}
  </svg>
);

const TimelineItem = ({ data, index, onClick }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`timeline-item ${inView ? 'timeline-item--visible' : 'timeline-item--hidden'}`}>
      <div className="timeline-marker"><div className="timeline-marker-dot"></div></div>
      <div className={`timeline-card-wrapper ${isLeft ? 'timeline-card-wrapper--left' : 'timeline-card-wrapper--right'}`}>
        <motion.div layoutId={`card-container-${data.id}`} onClick={() => onClick(data)} className="timeline-card glass-card">
          <div className="timeline-card-period mono">{data.period}</div>
          <h3 className="timeline-card-title serif">{data.title}</h3>
          <p className="timeline-card-desc">{data.description}</p>
          <div className="timeline-card-image-wrap">
            <img src={data.image} alt={data.title} className="timeline-card-image" />
          </div>
          <div className="timeline-card-expand-icon"><i className="ph ph-arrow-up-right"></i></div>
        </motion.div>
      </div>
    </div>
  );
};

const ExpandedModal = ({ data, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="modal-backdrop" />
      <div className="modal-positioner">
        <motion.div layoutId={`card-container-${data.id}`} className="modal-body glass-modal">
          <button onClick={onClose} className="modal-close-btn"><i className="ph ph-x"></i></button>
          
          <div className="modal-image-panel">
            <img src={data.image} alt={data.title} className="modal-image" />
            <div className="modal-image-gradient"></div>
            <AnimatedSVGOverlay />
            <div className="modal-image-content">
              <div className="modal-period-badge mono">{data.period}</div>
              <h3 className="modal-title serif">{data.title}</h3>
              <p className="modal-desc">{data.description}</p>
            </div>
          </div>

          <div className="modal-timeline-panel">
            <div className="modal-timeline-inner">
              <h4 className="modal-timeline-heading"><span className="modal-timeline-heading-line"></span>Key Milestones</h4>
              <div className="modal-timeline-track">
                <div className="modal-track-line" />
                <div className="modal-events-list">
                  {data.subEvents.map((event, i) => (
                    <motion.div key={i} className="modal-event" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                      <div className="modal-event-node" />
                      <div className="modal-event-card">
                        <span className="modal-event-year mono">{event.year}</span>
                        <h5 className="modal-event-title serif">{event.title}</h5>
                        <p className="modal-event-desc">{event.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

/* ============================================================
   MAIN APP
   ============================================================ */

export default function App() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeCard ? 'hidden' : 'unset';
  }, [activeCard]);

  return (
    <div className="app-wrapper">
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css" />
      <link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC:wght@400;700&display=swap" rel="stylesheet" />

      {/* --- HERO SECTION --- */}
      <header className="hero-section">
        <div className="hero-bg-blur"></div>
        <div className="hero-content">
          <h1 className="hero-title serif">
            <span className="hero-prefix mono">The Evolution of</span>
            <span className="hero-main-title">OUR <span className="molten-gold-text">JOURNEY</span></span>
          </h1>
          <p className="hero-description">
            A legacy of growth, excellence, and shaping the future. Witness the transformation of a vision into a global beacon of education.
          </p>
          <div className="hero-scroll-indicator">
            <div className="scroll-line"></div>
            <a href="#timeline" className="scroll-link">Discover the Legacy</a>
          </div>
        </div>
      </header>

      {/* --- TIMELINE SECTION --- */}
      <main className="timeline-container" id="timeline">
        <div className="timeline-spine"></div>
        <div className="timeline-items-wrapper">
          {milestones.map((item, index) => (
            <TimelineItem key={item.id} data={item} index={index} onClick={setActiveCard} />
          ))}
        </div>
      </main>

      <AnimatePresence>
        {activeCard && (
          <ExpandedModal data={activeCard} onClose={() => setActiveCard(null)} />
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --accent-gold: #D4AF37;
          --bg-dark: #050505;
          --transition-posh: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
        }

        * { box-sizing: border-box; scrollbar-width: none; -ms-overflow-style: none; }
        *::-webkit-scrollbar { display: none; }

        body { margin: 0; background: var(--bg-dark); }

        .app-wrapper { 
          background: var(--bg-dark); 
          background-image: radial-gradient(circle at top right, #111a28 0%, #050505 100%);
          background-attachment: fixed;
          color: white; font-family: 'Inter', sans-serif; overflow-x: hidden; min-height: 100vh;
        }

        .serif { font-family: 'Playfair Display', serif; }
        .mono { font-family: 'LXGW WenKai Mono TC', monospace; }

        /* --- HERO --- */
        .hero-section { height: 95vh; display: flex; align-items: center; position: relative; overflow: hidden; }
        .hero-bg-blur {
          position: absolute; inset: 0;
          background-image: linear-gradient(to right, rgba(0,0,0,0.92) 15%, rgba(0,0,0,0.5) 100%), url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=2000');
          background-size: cover; background-position: center; background-attachment: fixed;
          filter: blur(4px); transform: scale(1.05); z-index: 0;
        }
        .hero-section::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 300px;
          background: linear-gradient(to bottom, transparent, var(--bg-dark)); z-index: 1;
        }
        .hero-content {
          position: relative; z-index: 10; width: 100%; max-width: 80rem; padding: 0 2rem;
          margin: 12rem auto 0 auto; text-align: left; animation: fadeIn 1.5s ease-out;
        }

        /* --- FIXED WRAPPING LOGIC FOR HERO TITLE --- */
        .hero-title { 
          font-size: clamp(2.5rem, 8vw, 4.5rem); 
          line-height: 1.1; 
          margin-bottom: 2rem; 
          color: white;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hero-prefix {
          font-size: 0.8rem;
          letter-spacing: 0.4em;
          color: var(--accent-gold);
          opacity: 0.6;
          text-transform: uppercase;
          font-weight: 700;
          display: block;
        }

        .hero-main-title {
          display: block;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        
        .molten-gold-text {
          background: linear-gradient(90deg, #b58500, #D4AF37, #b58500);
          background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: goldFlow 5s linear infinite;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
        @keyframes goldFlow { to { background-position: 200% center; } }
        
        .hero-description { font-size: 1.15rem; color: rgba(255,255,255,0.7); max-width: 34rem; font-weight: 300; line-height: 1.7; }
        .hero-scroll-indicator { margin-top: 5rem; display: flex; align-items: center; gap: 2rem; }
        .scroll-line { width: 5rem; height: 1px; background: rgba(255,255,255,0.2); }
        .scroll-link { text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.5); text-decoration: none; font-weight: bold; font-size: 0.75rem; transition: color 0.3s; }
        .scroll-link:hover { color: var(--accent-gold); }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        /* --- TIMELINE --- */
        .timeline-container { position: relative; width: 100%; max-width: 80rem; margin: 0 auto; padding: 10rem 2rem; }
        .timeline-spine {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, transparent, var(--accent-gold) 15%, var(--accent-gold) 85%, transparent);
          transform: translateX(-50%); opacity: 0.3;
        }

        .timeline-item { position: relative; width: 100%; margin-bottom: 12rem; display: flex; align-items: center; justify-content: center; }
        .timeline-marker { position: absolute; left: 50%; transform: translateX(-50%); z-index: 20; }
        .timeline-marker-dot { width: 1rem; height: 1rem; background: var(--accent-gold); border-radius: 50%; box-shadow: 0 0 20px var(--accent-gold); }

        .timeline-card-wrapper { width: 45%; }
        .timeline-card-wrapper--left { margin-right: auto; }
        .timeline-card-wrapper--right { margin-left: auto; }

        .glass-card {
          background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 2rem;
          padding: 3rem; cursor: pointer; transition: var(--transition-posh);
          position: relative;
        }
        .glass-card:hover { background: rgba(255, 255, 255, 0.06); border-color: rgba(212, 175, 55, 0.4); transform: translateY(-10px); }

        .timeline-card-period { color: var(--accent-gold); font-size: 0.8rem; font-weight: bold; letter-spacing: 0.2em; margin-bottom: 1rem; }
        .timeline-card-title { font-size: 2.2rem; color: white; margin-bottom: 1.5rem; }
        .timeline-card-desc { color: rgba(255,255,255,0.6); line-height: 1.7; font-weight: 300; margin-bottom: 2rem; }
        .timeline-card-image-wrap { border-radius: 1.5rem; overflow: hidden; height: 250px; }
        .timeline-card-image { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: transform 1s; }
        .glass-card:hover .timeline-card-image { transform: scale(1.05); opacity: 1; }
        .timeline-card-expand-icon { position: absolute; top: 2rem; right: 2rem; font-size: 1.5rem; color: var(--accent-gold); opacity: 0.5; }

        /* --- MODAL --- */
        .modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(25px); z-index: 1000; }
        .modal-positioner { position: fixed; inset: 0; z-index: 1001; display: flex; align-items: center; justify-content: center; padding: 2rem; pointer-events: none; }
        .glass-modal { 
          width: 100%; max-width: 1100px; height: 80vh; background: #0a0a0a; border-radius: 3rem; 
          border: 1px solid rgba(255,255,255,0.1); overflow: hidden; display: flex; pointer-events: auto;
        }

        .modal-image-panel { width: 45%; position: relative; overflow: hidden; }
        .modal-image { width: 100%; height: 100%; object-fit: cover; }
        .modal-image-gradient { position: absolute; inset: 0; background: linear-gradient(to right, #0a0a0a 0%, transparent 100%); }
        .modal-image-content { position: absolute; bottom: 3rem; left: 3rem; right: 3rem; z-index: 10; }
        .modal-period-badge { color: var(--accent-gold); font-size: 0.8rem; font-weight: bold; margin-bottom: 1rem; }
        .modal-title { font-size: 3rem; color: white; margin-bottom: 1rem; }

        /* FIXED DESCRIPTION FOR MOBILE */
        .modal-desc { 
          color: rgba(255,255,255,0.7); 
          line-height: 1.7; 
          font-weight: 300; 
          font-size: 0.95rem;
          display: block; 
          max-width: 32rem;
          filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
        }

        .modal-timeline-panel { flex: 1; padding: 4rem; overflow-y: auto; background: #0c0c0c; }
        .modal-timeline-heading { color: white; font-size: 1.2rem; margin-bottom: 3rem; display: flex; align-items: center; gap: 1rem; }
        .modal-timeline-heading-line { width: 3rem; height: 1px; background: var(--accent-gold); }

        .modal-timeline-track { position: relative; padding-left: 3rem; }
        .modal-track-line { position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: rgba(212,175,55,0.2); }
        .modal-event { position: relative; margin-bottom: 3rem; }
        .modal-event-node { position: absolute; left: -3.35rem; top: 0.5rem; width: 0.7rem; height: 0.7rem; background: var(--accent-gold); border-radius: 50%; box-shadow: 0 0 15px var(--accent-gold); }
        .modal-event-card { background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 1.2rem; border: 1px solid rgba(255,255,255,0.05); }
        .modal-event-year { color: var(--accent-gold); font-weight: bold; font-size: 0.8rem; }
        .modal-event-title { color: white; font-size: 1.2rem; margin: 0.5rem 0; }
        .modal-event-desc { color: rgba(255,255,255,0.5); font-size: 0.9rem; line-height: 1.6; }

        .modal-close-btn { position: absolute; top: 2rem; right: 2rem; width: 3rem; height: 3rem; border-radius: 50%; background: rgba(255,255,255,0.05); border: none; color: white; font-size: 1.5rem; cursor: pointer; z-index: 100; transition: 0.3s; display: flex; align-items: center; justify-content: center; }
        .modal-close-btn:hover { background: var(--accent-gold); color: black; transform: rotate(90deg); }

        /* --- RESPONSIVE --- */
        @media (min-width: 768px) {
          .modal-desc { font-size: 1.1rem; }
        }

        @media (max-width: 1024px) {
          .timeline-spine { left: 2rem; }
          .timeline-marker { left: 2rem; }
          .timeline-card-wrapper { width: calc(100% - 4rem); margin-left: 4rem !important; }
          
          /* Updated Modal for better mobile scrolling and visibility */
          .modal-positioner { align-items: flex-start; overflow-y: auto; -webkit-overflow-scrolling: touch; }
          .glass-modal { flex-direction: column; height: auto; min-height: 90vh; margin: 2rem 0; }
          .modal-image-panel { width: 100%; height: auto; min-height: 400px; flex-shrink: 0; }
          .modal-image-gradient { background: linear-gradient(to top, #0a0a0a 0%, transparent 100%); }
          .modal-image-content { position: relative; bottom: 0; left: 0; right: 0; padding: 2rem; background: #0a0a0a; }
          .modal-timeline-panel { padding: 2rem; overflow-y: visible; flex: none; }
          .modal-desc { display: block; margin-top: 1rem; }
        }

        @media (max-width: 600px) {
          .hero-title { font-size: clamp(2rem, 10vw, 2.5rem); gap: 0.5rem; }
          .hero-content { margin-top: 6rem; }
          .section-padding { padding: 6rem 0; }
          .timeline-container { padding: 5rem 1rem; }
          .timeline-card { padding: 1.5rem; }
          .timeline-card-title { font-size: 1.6rem; }
          .modal-timeline-panel { padding: 2rem; }
          .modal-title { font-size: 2rem; }
          .modal-image-panel { min-height: 300px; }
        }
      ` }} />
    </div>
  );
}