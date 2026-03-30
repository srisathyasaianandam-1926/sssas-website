import React, { useState } from 'react';
import {
  BookOpen, Microscope, Globe2, Laptop, Calculator, Palette,
  Atom, ChevronRight, Library, GraduationCap, Leaf, Heart,
  Bot, Activity, Music, Code, Type, Shield, Brain, Dumbbell, Sparkles
} from 'lucide-react';

// --- Data ---
const philosophyItems = [
  {
    id: 'cbse-nep',
    title: 'CBSE & NEP Aligned',
    desc: 'Rigorous standards harmonized with modern progressive learning frameworks.',
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'experiential',
    title: 'Experiential Focus',
    desc: 'Moving beyond rote memorization to deep conceptual understanding.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'analytical',
    title: 'Analytical Approach',
    desc: 'Application-based examinations designed to build critical thinkers.',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60'
  }
];

const stages = [
  {
    id: 'primary',
    title: 'Primary Wing',
    grades: 'Grades 1 to 5',
    colorClass: 'stage-bar--blue',
    accentClass: 'stage-accent--blue',
    bgClass: 'stage-bg--blue',
    dotClass: 'stage-dot--blue',
    desc: 'Laying the foundation of curiosity and core skills.',
    highlights: ['Activity-based learning', 'Foundational Numeracy', 'Language Arts focus']
  },
  {
    id: 'middle',
    title: 'Middle Wing',
    grades: 'Grades 6 to 8',
    colorClass: 'stage-bar--amber',
    accentClass: 'stage-accent--amber',
    bgClass: 'stage-bg--amber',
    dotClass: 'stage-dot--amber',
    desc: 'Fostering exploration, analysis, and collaborative growth.',
    highlights: ['Introduction to Labs', 'Project-based assessments', 'Interdisciplinary topics']
  },
  {
    id: 'secondary',
    title: 'Secondary Wing',
    grades: 'Grades 9 to 10',
    colorClass: 'stage-bar--teal',
    accentClass: 'stage-accent--teal',
    bgClass: 'stage-bg--teal',
    dotClass: 'stage-dot--teal',
    desc: 'Specialization, mastery, and preparation for the future.',
    highlights: ['Career-oriented streams', 'Rigorous board preparation', 'Advanced practicals']
  }
];

const subjectsList = [
  { id: 'math',  name: 'Mathematics',              icon: Calculator, colorClass: 'subject-icon--blue',    glowClass: 'subject-glow--blue'    },
  { id: 'sci',   name: 'Science',                  icon: Microscope, colorClass: 'subject-icon--emerald', glowClass: 'subject-glow--emerald' },
  { id: 'eng',   name: 'English',                  icon: BookOpen,   colorClass: 'subject-icon--amber',   glowClass: 'subject-glow--amber'   },
  { id: 'sst',   name: 'Social Studies',           icon: Globe2,     colorClass: 'subject-icon--indigo',  glowClass: 'subject-glow--indigo'  },
  { id: 'odia',  name: 'Odia',                     icon: Type,       colorClass: 'subject-icon--rose',    glowClass: 'subject-glow--rose'    },
  { id: 'hindi', name: 'Hindi',                    icon: Type,       colorClass: 'subject-icon--orange',  glowClass: 'subject-glow--orange'  },
  { id: 'cs',    name: 'Computer Science',         icon: Code,       colorClass: 'subject-icon--cyan',    glowClass: 'subject-glow--cyan'    },
  { id: 'pe',    name: 'Physical Education',       icon: Dumbbell,   colorClass: 'subject-icon--red',     glowClass: 'subject-glow--red'     },
  { id: 'art',   name: 'Visual Arts',              icon: Palette,    colorClass: 'subject-icon--pink',    glowClass: 'subject-glow--pink'    },
  { id: 'music', name: 'Music',                    icon: Music,      colorClass: 'subject-icon--purple',  glowClass: 'subject-glow--purple'  },
  { id: 'dance', name: 'Dance',                    icon: Sparkles,   colorClass: 'subject-icon--fuchsia', glowClass: 'subject-glow--fuchsia' },
  { id: 'evs',   name: 'Environmental Studies',    icon: Leaf,       colorClass: 'subject-icon--green',   glowClass: 'subject-glow--green'   },
  { id: 'gk',    name: 'General Knowledge',        icon: Brain,      colorClass: 'subject-icon--teal',    glowClass: 'subject-glow--teal'    },
  { id: 'moral', name: 'Moral Science',            icon: Heart,      colorClass: 'subject-icon--rose-lt', glowClass: 'subject-glow--rose-lt' },
  { id: 'ai',    name: 'Artificial Intelligence',  icon: Bot,        colorClass: 'subject-icon--violet',  glowClass: 'subject-glow--violet'  },
  { id: 'yoga',  name: 'Yoga',                     icon: Activity,   colorClass: 'subject-icon--lime',    glowClass: 'subject-glow--lime'    },
  { id: 'life',  name: 'Life Skills',              icon: Shield,     colorClass: 'subject-icon--sky',     glowClass: 'subject-glow--sky'     },
];

