import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};
const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};
const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

// --- Glass Modal ---
const GlassModal = ({ isOpen, onClose, title, content }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-positioner">
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="modal-panel"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="modal-title">{title}</h2>
            <div className="modal-body">{content}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Read More Button ---
const ReadMoreButton = ({ onClick }) => (
  <button className="read-more-btn" onClick={onClick}>
    <div className="read-more-line"></div>
    <span className="read-more-label">Read More</span>
    <span className="read-more-arrow">→</span>
  </button>
);

// --- Hero ---
const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-bg-image"></div>
    <motion.div
      className="hero-content"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <h1 className="hero-heading">
        About the <span className="hero-heading-accent">School</span>
      </h1>
      <p className="hero-subtext">
        A legacy of holistic education, nurturing the mind, body, and spirit to shape the leaders of tomorrow.
      </p>
      <div className="hero-scroll-row">
        <div className="hero-scroll-divider"></div>
        <a href="#about" className="hero-scroll-link">Discover More</a>
      </div>
    </motion.div>
  </div>
);

// --- About ---
const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="content-section">
      <div className="two-col-grid">

        {/* Text — Left */}
        <motion.div
          className="text-block"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideFromLeft}
        >
          <div className="eyebrow-row">
            <div className="eyebrow-line eyebrow-line--amber"></div>
            <span className="eyebrow-label eyebrow-label--amber">Our Legacy</span>
          </div>
          <h2 className="section-heading">
            A Foundation of <br />
            <span className="section-heading-accent--amber">Excellence</span>
          </h2>
          <p className="body-text">
            Established with a profound vision, our institution offers a harmonious blend of modern academic rigor
            and ancient wisdom. We believe that true education transcends the boundaries of classrooms.
          </p>
          <p className="body-text">
            Affiliated with the CBSE, our curriculum is meticulously designed to foster holistic development.
            In our serene residential setting, students are immersed in an environment that naturally cultivates
            intellectual curiosity, physical vitality, and deep spiritual awareness.
          </p>
          <ReadMoreButton onClick={() => setIsModalOpen(true)} />
        </motion.div>

        {/* Image — Right */}
        <motion.div
          className="image-block"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideFromRight}
        >
          <div className="image-bg-tilt image-bg-tilt--amber"></div>
          <img
            src="/Images/Swami photos/s (1054).jpg"
            alt="Students collaborating"
            className="image-photo"
          />
        </motion.div>
      </div>

      <GlassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="A Foundation of Excellence"
        content={
          <>
            <p>Our school's legacy is built on decades of unwavering commitment to excellence in both academics and character development.</p>
            <p>The pedagogy is firmly rooted in the belief that every child is uniquely gifted. Through our meticulously structured CBSE curriculum, we ensure students are not only prepared for higher education but equipped with critical thinking skills, adaptability, and an enduring love for learning.</p>
            <p>Our residential facilities mirror the warmth of a home, overseen by dedicated mentors who guide the students round the clock. It is here that life-long friendships are forged, and the virtues of discipline, empathy, and collective harmony are instilled as second nature.</p>
          </>
        }
      />
    </section>
  );
};

// --- Mission & Vision ---
const MissionVisionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="content-section">
      <div className="two-col-grid">

        {/* Image — Left (reversed on mobile) */}
        <motion.div
          className="image-block image-block--order-2"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideFromLeft}
        >
          <div className="image-bg-tilt image-bg-tilt--sky image-bg-tilt--neg"></div>
          <img
            src="/Images/Swami photos/s (110).JPG"
            alt="Nature and growth"
            className="image-photo"
          />
        </motion.div>

        {/* Text — Right */}
        <motion.div
          className="text-block text-block--order-1 mv-text-block"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideFromRight}
        >
          {/* Mission */}
          <div className="mv-item">
            <div className="eyebrow-row eyebrow-row--line-right">
              <span className="eyebrow-label eyebrow-label--amber">Purpose</span>
              <div className="eyebrow-line eyebrow-line--flex eyebrow-line--amber-faint"></div>
            </div>
            <h3 className="mv-heading">Our Mission</h3>
            <p className="body-text body-text--bordered body-text--border-amber">
              To provide value-based education that seamlessly equips students with academic excellence,
              profound character, and an unwavering sense of selfless service to humanity.
            </p>
          </div>

          {/* Vision */}
          <div className="mv-item">
            <div className="eyebrow-row eyebrow-row--line-right">
              <span className="eyebrow-label eyebrow-label--amber">Future</span>
              <div className="eyebrow-line eyebrow-line--flex eyebrow-line--amber-faint"></div>
            </div>
            <h3 className="mv-heading">Our Vision</h3>
            <p className="body-text body-text--bordered body-text--border-sky">
              To be a global sanctuary of learning where education translates into lifelong transformation,
              continually fostering future leaders who are deeply rooted in righteousness and truth.
            </p>
          </div>

          <div className="mv-cta-row">
            <ReadMoreButton onClick={() => setIsModalOpen(true)} />
          </div>
        </motion.div>
      </div>

      <GlassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Mission & Vision in Action"
        content={
          <>
            <p>Our Mission and Vision are not mere statements; they are the living, breathing ethos of our campus. Every academic curriculum, sports event, and cultural program is meticulously filtered through these guiding principles.</p>
            <p>We envision our students stepping out into the world not just as successful professionals, but as compassionate human beings who act as catalysts for positive societal change. The "Head, Heart, and Hands" philosophy ensures that knowledge (Head) is guided by compassion (Heart) and translated into selfless action (Hands).</p>
            <p>Through community service initiatives, peer-mentoring, and a deeply integrated value education syllabus, we are actively nurturing the global citizens of tomorrow.</p>
          </>
        }
      />
    </section>
  );
};

