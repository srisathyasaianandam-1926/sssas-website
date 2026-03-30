/* ================================================================
   HOME PAGE — SSSAS 
   Fonts  : Playfair Display (headings) + Inter (body)
   ================================================================ */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Star, BookOpen, CheckCircle, ChevronRight,
  Microscope, Calculator, Calendar, Bell, ExternalLink,
  Trophy, Palette, Lightbulb, HeartHandshake
} from 'lucide-react';

import heroBg from '../assets/home.png';
import schoolLogo from "../assets/LOGO - (WHITE).png";

/* ================================================================
   ✅ EDITABLE DATA
   ================================================================ */
const NOTICE_BOARD = [
  { text: 'Annuall Sports and Cultural Meet - 2026', isNew: true , date: 'Mar 29', path: '' },
  { text: 'SSSAS Admissions 2026 - Apply Now', isNew: false, date: 'Mar 22', path: '/admissions' },
  { text: 'Annual Report 2025', isNew: true, date: 'Mar 15', path: '/report' },
  { text: 'CBSE New Educational Policy', isNew: false, date: 'Mar 10', path: '/grievance' },
  { text: 'Sri Sathya Sai Students – Alumni Registration', isNew: false, date: 'Mar 05', path: '/alumni' },
];

const QUICK_LINKS = [
  { label: 'Mandatory Public Disclosure', icon: ExternalLink, path: '/mpd' },
  { label: 'Gallery - Collection of Memories', icon: BookOpen, path: '' },
  { label: 'Divine Director\'s Message', icon: Star, path: '' },
  { label: 'Admissions', icon: Microscope, path: '/admissions' },
  { label: 'Reach US - SSSAS', icon: Calculator, path: '/contact' },
];

const ABOUT_HIGHLIGHTS = [
  'CBSE Affiliated — Consistent Board Results',
  'Experienced & Dedicated Faculty Members',
  'State-of-the-Art Laboratories & Smart Classrooms',
  'Comprehensive Co-Curricular & Sports Programs',
];

const BEYOND_ACADEMICS = [
  {
    title: 'Sports & Athletics',
    desc: 'Building physical endurance, teamwork, and sportsmanship through structured physical education and dedicated coaching.',
    icon: Trophy,
    color: '#E65100'
  },
  {
    title: 'Creative Arts',
    desc: 'Nurturing self-expression through engaging programs in visual arts, pottery, classical music, and dance.',
    icon: Palette,
    color: '#D500F9'
  },
  {
    title: 'Innovation Lab',
    desc: 'Encouraging curiosity with hands-on foundational projects in basic robotics, practical science, and early coding.',
    icon: Lightbulb,
    color: '#00B0FF'
  },
  {
    title: 'Values & Service',
    desc: 'Fostering empathy and character development through community service rooted in universal human values.',
    icon: HeartHandshake,
    color: '#00E676'
  }
];

const PROGRAMS = [
  { 
    icon: BookOpen, 
    level: 'Primary School', 
    grades: 'Class I – V', 
    desc: 'Building strong foundations across all subjects with an emphasis on interactive and joyful learning environments.', 
    bgImg: '/Images/primary.jpg' 
  },
  { 
    icon: Microscope, 
    level: 'Middle School', 
    grades: 'Class VI – VIII', 
    desc: 'Fostering critical thinking and scientific inquiry through hands-on exploration and collaborative projects.', 
    bgImg: '/Images/paryer.jpg' 
  },
  { 
    icon: Calculator, 
    level: 'Secondary', 
    grades: 'Class IX – X', 
    desc: 'Comprehensive CBSE board preparation combined with focused mentoring to help students achieve holistic academic excellence.', 
    bgImg: '/Images/Ex-Curricular/J4.jpeg' 
  }
];

const LEARNING_TABS = [
  {
    id: 'academics', label: 'Academics',
    items: [
      { title: 'Smart Classrooms', subtitle: 'Technology-enabled learning', desc: 'Interactive smart boards and collaborative environments.', image: '/Images/Comp_lab.JPG', link: '/school', cta: 'Explore Classrooms' },
      { title: 'Future-Ready Curriculum', subtitle: 'Skills beyond the textbook', desc: 'A curriculum blending CBSE rigour with coding and design thinking.', image: '/Images/drammatics.jpg', link: '/academics', cta: 'View Curriculum' },
      { title: 'Labs & Experiential', subtitle: 'Hands-on discovery', desc: 'Fully equipped labs where learning becomes discovery.', image: '/Images/Ch Lab.JPG', link: '/school', cta: 'See Our Labs' },
      { title: 'Sports and Games', subtitle: 'Physical Fitness', desc: 'Physically active and Mentally strong is very essential', image: '/Images/Ex-Curricular/S2.jpeg', link: '/school', cta: 'See Our Labs' },
    ],
  },
  {
    id: 'arts', label: 'Creative Arts',
    items: [
      { title: 'Spirituality', subtitle: 'Mental Stability', desc: 'Spiritual aspect of life is valued more than academic', image: '/Images/Ex-Curricular/J7.jpeg', link: '/school', cta: 'Meet Our Artists' },      
      { title: 'Music & Dance', subtitle: 'Nurturing expression', desc: 'Classical, contemporary, and folk forms taught by professionals.', image: '/Images/dance 2.JPG', link: '/school', cta: 'Meet Our Artists' },
      { title: 'Activities', subtitle: 'Independence Day', desc: 'Students Stand in a gathering for the National Flag Hosting', image: '/Images/Independence.jpg', link: '/school', cta: 'View Art Gallery' },
      { title: 'Visual Arts', subtitle: 'Hands-on exploration', desc: 'Studios where students experiment, create, and express freely.', image: '/Images/raksha bandham.jpg', link: '/school', cta: 'View Art Gallery' },
    ],
  },
];

