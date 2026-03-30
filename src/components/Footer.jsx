/* ================================================================
   FOOTER COMPONENT - SRI SATHYA SAI ANANDAM SCHOOL (HERITAGE BLUE)
   ================================================================ */

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Youtube, Linkedin, Twitter,
  Mail, Phone, MapPin, ChevronUp 
} from 'lucide-react';

/* ----------------------------------------------------------------
   DATA
   ---------------------------------------------------------------- */
const FOOTER_DATA = {
  'Connect with Us': [
    { name: 'Temple Of Learning', path: '/contact' },
    { name: 'Our Journey', path: '/Our_journey' },
    { name: 'Reach Us', path: '/contact#hours' },
    { name: 'Queries and FAQs', path: '/contact#form' },
  ],
  'Admissions': [
    { name: 'Admission Process', path: '/admission_process' },
    { name: 'Apply Online', path: '/admissions#documents' },
    { name: 'Our Curriculum', path: '/academics#primary' },
    { name: 'Dates & Deadlines', path: '/admissions#fees' },
    { name: 'Queries & FAQ\'s', path: '/admissions#scholarships' },
  ],
  'The Hostel': [
    { name: 'Hostel Overview', path: '/hostel' },
    { name: 'Student Life', path: '/Student_life' },
    { name: 'Self Reliance', path: '/self_reliance' },
    { name: 'Spiritual Dimension', path: '/hostel#safety' },
    { name: 'Activities', path: '/activities' },
  ],
  'Gallery': [
    { name: 'Videos', path: '/gallery' },
    { name: 'Photos', path: '/gallery' },
  ],
};

const SOCIAL_LINKS = [
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Twitter, label: 'X', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Youtube, label: 'Youtube', href: '#' },
];

/* ----------------------------------------------------------------
   FOOTER EXPORT
   ---------------------------------------------------------------- */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{STYLING}</style>

      <footer className="hb-footer">
        <div className="hb-wrapper">
          
          <div className="hb-main-grid">
            {/* ── Column 1: Brand & Socials Only ── */}
            <div className="hb-brand-col">
              <div className="hb-logo-area">
                <img src="/LOGO - (WHITE).png" alt="SSSAS Logo" className="hb-img-logo" />
              </div>

              <div className="hb-social-strip">
                {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                  <a key={label} href={href} className="hb-social-icon" aria-label={label} target="_blank" rel="noopener noreferrer">
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Columns 2, 3, 4, 5: Directory (Includes Connect with Us) ── */}
            {Object.entries(FOOTER_DATA).map(([title, links]) => (
              <div key={title} className="hb-dir-col">
                <h3 className="hb-gold-title">{title}</h3>
                <nav className="hb-nav-vertical">
                  {links.map((link) => (
                    <Link key={link.name} to={link.path} className="hb-link">
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="hb-bottom-bar">
            <div className="hb-bottom-left">
              <Link to="/about" className="hb-sub-link">About this Site</Link>
              <Link to="/sitemap" className="hb-sub-link">Site Map</Link>
            </div>
            
            <div className="hb-bottom-right">
              <span className="hb-copy">
                © {new Date().getFullYear()} Sri Sathya Sai Anandam School
              </span>
              <button onClick={scrollToTop} className="hb-scroll-top" aria-label="Scroll to top">
                <ChevronUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ================================================================
   CSS — HERITAGE BLUE STYLES
   ================================================================ */
const STYLING = `
  .hb-footer {
    --hb-bg: #003D6B; 
    --hb-gold: #FFC107; 
    --hb-text: #FFFFFF;
    --hb-text-dim: rgba(255, 255, 255, 0.9);
    --hb-border: rgba(255, 255, 255, 0.15);
    
    background-color: var(--hb-bg);
    color: var(--hb-text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    padding-top: 60px;
    padding-bottom: 25px;
  }

  .hb-wrapper {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .hb-main-grid {
    display: grid;
    /* 5 columns: Logo + 4 Directory Columns */
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 60px;
  }

  .hb-gold-title {
    color: var(--hb-gold);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 22px;
    margin-top: 0;
    letter-spacing: 0.02em;
  }

  .hb-nav-vertical {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .hb-link {
    color: var(--hb-text-dim);
    text-decoration: none;
    font-size: 14px;
    transition: all 0.2s ease;
    line-height: 1.4;
  }

  .hb-link:hover {
    color: var(--hb-text);
    padding-left: 2px;
  }

  .hb-logo-area {
    margin-bottom: 25px;
  }
  
  .hb-img-logo {
    max-width: 120px;
    height: auto;
    display: block;
  }

  .hb-social-strip {
    display: flex;
    gap: 18px;
  }

  .hb-social-icon {
    color: var(--hb-text);
    opacity: 0.8;
    transition: transform 0.2s, opacity 0.2s;
  }

  .hb-social-icon:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  .hb-bottom-bar {
    border-top: 1px solid var(--hb-border);
    padding-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .hb-bottom-left {
    display: flex;
    gap: 32px;
  }

  .hb-sub-link {
    color: var(--hb-text);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }

  .hb-sub-link:hover {
    text-decoration: underline;
  }

  .hb-bottom-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .hb-copy {
    font-size: 13px;
    opacity: 0.9;
  }

  .hb-scroll-top {
    background: transparent;
    border: none;
    color: var(--hb-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    transition: all 0.2s;
  }

  .hb-scroll-top:hover {
    transform: translateY(-4px);
    color: var(--hb-gold);
  }

  @media (max-width: 1100px) {
    .hb-main-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }
  }

  @media (max-width: 768px) {
    .hb-main-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .hb-main-grid {
      grid-template-columns: 1fr;
    }
  }
`;