// --- Educare ---
const EducareSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="content-section">
      <div className="two-col-grid">

        {/* Text — Left */}
        <motion.div
          className="text-block"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideFromLeft}
        >
          <div className="eyebrow-row">
            <div className="eyebrow-line eyebrow-line--sky"></div>
            <span className="eyebrow-label eyebrow-label--sky">Inner Awakening</span>
          </div>
          <h2 className="section-heading">
            The Philosophy of <br />
            <span className="section-heading-accent--sky">Educare</span>
          </h2>
          <p className="body-text body-text--italic body-text--large">
            "Educare is the drawing out of the latent divinity within."
          </p>
          <p className="body-text">
            True education is not merely the accumulation of worldly knowledge, but the blossoming of universal
            human values—Truth, Right Conduct, Peace, Love, and Non-Violence. Educare emphasizes that all wisdom
            and goodness are already present within the child; the role of the school is to provide the perfect
            environment for it to emerge.
          </p>
          <ReadMoreButton onClick={() => setIsModalOpen(true)} />
        </motion.div>

        {/* Image — Right */}
        <motion.div
          className="image-block"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideFromRight}
        >
          <div className="image-bg-tilt image-bg-tilt--sky-light"></div>
          <img
            src="/Images/Philosophy of Educare.jpg"
            alt="The light of knowledge"
            className="image-photo"
          />
        </motion.div>
      </div>

      <GlassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Understanding Educare"
        content={
          <>
            <p>The word 'Educare' originates from the Latin root which translates to 'to draw out' or 'to bring forth'. While worldly education focuses on absorbing information from the outside, Educare focuses on bringing out the inherent values and divine potential from within.</p>
            <p>In our institution, Educare is implemented through five foundational human values: Sathya (Truth), Dharma (Righteousness), Shanthi (Peace), Prema (Love), and Ahimsa (Non-violence). These are not taught as separate subjects, but woven seamlessly into the fabric of daily campus life.</p>
            <p>From the morning assemblies that foster inner peace, to classroom interactions that promote collaborative love, to the sports field where righteous conduct is paramount—Educare is the soul of our educational philosophy.</p>
          </>
        }
      />
    </section>
  );
};

// --- Sai Message ---
const SaiMessageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="quote-section">
      <motion.div
        className="quote-card"
        initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeUp}
      >
        <div className="quote-inner-grid">

          {/* Portrait */}
          <div className="quote-portrait-col">
            <div className="quote-portrait-ring">
              <img
                src="/Images/Swami photos/s (1030).jpg"
                alt="Spiritual guiding light"
                className="quote-portrait-img"
              />
            </div>
          </div>

          {/* Message */}
          <div className="quote-text-col">
            <h2 className="quote-title">The Guiding Light</h2>
            <div className="quote-body-wrap">
              <span className="quote-mark">"</span>
              <p className="quote-body">
                Education is for life, not just for a living. True education must foster character building
                and human values. The end of education is character.
              </p>
            </div>
            <p className="quote-attribution">— Message of Sri Sathya Sai Baba</p>
            <div className="quote-cta-row">
              <ReadMoreButton onClick={() => setIsModalOpen(true)} />
            </div>
          </div>
        </div>
      </motion.div>

      <GlassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="The Teachings of Bhagawan Sri Sathya Sai Baba"
        content={
          <>
            <p>The entire edifice of our institution is built upon the profound teachings and universal philosophy of Bhagawan Sri Sathya Sai Baba. His vision redefines the very purpose of education, shifting the focus from mere livelihood creation to life-enhancement and character building.</p>
            <p>"Politics without principles, education without character, science without humanity, and commerce without morality are not only useless, but also positively dangerous," Bhagawan declares. Through this lens, our school operates as an ashram of learning, where every child is seen as a divine spark.</p>
            <p>His message emphasizes that true education culminates in selfless love and service to society. This is the guiding light that illuminates every decision, curriculum choice, and interaction within our school.</p>
          </>
        }
      />
    </section>
  );
};

