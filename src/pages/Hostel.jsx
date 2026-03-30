/* ================================================================
   HOSTEL PAGE — Residential Facilities
   ================================================================ */

import { motion } from 'framer-motion';
import { Home, Utensils, Shield, Heart, Wifi, BookOpen, Shirt, Phone } from 'lucide-react';

const FEATURES = [
  { icon: Home, title: 'Comfortable Living', desc: 'Well-furnished rooms with modern amenities, ample storage, and 24/7 electricity and hot water.' },
  { icon: Utensils, title: 'Nutritious Meals', desc: 'Wholesome, balanced vegetarian meals prepared daily in hygienic conditions with care for dietary needs.' },
  { icon: Shield, title: 'Safe Environment', desc: 'Round-the-clock security, CCTV surveillance, biometric access, and trained in-house wardens.' },
  { icon: Heart, title: 'Caring Houseparents', desc: 'Dedicated houseparents and an on-campus nurse ensuring every student feels safe, supported, and at home.' },
  { icon: Wifi, title: 'Study & Connectivity', desc: 'Supervised study halls with high-speed internet access to support academic work in the evenings.' },
  { icon: Shirt, title: 'Laundry & Housekeeping', desc: 'Regular laundry services and professional housekeeping to maintain a clean, hygienic living environment.' },
];

const AMENITIES = [
  'Spacious rooms with attached bathrooms',
  'Regulated study hours with academic support',
  'Recreation rooms with indoor games & TV lounge',
  'Medical facility with qualified nurse on-campus',
  'Regular parent communication via portal & app',
  'Weekend activities, outings, and cultural events',
  'Separate boys and girls hostels with wardens',
  'Fire safety systems and emergency protocols',
];

export default function Hostel() {
  return (
    <>
      <style>{HOSTEL_STYLES}</style>

      {/* ── Hero ── */}
      <section className="pg-hero">
        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1600" alt="Hostel" className="pg-hero-bg" />
        <div className="pg-hero-overlay" />
        <div className="pg-hero-content">
          <motion.p className="pg-hero-eyebrow" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Residential Facilities
          </motion.p>
          <motion.h1 className="pg-hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }}>
            A Home Away<br /><em>From Home</em>
          </motion.h1>
          <div className="pg-hero-line" />
          <motion.p className="pg-hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Nurturing, safe, and comfortable residential facilities for our students
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="hs-features">
        <div className="hs-container">
          <motion.div className="hs-section-header"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="hs-pill">Hostel Life</span>
            <h2 className="hs-section-title">Why Choose Our Hostel</h2>
            <p className="hs-section-sub">Modern comforts combined with a structured, caring environment</p>
          </motion.div>
          <div className="hs-features-grid">
            {FEATURES.map((f, i) => (
              <motion.div key={i} className="hs-feat-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <div className="hs-feat-icon"><f.icon size={28} /></div>
                <h3 className="hs-feat-title">{f.title}</h3>
                <p className="hs-feat-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities + Image */}
      <section className="hs-amenities">
        <div className="hs-container hs-amen-inner">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="hs-pill">What's Included</span>
            <h2 className="hs-amen-title">Premium Amenities</h2>
            <ul className="hs-amen-list">
              {AMENITIES.map((item, i) => (
                <motion.li key={i} className="hs-amen-item"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <span className="hs-amen-dot" />{item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="hs-amen-img-col"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="hs-amen-img-wrap">
              <img src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=900" alt="Hostel room" className="hs-amen-img" />
            </div>
            <div className="hs-contact-card">
              <Phone size={20} className="hs-contact-icon" />
              <div>
                <div className="hs-contact-title">Hostel Enquiries</div>
                <div className="hs-contact-num">+91 98765 43210</div>
                <div className="hs-contact-email">hostel@academia.edu</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ================================================================
   CSS — HOSTEL PAGE STYLES
   ================================================================ */
const HOSTEL_STYLES = `
  .hs-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .hs-section-header { text-align: center; margin-bottom: 52px; }
  .hs-pill {
    display: inline-block; padding: 4px 16px;
    background: rgba(107,26,42,0.09); border: 1px solid rgba(107,26,42,0.18);
    color: #6B1A2A; font-size: 11px; font-weight: 700;
    letter-spacing: 0.09em; text-transform: uppercase;
    border-radius: 100px; margin-bottom: 14px;
  }
  .hs-section-title {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 700; color: #1C0B10; margin-bottom: 12px;
  }
  .hs-section-sub { font-size: 15px; color: #5A3A42; max-width: 500px; margin: 0 auto; }

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
  .pg-hero-title em { color: #C9963A; font-style: italic; }
  .pg-hero-line { width: 60px; height: 3px; background: #C9963A; border-radius: 2px; margin: 0 auto 20px; }
  .pg-hero-sub {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 18px; color: rgba(255,255,255,0.72); line-height: 1.65; max-width: 560px; margin: 0 auto;
  }

  /* Features */
  .hs-features { background: #FDFAF5; padding: 88px 0; }
  .hs-features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
  @media (max-width: 900px) { .hs-features-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 540px) { .hs-features-grid { grid-template-columns: 1fr; } }
  .hs-feat-card {
    background: #fff; border-radius: 18px; padding: 32px 24px;
    border: 1.5px solid rgba(107,26,42,0.08); transition: all 0.3s;
  }
  .hs-feat-card:hover { border-color: rgba(201,150,58,0.5); box-shadow: 0 10px 32px rgba(107,26,42,0.1); }
  .hs-feat-icon {
    width: 60px; height: 60px; border-radius: 16px;
    background: rgba(107,26,42,0.07);
    display: flex; align-items: center; justify-content: center;
    color: #6B1A2A; margin-bottom: 18px; transition: all 0.3s;
  }
  .hs-feat-card:hover .hs-feat-icon { background: rgba(201,150,58,0.12); color: #C9963A; }
  .hs-feat-title {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: 21px; font-weight: 700; color: #1C0B10; margin-bottom: 10px;
  }
  .hs-feat-desc { font-size: 14px; color: #5A3A42; line-height: 1.75; }

  /* Amenities */
  .hs-amenities { background: #F0E8DA; padding: 88px 0; }
  .hs-amen-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
  @media (max-width: 860px) { .hs-amen-inner { grid-template-columns: 1fr; gap: 48px; } }
  .hs-amen-title {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: clamp(2rem, 3.2vw, 2.6rem); font-weight: 700; color: #1C0B10; margin: 12px 0 28px;
  }
  .hs-amen-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 13px; }
  .hs-amen-item { display: flex; align-items: center; gap: 12px; font-size: 14.5px; color: #1C0B10; font-weight: 500; }
  .hs-amen-dot { width: 10px; height: 10px; border-radius: 50%; background: #6B1A2A; flex-shrink: 0; }
  .hs-amen-img-col { display: flex; flex-direction: column; gap: 20px; }
  .hs-amen-img-wrap { border-radius: 20px; overflow: hidden; }
  .hs-amen-img { width: 100%; object-fit: cover; display: block; border-radius: 20px; }
  .hs-contact-card {
    background: #6B1A2A; border-radius: 16px; padding: 20px 22px;
    display: flex; align-items: center; gap: 16px;
  }
  .hs-contact-icon { color: #C9963A; flex-shrink: 0; }
  .hs-contact-title { font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 4px; }
  .hs-contact-num { font-family: 'EB Garamond','Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: #fff; }
  .hs-contact-email { font-size: 12.5px; color: rgba(255,255,255,0.55); margin-top: 2px; }
`;