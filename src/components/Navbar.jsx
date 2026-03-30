/* ================================================================
   NAVBAR — BFC Style (Bishop Foley Catholic)
   - No ticker
   - Dark solid bar, pipe-separated nav items
   - ITC Leawood W03 font
   - Mega panel: plain left links | divider | gold heading + body + LEARN MORE + image
   - Search icon
   - Mobile drawer
   ================================================================ */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Search, ChevronDown } from 'lucide-react';

const LOGO_SRC = '/LOGO - (WHITE).png';
const LOGO_TYPE = 'image';
const SCHOOL_NAME = 'SSSAS';
const SCHOOL_SUB = '"मामेकं शरणं व्रज"';

const NAV_ITEMS = [
  { name: 'HOME', path: '/', children: [], description: null },
  {
    name: 'SCHOOL', path: '/school',
    children: [
      { name: 'Academic Overview', path: '/academics' },
      { name: 'Infrastructure and Facilities', path: '/facility' },
      { name: 'Mandatory Public Disclosures', path: '/mpd' },
      { name: 'Extra Curriculars', path: '/self_reliance' },
      { name: 'Educators', path: '/academics' },
    ],
    description: {
      heading: 'Our School',
      body: 'Sri Sathya Sai Anandam School offers a world-class learning environment with modern infrastructure, highly qualified faculty, and a rich tradition spanning over 10 years of academic and co-curricular excellence.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600',
    },
  },
  /*{
    name: 'ACADEMICS', path: '/academics',
    children: [
      { name: 'Academic Overview', path: '/academics' },
      { name: 'Holistic Assessment', path: '/academics#middle' },
      { name: 'Applied Excellence', path: '/academics#secondary' },
    ],
    description: {
      heading: 'Academics',
      body: "Our comprehensive CBSE curriculum is designed to challenge, inspire, and develop every student's full potential — from Pre-Primary through Senior Secondary, with consistent 100% board exam results and a tradition of scholarly excellence.",
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
    },
  },*/
  {
    name: 'HOSTEL', path: '/Student_life',
    children: [
      { name: 'Hostel Overview', path: '/Student_life' },
      { name: 'Student Life', path: '/Student_life' },
      { name: 'Self Reliance', path: '/self_reliance' },
      { name: 'Spiritual Dimension', path: '/spritual_dimension' },
      { name: 'Actvities', path: '/activities' },
    ],
    description: {
      heading: 'Hostel',
      body: 'Our residential facilities provide students with a safe, nurturing, and comfortable home away from home. With dedicated teachers, nutritious meals, and structured study hours, every student thrives.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600',
    },
  },
  {
    name: 'GALLERY', path: '/Gallery',
    children: [
      { name: 'Videos', path: '/gallery' },
      { name: 'Photos', path: '/gallery' },
    ],
    description: {
      heading: 'Gallery',
      body: 'Explore the snapshots of our journey—featuring everything from competitive sports and cultural celebrations to the quiet, everyday moments that make SSSAS a true home for learning and character building.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600',
    },
  },

  {
    name: 'ADMISSIONS', path: '/admissions',
    children: [
      { name: 'Admission Process', path: '/admission_process' },
      { name: 'Apply Online', path: '/admissions#documents' },
      //{ name: 'Apply Online', path: '/admissions#apply' },
      { name: 'Our Curriculum', path: '/Our_Curriculam' },
      { name: 'Dates & Deadlines', path: '/admissions#fees' },
    ],
    description: {
      heading: 'Admissions',
      body: "Start your child’s journey today and witness firsthand how we shape the leaders, thinkers, and changemakers of tomorrow. Our doors are always open to those ready to join a living legacy of growth and inspiration.",
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
    },
  },
  {
    name: 'ABOUT US', path: '/contact',
    children: [
      { name: 'Temple Of Learning', path: '/temple_of_learning' },
      { name: 'Our Journey', path: '/Our_journey' },
      { name: 'Reach Us', path: '/contact' },
      { name: 'Queries and FAQs', path: '/faqs' },
    ],
    description: {
      heading: 'About Us',
      body: 'Have questions about admissions, academics, or hostel facilities? Our team is available to assist you. Reach out by phone, email, or visit us on campus anytime.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
    },
  },
];

const LOGO_SRC_SCROLLED = '/LOGO - (BLACK).png';