// --- App ---
export default function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
      html { scroll-behavior: smooth; }
      body { font-family: 'Inter', sans-serif; -ms-overflow-style: none; scrollbar-width: none; }
      body::-webkit-scrollbar { display: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="page-root">
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <EducareSection />
      <SaiMessageSection />

      <style>{`

        /* ─── Page Root ─── */
        .page-root {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #E0F2FE, #F8FAFC, #FEF3C7);
          color: #1f2937;
          -webkit-font-smoothing: antialiased;
        }
        .page-root ::selection { background: #fde68a; color: #78350f; }

        /* ─── Hero ─── */
        .hero-section {
          position: relative;
          height: 85vh;
          background: #000;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.3) 100%),
            url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          transform: scale(1.05);
          filter: blur(4px);
          z-index: 0;
        }
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 80rem;
          padding: 0 1.5rem;
          margin: 0 auto;
          text-align: left;
        }
        .hero-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1.1;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
        }
        .hero-heading-accent {
          background: linear-gradient(to right, #f3d568, #d4af37);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtext {
          font-size: 1.125rem;
          color: rgba(255,255,255,0.85);
          font-weight: 300;
          line-height: 1.625;
          max-width: 38rem;
        }
        .hero-scroll-row {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .hero-scroll-divider {
          height: 1px;
          width: 5rem;
          background: rgba(255,255,255,0.3);
        }
        .hero-scroll-link {
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .hero-scroll-link:hover { color: #fff; }

        /* ─── Shared Content Section ─── */
        .content-section {
          padding: 6rem 1.5rem;
          max-width: 80rem;
          margin: 0 auto;
          overflow: hidden;
        }
        @media (min-width: 768px)  { .content-section { padding: 6rem 3rem; } }
        @media (min-width: 1024px) { .content-section { padding: 6rem 6rem; } }

        /* ─── Two-Column Grid ─── */
        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px)  { .two-col-grid { grid-template-columns: repeat(2,1fr); gap: 3rem; } }
        @media (min-width: 1024px) { .two-col-grid { gap: 5rem; } }

        /* ─── Text Block ─── */
        .text-block {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .text-block--order-1 { order: 1; }
        @media (min-width: 768px) { .text-block--order-1 { order: 2; } }

        /* ─── Eyebrow Row ─── */
        .eyebrow-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .eyebrow-row--line-right { flex-direction: row; }

        .eyebrow-line {
          height: 1px;
          width: 3rem;
          flex-shrink: 0;
        }
        .eyebrow-line--flex        { flex: 1; }
        .eyebrow-line--amber       { background: #f59e0b; }
        .eyebrow-line--sky         { background: #0ea5e9; }
        .eyebrow-line--amber-faint { background: rgba(253,230,138,0.6); }

        .eyebrow-label {
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .eyebrow-label--amber { color: #d97706; }
        .eyebrow-label--sky   { color: #0369a1; }

        /* ─── Section Heading ─── */
        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #1f2937;
          line-height: 1.2;
        }
        .section-heading-accent--amber { color: #d97706; }
        .section-heading-accent--sky   { color: #0369a1; }

        /* ─── Body Text ─── */
        .body-text {
          color: #4b5563;
          line-height: 1.7;
          font-size: 1.125rem;
          font-weight: 300;
        }
        .body-text--bordered    { border-left: 2px solid; padding-left: 1rem; }
        .body-text--border-amber{ border-color: #fcd34d; }
        .body-text--border-sky  { border-color: #93c5fd; }
        .body-text--italic      { font-style: italic; }
        .body-text--large       { font-size: 1.5rem; color: #374151; }

        /* ─── Image Block ─── */
        .image-block { position: relative; }
        .image-block--order-2 { order: 2; }
        @media (min-width: 768px) { .image-block--order-2 { order: 1; } }

        .image-block:hover .image-bg-tilt--amber    { transform: rotate(6deg); }
        .image-block:hover .image-bg-tilt--sky      { transform: rotate(-6deg); }
        .image-block:hover .image-bg-tilt--sky-light{ transform: rotate(-3deg); }
        .image-block:hover .image-photo {
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
          transform: translateY(-0.5rem);
        }

        .image-bg-tilt {
          position: absolute;
          inset: -1rem;
          border-radius: 2rem;
          opacity: 0.5;
          transition: transform 0.5s ease;
        }
        .image-bg-tilt--amber     { background: #fef3c7; transform: rotate(3deg); }
        .image-bg-tilt--sky       { background: #bae6fd; transform: rotate(-3deg); }
        .image-bg-tilt--sky-light { background: #e0f2fe; transform: rotate(3deg); }
        .image-bg-tilt--neg       { transform: rotate(-3deg); }

        .image-photo {
          position: relative;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          width: 100%;
          height: 500px;
          object-fit: cover;
          transition: box-shadow 0.5s ease, transform 0.5s ease;
        }

        /* ─── Mission / Vision ─── */
        .mv-text-block { gap: 3rem; }
        .mv-item { display: flex; flex-direction: column; gap: 1rem; }
        .mv-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1.875rem;
          color: #1f2937;
        }
        .mv-cta-row { padding-top: 1rem; }

        /* ─── Read More Button ─── */
        .read-more-btn {
          margin-top: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #b45309;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 0.3s ease;
        }
        .read-more-btn:hover { color: #d97706; }
        .read-more-line {
          height: 1px;
          width: 2rem;
          background: #fbbf24;
          transition: width 0.3s ease;
        }
        .read-more-btn:hover .read-more-line { width: 3rem; }
        .read-more-label {
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.875rem;
        }
        .read-more-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .read-more-btn:hover .read-more-arrow { transform: translateX(0.5rem); }

        /* ─── Glass Modal ─── */
        .modal-positioner {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
        }
        @media (min-width: 640px) { .modal-positioner { padding: 0 1.5rem; } }

        .modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          cursor: pointer;
        }
        .modal-panel {
          position: relative;
          width: 100%;
          max-width: 48rem;
          max-height: 85vh;
          overflow-y: auto;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.5);
          padding: 2rem;
          border-radius: 1.5rem;
          box-shadow: 0 20px 60px -15px rgba(0,0,0,0.3);
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .modal-panel::-webkit-scrollbar { display: none; }
        @media (min-width: 768px) { .modal-panel { padding: 3rem; } }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          padding: 0.5rem;
          color: #6b7280;
          background: transparent;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .modal-close-btn:hover { color: #d97706; background: rgba(255,255,255,0.5); }

        .modal-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          color: #1f2937;
          margin-bottom: 1.5rem;
          padding-right: 2rem;
          line-height: 1.2;
        }
        .modal-body {
          color: #374151;
          line-height: 1.7;
          font-weight: 300;
          font-size: 1.125rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* ─── Quote Section ─── */
        .quote-section {
          padding: 8rem 1.5rem;
          max-width: 72rem;
          margin: 0 auto;
          overflow: hidden;
        }
          .quote-section {
    padding: 8rem 0;
    background-color: #d4d9eb;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}
        @media (min-width: 768px)  { .quote-section { padding: 8rem 3rem; } }
        @media (min-width: 1024px) { .quote-section { padding: 8rem 6rem; } }

        .quote-card {
          background: rgba(255,255,255,0.4);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          border: 1px solid rgba(255,255,255,0.6);
          position: relative;
        }
        @media (min-width: 768px) { .quote-card { padding: 4rem; } }

        .quote-inner-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px) { .quote-inner-grid { grid-template-columns: 2fr 3fr; } }

        .quote-portrait-col { display: flex; justify-content: center; }
        .quote-portrait-ring {
          width: 16rem;
          height: 16rem;
          border-radius: 50%;
          padding: 0.5rem;
          background: linear-gradient(to top right, #fde68a, #bae6fd);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          transition: transform 0.7s ease;
        }
        @media (min-width: 768px) { .quote-portrait-ring { width: 20rem; height: 20rem; } }
        .quote-portrait-ring:hover { transform: scale(1.05); }
        .quote-portrait-img {
          border-radius: 50%;
          object-fit: cover;
          width: 100%;
          height: 100%;
          border: 4px solid #fff;
        }

        .quote-text-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
        }
        @media (min-width: 768px) { .quote-text-col { text-align: left; } }

        .quote-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 1.875rem);
          color: #1f2937;
        }
        .quote-body-wrap { position: relative; }
        .quote-mark {
          position: absolute;
          top: -1.5rem;
          left: -1.5rem;
          font-family: 'Playfair Display', serif;
          font-size: 3.75rem;
          color: #fde68a;
          opacity: 0.5;
          line-height: 1;
        }
        @media (min-width: 768px) { .quote-mark { left: -2.5rem; } }
        .quote-body {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.125rem, 2.5vw, 1.875rem);
          color: #374151;
          line-height: 1.4;
          font-style: italic;
          position: relative;
          z-index: 10;
        }
        .quote-attribution {
          color: #b45309;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.875rem;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        .quote-cta-row { display: flex; justify-content: center; }
        @media (min-width: 768px) { .quote-cta-row { justify-content: flex-start; } }
      `}</style>
    </div>
  );
}