/* ================================================================
   HERO 
   ================================================================ */
function HeroSection() {
  return (
    <section className="hp-hero">
      <div className="hp-hero-bg-wrap">
        <img src={heroBg} alt="" className="hp-hero-bg-img" />
        <div className="hp-hero-overlay" />
      </div>

      <div className="hp-hero-container">
        <motion.div className="hp-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="hp-hero-logo-wrapper">
            <img src={schoolLogo} alt="School Logo" className="hp-hero-logo" />
          </div>
          <h1 className="hp-hero-title">Sri Sathya Sai<br />Anandam School</h1>
          <h2 className="hp-hero-subtitle">A Temple of Learning</h2>
          <div className="hp-hero-quote-box">
            <p>“The cultivation of human values alone is true education.”</p>
            <span className="hp-hero-author">Sri Sathya Sai Baba</span>
          </div>
        </motion.div>
      </div>

      <motion.div className="hp-hero-widgets" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
        <div className="glass-panel-dark hero-widget">
          <div className="widget-header">
            <Bell size={18} className="widget-icon" />
            <h3 className="widget-title">Notice Board</h3>
          </div>
          <ul className="notice-list">
            {NOTICE_BOARD.map((item, i) => (
              <li key={i} className="notice-item">
                <div className="notice-date">{item.date}</div>
                <Link to={item.path} className="notice-link-wrapper">
                  <span className={`notice-text ${item.isNew ? 'fw-bold' : ''}`}>
                    {item.text}
                  </span>
                  {item.isNew && <span className="notice-badge">NEW</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel-dark hero-widget">
          <div className="widget-header">
            <Calendar size={18} className="widget-icon" />
            <h3 className="widget-title">Quick Links</h3>
          </div>
          <ul className="qlink-list">
            {QUICK_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <li key={i} className="qlink-item">
                  <Link to={link.path}>
                    <Icon size={14} className="qlink-bullet" />
                    <span>{link.label}</span>
                    <ChevronRight size={14} className="qlink-arrow" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>

      <div className="hp-hero-wave">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="#E2E8F0" />
        </svg>
      </div>
    </section>
  );
}

/* ================================================================
   BIG QUOTE SECTION
   ================================================================ */
function BigQuoteSection() {
  return (
    <section className="hp-big-quote">
      <div className="hp-container">
        <motion.div className="big-quote-inner" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="big-quote-watermark" aria-hidden="true">
            <img
              src="/Outline - LOGO.png"
              alt="watermark"
              className="watermark-img"
            />
          </div>
          <p className="big-quote-text">
            “This Institution has not been established just to prepare you for earning degrees. The main purpose is to help you cultivate Self-knowledge and Self-confidence, so that each one of you can learn Self-sacrifice and earn Self-realisation.”
          </p>
          <p className="big-quote-author">- SRI SATHYA SAI -</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   FOUNDER'S MESSAGE SECTION (NEW)
   ================================================================ */
function FounderMessageSection() {
  return (
    <section className="hp-founder">
      <div className="hp-container hp-founder-inner">
        <motion.div 
          className="hp-founder-img-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="hp-founder-img-wrap">
            {/* Replace the src below with the actual portrait of Sri Sathya Sai Baba */}
            <img 
              src="/Images/Swami.jpg" 
              alt="Sri Sathya Sai Baba" 
              className="hp-founder-img" 
            />
          </div>
        </motion.div>

        <motion.div 
          className="hp-founder-txt"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hp-eyebrow">Message from the Divine Director</span>
          <h2 className="hp-section-title">Education is for Life,<br /><em>Not just for a Living</em></h2>
          <div className="hp-founder-content">
            <p className="founder-highlight">“The end of education is character. The end of knowledge is love.”</p>
            <p>At Sri Sathya Sai Anandam School, our foundation is built upon the timeless teachings of our Divine Director, Sri Sathya Sai Baba. He envisioned an educational system that harmonizes academic excellence with integral character building.</p>
            <p>We strive to cultivate environments where students do not merely acquire information, but undergo a transformation of the heart—emerging as confident, compassionate, and capable leaders ready to serve society.</p>
          </div>
          <div className="hp-founder-sign">
            <strong>Sri Sathya Sai Baba</strong>
            <span>Divine Director</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   IMAGE SEQUENCE ANIMATION
   ================================================================ */
function ImageSequenceAnimation() {
  const totalFrames = 28;
  const fps = 15;
  const [currentFrame, setCurrentFrame] = useState(1);
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, '0');
      img.src = `/FA/ezgif-frame-${num}.jpg`;
    }
  }, []);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev >= totalFrames) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [inView]);

  const paddedNumber = currentFrame.toString().padStart(3, '0');

  return (
    <div ref={ref} className="hp-about-frame">
      <img
        src={`/FA/ezgif-frame-${paddedNumber}.jpg`}
        alt="School Animation"
        className="hp-about-img"
      />
    </div>
  );
}

/* ================================================================
   ABOUT SECTION
   ================================================================ */
function AboutSection() {
  return (
    <section className="hp-about">
      <div className="hp-container hp-about-inner">
        <motion.div className="hp-about-img-col" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }}>
          <div className="hp-about-frame-wrapper">
            <ImageSequenceAnimation />
          </div>
        </motion.div>

        <motion.div className="hp-about-txt glass-panel" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }}>
          <span className="hp-eyebrow">About Us</span>
          <h2 className="hp-about-title">Building Character,<br /><em>Nurturing Excellence</em></h2>
          <p className="hp-about-desc">SSSAS has been a beacon of quality education. Our mission is to nurture every student's intellectual, emotional, and physical potential — preparing tomorrow's leaders with the values and skills to make a meaningful difference in the world.</p>
          <ul className="hp-about-list">
            {ABOUT_HIGHLIGHTS.map((h, i) => (
              <motion.li key={i} className="hp-about-li" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}>
                <CheckCircle size={16} color="#0B7B73" className="hp-about-icon" /><span>{h}</span>
              </motion.li>
            ))}
          </ul>
          <div className="hp-about-actions">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/academics" className="hp-btn-glass-primary">Learn More <ChevronRight size={17} /></Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   BEYOND ACADEMICS (New Glassmorphic Co-Curricular Section)
   ================================================================ */
