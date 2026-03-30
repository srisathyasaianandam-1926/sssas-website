/* ================================================================
   ABOUT PAGE
   ================================================================ */

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';

const VALUES = [
  { icon: Target, title: 'Our Mission', desc: 'To provide quality education that empowers students to become responsible global citizens and lifelong learners.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be a leading educational institution recognised for excellence, innovation, and holistic student development.' },
  { icon: Award, title: 'Our Values', desc: 'Integrity, excellence, respect, responsibility, and compassion guide everything we do at Academia.' },
  { icon: Users, title: 'Our Community', desc: 'A diverse and inclusive environment where every student, teacher, and parent feels valued, heard, and inspired.' },
];

const MILESTONES = [
  { year: '1950', event: 'School founded with 50 students and a vision to transform education' },
  { year: '1975', event: 'Introduced CBSE curriculum and expanded academic offerings' },
  { year: '1990', event: 'Expanded to Senior Secondary level, adding Science & Commerce streams' },
  { year: '2005', event: 'Inaugurated state-of-the-art science laboratories and computer centre' },
  { year: '2015', event: 'Achieved 100% board exam results for the first time — a tradition since' },
  { year: '2023', event: 'Celebrating 75 years of excellence with 3,500+ students enrolled' },
];

export default function About() {
  return (
    <>
      <style>{ABOUT_STYLES}</style>

      {/* ── Hero — starts at top, navbar floats transparently over it ── */}
      <section className="pg-hero">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600" alt="About" className="pg-hero-bg" />
        <div className="pg-hero-overlay" />
        <div className="pg-hero-content">
          <motion.p className="pg-hero-eyebrow" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            About Us
          </motion.p>
          <motion.h1 className="pg-hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }}>
            About Academia
          </motion.h1>
          <div className="pg-hero-line" />
          <motion.p className="pg-hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            75 years of nurturing minds and shaping futures
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="ab-values">
        <div className="pg-container">
          <div className="ab-values-grid">
            {VALUES.map((v, i) => (
              <motion.div key={i} className="ab-value-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <v.icon size={44} className="ab-value-icon" />
                <h3 className="ab-value-title">{v.title}</h3>
                <p className="ab-value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="ab-timeline-section">
        <div className="pg-container">
          <motion.div className="pg-section-header"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="pg-section-title">Our Journey</h2>
            <p className="pg-section-sub">Key milestones across 75 years of excellence</p>
          </motion.div>
          <div className="ab-timeline">
            {MILESTONES.map((m, i) => (
              <motion.div key={i} className="ab-milestone"
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="ab-milestone-year">{m.year}</div>
                <div className="ab-milestone-dot" />
                <div className="ab-milestone-text">{m.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

/* ================================================================
   CSS — ABOUT PAGE STYLES
   ================================================================ */
const ABOUT_STYLES = `

  /* ── SHARED ── */
  .pg-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .pg-section-header { text-align: center; margin-bottom: 48px; }
  .pg-section-title {
    font-family: 'EB Garamond', 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 700; color: #1C0B10; margin-bottom: 10px;
  }
  .pg-section-sub { font-size: 15px; color: #5A3A42; }

  /* ── HERO ── */
  .pg-hero {
    position: relative;
    height: 68vh; min-height: 500px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .pg-hero-bg {
    position: absolute; inset: 0;
    width: 100%; height: 100%; object-fit: cover; object-position: center;
  }
  .pg-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(
      135deg,
      rgba(10, 10, 25, 0.88) 0%,
      rgba(10, 10, 25, 0.70) 55%,
      rgba(10, 10, 25, 0.55) 100%
    );
  }
  .pg-hero-content {
    position: relative; z-index: 2;
    text-align: center; padding: 90px 24px 0;
  }
  .pg-hero-eyebrow {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 12px; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #C9963A; margin: 0 0 14px;
  }
  .pg-hero-title {
    font-family: 'EB Garamond', 'Cormorant Garamond', serif;
    font-size: clamp(2.8rem, 6vw, 4.8rem);
    font-weight: 700; color: #fff;
    line-height: 1.1; margin: 0 0 16px;
    letter-spacing: -0.01em;
  }
  .pg-hero-line {
    width: 60px; height: 3px; background: #C9963A;
    border-radius: 2px; margin: 0 auto 20px;
  }
  .pg-hero-sub {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 18px; color: rgba(255,255,255,0.72);
    line-height: 1.65; max-width: 560px; margin: 0 auto;
  }

  /* ── VALUES ── */
  .ab-values { background: #FDFAF5; padding: 88px 0; }
  .ab-values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  @media (max-width: 640px) { .ab-values-grid { grid-template-columns: 1fr; } }
  .ab-value-card {
    background: #fff; border-radius: 16px; padding: 36px 28px;
    border: 1.5px solid rgba(107,26,42,0.08);
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .ab-value-card:hover { border-color: rgba(201,150,58,0.5); box-shadow: 0 8px 28px rgba(107,26,42,0.1); }
  .ab-value-icon { color: #6B1A2A; margin-bottom: 16px; }
  .ab-value-title {
    font-family: 'EB Garamond', 'Cormorant Garamond', serif;
    font-size: 22px; font-weight: 700; color: #1C0B10; margin-bottom: 10px;
  }
  .ab-value-desc { color: #5A3A42; line-height: 1.75; font-size: 14.5px; }

  /* ── TIMELINE ── */
  .ab-timeline-section { background: #F0E8DA; padding: 88px 0; }
  .ab-timeline { display: flex; flex-direction: column; gap: 20px; }
  .ab-milestone { display: flex; align-items: center; gap: 20px; }
  .ab-milestone-year {
    font-family: 'EB Garamond', 'Cormorant Garamond', serif;
    font-size: 22px; font-weight: 700; color: #6B1A2A;
    min-width: 72px; text-align: right;
  }
  .ab-milestone-dot {
    width: 14px; height: 14px; border-radius: 50%;
    background: #6B1A2A; flex-shrink: 0; border: 3px solid #C9963A;
  }
  .ab-milestone-text {
    background: #fff; border-radius: 12px; padding: 16px 22px;
    font-size: 14.5px; color: #1C0B10; flex: 1;
    border-left: 3px solid #C9963A;
    box-shadow: 0 2px 10px rgba(107,26,42,0.06);
  }
`;