/* ================================================================
   PAGE TRANSITION — Random Sai Baba Quote + Banter Loader
   ================================================================ */

import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/home.png';

/* ================================================================
   ✅ ADD / EDIT QUOTES HERE
   ================================================================ */
const QUOTES = [
  "The Mother and the Motherland are greater than Heaven itself",
  "The end of education is character",
  "Remember God, love the nation and experience bliss",
  "Righteousness protects him who protects it",
  "Knowledge is an additional eye for man. World honour knowledge and not wealth",
  "Good qualities, truth, devotion, discipline and duty are what students should learn through education",
  "Money comes and goes. Morality comes and grows.",
  "There is only one religion, the religion of humanity",
  "Only a disciplined and well educated younger generation can serve the nation well as future leaders."
];

/* ── Logo config ── */
const LOGO_SRC = '/LOGO - (WHITE).png';
const LOGO_TYPE = 'image';

function Logo() {
  if (LOGO_TYPE === 'image' && LOGO_SRC) {
    return (
      <img src={LOGO_SRC} alt="Logo"
        style={{ width: 160, height: 160, objectFit: 'contain' }} />
    );
  }
  return (
    <div style={{
      width: 110, height: 110,
      background: 'linear-gradient(135deg, #C9963A, #E8B95A)',
      borderRadius: 24,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 56, fontWeight: 700, color: '#4A0F1C',
      fontFamily: "'EB Garamond','Cormorant Garamond',Georgia,serif",
    }}>S</div>
  );
}

/* ── Banter Loader CSS — gold, rounded corners ── */
const BANTER_CSS = `
  .banter-loader {
    position: relative;
    width: 72px;
    height: 72px;
    margin-top: 32px;
  }
  .banter-loader__box {
    float: left;
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
  .banter-loader__box:before {
    content: "";
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background: #C9963A;
    border-radius: 8px;
  }
  .banter-loader__box:nth-child(3n) { margin-right: 0; margin-bottom: 6px; }
  .banter-loader__box:nth-child(1):before,
  .banter-loader__box:nth-child(4):before { margin-left: 26px; }
  .banter-loader__box:nth-child(3):before { margin-top: 52px; }
  .banter-loader__box:last-child { margin-bottom: 0; }

  @keyframes moveBox-1 {
    9.0909090909%  { transform: translate(-26px, 0); }
    18.1818181818% { transform: translate(0px, 0); }
    27.2727272727% { transform: translate(0px, 0); }
    36.3636363636% { transform: translate(26px, 0); }
    45.4545454545% { transform: translate(26px, 26px); }
    54.5454545455% { transform: translate(26px, 26px); }
    63.6363636364% { transform: translate(26px, 26px); }
    72.7272727273% { transform: translate(26px, 0px); }
    81.8181818182% { transform: translate(0px, 0px); }
    90.9090909091% { transform: translate(-26px, 0px); }
    100%           { transform: translate(0px, 0px); }
  }
  .banter-loader__box:nth-child(1) { animation: moveBox-1 4s infinite; }

  @keyframes moveBox-2 {
    9.0909090909%  { transform: translate(0, 0); }
    18.1818181818% { transform: translate(26px, 0); }
    27.2727272727% { transform: translate(0px, 0); }
    36.3636363636% { transform: translate(26px, 0); }
    45.4545454545% { transform: translate(26px, 26px); }
    54.5454545455% { transform: translate(26px, 26px); }
    63.6363636364% { transform: translate(26px, 26px); }
    72.7272727273% { transform: translate(26px, 26px); }
    81.8181818182% { transform: translate(0px, 26px); }
    90.9090909091% { transform: translate(0px, 26px); }
    100%           { transform: translate(0px, 0px); }
  }
  .banter-loader__box:nth-child(2) { animation: moveBox-2 4s infinite; }

  @keyframes moveBox-3 {
    9.0909090909%  { transform: translate(-26px, 0); }
    18.1818181818% { transform: translate(-26px, 0); }
    27.2727272727% { transform: translate(0px, 0); }
    36.3636363636% { transform: translate(-26px, 0); }
    45.4545454545% { transform: translate(-26px, 0); }
    54.5454545455% { transform: translate(-26px, 0); }
    63.6363636364% { transform: translate(-26px, 0); }
    72.7272727273% { transform: translate(-26px, 0); }
    81.8181818182% { transform: translate(-26px, -26px); }
    90.9090909091% { transform: translate(0px, -26px); }
    100%           { transform: translate(0px, 0px); }
  }
  .banter-loader__box:nth-child(3) { animation: moveBox-3 4s infinite; }

  @keyframes moveBox-4 {
    9.0909090909%  { transform: translate(-26px, 0); }
    18.1818181818% { transform: translate(-26px, 0); }
    27.2727272727% { transform: translate(-26px, -26px); }
    36.3636363636% { transform: translate(0px, -26px); }
    45.4545454545% { transform: translate(0px, 0px); }
    54.5454545455% { transform: translate(0px, -26px); }
    63.6363636364% { transform: translate(0px, -26px); }
    72.7272727273% { transform: translate(0px, -26px); }
    81.8181818182% { transform: translate(-26px, -26px); }
    90.9090909091% { transform: translate(-26px, 0px); }
    100%           { transform: translate(0px, 0px); }
  }
  .banter-loader__box:nth-child(4) { animation: moveBox-4 4s infinite; }

  @keyframes moveBox-5 {
    9.0909090909%  { transform: translate(0, 0); }
    18.1818181818% { transform: translate(0, 0); }
    27.2727272727% { transform: translate(0, 0); }
    36.3636363636% { transform: translate(26px, 0); }
    45.4545454545% { transform: translate(26px, 0); }
    54.5454545455% { transform: translate(26px, 0); }
    63.6363636364% { transform: translate(26px, 0); }
    72.7272727273% { transform: translate(26px, 0); }
    81.8181818182% { transform: translate(26px, -26px); }
    90.9090909091% { transform: translate(0px, -26px); }
    100%           { transform: translate(0px, 0px); }
  }
  .banter-loader__box:nth-child(5) { animation: moveBox-5 4s infinite; }

  @keyframes moveBox-6 {
    9.0909090909%  { transform: translate(0, 0); }
    18.1818181818% { transform: translate(-26px, 0); }
    27.2727272727% { transform: translate(-26px, 0); }
    36.3636363636% { transform: translate(0px, 0); }
    45.4545454545% { transform: translate(0px, 0); }
    54.5454545455% { transform: translate(0px, 0); }
    63.6363636364% { transform: translate(0px, 0); }
    72.7272727273% { transform: translate(0px, 26px); }
    81.8181818182% { transform: translate(-26px, 26px); }
    90.9090909091% { transform: translate(-26px, 0px); }
    100%           { transform: translate(0px, 0px); }
  }
  .banter-loader__box:nth-child(6) { animation: moveBox-6 4s infinite; }

  @keyframes moveBox-7 {
    9.0909090909%  { transform: translate(26px, 0); }
    18.1818181818% { transform: translate(26px, 0); }
    27.2727272727% { transform: translate(26px, 0); }
    36.3636363636% { transform: translate(0px, 0); }
    45.4545454545% { transform: translate(0px, -26px); }
    54.5454545455% { transform: translate(26px, -26px); }
    63.6363636364% { transform: translate(0px, -26px); }
    72.7272727273% { transform: translate(0px, -26px); }
    81.8181818182% { transform: translate(0px, 0px); }
    90.9090909091% { transform: translate(26px, 0px); }
    100%           { transform: translate(0px, 0px); }
  }
  .banter-loader__box:nth-child(7) { animation: moveBox-7 4s infinite; }

  @keyframes moveBox-8 {
    9.0909090909%  { transform: translate(0, 0); }
    18.1818181818% { transform: translate(-26px, 0); }
    27.2727272727% { transform: translate(-26px, -26px); }
    36.3636363636% { transform: translate(0px, -26px); }
    45.4545454545% { transform: translate(0px, -26px); }
    54.5454545455% { transform: translate(0px, -26px); }
    63.6363636364% { transform: translate(0px, -26px); }
    72.7272727273% { transform: translate(0px, -26px); }
    81.8181818182% { transform: translate(26px, -26px); }
    90.9090909091% { transform: translate(26px, 0px); }
    100%           { transform: translate(0px, 0px); }
  }
  .banter-loader__box:nth-child(8) { animation: moveBox-8 4s infinite; }

  @keyframes moveBox-9 {
    9.0909090909%  { transform: translate(-26px, 0); }
    18.1818181818% { transform: translate(-26px, 0); }
    27.2727272727% { transform: translate(0px, 0); }
    36.3636363636% { transform: translate(-26px, 0); }
    45.4545454545% { transform: translate(0px, 0); }
    54.5454545455% { transform: translate(0px, 0); }
    63.6363636364% { transform: translate(-26px, 0); }
    72.7272727273% { transform: translate(-26px, 0); }
    81.8181818182% { transform: translate(-52px, 0); }
    90.9090909091% { transform: translate(-26px, 0); }
    100%           { transform: translate(0px, 0); }
  }
  .banter-loader__box:nth-child(9) { animation: moveBox-9 4s infinite; }
`;

