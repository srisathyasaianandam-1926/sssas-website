import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

/* ============================================================
   DATA - SRI SATHYA SAI ANANDAM
   ============================================================ */

const defaultCenterImage =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400";

// Updated to reflect the 5 Human Values (Educare)
const chartSegments = [
  { id: 'sathya', label: 'Sathya (Truth)', percent: 0.20, color: '#3B82F6', desc: 'Fostering intellectual integrity, honesty, and self-inquiry.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400' },
  { id: 'dharma', label: 'Dharma (Right Conduct)', percent: 0.20, color: '#f2a917', desc: 'Living life with morality, duty, and ethical responsibility.', image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=400' },
  { id: 'shanthi', label: 'Shanthi (Peace)', percent: 0.20, color: '#29e893', desc: 'Cultivating emotional balance and deep inner tranquility.', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=400' },
  { id: 'prema', label: 'Prema (Love)', percent: 0.20, color: '#eb2e6b', desc: 'The undercurrent of all values; pure and selfless love for all.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400' },
  { id: 'ahimsa', label: 'Ahimsa (Non-Violence)', percent: 0.20, color: '#9333ea', desc: 'Universal harmony and respect for all of creation.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400' },
];

const galleryImages = [
  "/Images/Ex-Curricular/G5.jpeg",
  "/Images/dance.JPG",
  "/Images/Ex-Curricular/S2.jpeg",
  "/Images/Ex-Curricular/J5.jpeg",  
];

/* ============================================================
   SVG HELPER FUNCTIONS
   ============================================================ */

const getArcPath = (cx, cy, radius, startPercent, endPercent) => {
  const startAngle = startPercent * 2 * Math.PI - Math.PI / 2;
  const endAngle = endPercent * 2 * Math.PI - Math.PI / 2;
  const x1 = cx + radius * Math.cos(startAngle);
  const y1 = cy + radius * Math.sin(startAngle);
  const x2 = cx + radius * Math.cos(endAngle);
  const y2 = cy + radius * Math.sin(endAngle);
  const largeArcFlag = endPercent - startPercent > 0.5 ? 1 : 0;
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
};

const getLabelPosition = (cx, cy, radius, startPercent, endPercent) => {
  const midAngle = (startPercent + (endPercent - startPercent) / 2) * 2 * Math.PI - Math.PI / 2;
  return {
    x: cx + radius * Math.cos(midAngle),
    y: cy + radius * Math.sin(midAngle),
  };
};

/* ============================================================
   INTEGRAL EDUCATION CIRCLE COMPONENT
   ============================================================ */

const IntegralEducationCircle = () => {
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const cx = 350, cy = 350, radius = 180, labelRadius = 280;

  let currentStart = 0;
  const segmentsWithAngles = chartSegments.map((seg) => {
    const start = currentStart;
    const end = currentStart + seg.percent;
    const path = getArcPath(cx, cy, radius, start, end - 0.008);
    const labelPos = getLabelPosition(cx, cy, labelRadius, start, end);
    currentStart = end;
    return { ...seg, path, start, end, labelPos };
  });

  const activeImage = hoveredSegment ? hoveredSegment.image : defaultCenterImage;
  const activeColor = hoveredSegment ? hoveredSegment.color : '#e2e8f0';

  return (
    <div className="circle-wrapper">
      <div
        className="circle-glow"
        style={{ backgroundColor: hoveredSegment ? `${hoveredSegment.color}40` : 'rgba(212,175,55,0.15)' }}
      />

      <svg viewBox="0 0 700 700" className="circle-svg">
        <circle cx={cx} cy={cy} r={labelRadius} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 8" opacity="0.5" />
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#f1f5f9" strokeWidth="48" />

        {segmentsWithAngles.map((seg, i) => {
          const isHovered = hoveredSegment?.id === seg.id;
          const isDimmed = hoveredSegment && !isHovered;

          return (
            <motion.g
              key={seg.id}
              onMouseEnter={() => setHoveredSegment(seg)}
              onMouseLeave={() => setHoveredSegment(null)}
              style={{ cursor: 'pointer', transformOrigin: `${cx}px ${cy}px` }}
              animate={{
                scale: isHovered ? 1.08 : 1,
                opacity: isDimmed ? 0.2 : 1,
                filter: isDimmed ? 'blur(8px)' : 'blur(0px)',
              }}
              transition={{ duration: 0.04, type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.path
                d={seg.path}
                fill="none"
                stroke={seg.color}
                strokeLinecap="butt"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, delay: i * 0.2, ease: 'easeInOut' }}
                animate={{ strokeWidth: isHovered ? 56 : 48 }}
              />
            </motion.g>
          );
        })}

        {segmentsWithAngles.map((seg) => {
          const isHovered = hoveredSegment?.id === seg.id;
          const isDimmed = hoveredSegment && !isHovered;
          const midAngle = (seg.start + (seg.end - seg.start) / 2) * 2 * Math.PI - Math.PI / 2;
          const lineStartX = cx + (radius + (isHovered ? 40 : 28)) * Math.cos(midAngle);
          const lineStartY = cy + (radius + (isHovered ? 40 : 28)) * Math.sin(midAngle);

          return (
            <motion.g
              key={`label-${seg.id}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 + chartSegments.indexOf(seg) * 0.1 }}
              style={{ transformOrigin: `${seg.labelPos.x}px ${seg.labelPos.y}px` }}
              animate={{
                opacity: isDimmed ? 0.2 : 1,
                scale: isHovered ? 1.15 : 1,
                filter: isDimmed ? 'blur(4px)' : 'blur(0px)',
              }}
            >
              <line
                x1={lineStartX} y1={lineStartY}
                x2={seg.labelPos.x} y2={seg.labelPos.y}
                stroke={isHovered ? seg.color : '#cbd5e1'}
                strokeWidth={isHovered ? '2' : '1'}
                strokeDasharray={isHovered ? 'none' : '2 4'}
                style={{ transition: 'all 0.3s' }}
              />
              <rect
                x={seg.labelPos.x - 40} y={seg.labelPos.y - 15}
                width="80" height="30" rx="15"
                fill="white"
                stroke={isHovered ? seg.color : '#f8fafc'}
                strokeWidth="2"
              />
              <text
                x={seg.labelPos.x} y={seg.labelPos.y + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight={isHovered ? 'bold' : '600'}
                fill={isHovered ? seg.color : '#64748b'}
                style={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                {/* Dynamically display the correct value name instead of hardcoded 'Educare' */}
                {seg.label.split(' ')[0]}
              </text>
            </motion.g>
          );
        })}
      </svg>

      <div className="circle-center-image-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredSegment ? hoveredSegment.id : 'default-image'}
            className="circle-center-image"
            style={{ borderColor: activeColor }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1, opacity: 1,
              boxShadow: hoveredSegment
                ? `0 0 60px ${hoveredSegment.color}60`
                : '0 0 40px rgba(212,175,55,0.2)',
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring' }}
          >
            <img src={activeImage} alt={hoveredSegment ? hoveredSegment.label : 'Holistic Education'} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="circle-info-card-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredSegment ? hoveredSegment.id : 'default-card'}
            className="circle-info-card"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {hoveredSegment ? (
              <>
                <h4 className="circle-info-title" style={{ color: hoveredSegment.color }}>
                  {hoveredSegment.label}
                </h4>
                <p className="circle-info-desc">{hoveredSegment.desc}</p>
              </>
            ) : (
              <>
                <h4 className="circle-info-title circle-info-title--default">The Five Human Values</h4>
                <p className="circle-info-desc">Hover over a segment to explore the pillars of Educare.</p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ============================================================
   MAIN APP COMPONENT
   ============================================================ */

export default function App() {
  return (
    <div className="app-root">

      {/* ── HERO SECTION ── */}
      <section className="hero-section">
        <motion.div
          className="hero-bg-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
        <div className="hero-overlay-dark" />
        <div className="hero-overlay-glow" />
        <div className="hero-overlay-fade" />

        <div className="hero-content-wrapper">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-heading">
              Welcome to <br />
              <span className="hero-heading-highlight">Sri Sathya Sai Anandam</span>
            </h1>
            <div className="hero-divider" />
            <p className="hero-subtext">
              An institution built on the divine principles of Educare, where character is the end of true education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="gold-bar" />
              <h2 className="section-heading">About Our Vidyalaya</h2>
              <p className="body-text">
                Sri Sathya Sai Anandam School is dedicated to providing completely free, integral education. Founded on the teachings of Bhagawan Sri Sathya Sai Baba, we believe in 'Educare'—the process of drawing out the latent divinity and human values already present within each child.
              </p>
              <p className="body-text">
                Through continuous loving guidance and a spiritually uplifting environment, we walk alongside each child. We support them at every step of their journey to become confident, compassionate, and responsible instruments of divine love in society.
              </p>
            </motion.div>

            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="about-image-bg-decoration" />
              <img
                src="/Images/Swami photos/s (1007).jpg"
                alt="Students learning in harmony"
                className="about-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION SECTION ── */}
      <section className="mv-section">
        <div className="container container--narrow">
          <div className="mv-grid">
            <motion.div
              className="mv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="mv-icon mv-icon--dark">
                <Target size={28} />
              </div>
              <h3 className="mv-card-title">Our Mission</h3>
              <p className="mv-card-text">
                To instill the five core human values—Truth, Right Conduct, Peace, Love, and Non-Violence—in the hearts of children, transforming them into self-reliant, compassionate citizens dedicated to selfless service.
              </p>
            </motion.div>

            <motion.div
              className="mv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="mv-icon mv-icon--gold">
                <Lightbulb size={28} />
              </div>
              <h3 className="mv-card-title">Our Vision</h3>
              <p className="mv-card-text">
                To be a beacon of Sai Education, where academic excellence is seamlessly harmonized with human excellence, manifesting the divine principle that "Education is for Life, not merely for a living."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTEGRAL EDUCATION CHART SECTION ── */}
      <section className="chart-section">
        <div className="container">
          <motion.div
            className="section-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">The Philosophy of Educare</h2>
            <p className="section-subtext">
              True education is the manifestation of the perfection already in man. 
              Interact with the chart below to explore the five human values that form the foundation of our curriculum.
            </p>
          </motion.div>
          <IntegralEducationCircle />
        </div>
      </section>

      {/* ── QUOTE / HIGHLIGHT SECTION ── */}
      <section className="quote-section">
        <div className="quote-bg-shape" />
        <div className="container container--narrow">
          <motion.div
            className="quote-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="quote-text">
              "The end of education is character. The end of knowledge is love."
            </h2>
            <div className="gold-bar gold-bar--centered" />
            <p className="quote-tagline">— Bhagawan Sri Sathya Sai Baba</p>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY SECTION ── */}
      <section className="gallery-section">
        <div className="container">
          <motion.div
            className="section-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">Divine Glimpses</h2>
            <p className="section-subtext">Moments of joy, learning, and devotion at our campus.</p>
          </motion.div>

          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img src={src} alt={`Campus life ${index + 1}`} className="gallery-img" />
                <div className="gallery-overlay" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION SECTION ── */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-heading">Be a Part of the Divine Mission</h2>
            <p className="cta-subtext">
              Discover how value-based education transforms hearts and shapes the leaders of tomorrow. 
              Connect with us to learn more about our completely free educational initiatives.
            </p>
            <button className="cta-button">Contact Us Today</button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

/* ====================================================================
   CUSTOM CSS — ALL STYLES LIVE HERE
   ==================================================================== */

const styles = `
:root {
  --color-cream:        #FDFCF8;
  --color-light-grey:   #F8F9FA;
  --color-dark:         #1a1c23;
  --color-slate-800:    #1e293b;
  --color-slate-600:    #475569;
  --color-slate-500:    #64748b;
  --color-gold:         #D4AF37;
  --color-gold-light:   #F3E5AB;
  --color-white:        #ffffff;

  --font-serif:    Georgia, 'Times New Roman', serif;
  --font-sans:     system-ui, sans-serif;

  --radius-sm:    0.75rem;
  --radius-md:    1rem;
  --radius-lg:    1.5rem;
  --radius-xl:    2rem;
  --radius-full:  9999px;

  --shadow-card:  0 8px 30px rgba(0, 0, 0, 0.04);
  --shadow-hover: 0 8px 30px rgba(212, 175, 55, 0.10);
  --shadow-float: 0 10px 50px rgba(0, 0, 0, 0.05);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

.container {
  width: 100%;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.container--narrow {
  max-width: 900px;
}

.gold-bar {
  width: 4rem;
  height: 4px;
  background-color: var(--color-gold);
  border-radius: var(--radius-full);
  margin-bottom: 1.5rem;
}

.gold-bar--centered {
  margin-left: auto;
  margin-right: auto;
}

.section-heading {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--color-slate-800);
  margin-bottom: 1rem;
}

.section-intro {
  text-align: center;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
}

.section-subtext {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-slate-500);
  line-height: 1.7;
}

.body-text {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  color: var(--color-slate-600);
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.app-root {
  font-family: var(--font-sans);
  color: var(--color-slate-800);
  background-color: var(--color-cream);
  overflow-x: hidden;
}

.app-root ::selection {
  background-color: var(--color-gold);
  color: var(--color-white);
}

.hero-section {
  position: relative;
  min-height: 75vh; /* Adjusted from 95vh */
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.hero-bg-image {
  position: absolute;
  inset: 0;
  background-image: url("https://images.unsplash.com/photo-1562774053-701939374585?w=1600");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(4px) brightness(0.75);
  z-index: -3;
}

.hero-overlay-dark {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 17, 21, 0.50);
  z-index: -2;
}

.hero-overlay-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%);
  z-index: -1;
}

.hero-overlay-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 16rem;
  background: linear-gradient(to top, var(--color-cream) 0%, rgba(253,252,248,0.4) 50%, transparent 100%);
  z-index: -1;
}

.hero-content-wrapper {
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem 0 5rem;
  position: relative;
  z-index: 10;
}

.hero-content {
  max-width: 60rem;
  text-align: left;
}

.hero-heading {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 6vw, 5rem); /* Scaled properly to match new height */
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: var(--color-white);
  margin-bottom: 1.5rem; /* Adjusted down slightly */
}

.hero-heading-highlight {
  background: linear-gradient(90deg, var(--color-gold) 0%, var(--color-gold-light) 50%, var(--color-gold) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.hero-divider {
  width: 6rem;
  height: 1px;
  background-color: rgba(212, 175, 55, 0.4);
  margin-bottom: 2rem;
}

.hero-subtext {
  font-family: var(--font-sans);
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  color: #e2e8f0;
  font-style: italic;
  font-weight: 300;
  line-height: 1.7;
  max-width: 40rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.about-section {
  padding: 8rem 0;
  background-color: var(--color-cream);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image-wrapper {
  position: relative;
}

.about-image-bg-decoration {
  position: absolute;
  inset: 0;
  margin-left: -1rem;
  margin-top: -1rem;
  background-color: #F0F4F8;
  border-radius: var(--radius-lg);
  z-index: 0;
}

.about-image {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}


.about-badge-number {
  font-family: var(--font-serif);
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.about-badge-label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-slate-600);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.mv-section {
  padding: 6rem 0;
  background-color: var(--color-light-grey);
}

.mv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.mv-card {
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(20px);
  padding: 2.5rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-white);
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.mv-card:hover {
  box-shadow: var(--shadow-hover);
}

.mv-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.mv-card:hover .mv-icon {
  transform: scale(1.1);
}

.mv-icon--dark {
  background-color: #f8fafc;
  color: var(--color-slate-800);
}

.mv-card:hover .mv-icon--dark {
  background-color: var(--color-dark);
  color: var(--color-gold);
}

.mv-icon--gold {
  background-color: #FDF8E8;
  color: var(--color-gold);
}

.mv-card:hover .mv-icon--gold {
  background-color: var(--color-gold);
  color: var(--color-white);
}

.mv-card-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-slate-800);
  margin-bottom: 1rem;
}

.mv-card-text {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-slate-600);
  line-height: 1.75;
}

.chart-section {
  padding: 6rem 0;
  background-color: var(--color-cream);
  overflow: hidden;
}

.circle-wrapper {
  position: relative;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.circle-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  filter: blur(100px);
  transform: scale(0.75);
  transition: background-color 0.5s ease;
  pointer-events: none;
}

.circle-svg {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));
  overflow: visible;
  position: relative;
  z-index: 10;
}

.circle-center-image-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 20;
}

.circle-center-image {
  width: 12rem;
  height: 12rem;
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 4px solid;
  background-color: var(--color-white);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: border-color 0.3s ease;
}

.circle-center-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.circle-info-card-wrapper {
  width: 100%;
  padding: 0 1rem;
  margin-top: -4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 30;
  min-height: 6rem;
}

.circle-info-card {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(16px);
  border: 1px solid #f1f5f9;
  box-shadow: 0 25px 50px rgba(148,163,184,0.15);
  border-radius: var(--radius-lg);
  padding: 1rem 2rem;
  text-align: center;
  max-width: 28rem;
  width: 100%;
}

.circle-info-title {
  font-family: var(--font-sans);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.circle-info-title--default {
  color: var(--color-slate-800);
}

.circle-info-desc {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--color-slate-600);
  line-height: 1.6;
}

.quote-section {
  padding: 8rem 0;
  background-color: var(--color-dark);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.quote-bg-shape {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background: linear-gradient(
    to bottom right,
    transparent 0%,
    transparent 50%,
    var(--color-gold) 50%,
    var(--color-gold) 100%
  );
  clip-path: polygon(0 100%, 20% 0, 100% 100%);
  pointer-events: none;
}

.quote-content {
  text-align: center;
  position: relative;
  z-index: 10;
}

.quote-text {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-style: italic;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: var(--color-white);
}

.quote-tagline {
  font-family: var(--font-sans);
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 300;
  color: var(--color-gold-light);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.gallery-section {
  padding: 6rem 0;
  background-color: var(--color-light-grey);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.gallery-item {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background-color: #cbd5e1;
  cursor: pointer;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26,28,35,0.6) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.cta-section {
  padding: 6rem 0;
  background-color: var(--color-white);
  text-align: center;
}

.cta-card {
  max-width: 48rem;
  margin: 0 auto;
  padding: 3rem;
  background-color: var(--color-cream);
  border-radius: var(--radius-xl);
  border: 1px solid #f1f5f9;
  box-shadow: var(--shadow-float);
}

.cta-heading {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-slate-800);
  margin-bottom: 1.25rem;
}

.cta-subtext {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  color: var(--color-slate-500);
  line-height: 1.7;
  max-width: 36rem;
  margin: 0 auto 2.5rem;
}

.cta-button {
  display: inline-block;
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 1rem 2.5rem;
  border-radius: var(--radius-full);
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  background-color: var(--color-gold);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
}

@media (max-width: 768px) {
  .hero-content-wrapper {
    padding-left: 1.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-floating-badge {
    bottom: -1rem;
    left: -0.5rem;
  }

  .mv-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .circle-center-image {
    width: 8rem;
    height: 8rem;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    padding: 2rem 1.25rem;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}