const rings = [
  { radius: 160, duration: '40s', reverse: false, subjects: subjectsList.slice(0,  5)  },
  { radius: 220, duration: '55s', reverse: true,  subjects: subjectsList.slice(5,  11) },
  { radius: 310, duration: '70s', reverse: false, subjects: subjectsList.slice(11, 17) },
];

// ─── Sections ───────────────────────────────────────────────

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-bg">
      <div className="hero-bg-dark-overlay"></div>
      <div className="hero-bg-gradient-overlay"></div>
    </div>
    <div className="hero-content">
      <div className="hero-badge animate-fade-in-up">
        <Atom size={16} className="hero-badge-icon" />
        <span>Academic Excellence</span>
      </div>
      <h1 className="hero-heading animate-fade-in-up">Curriculum</h1>
      <p className="hero-subtext animate-fade-in-up-delayed">
        A structured academic system presented with the elegance of motion —{' '}
        <br className="hero-br-md" />
        <span className="hero-subtext-accent">
          where learning isn't static, it revolves, expands, and responds.
        </span>
      </p>
    </div>
  </section>
);

const PhilosophySection = () => (
  <section className="philosophy-section">
    <div className="philosophy-inner">
      <h2 className="philosophy-heading">
        Our Educational <span className="philosophy-heading-accent">Philosophy</span>
      </h2>
      <div className="philosophy-grid">
        <div className="philosophy-connector-line"></div>
        {philosophyItems.map(item => (
          <div key={item.id} className="philosophy-card">
            <div className="philosophy-card-img-wrap">
              <img src={item.img} alt={item.title} className="philosophy-card-img" />
            </div>
            <h3 className="philosophy-card-title">{item.title}</h3>
            <p className="philosophy-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AcademicCardsSection = () => {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <section className="academic-section">
      <div className="academic-inner">
        <div className="academic-header">
          <h2 className="academic-heading">
            Academic <span className="academic-heading-accent">Structure</span>
          </h2>
          <p className="academic-subtext">
            A seamless progression designed to nurture students at every developmental stage.
          </p>
        </div>

        <div className="stages-container">
          {stages.map(stage => {
            const isActive   = activeCardId === stage.id;
            const anyActive  = activeCardId !== null;

            return (
              <div
                key={stage.id}
                onMouseEnter={() => setActiveCardId(stage.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={() => setActiveCardId(isActive ? null : stage.id)}
                className={`
                  stage-card
                  ${isActive  ? 'stage-card--active'    : ''}
                  ${anyActive && !isActive ? 'stage-card--shrunk' : ''}
                `}
              >
                {/* Top colour bar */}
                <div className={`stage-top-bar ${stage.colorClass}`}></div>

                <div className="stage-body">
                  {/* Icon + heading (always visible) */}
                  <div className="stage-header">
                    <div className={`stage-icon-wrap ${stage.bgClass} ${stage.accentClass}`}>
                      <GraduationCap size={28} />
                    </div>
                    <div className="stage-title-row">
                      <h3 className="stage-title">{stage.title}</h3>
                      {!isActive && !anyActive && (
                        <ChevronRight className="stage-chevron" />
                      )}
                    </div>
                    <p className="stage-grades">{stage.grades}</p>
                  </div>

                  {/* Expandable area */}
                  <div className={`stage-expand ${isActive ? 'stage-expand--open' : 'stage-expand--closed'}`}>
                    <div className="stage-expand-inner">
                      <p className="stage-desc">{stage.desc}</p>
                      <div className="stage-highlights">
                        <h4 className={`stage-highlights-label ${stage.accentClass}`}>Key Highlights</h4>
                        <ul className="stage-highlights-list">
                          {stage.highlights.map((h, i) => (
                            <li key={i} className="stage-highlight-item">
                              <div className={`stage-dot ${stage.dotClass}`}></div>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ghost background icon */}
                <div className={`stage-ghost-icon ${isActive ? 'stage-ghost-icon--visible' : 'stage-ghost-icon--hidden'}`}>
                  <GraduationCap size={240} strokeWidth={1} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SubjectsOrbitSection = () => {
  const [hoveredSubjectId, setHoveredSubjectId] = useState(null);
  const activeSubject = subjectsList.find(s => s.id === hoveredSubjectId);
  const isAnyHovered  = hoveredSubjectId !== null;

  return (
    <section className="orbit-section">
      <div className="orbit-inner">

        {/* Left — text */}
        <div className="orbit-text">
          <h2 className="orbit-heading">
            A Universe of <br />
            <span className="orbit-heading-accent">Knowledge</span>
          </h2>
          <p className="orbit-desc">
            Our curriculum revolves around the holistic development of the child.
            Every subject acts as a vital orbital force, bringing specialized skills
            while maintaining a deep connection to the core philosophy of unified learning.
          </p>
          <button className="orbit-cta-btn">Download Syllabus</button>
        </div>

        {/* Right — orbit */}
        <div className="orbit-canvas">
          <div className="orbit-scale-wrapper">

            {/* Background rings */}
            {rings.map((ring, idx) => (
              <div
                key={`bg-ring-${idx}`}
                className="orbit-ring-line"
                style={{ width: ring.radius * 2, height: ring.radius * 2 }}
              ></div>
            ))}

            {/* Core sphere */}
            <div className={`orbit-core ${isAnyHovered ? 'orbit-core--dimmed' : ''}`}>
              <div className={`orbit-core-content ${isAnyHovered ? 'orbit-core-content--hidden' : ''}`}>
                <Atom size={32} className="orbit-core-icon" />
                <span className="orbit-core-label">CORE</span>
              </div>
            </div>

            {/* Hovered subject name overlay */}
            <div className={`orbit-subject-name ${isAnyHovered ? 'orbit-subject-name--visible' : 'orbit-subject-name--hidden'}`}>
              {activeSubject ? activeSubject.name : ''}
            </div>

            {/* Spinning tracks */}
            {rings.map((ring, ringIdx) => (
              <div
                key={`track-${ringIdx}`}
                className="orbit-track"
                style={{
                  animation: `${ring.reverse ? 'orbitSpinReverse' : 'orbitSpin'} ${ring.duration} linear infinite`,
                  animationPlayState: isAnyHovered ? 'paused' : 'running'
                }}
              >
                {ring.subjects.map((sub, i) => {
                  const angle      = (360 / ring.subjects.length) * i;
                  const isHovered  = hoveredSubjectId === sub.id;
                  const isOther    = isAnyHovered && !isHovered;
                  const Icon       = sub.icon;

                  return (
                    <div
                      key={sub.id}
                      className="orbit-node-anchor"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      <div className="orbit-node-push" style={{ transform: `translateY(-${ring.radius}px)` }}>
                        {/* Cancel static angle */}
                        <div style={{ transform: `rotate(-${angle}deg)` }}>
                          {/* Counter-spin to keep icon upright */}
                          <div
                            style={{
                              animation: `${ring.reverse ? 'orbitSpin' : 'orbitSpinReverse'} ${ring.duration} linear infinite`,
                              animationPlayState: isAnyHovered ? 'paused' : 'running'
                            }}
                          >
                            <div
                              className="orbit-node-wrap"
                              onMouseEnter={() => setHoveredSubjectId(sub.id)}
                              onMouseLeave={() => setHoveredSubjectId(null)}
                            >
                              <div className={`
                                orbit-node
                                ${isHovered ? `orbit-node--hovered ${sub.glowClass}` : ''}
                                ${isOther   ? 'orbit-node--dimmed' : ''}
                              `}>
                                <Icon size={26} className={sub.colorClass} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- App ---
export default function App() {
  return (
    <div className="page-root">
      <HeroSection />
      <PhilosophySection />
      <AcademicCardsSection />
      <SubjectsOrbitSection />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        /* ─── Keyframes ─── */
        @keyframes fadeInUp {
          0%   { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .animate-fade-in-up-delayed {
          animation: fadeInUp 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s forwards;
          opacity: 0;
        }

        /* ─── Page Root ─── */
        .page-root {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          overflow-x: hidden;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .page-root::-webkit-scrollbar { display: none; }

        /* ─── Hero ─── */
        .hero-section {
          position: relative;
          height: 85vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
        }
        .hero-bg-dark-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15,23,42,0.6);
          backdrop-filter: blur(2px);
        }
        .hero-bg-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(15,23,42,0.4), rgba(240,249,255,0.9));
        }
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: left;
          padding: 0 1.5rem;
          max-width: 80rem;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-badge {
          margin-bottom: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          border: 1px solid rgba(245,158,11,0.3);
          background: rgba(245,158,11,0.1);
          backdrop-filter: blur(12px);
          color: #fde68a;
          font-size: 0.875rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .hero-badge-icon { color: #fbbf24; }
        .hero-heading {
          font-size: clamp(3rem, 8vw, 4.5rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 4px 16px rgba(0,0,0,0.3));
        }
        .hero-subtext {
          font-size: clamp(1rem, 2vw, 1.5rem);
          color: #e2e8f0;
          font-weight: 300;
          line-height: 1.625;
          max-width: 42rem;
        }
        .hero-subtext-accent { color: #fcd34d; font-weight: 500; }
        .hero-br-md { display: none; }
        @media (min-width: 768px) { .hero-br-md { display: block; } }

        /* ─── Philosophy Section ─── */
        .philosophy-section {
          padding: 6rem 1.5rem;
          background: linear-gradient(to bottom, rgba(240,249,255,0.9), #e0f2fe);
          position: relative;
          z-index: 10;
        }
        .philosophy-inner {
          max-width: 56rem;
          margin: 0 auto;
          text-align: center;
        }
        .philosophy-heading {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2rem;
        }
        .philosophy-heading-accent { color: #d97706; }
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          text-align: left;
          position: relative;
        }
        @media (min-width: 768px) { .philosophy-grid { grid-template-columns: repeat(3,1fr); } }
        .philosophy-connector-line {
          display: none;
          position: absolute;
          top: 50%;
          left: 2.5rem;
          right: 2.5rem;
          height: 1px;
          background: #fde68a;
          z-index: -1;
        }
        @media (min-width: 768px) { .philosophy-connector-line { display: block; } }

        .philosophy-card {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(20px);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.4);
          box-shadow: 0 20px 40px rgba(15,23,42,0.05);
          transition: transform 0.3s ease;
        }
        .philosophy-card:hover { transform: translateY(-4px); }
        .philosophy-card-img-wrap {
          width: 5rem;
          height: 5rem;
          background: #f1f5f9;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.06);
          overflow: hidden;
          border: 1px solid rgba(203,213,225,0.6);
        }
        .philosophy-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .philosophy-card:hover .philosophy-card-img { transform: scale(1.1); }
        .philosophy-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.75rem;
        }
        .philosophy-card-desc { color: #475569; line-height: 1.7; }

        /* ─── Academic Cards Section ─── */
        .academic-section {
          padding: 6rem 1.5rem;
          background: #e0f2fe;
        }
        .academic-inner { max-width: 80rem; margin: 0 auto; }
        .academic-header { text-align: center; margin-bottom: 4rem; }
        .academic-heading {
          font-size: clamp(1.875rem, 5vw, 3rem);
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        .academic-heading-accent { color: #d97706; }
        .academic-subtext {
          color: #475569;
          max-width: 42rem;
          margin: 0 auto;
          font-size: 1.125rem;
        }

        /* ─── Stages Container ─── */
        .stages-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: auto;
        }
        @media (min-width: 1024px) {
          .stages-container {
            flex-direction: row;
            height: 480px;
          }
        }

        /* ─── Stage Card ─── */
        .stage-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          cursor: pointer;
          background: #fff;
          box-shadow: 0 20px 40px rgba(148,163,184,0.15);
          border: 1px solid rgba(255,255,255,0.6);
          transition: flex 0.7s cubic-bezier(0.25,1,0.5,1);
          flex: 1;
        }
        @media (min-width: 1024px) {
          .stage-card--active  { flex: 3; }
          .stage-card--shrunk  { flex: 0.6; }
        }

        .stage-top-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 0.5rem;
        }
        .stage-bar--blue   { background: linear-gradient(to right, #38bdf8, #3b82f6); }
        .stage-bar--amber  { background: linear-gradient(to right, #fbbf24, #f97316); }
        .stage-bar--teal   { background: linear-gradient(to right, #34d399, #14b8a6); }

        .stage-body {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 10;
        }
        .stage-header { flex-shrink: 0; }
        .stage-icon-wrap {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .stage-bg--blue   { background: #eff6ff; }
        .stage-bg--amber  { background: #fffbeb; }
        .stage-bg--teal   { background: #f0fdfa; }
        .stage-accent--blue   { color: #2563eb; }
        .stage-accent--amber  { color: #d97706; }
        .stage-accent--teal   { color: #0d9488; }

        .stage-title-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .stage-title {
          font-size: clamp(1.25rem, 2.5vw, 1.875rem);
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
        }
        .stage-chevron { color: #94a3b8; }
        .stage-grades  { color: #64748b; font-weight: 500; margin-top: 0.25rem; }

        /* Expand / collapse using CSS grid trick */
        .stage-expand {
          display: grid;
          transition: grid-template-rows 0.5s ease, opacity 0.5s ease, margin-top 0.5s ease;
        }
        .stage-expand--open   { grid-template-rows: 1fr; opacity: 1; margin-top: 1.5rem; }
        .stage-expand--closed { grid-template-rows: 0fr; opacity: 0; margin-top: 0;     }
        .stage-expand-inner   { overflow: hidden; }

        .stage-desc {
          color: #334155;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          line-height: 1.7;
          max-width: 28rem;
        }
        .stage-highlights-label {
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .stage-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .stage-highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #475569;
          font-weight: 500;
          white-space: nowrap;
        }
        .stage-dot {
          width: 0.375rem;
          height: 0.375rem;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .stage-dot--blue  { background: #3b82f6; }
        .stage-dot--amber { background: #f59e0b; }
        .stage-dot--teal  { background: #14b8a6; }

        .stage-ghost-icon {
          position: absolute;
          bottom: -2.5rem;
          right: -2.5rem;
          color: #f1f5f9;
          pointer-events: none;
          transition: transform 0.7s ease, opacity 0.7s ease;
        }
        .stage-ghost-icon--visible { transform: scale(1);   opacity: 1; }
        .stage-ghost-icon--hidden  { transform: scale(0.5); opacity: 0; }

        /* ─── Orbit Section ─── */
        .orbit-section {
          padding: 8rem 1.5rem;
          background: linear-gradient(to bottom, #e0f2fe, #fefce8);
          overflow: hidden;
          position: relative;
        }
        .orbit-inner {
          max-width: 80rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        @media (min-width: 1024px) { .orbit-inner { flex-direction: row; } }

        .orbit-text {
          text-align: center;
          z-index: 10;
        }
        @media (min-width: 1024px) {
          .orbit-text { width: 33.333%; text-align: left; }
        }
        .orbit-heading {
          font-size: clamp(1.875rem, 5vw, 3rem);
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }
        .orbit-heading-accent { color: #d97706; }
        .orbit-desc {
          font-size: 1.125rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .orbit-cta-btn {
          background: #f59e0b;
          color: #fff;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(245,158,11,0.3);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .orbit-cta-btn:hover { background: #d97706; transform: translateY(-2px); }

        .orbit-canvas {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
          width: 100%;
          position: relative;
          overflow: visible;
        }
        @media (min-width: 1024px) {
          .orbit-canvas { width: 66.667%; height: 700px; }
        }

        /* Scale wrapper so orbits fit smaller screens */
        .orbit-scale-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.45);
        }
        @media (min-width: 640px)  { .orbit-scale-wrapper { transform: scale(0.65); } }
        @media (min-width: 768px)  { .orbit-scale-wrapper { transform: scale(0.75); } }
        @media (min-width: 1024px) { .orbit-scale-wrapper { transform: scale(1);    } }

        /* Background ring circles */
        .orbit-ring-line {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(125,211,252,0.4);
        }

        /* Core sphere */
        .orbit-core {
          position: absolute;
          width: 8rem;
          height: 8rem;
          background: linear-gradient(to bottom right, #fbbf24, #f97316);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 25px 50px rgba(249,115,22,0.4);
          z-index: 20;
          transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
        }
        .orbit-core--dimmed { opacity: 0.7; filter: blur(1px); transform: scale(0.98); }

        .orbit-core-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }
        .orbit-core-content--hidden { opacity: 0; }
        .orbit-core-icon { margin-bottom: 0.25rem; }
        .orbit-core-label { font-weight: 700; letter-spacing: 0.05em; }

        /* Subject name overlay */
        .orbit-subject-name {
          position: absolute;
          z-index: 30;
          pointer-events: none;
          width: 7rem;
          height: 7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 700;
          color: #fff;
          font-size: 0.875rem;
          line-height: 1.3;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .orbit-subject-name--visible { opacity: 1; transform: scale(1);    }
        .orbit-subject-name--hidden  { opacity: 0; transform: scale(0.95); }

        /* Orbit track (spinning wrapper at 0×0) */
        .orbit-track {
          position: absolute;
          width: 0;
          height: 0;
        }
        /* Angle anchor at track centre */
        .orbit-node-anchor { position: absolute; top: 0; left: 0; }
        /* Pushes node out to ring radius */
        .orbit-node-push   { position: absolute; }
        /* Centering wrapper + event target */
        .orbit-node-wrap {
          position: relative;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }

        /* Subject icon circle */
        .orbit-node {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(4px);
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease;
        }
        .orbit-node--hovered { transform: scale(1.25); }
        .orbit-node--dimmed  { opacity: 0.4; filter: blur(2px); transform: scale(0.9); }

        /* ─── Subject icon colours ─── */
        .subject-icon--blue    { color: #3b82f6; }
        .subject-icon--emerald { color: #10b981; }
        .subject-icon--amber   { color: #f59e0b; }
        .subject-icon--indigo  { color: #6366f1; }
        .subject-icon--rose    { color: #f43f5e; }
        .subject-icon--orange  { color: #f97316; }
        .subject-icon--cyan    { color: #06b6d4; }
        .subject-icon--red     { color: #ef4444; }
        .subject-icon--pink    { color: #ec4899; }
        .subject-icon--purple  { color: #a855f7; }
        .subject-icon--fuchsia { color: #d946ef; }
        .subject-icon--green   { color: #22c55e; }
        .subject-icon--teal    { color: #14b8a6; }
        .subject-icon--rose-lt { color: #fb7185; }
        .subject-icon--violet  { color: #8b5cf6; }
        .subject-icon--lime    { color: #65a30d; }
        .subject-icon--sky     { color: #0ea5e9; }

        /* ─── Subject glow (box-shadow on hover) ─── */
        .subject-glow--blue    { box-shadow: 0 0 20px 4px rgba(59,130,246,0.5);  }
        .subject-glow--emerald { box-shadow: 0 0 20px 4px rgba(16,185,129,0.5); }
        .subject-glow--amber   { box-shadow: 0 0 20px 4px rgba(245,158,11,0.5); }
        .subject-glow--indigo  { box-shadow: 0 0 20px 4px rgba(99,102,241,0.5); }
        .subject-glow--rose    { box-shadow: 0 0 20px 4px rgba(244,63,94,0.5);  }
        .subject-glow--orange  { box-shadow: 0 0 20px 4px rgba(249,115,22,0.5); }
        .subject-glow--cyan    { box-shadow: 0 0 20px 4px rgba(6,182,212,0.5);  }
        .subject-glow--red     { box-shadow: 0 0 20px 4px rgba(239,68,68,0.5);  }
        .subject-glow--pink    { box-shadow: 0 0 20px 4px rgba(236,72,153,0.5); }
        .subject-glow--purple  { box-shadow: 0 0 20px 4px rgba(168,85,247,0.5); }
        .subject-glow--fuchsia { box-shadow: 0 0 20px 4px rgba(217,70,239,0.5); }
        .subject-glow--green   { box-shadow: 0 0 20px 4px rgba(34,197,94,0.5);  }
        .subject-glow--teal    { box-shadow: 0 0 20px 4px rgba(20,184,166,0.5); }
        .subject-glow--rose-lt { box-shadow: 0 0 20px 4px rgba(251,113,133,0.5);}
        .subject-glow--violet  { box-shadow: 0 0 20px 4px rgba(139,92,246,0.5); }
        .subject-glow--lime    { box-shadow: 0 0 20px 4px rgba(101,163,13,0.5); }
        .subject-glow--sky     { box-shadow: 0 0 20px 4px rgba(14,165,233,0.5); }
      `}</style>
    </div>
  );
}