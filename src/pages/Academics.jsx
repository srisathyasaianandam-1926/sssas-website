/* ================================================================
   ACADEMICS PAGE
   ================================================================ */

import { motion } from 'framer-motion';
import { GraduationCap, Microscope, Globe, Calculator, BookOpen, Star } from 'lucide-react';

const PROGRAMS = [
  { icon: BookOpen, grade: 'Primary (I – V)', desc: 'Building strong fundamentals in all core subjects with emphasis on experiential learning', color: 'from-amber-400 to-orange-500' },
  { icon: Microscope, grade: 'Middle (VI – VIII)', desc: 'Developing critical thinking and analytical skills through hands-on activities', color: 'from-emerald-400 to-teal-500' },
  { icon: Calculator, grade: 'Secondary (IX – X)', desc: 'CBSE curriculum with comprehensive preparation for board examinations', color: 'from-blue-400 to-cyan-500' },
  ];

const SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'English', 'Hindi', 'Social Studies', 'Computer Science',
  'Physical Education', 'Fine Arts', 'Music', 'Sanskrit',
  'Economics', 'Accountancy', 'Business Studies', 'Psychology',
];

export default function Academics() {
  return (
    <>
      <style>{ACADEMICS_STYLES}</style>

      {/* ── Hero ── */}
      <section className="pg-hero">
        <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600" alt="Academics" className="pg-hero-bg" />
        <div className="pg-hero-overlay" />
        <div className="pg-hero-content">
          <motion.p className="pg-hero-eyebrow" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Learning & Curriculum
          </motion.p>
          <motion.h1 className="pg-hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }}>
            Academic Excellence
          </motion.h1>
          <div className="pg-hero-line" />
          <motion.p className="pg-hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Comprehensive curriculum designed for holistic development
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="ac-programs">
        <div className="ac-container">
          <motion.div className="ac-section-header"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="ac-section-title">Our Academic Programs</h2>
            <p className="ac-section-sub">Age-appropriate curriculum from Pre-Primary to Senior Secondary</p>
          </motion.div>
          <div className="ac-programs-grid">
            {PROGRAMS.map((p, i) => (
              <motion.div key={i} className="ac-prog-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                <div className={`ac-prog-icon bg-gradient-to-br ${p.color}`}><p.icon size={28} /></div>
                <h3 className="ac-prog-title">{p.grade}</h3>
                <p className="ac-prog-desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="ac-subjects">
        <div className="ac-container">
          <motion.div className="ac-section-header"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="ac-section-title">Subjects Offered</h2>
            <p className="ac-section-sub">A broad range of subjects to develop every talent and interest</p>
          </motion.div>
          <div className="ac-subjects-cloud">
            {SUBJECTS.map((s, i) => (
              <motion.span key={i} className="ac-subject-tag"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ================================================================
   CSS — ACADEMICS PAGE STYLES
   ================================================================ */
const ACADEMICS_STYLES = `
  .ac-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .ac-section-header { text-align: center; margin-bottom: 48px; }
  .ac-section-title {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 700; color: #1C0B10; margin-bottom: 10px;
  }
  .ac-section-sub { font-size: 15px; color: #5A3A42; }

  /* ── HERO ── */
  .pg-hero {
    position: relative; height: 68vh; min-height: 500px;
    display: flex; align-items: center; justify-content: center; overflow: hidden;
  }
  .pg-hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .pg-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(135deg, rgba(10,10,25,0.88) 0%, rgba(10,10,25,0.70) 55%, rgba(10,10,25,0.55) 100%);
  }
  .pg-hero-content { position: relative; z-index: 2; text-align: center; padding: 90px 24px 0; }
  .pg-hero-eyebrow {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
    color: #C9963A; margin: 0 0 14px;
  }
  .pg-hero-title {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 6vw, 4.8rem); font-weight: 700; color: #fff;
    line-height: 1.1; margin: 0 0 16px; letter-spacing: -0.01em;
  }
  .pg-hero-line { width: 60px; height: 3px; background: #C9963A; border-radius: 2px; margin: 0 auto 20px; }
  .pg-hero-sub {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 18px; color: rgba(255,255,255,0.72); line-height: 1.65; max-width: 560px; margin: 0 auto;
  }

  /* Programs */
  .ac-programs { background: #FDFAF5; padding: 88px 0; }
  .ac-programs-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
  @media (max-width: 860px) { .ac-programs-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 540px) { .ac-programs-grid { grid-template-columns: 1fr; } }
  .ac-prog-card {
    background: #fff; border-radius: 18px; padding: 32px 24px;
    border: 1.5px solid rgba(107,26,42,0.08); transition: all 0.3s; cursor: default;
  }
  .ac-prog-card:hover { border-color: rgba(201,150,58,0.5); box-shadow: 0 10px 32px rgba(107,26,42,0.1); }
  .ac-prog-icon {
    width: 60px; height: 60px; border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    color: #fff; margin-bottom: 18px;
  }
  .ac-prog-title {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: 22px; font-weight: 700; color: #1C0B10; margin-bottom: 10px;
  }
  .ac-prog-desc { font-size: 14px; color: #5A3A42; line-height: 1.7; }

  /* Subjects */
  .ac-subjects { background: #F0E8DA; padding: 80px 0; }
  .ac-subjects-cloud { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
  .ac-subject-tag {
    padding: 10px 22px; background: #fff; border-radius: 100px;
    border: 1.5px solid rgba(107,26,42,0.12); font-size: 14px; font-weight: 500; color: #1C0B10;
    cursor: default; transition: all 0.25s;
  }
  .ac-subject-tag:hover { background: #6B1A2A; color: #fff; border-color: #6B1A2A; }
`;