function BeyondAcademicsSection() {
  return (
    <section className="hp-beyond">
      {/* Soft background glow effects */}
      <div className="beyond-glow glow-left" />
      <div className="beyond-glow glow-right" />

      <div className="hp-container relative z-10">
        <motion.div className="hp-section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="hp-eyebrow">Holistic Development</span>
          <h2 className="hp-section-title">Beyond the Classroom</h2>
          <p className="hp-section-sub">We believe true education extends beyond textbooks. Our diverse co-curricular programs ensure every child finds their passion.</p>
        </motion.div>

        <div className="beyond-grid">
          {BEYOND_ACADEMICS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i} 
                className="beyond-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03, 
                  rotateX: 6, 
                  rotateY: -6,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="beyond-icon-wrap" style={{ 
                  background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                  borderColor: `${item.color}40`,
                  boxShadow: `0 8px 24px ${item.color}20`
                }}>
                  <Icon size={32} color={item.color} strokeWidth={1.5} />
                </div>
                <h3 className="beyond-title">{item.title}</h3>
                <p className="beyond-desc">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   LEARNING @ 360 (Enhanced Glassmorphism)
   ================================================================ */
const TICK_INTERVAL = 60;
const TOTAL_TICKS = 83;

function Learning360Section() {
  const [tabIdx, setTabIdx] = useState(0);
  const [itemIdx, setItemIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imgKey, setImgKey] = useState(0);
  const timerRef = useRef(null);

  const tab = LEARNING_TABS[tabIdx];
  const item = tab.items[itemIdx];

  const advance = (nt, ni) => { setTabIdx(nt); setItemIdx(ni); setProgress(0); setImgKey(k => k + 1); };
  const goToTab = (ti) => { clearInterval(timerRef.current); advance(ti, 0); };
  const goToItem = (ii) => { clearInterval(timerRef.current); advance(tabIdx, ii); };

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setProgress(p => {
        if (p >= TOTAL_TICKS) {
          const ni = itemIdx + 1;
          if (ni < tab.items.length) advance(tabIdx, ni);
          else advance((tabIdx + 1) % LEARNING_TABS.length, 0);
          return 0;
        }
        return p + 1;
      });
    }, TICK_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [tabIdx, itemIdx]);

  const pct = Math.round((progress / TOTAL_TICKS) * 100);

  return (
    <section className="l360-section">
      {/* Ambient background blobs for advanced glass effect */}
      <div className="l360-blob l360-blob-1" />
      <div className="l360-blob l360-blob-2" />
      
      <div className="l360-inner">
        <div className="l360-header">
          <p className="hp-eyebrow">360° Learning Environment</p>
          <h2 className="hp-section-title">Campus & Facilities</h2>
          <p className="hp-section-sub" style={{ margin: '0', textAlign: 'left', maxWidth: '100%' }}>
            State-of-the-art infrastructure designed to inspire creativity and support interactive learning.
          </p>
        </div>

        <div className="l360-tabs" role="tablist">
          {LEARNING_TABS.map((t, ti) => (
            <button key={t.id} role="tab" aria-selected={tabIdx === ti}
              className={`glass-pill-tab ${tabIdx === ti ? 'glass-pill-tab--active' : ''}`}
              onClick={() => goToTab(ti)}>{t.label}</button>
          ))}
        </div>

        <div className="glass-card-premium l360-card">
          <div className="l360-left">
            <div className="l360-items">
              {tab.items.map((it, ii) => (
                <div key={ii} className={`l360-item ${itemIdx === ii ? 'l360-item--active' : ''}`} onClick={() => goToItem(ii)}>
                  <div className="l360-item-top">
                    <span className="l360-item-title">{it.title}</span>
                    <span className="l360-item-icon">{itemIdx === ii ? '−' : '+'}</span>
                  </div>
                  {itemIdx === ii && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }} className="l360-item-body">
                      <p className="l360-item-subtitle">{it.subtitle}</p>
                      <p className="l360-item-desc">{it.desc}</p>
                      <div className="l360-progress-track"><div className="l360-progress-bar" style={{ width: `${pct}%` }} /></div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <Link to={item.link} className="hp-btn-glass-secondary l360-cta">{item.cta} <span>↗</span></Link>
          </div>
          <div className="l360-right">
            <AnimatePresence mode="wait">
              <motion.div key={imgKey} className="l360-img-wrap"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                <img src={item.image} alt={item.title} className="l360-img" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PROGRAMS ACCORDION
   ================================================================ */
function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hp-progs">
      <div className="hp-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div className="hp-section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="hp-eyebrow">Academic Programs</span>
          <h2 className="hp-section-title">From Foundation to Excellence</h2>
          <p className="hp-section-sub">Comprehensive curriculum designed for every stage of a child's development</p>
        </motion.div>
        
        <div className="progs-accordion">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            const isActive = activeIndex === i;
            const numStr = `0${i + 1}`;

            return (
              <div
                key={i}
                className={`prog-panel ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <div
                  className="prog-bg"
                  style={{ backgroundImage: `url(${p.bgImg})` }}
                />
                <div className="prog-overlay" />

                <div className="prog-content-collapsed">
                  <div className="prog-collapsed-icon">
                    <Icon size={24} />
                  </div>
                  <div className="prog-vertical-title">
                    <span className="prog-v-text">{p.level}</span>
                    <span className="prog-v-num">{numStr}</span>
                  </div>
                </div>

                <div className="prog-content-expanded">
                  <div className="prog-exp-num">{numStr}</div>
                  <h3 className="prog-exp-title">{p.level}</h3>
                  <p className="prog-exp-desc">{p.desc}</p>
                  <Link to="/academics" className="prog-exp-btn">
                    Learn More <span>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   MAIN EXPORT
   ================================================================ */
export default function Home() {
  useEffect(() => {
    const el = document.createElement('style');
    el.id = 'home-page-styles';
    el.textContent = HOME_STYLES;
    document.head.appendChild(el);
    return () => document.getElementById('home-page-styles')?.remove();
  }, []);

  return (
    <main className="light-theme-main">
      <HeroSection />
      <BigQuoteSection />
      <FounderMessageSection />
      <AboutSection />
      <BeyondAcademicsSection />
      <Learning360Section />
      <ProgramsSection />
    </main>
  );
}

/* ================================================================
   CSS — STYLES & LAYOUT
   ================================================================ */
const HOME_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap');

  /* Global Reset specifically for component safety */
  .light-theme-main, .light-theme-main * {
    box-sizing: border-box;
  }

  .light-theme-main { 
    font-family: 'Inter', 'Helvetica Neue', sans-serif; 
    background-color: #E2E8F0; 
    color: #333;
    overflow-x: hidden;
    position: relative;
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 100%;
  }

  .relative { position: relative; }
  .z-10 { z-index: 10; }

  /* Glassmorphism Base Classes */
  .glass-card, .glass-panel {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border: 1px solid rgba(255, 255, 255, 1);
    box-shadow: 0 16px 50px rgba(15, 28, 63, 0.08);
  }
  
  .glass-panel-dark {
    background: rgba(15, 28, 63, 0.65);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.35);
    box-shadow: 0 35px 65px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  /* Premium Glass (for Learning 360) */
  .glass-card-premium {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 30px 60px rgba(15, 28, 63, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .hp-container { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
  @media (max-width: 640px) { .hp-container { padding: 0 18px; } }

  .hp-section-head { text-align: center; margin-bottom: 56px; }
  
  .hp-eyebrow {
    display: inline-block; margin-bottom: 12px;
    font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 800; 
    letter-spacing: 0.25em; text-transform: uppercase;
    background: linear-gradient(90deg, #0B7B73, #C8991F);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .hp-section-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2rem, 3.8vw, 3rem); font-weight: 700;
    color: #0F1C3F; line-height: 1.18; margin: 0 0 14px;
  }
  
  .hp-section-sub { font-size: 15px; color: #5A5870; max-width: 600px; margin: 0 auto; line-height: 1.72; }

  /* Shared Buttons */
  .hp-btn-glass-primary {
    display: inline-flex; align-items: center; gap: 9px; padding: 14px 32px;
    background: rgba(15, 28, 63, 0.05); backdrop-filter: blur(10px);
    border: 1px solid rgba(15, 28, 63, 0.15);
    color: #0F1C3F; font-family: 'Inter',sans-serif;
    font-weight: 700; font-size: 14.5px; border-radius: 12px; text-decoration: none;
    box-shadow: 0 4px 15px rgba(15,28,63,0.05); transition: all 0.3s ease;
  }
  .hp-btn-glass-primary:hover { 
    background: #0F1C3F; transform: translateY(-2px); 
    box-shadow: 0 10px 25px rgba(15,28,63,0.2); border-color: #0F1C3F; color: #FFF;
  }
  .hp-btn-glass-secondary {
    display: inline-flex; align-items: center; gap: 9px; padding: 14px 28px;
    background: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,1);
    color: #0F1C3F; font-family: 'Inter',sans-serif; font-weight: 600; font-size: 14.5px;
    border-radius: 12px; text-decoration: none; backdrop-filter: blur(12px); transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  }
  .hp-btn-glass-secondary:hover { background: #FFF; box-shadow: 0 8px 25px rgba(0,0,0,0.08); }

  /* ================================================================
     HERO SECTION 
     ================================================================ */
  .hp-hero { position: relative; min-height: 100vh; display: flex; align-items: flex-start; padding-top: 18vh; z-index: 10; }
  .hp-hero-bg-wrap { position: absolute; inset: 0; z-index: 0; }
  .hp-hero-bg-img  { width: 100%; height: 100%; object-fit: cover; }
  .hp-hero-overlay { position: absolute; inset: 0; background: linear-gradient(140deg, rgba(15,28,63,0.95) 0%, rgba(15,28,63,0.85) 45%, rgba(11,123,115,0.65) 100%); }
  .hp-hero-container { max-width: 1400px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; display: flex; flex-wrap: wrap; width: 100%; gap: 60px; }
  .hp-hero-content { flex: 0 1 540px; margin-right: auto; transform: translateY(-150px); }
  .hp-hero-logo { width: 220px; height: 220px; object-fit: contain; margin-bottom: 12px; margin-left: -10px; }
  .hp-hero-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(2.2rem, 3.5vw, 3.2rem); font-weight: 700; color: #FFFFFF; line-height: 1.15; margin-bottom: 8px; }
  .hp-hero-subtitle { font-family: 'Inter', sans-serif; font-size: clamp(1rem, 1.5vw, 1.25rem); font-weight: 400; color: rgba(255,255,255,0.7); margin-bottom: 32px; }
  .hp-hero-quote-box { border-left: 3px solid #C8991F; padding-left: 18px; }
  .hp-hero-quote-box p { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 1.4vw, 1.3rem); color: #E2E8F0; line-height: 1.4; margin: 0 0 10px; font-style: italic; }
  .hp-hero-author { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; color: #C8991F; text-transform: uppercase; letter-spacing: 0.05em; }
  .hp-hero-widgets { position: absolute; bottom: -170px; right: 40px; display: flex; gap: 24px; width: 100%; max-width: 680px; z-index: 20; }
  .hero-widget { flex: 1; padding: 28px 24px; border-radius: 20px; display: flex; flex-direction: column; }
  .widget-header { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.15); }
  .widget-icon { color: #C8991F; }
  .widget-title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: #FFFFFF; margin: 0; }
  .notice-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
  .notice-item { display: flex; flex-direction: column; gap: 4px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px;}
  .notice-item:last-child { border-bottom: none; padding-bottom: 0; }
  .notice-date { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; color: #C8991F; text-transform: uppercase; letter-spacing: 0.05em; transition: color 0.3s ease; }
  .notice-link-wrapper { text-decoration: none; display: flex; flex-wrap: wrap; align-items: center; gap: 6px; outline: none; }
  .notice-text { color: rgba(255,255,255,0.75); font-size: 13.5px; line-height: 1.5; transition: all 0.3s ease; display: block; flex: 1 1 auto; min-width: 0; }
  .notice-text.fw-bold { font-weight: 600; color: #FFFFFF; }
  .notice-badge { background: #E65100; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: 800; vertical-align: middle; letter-spacing: 0.05em; transition: transform 0.3s ease; flex-shrink: 0; }
  .notice-item:hover .notice-text { color: #FFFFFF; transform: translateX(6px); }
  .notice-item:hover .notice-date { color: #00F0FF; }
  .notice-item:hover .notice-badge { transform: translateX(6px) scale(1.05); background: #FF3D00; }
  .qlink-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
  .qlink-item a { display: flex; align-items: center; gap: 12px; text-decoration: none; color: #FFFFFF; font-size: 13.5px; font-weight: 500; transition: all 0.3s ease; padding: 8px 12px; border-radius: 8px; background: rgba(255,255,255,0.03); }
  .qlink-bullet { color: rgba(255,255,255,0.4); flex-shrink: 0; transition: color 0.3s; }
  .qlink-item a span { flex: 1; line-height: 1.4; transition: transform 0.3s ease; min-width: 0; }
  .qlink-arrow { opacity: 0; transform: translateX(-10px); color: #C8991F; transition: all 0.3s ease; flex-shrink: 0; }
  .qlink-item a:hover { background: rgba(255,255,255,0.1); transform: translateX(4px); }
  .qlink-item a:hover .qlink-bullet { color: #00F0FF; }
  .qlink-item a:hover span { transform: translateX(2px); }
  .qlink-item a:hover .qlink-arrow { opacity: 1; transform: translateX(0); }
  .hp-hero-wave { position: absolute; bottom: -1px; left: 0; right: 0; height: 70px; line-height: 0; z-index: 5; }
  .hp-hero-wave svg { width: 100%; height: 100%; display: block; }
  .hp-hero-wave svg path { fill: #74a7daff; }

  @media (max-width: 960px) {
    .hp-hero { flex-direction: column; padding-top: 120px; padding-bottom: 100px; min-height: auto; }
    .hp-hero-container { padding: 0 20px; gap: 30px; }
    .hp-hero-content { transform: none; flex: none; width: 100%; }
    .hp-hero-logo { width: 150px; height: 150px; }
    .hp-hero-widgets { position: relative; bottom: auto; right: auto; flex-direction: column; width: 100%; margin-top: 40px; padding: 0 20px; }
  }

  /* ================================================================
     BIG QUOTE SECTION 
     ================================================================ */
  .hp-big-quote { padding: 240px 0 90px; background: linear-gradient(180deg, #74a7daff 0%, #e8e0beff 100%); text-align: center; position: relative; z-index: 1; }
  .big-quote-inner { max-width: 900px; margin: 0 auto; position: relative; padding: 40px; }
  .big-quote-watermark { position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); z-index: 0; pointer-events: none; width: 500px; height: 500px; background-size: contain; background-repeat: no-repeat; background-position: center; opacity: 0.06; }
  .big-quote-watermark::after { content: ""; position: absolute; inset: 0; backdrop-filter: blur(1px); }
  .big-quote-text { font-family: 'Playfair Display', serif; font-size: clamp(1.4rem, 2.5vw, 1.8rem); color: #0F1C3F; line-height: 1.6; margin-bottom: 24px; position: relative; z-index: 1; }
  .big-quote-author { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #0F1C3F; letter-spacing: 0.1em; position: relative; z-index: 1; }
  @media (max-width: 768px) { .hp-big-quote { padding: 100px 0 60px; } .big-quote-inner { padding: 20px; } .big-quote-watermark { width: 300px; height: 300px; } }

  /* ================================================================
     FOUNDER'S MESSAGE (NEW)
     ================================================================ */
  .hp-founder { padding: 40px 0 100px; background: #e8e0beff; position: relative; z-index: 1; }
  .hp-founder-inner { display: grid; grid-template-columns: 4fr 5fr; gap: 80px; align-items: center; }
  
  .hp-founder-img-wrap { 
    position: relative; border-radius: 24px; padding: 16px; 
    background: #fff; box-shadow: 0 20px 50px rgba(15, 28, 63, 0.1); 
    transform: rotate(-3deg); transition: transform 0.5s ease; 
  }
  .hp-founder-img-wrap:hover { transform: rotate(0deg); }
  .hp-founder-img { width: 100%; height: auto; border-radius: 16px; object-fit: cover; aspect-ratio: 3/4; display: block; }
  
  .hp-founder-txt { display: flex; flex-direction: column; }
  .hp-founder-content p { font-size: 16px; color: #5A5870; line-height: 1.8; margin-bottom: 20px; }
  .founder-highlight { 
    font-family: 'Playfair Display', serif; font-size: 24px !important; 
    color: #0B7B73 !important; font-style: italic; font-weight: 600; 
    line-height: 1.5; margin-bottom: 24px !important; 
    border-left: 3px solid #C8991F; padding-left: 20px;
  }
  
  .hp-founder-sign { margin-top: 24px; display: flex; flex-direction: column; gap: 6px; }
  .hp-founder-sign strong { font-family: 'Playfair Display', serif; font-size: 22px; color: #0F1C3F; }
  .hp-founder-sign span { font-size: 13px; color: #C8991F; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  
  @media (max-width: 960px) { 
    .hp-founder-inner { grid-template-columns: 1fr; gap: 50px; text-align: center; } 
    .hp-founder-img-wrap { max-width: 400px; margin: 0 auto; transform: none; } 
    .founder-highlight { border-left: none; padding-left: 0; text-align: center; }
  }

  /* ================================================================
     ABOUT (Updated to White Background for Contrast)
     ================================================================ */
  .hp-about { padding: 80px 0 100px; background: #FFFFFF; position: relative; z-index: 1; }
  .hp-about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: stretch; position: relative; z-index: 1; }
  .hp-about-img-col { display: flex; flex-direction: column; height: 100%; }
  .hp-about-frame-wrapper { border-radius: 32px; position: relative; width: 100%; height: 100%; flex: 1; min-height: 450px; }
  .hp-about-frame { border-radius: 32px; overflow: hidden; position: absolute; inset: 0; background: #FFFFFF; box-shadow: 0 16px 50px rgba(15, 28, 63, 0.08); display: flex; align-items: center; justify-content: center; }
  .hp-about-img { width: 100%; height: 100%; object-fit: cover; border-radius: 32px; }
  .hp-about-txt { padding: 40px; border-radius: 32px; background: #F8FAFC; box-shadow: 0 16px 50px rgba(15, 28, 63, 0.05); display: flex; flex-direction: column; justify-content: center; width: 100%; height: 100%; border: 1px solid rgba(0,0,0,0.03); }
  .hp-about-title { font-size: clamp(2rem,3.2vw,2.8rem); font-weight: 700; color: #0F1C3F; line-height: 1.2; margin: 12px 0 20px; }
  .hp-about-title em { color: #0B7B73; font-style: italic; }
  .hp-about-desc { color: #5A5870; line-height: 1.8; font-size: 16px; margin-bottom: 32px; }
  .hp-about-list { list-style: none; padding: 0; margin: 0 0 40px; display: flex; flex-direction: column; gap: 16px; }
  .hp-about-li { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; font-weight: 600; color: #0F1C3F; }
  .hp-about-icon { flex-shrink: 0; margin-top: 2px; }
  @media (max-width: 880px) { .hp-about-inner { grid-template-columns: 1fr; gap: 48px; } .hp-about-frame-wrapper { min-height: 350px; } }

  /* ================================================================
     BEYOND ACADEMICS
     ================================================================ */
  .hp-beyond { padding: 100px 0; background: #e8e0beff; position: relative; z-index: 1; overflow: hidden; }
  
  .beyond-glow { position: absolute; width: 400px; height: 400px; background: rgba(255,255,255,0.6); border-radius: 50%; filter: blur(100px); z-index: 0; }
  .glow-left { top: -100px; left: -100px; }
  .glow-right { bottom: -100px; right: -100px; background: rgba(11, 123, 115, 0.15); }

  .beyond-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px; perspective: 1000px; }
  
  .beyond-card { 
    padding: 40px 24px; 
    border-radius: 24px; 
    text-align: center; 
    background: rgba(255, 255, 255, 0.65); 
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
  
  .beyond-icon-wrap { 
    width: 64px; height: 64px; 
    margin: 0 auto 24px; 
    border-radius: 18px; 
    display: flex; align-items: center; justify-content: center; 
    border: 1px solid transparent; 
  }
  
  .beyond-title { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: #0F1C3F; margin-bottom: 12px; }
  .beyond-desc { font-size: 14.5px; color: #5A5870; line-height: 1.6; margin: 0; }

  @media (max-width: 1024px) { .beyond-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; } }
  @media (max-width: 640px) { .beyond-grid { grid-template-columns: 1fr; } }

  /* ================================================================
     LEARNING 360 (Enhanced Glassmorphism)
     ================================================================ */
  .l360-section { padding: 100px 0 120px; background: #F1F5F9; position: relative; z-index: 1; overflow: hidden; }
  .l360-blob { position: absolute; border-radius: 50%; filter: blur(80px); z-index: 0; opacity: 0.4; }
  .l360-blob-1 { top: -10%; left: -5%; width: 500px; height: 500px; background: #0B7B73; }
  .l360-blob-2 { bottom: -10%; right: -5%; width: 600px; height: 600px; background: #C8991F; }
  .l360-inner { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 40px; }
  .l360-tabs { display: flex; gap: 16px; margin-bottom: 30px; }
  .glass-pill-tab { padding: 12px 30px; font-family: 'Inter',sans-serif; font-size: 15px; font-weight: 600; border-radius: 40px; cursor: pointer; transition: all 0.3s ease; white-space: nowrap; background: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.8); color: #5A5870; box-shadow: 0 4px 15px rgba(0,0,0,0.05); backdrop-filter: blur(10px); }
  .glass-pill-tab:hover { background: rgba(255,255,255,0.9); color: #0F1C3F; transform: translateY(-2px); }
  .glass-pill-tab--active { background: #0F1C3F; border-color: #0F1C3F; color: #FFF; box-shadow: 0 8px 25px rgba(15, 28, 63, 0.2); }
  .l360-card { display: grid; grid-template-columns: 1fr 1fr; overflow: hidden; border-radius: 32px; min-height: 520px; }
  .l360-left { padding: 56px; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,0.4); }
  .l360-item { border-top: 1px solid rgba(15,28,63,0.08); padding: 24px 0; cursor: pointer; transition: all 0.2s; }
  .l360-item:last-child { border-bottom: 1px solid rgba(15,28,63,0.08); }
  .l360-item-title { font-family: 'Playfair Display',serif; font-size: 22px; font-weight: 600; color: #5A5870; transition: color 0.3s; }
  .l360-item--active .l360-item-title { color: #0F1C3F; font-weight: 800; }
  .l360-item-icon { font-size: 24px; color: #9A98A8; transition: color 0.3s; float: right; }
  .l360-item--active .l360-item-icon { color: #0B7B73; }
  .l360-item-subtitle { font-family: 'Inter',sans-serif; font-size: 11px; font-weight: 800; color: #C8991F; letter-spacing: 0.1em; text-transform: uppercase; margin: 12px 0 8px; }
  .l360-item-desc { color: #5A5870; font-size: 15px; line-height: 1.7; margin: 0 0 24px; }
  .l360-progress-track { height: 4px; background: rgba(15,28,63,0.08); border-radius: 4px; overflow: hidden; margin-bottom: 10px; }
  .l360-progress-bar { height: 100%; background: linear-gradient(90deg, #0B7B73, #0F1C3F); transition: width 60ms linear; }
  .l360-right { position: relative; overflow: hidden; padding: 20px; }
  .l360-img-wrap { position: absolute; inset: 20px; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
  .l360-img { width: 100%; height: 100%; object-fit: cover; }
  @media (max-width: 860px) { .l360-inner { padding: 0 20px; } .l360-card { grid-template-columns: 1fr; } .l360-right { aspect-ratio: 16/9; padding: 0; } .l360-img-wrap { inset: 0; border-radius: 0; } .l360-left { padding: 30px 20px; border-right: none; } .l360-tabs { overflow-x: auto; padding-bottom: 10px; scrollbar-width: none; } .l360-tabs::-webkit-scrollbar { display: none; } }

  /* ================================================================
     PROGRAMS ACCORDION
     ================================================================ */
  .hp-progs { padding: 80px 0 120px; background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%); position: relative; z-index: 1; }
  .progs-accordion { display: flex; height: 560px; gap: 16px; margin-top: 56px; width: 100%; }
  .prog-panel { position: relative; flex: 1; border-radius: 32px; overflow: hidden; background: #0D121F; cursor: pointer; transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1); display: flex; align-items: center; justify-content: center; }
  .prog-panel.active { flex: 4; }
  .prog-bg { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity 0.6s ease; }
  .prog-panel.active .prog-bg { opacity: 0.5; }
  .prog-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(13,18,31,0.95) 0%, rgba(13,18,31,0.2) 100%); opacity: 0; transition: opacity 0.6s ease; }
  .prog-panel.active .prog-overlay { opacity: 1; }
  .prog-content-collapsed { display: flex; flex-direction: column; align-items: center; height: 100%; padding: 40px 0; justify-content: space-between; position: absolute; top: 0; bottom: 0; opacity: 1; transition: opacity 0.3s; }
  .prog-panel.active .prog-content-collapsed { opacity: 0; pointer-events: none; }
  .prog-collapsed-icon { color: #C8991F; }
  .prog-vertical-title { writing-mode: vertical-rl; transform: rotate(180deg); display: flex; align-items: center; gap: 8px; }
  .prog-v-text { font-family: 'Playfair Display', serif; font-size: 24px; color: #fff; letter-spacing: 1px; }
  .prog-v-num { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px; color: #fff; }
  .prog-content-expanded { position: absolute; left: 48px; bottom: 48px; right: 48px; opacity: 0; transform: translateY(20px); transition: all 0.5s ease; transition-delay: 0s; pointer-events: none; }
  .prog-panel.active .prog-content-expanded { opacity: 1; transform: translateY(0); transition-delay: 0.2s; pointer-events: auto; }
  .prog-exp-num { font-family: 'Inter', sans-serif; font-weight: 700; color: #fff; margin-bottom: 8px; font-size: 16px; }
  .prog-exp-title { font-family: 'Playfair Display', serif; font-size: 42px; color: #fff; margin: 0 0 16px; }
  .prog-exp-desc { font-family: 'Inter', sans-serif; color: #E2E8F0; font-size: 16px; max-width: 450px; margin-bottom: 28px; line-height: 1.6; }
  .prog-exp-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; border: 1px solid #C8991F; color: #C8991F; border-radius: 30px; text-decoration: none; font-size: 14px; font-family: 'Inter', sans-serif; font-weight: 600; transition: all 0.3s; background: transparent; }
  .prog-exp-btn:hover { background: #C8991F; color: #0F1C3F; }
  @media (max-width: 768px) { .progs-accordion { flex-direction: column; height: 600px; } .prog-panel { flex-direction: row; } .prog-content-collapsed { flex-direction: row; padding: 0 24px; width: 100%; } .prog-vertical-title { writing-mode: horizontal-tb; transform: none; flex-direction: row; } .prog-content-expanded { left: 24px; right: 24px; bottom: 24px; } .prog-exp-title { font-size: 32px; } }
`;