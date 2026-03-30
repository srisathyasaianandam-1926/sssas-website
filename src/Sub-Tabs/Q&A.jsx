import React, { useState, useEffect } from 'react';
import { ChevronDown, Send, CheckCircle2 } from 'lucide-react';

// --- Data ---
const faqs = [
  { q: "What medical facilities are available?",        a: "An on-campus infirmary with nurses and doctors is standard, along with tie-ups with nearby hospitals." },
  { q: "How can I communicate with my child?",          a: "Policies differ; some allow phone calls during specific hours, while others have set days for phone or video calls." },
  { q: "Can I visit my child?",                         a: "Schools have scheduled Parents' Weekends or open visiting hours, usually once a month." },
  { q: "What are the travel arrangements for vacations?",a: "Schools often facilitate supervised travel to airports or stations during holidays." },
  { q: "What is the minimum age for admission?",        a: "Generally, residential schools accept students from age 6 or 7 onwards, often starting from Grade 4 or 5." },
  { q: "What facilities are provided on campus?",       a: "Schools provide hostels, dining halls, sports infrastructure, libraries, and activity spaces for holistic development." }
];

// --- Hero ---
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-bg-image"></div>
      <div className="hero-warmth-overlay"></div>
      <div className="hero-side-gradient"></div>
      <div className="hero-bottom-gradient"></div>

      <div className="hero-content animate-fade-up">
        <h1 className="hero-heading">
          <span className="hero-heading-white">FAQ's &</span>
          <span className="hero-heading-gold">Queries</span>
        </h1>
        <p className="hero-subtext">
          Welcome to our Help Center. Find quick answers, browse topics, or contact our support team directly.
          Whether it's about food quality, technical issues, or account settings, we're here to guide you.
        </p>
        <div className="hero-cta-line">
          <div className="hero-cta-divider"></div>
          <span className="hero-cta-label">Discover Activities</span>
        </div>
      </div>
    </div>
  );
}

// --- FAQ ---
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-header animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-heading-bar"></div>
      </div>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="animate-fall-down faq-item-wrapper"
            style={{ animationDelay: `${0.3 + i * 0.12}s` }}
          >
            <div
              className={`faq-card ${openIndex === i ? 'faq-card--open' : ''}`}
              onClick={() => toggle(i)}
            >
              {/* Question row */}
              <div className="faq-question-row">
                <h3 className={`faq-question-text ${openIndex === i ? 'faq-question-text--open' : ''}`}>
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`faq-chevron ${openIndex === i ? 'faq-chevron--open' : ''}`}
                />
              </div>

              {/* Answer panel */}
              <div className={`faq-answer-panel ${openIndex === i ? 'faq-answer-panel--open' : 'faq-answer-panel--closed'}`}>
                <div className="faq-answer-body">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Query Form ---
function QueryFormSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = "Name is required";
    if (!formData.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Please enter a valid email address";
    if (!formData.phone.trim())   e.phone   = "Phone number is required";
    else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone))       e.phone = "Please enter a valid phone number";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(errs);
    }
  };

  return (
    <section className="form-section animate-fade-up" style={{ animationDelay: '1.2s' }}>
      <div className="form-card">

        <div className="form-header">
          <h2 className="form-heading">Still have questions?</h2>
          <p className="form-subtext">Send us a message and we'll get back to you shortly.</p>
        </div>

        {isSubmitted ? (
          <div className="form-success animate-fade-up">
            <div className="form-success-icon-wrap">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="form-success-title">Query Submitted!</h3>
            <p className="form-success-desc">Thank you for reaching out. Our reception desk will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-body">

            {/* Name + Phone row */}
            <div className="form-row-2col">
              <div className="form-field">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                />
                {errors.name && <p className="form-error-msg">{errors.name}</p>}
              </div>

              <div className="form-field">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                />
                {errors.phone && <p className="form-error-msg">{errors.phone}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="form-field">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`form-input ${errors.email ? 'form-input--error' : ''}`}
              />
              {errors.email && <p className="form-error-msg">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="form-field">
              <label className="form-label">Your Query</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you today?"
                rows={4}
                className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
              />
              {errors.message && <p className="form-error-msg">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button type="submit" className="form-submit-btn">
              <span>Submit Query</span>
              <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// --- App ---
export default function App() {
  return (
    <div className="page-root">
      <HeroSection />
      <main className="page-main">
        <FAQSection />
        <QueryFormSection />
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');

        /* ─── Page Root ─── */
        .page-root {
          min-height: 100vh;
          background: linear-gradient(to bottom, #e0f2fe, #eff6ff, #fdfaf0);
          font-family: 'Inter', sans-serif;
          color: #1f2937;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .page-root::-webkit-scrollbar { display: none; }

        .page-main {
          max-width: 56rem;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        /* ─── Hero ─── */
        .hero-section {
          position: relative;
          height: 85vh;
          width: 100%;
          background: #080b11;
          overflow: hidden;
        }
        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center 30%;
          filter: blur(8px);
          transform: scale(1.1);
          opacity: 0.5;
          mix-blend-mode: luminosity;
        }
        .hero-warmth-overlay {
          position: absolute;
          inset: 0;
          background: rgba(120,53,15,0.2);
          mix-blend-mode: overlay;
        }
        .hero-side-gradient {
          position: absolute;
          inset: 0;
          width: 100%;
          background: linear-gradient(to right, rgba(8,11,17,0.95), rgba(8,11,17,0.7), transparent);
        }
        @media (min-width: 768px) { .hero-side-gradient { width: 75%; } }
        .hero-bottom-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 10rem;
          background: linear-gradient(to top, #080b11, rgba(8,11,17,0.7), transparent);
          backdrop-filter: blur(6px);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 2rem;
          max-width: 56rem;
        }
        @media (min-width: 768px) { .hero-content { padding: 0 4rem; } }
        @media (min-width: 1024px) { .hero-content { padding: 0 8rem; } }

        .hero-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        .hero-heading-white {
          display: block;
          color: #fff;
        }
        .hero-heading-gold {
          display: block;
          color: #d4af37;
        }
        .hero-subtext {
          font-size: clamp(0.8rem, 1.5vw, 0.9375rem);
          font-weight: 300;
          color: #d1d5db;
          letter-spacing: 0.02em;
          max-width: 36rem;
          line-height: 1.7;
          margin-bottom: 3rem;
        }
        .hero-cta-line {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .hero-cta-divider {
          width: 3rem;
          height: 1px;
          background: #6b7280;
        }
        @media (min-width: 768px) { .hero-cta-divider { width: 4rem; } }
        .hero-cta-label {
          font-size: 0.625rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          color: #9ca3af;
        }
        @media (min-width: 768px) { .hero-cta-label { font-size: 0.75rem; } }

        /* ─── FAQ ─── */
        .faq-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .faq-heading {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.75rem;
        }
        .faq-heading-bar {
          height: 4px;
          width: 5rem;
          background: #d4af37;
          border-radius: 9999px;
          margin: 0 auto;
        }
        .faq-list {
          width: 100%;
          max-width: 48rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item-wrapper { width: 100%; }

        /* ─── FAQ Card ─── */
        .faq-card {
          background: #fff;
          border-radius: 0.75rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          border: 1px solid #f1f5f9;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .faq-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }
        .faq-card--open {
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          border-color: rgba(212,175,55,0.3);
          outline: 1px solid rgba(212,175,55,0.3);
        }

        .faq-question-row {
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        @media (min-width: 768px) { .faq-question-row { padding: 1.5rem; } }

        .faq-question-text {
          font-weight: 600;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #1e293b;
          transition: color 0.2s ease;
        }
        .faq-question-text--open { color: #d4af37; }

        .faq-chevron {
          width: 1.5rem;
          height: 1.5rem;
          color: #94a3b8;
          flex-shrink: 0;
          margin-left: 1rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .faq-chevron--open {
          transform: rotate(180deg);
          color: #d4af37;
        }

        .faq-answer-panel {
          background: rgba(248,250,252,0.5);
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }
        .faq-answer-panel--open   { max-height: 10rem; opacity: 1; }
        .faq-answer-panel--closed { max-height: 0;     opacity: 0; }

        .faq-answer-body {
          padding: 0 1.25rem 1.25rem;
          color: #475569;
          line-height: 1.7;
        }
        @media (min-width: 768px) { .faq-answer-body { padding: 0 1.5rem 1.5rem; } }

        /* ─── Query Form Section ─── */
        .form-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 3rem;
        }
        .form-card {
          width: 100%;
          max-width: 42rem;
          background: #fff;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          border: 1px solid #f8fafc;
        }
        @media (min-width: 768px) { .form-card { padding: 2.5rem; } }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .form-heading {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        .form-subtext {
          color: #64748b;
        }

        /* ─── Success State ─── */
        .form-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 0;
          text-align: center;
          gap: 1rem;
        }
        .form-success-icon-wrap {
          width: 4rem;
          height: 4rem;
          background: rgba(212,175,55,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4af37;
          margin-bottom: 0.5rem;
        }
        .form-success-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
        }
        .form-success-desc { color: #64748b; }

        /* ─── Form Fields ─── */
        .form-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) { .form-row-2col { grid-template-columns: repeat(2,1fr); } }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #334155;
          margin-left: 0.25rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #1e293b;
          font-size: 0.9375rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input::placeholder { color: #94a3b8; }
        .form-input:focus {
          border-color: #d4af37;
          box-shadow: 0 0 0 2px rgba(212,175,55,0.25);
        }
        .form-input--error {
          border-color: #f87171;
        }
        .form-input--error:focus {
          box-shadow: 0 0 0 2px rgba(248,113,113,0.25);
        }
        .form-textarea { resize: none; }

        .form-error-msg {
          color: #ef4444;
          font-size: 0.75rem;
          margin-left: 0.25rem;
          margin-top: 0.25rem;
        }

        /* ─── Submit Button ─── */
        .form-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          background: #d4af37;
          color: #fff;
          font-weight: 600;
          font-size: 1.125rem;
          font-family: inherit;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .form-submit-btn:hover {
          background: #c5a028;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }
        .form-submit-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(212,175,55,0.4);
        }

        /* ─── Animations ─── */
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .animate-fall-down {
          animation: fallDown 0.8s cubic-bezier(0.25,0.46,0.45,0.94) both;
        }

        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fallDown {
          0%   { opacity: 0; transform: translateY(-50px); }
          60%  { opacity: 1; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}