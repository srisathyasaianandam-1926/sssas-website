/* ================================================================
   CONTACT PAGE - Sri Sathya Sai Anandam School
   ================================================================ */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from 'lucide-react';

const CONTACT_INFO = [
  { icon: MapPin, title: 'Visit Us', lines: ['Darutheng, Khandagiri Chandaka Road', 'Bhubaneswar, Odisha — 751024'] },
  { icon: Phone, title: 'Call Us', lines: ['+91 94376 32059', '+91 82492 46881'] },
  { icon: Mail, title: 'Email Us', lines: ['srisathyasaianandam@gmail.com'] },
  { icon: Clock, title: 'Office Hours', lines: ['Mon – Sat: 9:00 AM – 5:00 PM', 'Sun: Closed'] },
];

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <style>{CONTACT_STYLES}</style>

      {/* ── Hero ── */}
      <section className="pg-hero">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600" alt="Contact Sri Sathya Sai Anandam School" className="pg-hero-bg" />
        <div className="pg-hero-overlay" />
        <div className="pg-hero-content">
          <motion.p className="pg-hero-eyebrow" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            Sri Sathya Sai Anandam School
          </motion.p>
          <motion.h1 className="pg-hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65 }}>
            Get In Touch
          </motion.h1>
          <div className="pg-hero-line" />
          <motion.p className="pg-hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Questions, admission enquiries, or just want to know more about our curriculum? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="ct-info-section">
        <div className="ct-container">
          <div className="ct-info-grid">
            {CONTACT_INFO.map((info, i) => (
              <motion.div key={i} className="ct-info-card"
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="ct-info-icon"><info.icon size={24} /></div>
                <h3 className="ct-info-title">{info.title}</h3>
                {info.lines.map((line, j) => <p key={j} className="ct-info-line">{line}</p>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="ct-main-section">
        <div className="ct-container ct-main-inner">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <h2 className="ct-sub-title">Send Us a Message</h2>
            {submitted ? (
              <div className="ct-success">
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out to Sri Sathya Sai Anandam School. We will get back to you soon.</p>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div className="ct-form-group">
                    <label className="ct-label">First Name *</label>
                    <input className="ct-input" type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
                  </div>
                  <div className="ct-form-group">
                    <label className="ct-label">Last Name *</label>
                    <input className="ct-input" type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
                  </div>
                </div>
                <div className="ct-form-group">
                  <label className="ct-label">Email Address *</label>
                  <input className="ct-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <div className="ct-form-group">
                  <label className="ct-label">Subject *</label>
                  <input className="ct-input" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Admission, General Enquiry, etc." required />
                </div>
                <div className="ct-form-group">
                  <label className="ct-label">Message *</label>
                  <textarea className="ct-input ct-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us more about your enquiry..." rows={6} required />
                </div>
                <motion.button type="submit" className="ct-submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Send size={16} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <h2 className="ct-sub-title">Find Us</h2>
            <div className="ct-map-wrap">
              <iframe
                src="https://maps.google.com/maps?q=Sri+Sathya+Sai+Anandam+School,+Daruthenga,+Bhubaneswar,+Odisha&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Location"
              />
            </div>
            <div className="ct-directions">
              <div className="ct-dir-item"><span className="ct-dir-icon">🚗</span><div><strong>By Road</strong><p>Located on Khandagiri Chandaka Road, Daruthenga. Easily accessible via Bhubaneswar city.</p></div></div>
              <div className="ct-dir-item"><span className="ct-dir-icon">🚆</span><div><strong>By Train</strong><p>Bhubaneswar Railway Station (BBS) — approx. 16 km from the campus.</p></div></div>
              <div className="ct-dir-item"><span className="ct-dir-icon">✈️</span><div><strong>By Air</strong><p>Biju Patnaik International Airport (BBI) — approx. 18 km from the school.</p></div></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ================================================================
   CSS — CONTACT PAGE STYLES
   ================================================================ */
const CONTACT_STYLES = `
  .ct-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

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
    font-size: 14px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
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

  /* Info Cards */
  .ct-info-section { background: #FDFAF5; padding: 0; }
  .ct-info-grid {
    display: grid; grid-template-columns: repeat(4,1fr);
    border-left: 1px solid rgba(107,26,42,0.07);
    border-top: 1px solid rgba(107,26,42,0.07);
  }
  @media (max-width: 860px) { .ct-info-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 480px) { .ct-info-grid { grid-template-columns: 1fr; } }
  .ct-info-card {
    padding: 36px 28px;
    border-right: 1px solid rgba(107,26,42,0.07);
    border-bottom: 1px solid rgba(107,26,42,0.07);
    text-align: center; background: #fff; transition: background 0.25s;
  }
  .ct-info-card:hover { background: #FDFAF5; }
  .ct-info-icon {
    width: 54px; height: 54px; border-radius: 14px;
    background: rgba(107,26,42,0.07);
    display: flex; align-items: center; justify-content: center;
    color: #6B1A2A; margin: 0 auto 14px;
  }
  .ct-info-title {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: 19px; font-weight: 700; color: #1C0B10; margin-bottom: 8px;
  }
  .ct-info-line { font-size: 13.5px; color: #5A3A42; line-height: 1.6; margin: 0; }

  /* Main */
  .ct-main-section { background: #F0E8DA; padding: 88px 0; }
  .ct-main-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
  @media (max-width: 860px) { .ct-main-inner { grid-template-columns: 1fr; gap: 48px; } }
  .ct-sub-title {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: 28px; font-weight: 700; color: #1C0B10;
    padding-bottom: 14px; border-bottom: 2.5px solid #6B1A2A; margin-bottom: 28px;
  }
  .ct-form {
    background: #fff; border-radius: 18px; padding: 36px 30px;
    border: 1.5px solid rgba(107,26,42,0.1);
    display: flex; flex-direction: column; gap: 18px;
  }
  .ct-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  @media (max-width: 480px) { .ct-form-row { grid-template-columns: 1fr; } }
  .ct-form-group { display: flex; flex-direction: column; gap: 6px; }
  .ct-label { font-size: 13px; font-weight: 600; color: #1C0B10; }
  .ct-input {
    padding: 11px 15px; background: #FDFAF5;
    border: 1.5px solid rgba(107,26,42,0.14); border-radius: 9px;
    font-size: 14px; color: #1C0B10; outline: none; transition: border-color 0.25s; width: 100%;
  }
  .ct-input:focus { border-color: #6B1A2A; }
  .ct-textarea { resize: vertical; min-height: 130px; }
  .ct-submit {
    padding: 13px 28px; background: #6B1A2A; color: #fff;
    font-weight: 700; font-size: 15px; border: none; border-radius: 9px; cursor: pointer;
    display: inline-flex; align-items: center; gap: 8px;
    box-shadow: 0 6px 22px rgba(107,26,42,0.28); transition: all 0.3s;
  }
  .ct-submit:hover { background: #4A0F1C; }
  .ct-success {
    background: #fff; border-radius: 18px; padding: 56px 32px;
    text-align: center; border: 1.5px solid rgba(107,26,42,0.1);
  }
  .ct-success svg { color: #6B1A2A; margin: 0 auto 20px; display: block; }
  .ct-success h3 {
    font-family: 'EB Garamond','Cormorant Garamond', serif;
    font-size: 28px; font-weight: 700; color: #1C0B10; margin-bottom: 12px;
  }
  .ct-success p { color: #5A3A42; line-height: 1.75; font-size: 15px; }
  .ct-map-wrap {
    height: 380px; border-radius: 16px; overflow: hidden;
    border: 2px solid rgba(107,26,42,0.12); margin-bottom: 20px;
  }
  .ct-directions { display: flex; flex-direction: column; gap: 12px; }
  .ct-dir-item {
    display: flex; align-items: flex-start; gap: 14px;
    background: #fff; border-radius: 12px; padding: 14px 18px;
    border: 1px solid rgba(107,26,42,0.08);
  }
  .ct-dir-icon { font-size: 22px; flex-shrink: 0; }
  .ct-dir-item strong { font-size: 14px; color: #1C0B10; display: block; margin-bottom: 3px; }
  .ct-dir-item p { font-size: 13px; color: #5A3A42; margin: 0; line-height: 1.5; }
`;