function BanterLoader() {
  return (
    <div className="banter-loader">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="banter-loader__box" />
      ))}
    </div>
  );
}

/* ── Pick a random quote (changes on each route visit) ── */
function randomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

/* ── Main ── */
export default function PageTransition() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [quote, setQuote] = useState(() => randomQuote());
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = '';
      }, 900);
      return () => clearTimeout(t);
    }
    /* Pick a fresh random quote for each transition */
    setQuote(randomQuote());
    setVisible(true);
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
    }, 1600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, [location.pathname]);

  return (
    <>
      <style>{BANTER_CSS}</style>

      <AnimatePresence>
        {visible && (
          <motion.div
            key={location.pathname}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'all',
              overflow: 'hidden',
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ exit: { duration: 0.45, ease: 'easeInOut' } }}
          >
            {/* ── Blurred background image ── */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(18px)',
              transform: 'scale(1.1)',
            }} />

            {/* ── Dark overlay ── */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(12, 4, 8, 0.62)',
            }} />

            {/* ── Centre content: logo + quote + loader ── */}
            <motion.div
              style={{
                position: 'relative', zIndex: 1,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                maxWidth: 500, padding: '0 32px', textAlign: 'center',
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Logo />

              {/* Quote — replaces school name/sub */}
              <motion.div
                style={{ marginTop: 20 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <p style={{
                  fontFamily: "'EB Garamond','Cormorant Garamond',Georgia,serif",
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.88)',
                  lineHeight: 1.6,
                  margin: 0,
                  textShadow: '0 1px 12px rgba(0,0,0,0.5)',
                }}>
                  "{quote}"
                </p>
                <p style={{
                  fontFamily: "'Source Sans 3','Helvetica Neue',sans-serif",
                  fontSize: '1.0rem',
                  fontWeight: 700,
                  color: '#C9963A',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  margin: '8px 0 0',
                  textAlign: 'right',
                }}>
                  — Baba
                </p>
              </motion.div>

              <BanterLoader />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}