function LogoMark({ scrolled = false }) {
  if (LOGO_TYPE === 'image' && LOGO_SRC) {
    const src = (scrolled && LOGO_SRC_SCROLLED) ? LOGO_SRC_SCROLLED : LOGO_SRC;
    return (
      <div className={`nb-logo-img-wrap ${scrolled ? 'nb-logo-img--sm' : 'nb-logo-img--lg'}`}>
        <img src={src} alt={`${SCHOOL_NAME} logo`} className="nb-logo-img" />
      </div>
    );
  }
  return (
    <div className={`nb-logo-mark ${scrolled ? 'nb-logo-mark--sm' : 'nb-logo-mark--lg'}`}>
      <span>{SCHOOL_NAME.charAt(0)}</span>
    </div>
  );
}

function MegaPanel({ item, visible, arrowLeft }) {
  if (!item || !item.children.length) return null;
  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div className="nb-mega-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} />
          <motion.div
            className="nb-mega-panel"
            style={arrowLeft != null ? { '--caret-left': `${arrowLeft}px` } : {}}
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18, ease: 'easeOut' }}>
            <div className="nb-mega-left">
              <ul className="nb-mega-list">
                {item.children.map((child, i) => (
                  <li key={i}><Link to={child.path} className="nb-mega-link">{child.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="nb-mega-vline" />
            {item.description && (
              <div className="nb-mega-right">
                <div className="nb-mega-content">
                  <h2 className="nb-mega-heading">
                    <span className="nb-mega-heading-cap">{item.description.heading.charAt(0)}</span>
                    <span className="nb-mega-heading-rest">{item.description.heading.slice(1).toUpperCase()}</span>
                  </h2>
                  <p className="nb-mega-body">{item.description.body}</p>
                  <Link to={item.path} className="nb-mega-learn-more">LEARN MORE</Link>
                </div>
                {item.description.image && (
                  <div className="nb-mega-photo-wrap">
                    <img src={item.description.image} alt={item.description.heading} className="nb-mega-photo" />
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SearchOverlay({ open, onClose }) {
  const inputRef = useRef(null);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 80); }, [open]);
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="nb-search-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClose}>
          <motion.div className="nb-search-box" initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeOut' }} onClick={(e) => e.stopPropagation()}>
            <Search size={20} className="nb-s-icon" />
            <input ref={inputRef} type="text" placeholder="Search pages, programmes, news…" className="nb-s-input" />
            <button className="nb-s-close" onClick={onClose}><X size={20} /></button>
          </motion.div>
          <p className="nb-s-hint">Press Esc to close</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileItem({ item, isActive }) {
  const [open, setOpen] = useState(false);
  const has = item.children.length > 0;
  return (
    <div className="nm-item">
      <div className="nm-row">
        <Link to={item.path} className={`nm-link ${isActive(item.path) ? 'nm-link--active' : ''}`}>{item.name}</Link>
        {has && (
          <button className={`nm-chevron ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
            <ChevronDown size={17} />
          </button>
        )}
      </div>
      <AnimatePresence>
        {open && has && (
          <motion.div className="nm-sub" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            {item.children.map((c, j) => <Link key={j} to={c.path} className="nm-sub-link">{c.name}</Link>)}
            {item.description && <Link to={item.path} className="nm-learn">LEARN MORE →</Link>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const [arrowLeft, setArrowLeft] = useState(null); // px offset from mega panel left edge
  const closeTimer = useRef(null);
  const cellRefs = useRef({});                    // keyed by item.name
  const location = useLocation();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  useEffect(() => { setMobileOpen(false); setOpenItem(null); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const MEGA_LEFT_PX = 360; // must match .nb-mega-panel { left: 360px }

  const enter = (name) => {
    clearTimeout(closeTimer.current);
    setOpenItem(name);
    // Measure tab centre and compute arrow offset relative to mega panel
    const el = cellRefs.current[name];
    if (el) {
      const rect = el.getBoundingClientRect();
      const tabCentreX = rect.left + rect.width / 2;
      setArrowLeft(tabCentreX - MEGA_LEFT_PX);
    }
  };
  const leave = () => { closeTimer.current = setTimeout(() => setOpenItem(null), 110); };
  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
  const activeItem = NAV_ITEMS.find((i) => i.name === openItem) || null;

  return (
    <>
      <style>{STYLES}</style>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <header className={`nb-hdr ${scrolled ? 'nb-hdr--scrolled' : ''} ${mobileOpen ? 'nb-hdr--drawer-open' : ''}`}>
        <nav className="nb-bar">
          <div className="nb-bar-inner">

            <Link to="/" className="nb-logo" style={{
              opacity: (!scrolled && location.pathname === '/') ? 0 : 1,
              pointerEvents: (!scrolled && location.pathname === '/') ? 'none' : 'auto',
              transition: 'opacity 0.4s ease',
            }}>
              <LogoMark scrolled={scrolled} />
              <div className="nb-logo-txt">
                <span className="nb-logo-name">{SCHOOL_NAME}</span>
                <span className="nb-logo-sub">{SCHOOL_SUB}</span>
              </div>
            </Link>

            <div className="nb-links">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.path}
                  ref={el => cellRefs.current[item.name] = el}
                  className="nb-link-cell"
                  onMouseEnter={() => item.children.length ? enter(item.name) : setOpenItem(null)}
                  onMouseLeave={leave}>
                  {idx > 0 && <span className="nb-pipe" />}
                  <Link to={item.path} className={`nb-link ${isActive(item.path) ? 'nb-link--active' : ''}`}>
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="nb-actions">
              <button className="nb-search-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
                <Search size={18} />
              </button>
            </div>

            {/* FIX: hide toggle button when drawer is open — drawer has its own close button */}
            {!mobileOpen && (
              <button className="nb-mob-toggle" onClick={() => setMobileOpen(true)} aria-label="Menu">
                <Menu size={22} />
              </button>
            )}

          </div>
        </nav>

        <div onMouseEnter={() => activeItem && enter(activeItem.name)} onMouseLeave={leave}>
          <MegaPanel item={activeItem} visible={!!openItem && !!activeItem} arrowLeft={arrowLeft} />
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="nb-bd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} />
            <motion.div className="nb-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 330, damping: 36 }}>
              <div className="nb-dr-hd">
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <LogoMark scrolled={true} />
                  <span className="nb-dr-name">{SCHOOL_NAME}</span>
                </div>
                {/* FIX: close button lives here inside the drawer only */}
                <button className="nb-dr-close" onClick={() => setMobileOpen(false)}>
                  <X size={21} />
                </button>
              </div>
              <div className="nb-dr-search">
                <Search size={14} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
                <input type="text" placeholder="Search…" className="nb-dr-search-inp" />
              </div>
              <nav className="nb-dr-nav">
                {NAV_ITEMS.map((item) => <MobileItem key={item.path} item={item} isActive={isActive} />)}
              </nav>
              <div className="nb-dr-ft">
                <div className="nb-dr-contacts">
                  <span><Phone size={13} /> +91 9437632059</span>
                  <span><Mail size={13} /> info@sssas.edu.in</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const STYLES = `

  .nb-hdr, .nb-hdr *,
  .nb-mega-panel, .nb-mega-panel *,
  .nb-mega-backdrop,
  .nb-search-overlay, .nb-search-overlay *,
  .nb-drawer, .nb-drawer * {
    font-family: 'ITC Leawood W03', 'Leawood', 'Palatino Linotype', Georgia, serif !important;
    box-sizing: border-box;
  }

  .nb-hdr {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 1000; overflow: visible;
  }
  /* Drawer is open — push header behind it so it's not visible above */
  .nb-hdr--drawer-open {
    z-index: 997;
  }

  .nb-bar {
    background: transparent; height: 80px;
    transition: height 0.38s ease, background 0.38s ease;
    overflow: visible;
  }
  .nb-hdr--scrolled .nb-bar {
    height: 75px;
    background: rgba(255, 255, 255, 0.89);
    backdrop-filter: blur(14px);
    box-shadow: 0 3px 20px rgba(0,0,0,0.12);
    overflow: visible;
  }
  .nb-bar-inner {
    max-width: 1380px; margin: 0 auto;
    padding: 0 20px; height: 100%;
    display: flex; align-items: center; gap: 0;
    overflow: visible;
    position: relative;
  }

  .nb-logo {
    display: flex; align-items: center; gap: 11px;
    text-decoration: none; flex-shrink: 0; margin-right: 10px;
    transition: opacity 0.2s, transform 0.4s ease;
    transform: translateY(0px);
    align-self: flex-start;
  }
  .nb-hdr--scrolled .nb-logo {
    transform: translateY(0px);
    align-self: center;
  }
  .nb-logo:hover { opacity: 0.85; }

  .nb-logo-img-wrap {
    border-radius: 0; overflow: visible; flex-shrink: 0;
    background: transparent;
    display: flex; align-items: center; justify-content: center;
    transition: width 0.4s ease, height 0.4s ease;
  }
  /* FIX: logo sizes now fit within the bar height (80px) */
  .nb-logo-img--lg { width: 110px; height: 110px; }
  .nb-logo-img--sm { width: 75px; height: 75px; }
  .nb-logo-img { width: 100%; height: 100%; object-fit: contain; display: block; }

  .nb-logo-mark {
    background: linear-gradient(135deg, #C9963A, #E8B95A);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; color: #1C0B10; flex-shrink: 0;
    transition: width 0.4s ease, height 0.4s ease, font-size 0.4s ease;
  }
  .nb-logo-mark--lg { width: 62px; height: 62px; font-size: 30px; }
  .nb-logo-mark--sm { width: 50px; height: 50px; font-size: 24px; }

  .nb-logo-txt { display: flex; flex-direction: column; }
  .nb-logo-name {
    font-size: 20px; font-weight: 700; color: #1A1A1A; line-height: 1.1;
    transition: font-size 0.38s ease, color 0.38s ease, opacity 0.38s ease, max-width 0.38s ease;
    opacity: 0; max-width: 0; overflow: hidden; white-space: nowrap;
  }
  .nb-hdr--scrolled .nb-logo-name { opacity: 1; max-width: 300px; font-size: 20px; color: #1A1A1A; }
  .nb-logo-sub {
    font-size: 12px; color: #C9963A; letter-spacing: 0.0em;
    text-transform: uppercase; font-weight: 400; line-height: 2.0;
    transition: opacity 0.38s ease, max-height 0.38s ease, color 0.38s ease;
    opacity: 0; max-height: 0; overflow: hidden;
  }
  .nb-hdr--scrolled .nb-logo-sub { opacity: 0.85; max-height: 20px; color: #C9963A; }

  .nb-links {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex; align-items: center;
    height: 90px;
    z-index: 1;
  }
  .nb-hdr--scrolled .nb-links { height: 75px; }
  @media (max-width: 1080px) { .nb-links { display: none; } }

  .nb-link-cell { display: flex; align-items: center; height: 100%; }

  .nb-pipe {
    width: 1px; height: 18px;
    background: rgb(224, 182, 11); flex-shrink: 0;
    transition: background 0.38s ease;
  }
  .nb-hdr--scrolled .nb-pipe { background: rgba(231, 177, 28, 0.36); }

  .nb-link {
    display: inline-flex; align-items: center;
    padding: 0 18px; height: 100%;
    font-size: 16px; font-weight: 700;
    color: rgba(255,255,255,0.92);
    text-decoration: none; white-space: nowrap;
    letter-spacing: 0.02em;
    border-bottom: 3px solid transparent;
    transition: color 0.3s ease, border-bottom-color 0.3s ease, font-size 0.38s ease;
  }
  .nb-hdr--scrolled .nb-link { font-size: 14px; color: #1A1A1A; padding: 0 15px; }
  .nb-link:hover { color: #C9963A; }
  .nb-hdr--scrolled .nb-link:hover { color: #6B1A2A; }
  .nb-link--active { color: #C9963A; border-bottom-color: #C9963A; }
  .nb-hdr--scrolled .nb-link--active { color: #C9963A; border-bottom-color: #C9963A; }

  .nb-actions {
    display: flex; align-items: center; gap: 6px;
    margin-left: auto; flex-shrink: 0;
  }
  @media (max-width: 1080px) { .nb-actions { display: none; } }
  .nb-search-btn {
    background: transparent; border: none;
    color: rgba(255,255,255,0.78);
    padding: 7px 10px; cursor: pointer; border-radius: 5px;
    display: flex; align-items: center;
    transition: color 0.3s, background 0.3s;
  }
  .nb-search-btn:hover { color: #C9963A; background: rgba(255,255,255,0.08); }
  .nb-hdr--scrolled .nb-search-btn { color: #1A1A1A; }
  .nb-hdr--scrolled .nb-search-btn:hover { color: #6B1A2A; background: rgba(0,0,0,0.05); }

  .nb-mega-backdrop { display: none; }
  .nb-mega-panel {
    position: absolute;
    top: 90px; left: 360px; right: 150px;
    z-index: 900;
    background: #faf8f3f6;
    display: flex;
    border-top: 3px solid #C9963A;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.20);
    max-height: 360px;
    overflow: visible;
    /* default caret position — overridden inline via --caret-left */
    --caret-left: 50%;
  }
  /* Clip only the scrollable content, not the panel itself */
  .nb-mega-left, .nb-mega-right { overflow: hidden; }
  .nb-mega-left { overflow-y: auto; }

  /* Outer gold triangle — aligns with hovered tab */
  .nb-mega-panel::before {
    content: '';
    position: absolute;
    top: -13px;
    /* Use CSS var for dynamic alignment; fall back to 50% */
    left: var(--caret-left, 50%);
    transform: translateX(-50%);
    width: 0; height: 0;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-bottom: 13px solid #C9963A;
    z-index: 1;
    pointer-events: none;
    filter: drop-shadow(0 -2px 3px rgba(0,0,0,0.12));
    transition: left 0.22s ease;
  }
  /* Inner cream fill triangle — matches panel background */
  .nb-mega-panel::after {
    content: '';
    position: absolute;
    top: -8px;
    left: var(--caret-left, 50%);
    transform: translateX(-50%);
    width: 0; height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #faf8f3;
    z-index: 2;
    pointer-events: none;
    transition: left 0.22s ease;
  }
  .nb-hdr--scrolled .nb-mega-panel { top: 75px; }

  .nb-mega-left {
    width: 260px; min-width: 220px; max-width: 260px;
    padding: 22px 0; background: #fff;
    flex-shrink: 0; overflow-y: auto;
  }
  .nb-mega-list { list-style: none; padding: 0; margin: 0; }
  .nb-mega-link {
    display: block; padding: 11px 28px;
    font-size: 14px; font-weight: 400;
    color: #2A2A2A; text-decoration: none; line-height: 1.4;
    transition: color 0.18s ease, background 0.18s ease;
    border-left: 3px solid transparent;
  }
  .nb-mega-link:hover { color: #6B1A2A; background: rgba(107,26,42,0.04); border-left-color: #C9963A; }

  .nb-mega-vline { width: 1px; background: rgba(0,0,0,0.1); flex-shrink: 0; margin: 20px 0; }

  .nb-mega-right {
    flex: 1; display: flex; align-items: flex-start;
    gap: 32px; padding: 28px 40px 28px 36px; overflow: hidden;
  }
  .nb-mega-content { flex: 1; }
  .nb-mega-heading { margin: 0 0 16px 0; line-height: 1.1; }
  .nb-mega-heading-cap { font-size: 38px; font-weight: 700; color: #C9963A; line-height: 1; }
  .nb-mega-heading-rest { font-size: 24px; font-weight: 700; color: #C9963A; letter-spacing: 0.04em; line-height: 1; }
  .nb-mega-body { font-size: 14px; font-weight: 300; color: #2A2A2A; line-height: 1.82; margin: 0 0 22px; max-width: 560px; }
  .nb-mega-learn-more {
    display: inline-block; padding: 10px 26px;
    border: 2px solid #6B1A2A; color: #6B1A2A;
    font-size: 11px; font-weight: 800; letter-spacing: 0.12em;
    border-radius: 40px; text-decoration: none;
    transition: background 0.22s ease, color 0.22s ease;
  }
  .nb-mega-learn-more:hover { background: #6B1A2A; color: #fff; }
  .nb-mega-photo-wrap { width: 230px; height: 155px; border-radius: 8px; overflow: hidden; flex-shrink: 0; align-self: center; }
  .nb-mega-photo { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
  .nb-mega-photo-wrap:hover .nb-mega-photo { transform: scale(1.05); }

  .nb-search-overlay {
    position: fixed; inset: 0; z-index: 2000;
    background: rgba(10,5,5,0.8); backdrop-filter: blur(10px);
    display: flex; flex-direction: column;
    align-items: center; justify-content: flex-start;
    padding-top: 130px;
  }
  .nb-search-box {
    width: min(660px, 92vw); background: #fff; border-radius: 10px;
    display: flex; align-items: center; gap: 14px; padding: 14px 20px;
    box-shadow: 0 24px 60px rgba(0,0,0,0.3);
    border: 2px solid rgba(201,150,58,0.4);
  }
  .nb-s-icon { color: #6B1A2A; flex-shrink: 0; }
  .nb-s-input { flex: 1; border: none; outline: none; font-size: 16px; color: #1C0B10; background: transparent; }
  .nb-s-input::placeholder { color: #9A8088; }
  .nb-s-close {
    background: rgba(107,26,42,0.07); border: none; color: #6B1A2A;
    border-radius: 7px; padding: 6px; cursor: pointer;
    display: flex; align-items: center; transition: background 0.2s; flex-shrink: 0;
  }
  .nb-s-close:hover { background: rgba(107,26,42,0.15); }
  .nb-s-hint { margin-top: 14px; font-size: 11.5px; color: rgba(255,255,255,0.35); }

  .nb-mob-toggle {
    display: none;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
    color: white; border-radius: 7px; padding: 8px;
    cursor: pointer; margin-left: auto; transition: background 0.2s;
  }
  .nb-mob-toggle:hover { background: rgba(255,255,255,0.15); }
  @media (max-width: 1080px) { .nb-mob-toggle { display: flex; align-items: center; } }

  /* FIX: drawer z-index above header (1000) so it fully covers the toggle button */
  .nb-bd { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1001; backdrop-filter: blur(3px); }
  .nb-drawer {
    position: fixed; top: 0; right: 0; bottom: 0;
    width: min(360px, 94vw); background: #1A1A1A; z-index: 1002;
    display: flex; flex-direction: column;
    box-shadow: -8px 0 48px rgba(0,0,0,0.4);
  }
  .nb-dr-hd {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 18px 14px; background: #111; flex-shrink: 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .nb-dr-name { font-size: 16px; font-weight: 700; color: #fff; }
  .nb-dr-close {
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.14);
    color: white; border-radius: 7px; padding: 7px;
    cursor: pointer; display: flex; align-items: center; transition: background 0.2s;
  }
  .nb-dr-close:hover { background: rgba(255,255,255,0.13); }
  .nb-dr-search {
    display: flex; align-items: center; gap: 10px; padding: 11px 18px;
    background: rgba(255,255,255,0.04);
    border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;
  }
  .nb-dr-search-inp {
    flex: 1; background: transparent; border: none; outline: none;
    font-size: 13px; color: rgba(255,255,255,0.75);
  }
  .nb-dr-search-inp::placeholder { color: rgba(255,255,255,0.3); }
  .nb-dr-nav { flex: 1; overflow-y: auto; padding: 4px 0; }

  .nm-item { border-bottom: 1px solid rgba(255,255,255,0.06); }
  .nm-row  { display: flex; align-items: stretch; }
  .nm-link {
    flex: 1; display: block; padding: 13px 20px;
    font-size: 13px; font-weight: 500;
    color: rgba(255,255,255,0.78); text-decoration: none;
    border-left: 3px solid transparent; transition: all 0.18s;
  }
  .nm-link:hover { color: #C9963A; background: rgba(255,255,255,0.04); border-left-color: #C9963A; }
  .nm-link--active { color: #C9963A; border-left-color: #C9963A; font-weight: 700; }
  .nm-chevron {
    padding: 13px 16px; background: transparent; border: none;
    color: rgba(255,255,255,0.4); cursor: pointer;
    display: flex; align-items: center; transition: color 0.18s, transform 0.24s;
  }
  .nm-chevron:hover { color: #C9963A; }
  .nm-chevron.open  { transform: rotate(180deg); color: #C9963A; }
  .nm-sub { overflow: hidden; background: rgba(0,0,0,0.18); }
  .nm-sub-link {
    display: block; padding: 10px 20px 10px 30px;
    font-size: 12.5px; font-weight: 400;
    color: rgba(255,255,255,0.52); text-decoration: none;
    border-left: 3px solid transparent; transition: all 0.18s;
  }
  .nm-sub-link:hover { color: #C9963A; background: rgba(255,255,255,0.04); border-left-color: rgba(201,150,58,0.4); }
  .nm-learn {
    display: block; padding: 10px 20px 10px 30px;
    font-size: 10.5px; font-weight: 800; letter-spacing: 0.1em;
    color: #C9963A; text-decoration: none; text-transform: uppercase;
    border-top: 1px solid rgba(255,255,255,0.06); transition: background 0.18s;
  }
  .nm-learn:hover { background: rgba(201,150,58,0.07); }

  .nb-dr-ft {
    padding: 14px 18px 24px;
    border-top: 1px solid rgba(255,255,255,0.09);
    background: #111; flex-shrink: 0;
  }
  .nb-dr-contacts { display: flex; flex-direction: column; gap: 7px; font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 10px; }
  .nb-dr-contacts span { display: flex; align-items: center; gap: 7px; }
  .nb-dr-contacts svg { color: #C9963A; flex-shrink: 0; }
`;