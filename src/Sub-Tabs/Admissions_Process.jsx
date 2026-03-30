import React, { useState, useEffect } from 'react';
import {
    ChevronDown,
    CheckCircle,
    FileText,
    Map,
    PenTool,
    Users,
    GraduationCap,
    CreditCard,
    Home,
    Compass,
    FileBadge,
    HeartPulse,
    Camera,
    UserSquare,
    Award,
    FileStack
} from 'lucide-react';

export default function App() {
    const [hoveredStep, setHoveredStep] = useState(null);
    const [completedDocs, setCompletedDocs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVaultOpen, setIsVaultOpen] = useState(false);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        setIsLoaded(true);
        return () => document.head.removeChild(link);
    }, []);

    const toggleDocument = (id) => {
        setCompletedDocs(prev =>
            prev.includes(id) ? prev.filter(docId => docId !== id) : [...prev, id]
        );
    };

    const journeySteps = [
        { id: 1, title: 'Inquiry & Registration', icon: FileText, desc: 'Submit your initial application and express interest.' },
        { id: 2, title: 'Campus Tour', icon: Map, desc: 'Experience our world-class facilities first-hand.' },
        { id: 3, title: 'Entrance Assessment', icon: PenTool, desc: 'A holistic evaluation of academic and creative potential.' },
        { id: 4, title: 'Interactive Session', icon: Users, desc: 'Meet with our faculty and pastoral care team.' },
        { id: 5, title: 'Offer of Admission', icon: GraduationCap, desc: 'Receive your formal invitation to join our community.' },
        { id: 6, title: 'Fee Payment', icon: CreditCard, desc: 'Secure your place by completing the financial steps.' },
        { id: 7, title: 'Hostel Allocation', icon: Home, desc: 'Get assigned to your customized, comfortable dorm.' },
        { id: 8, title: 'Orientation', icon: Compass, desc: 'Begin your journey with a comprehensive welcome week.' },
    ];

    const documents = [
        { id: 'doc1', title: 'Birth Certificate', icon: FileBadge },
        { id: 'doc2', title: 'Academic Records', icon: FileStack },
        { id: 'doc3', title: 'Transfer Certificate', icon: FileText },
        { id: 'doc4', title: 'Medical History', icon: HeartPulse },
        { id: 'doc5', title: 'Passport Photographs', icon: Camera },
        { id: 'doc6', title: 'Guardian ID Proof', icon: UserSquare },
        { id: 'doc7', title: 'Character Certificate', icon: Award },
        { id: 'doc8', title: 'Migration Certificate', icon: Map },
    ];

    const pdfDocuments = [
        { id: 'pdf1', name: 'Birth certificate (original + 2 copies)' },
        { id: 'pdf2', name: 'Previous school academic records / report cards' },
        { id: 'pdf3', name: 'Transfer certificate (for Class II and above)' },
        { id: 'pdf4', name: 'Aadhaar card / address proof' },
        { id: 'pdf5', name: '6 recent passport-size photographs' },
        { id: 'pdf6', name: 'Medical records and immunisation certificate' },
        { id: 'pdf7', name: 'Caste certificate (if applicable)' },
        { id: 'pdf8', name: 'Parent / guardian identity proof' },
    ];

    return (
        <div className="page-root">

            {/* ── 1. Hero Section ── */}
            <section className="hero-section">
                <div className="hero-bg-image"></div>
                <div className="hero-overlay-bottom"></div>
                <div className="hero-overlay-top"></div>

                <div className={`hero-content ${isLoaded ? 'hero-content--visible' : 'hero-content--hidden'}`}>
                    <h1 className="hero-heading animate-fade-in-up delay-100">
                        A Home Away <br />
                        <span className="hero-heading-accent italic font-semibold">From Home</span>
                    </h1>

                    <p className="hero-subtext animate-fade-in-up delay-300">
                        Discover a nurturing environment where academic excellence seamlessly blends with
                        holistic pastoral care. Your child's transformative journey begins here.
                    </p>

                    <div className="hero-scroll-indicator animate-fade-in-up delay-500">
                        <span className="scroll-label">Explore Campus Life</span>
                        <div className="scroll-line">
                            <div className="scroll-line-inner"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Spacer ── */}
            <div className="section-spacer"></div>

            {/* ── Dark Wrapper ── */}
            <div className="dark-wrapper">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>

                {/* ── 2. Admission Journey ── */}
                <section className="journey-section">
                    <div className="journey-header">
                        <h2 className="section-title">The Admission Journey</h2>
                        <p className="section-subtitle">
                            A seamless, transparent, and supportive 8-step process designed to welcome you
                            into our global community.
                        </p>
                    </div>

                    <div className="journey-grid">
                        {journeySteps.map((step) => {
                            const Icon = step.icon;
                            const isHovered = hoveredStep === step.id;
                            const isOtherHovered = hoveredStep !== null && hoveredStep !== step.id;

                            return (
                                <div
                                    key={step.id}
                                    onMouseEnter={() => setHoveredStep(step.id)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                    className={`
                    journey-card
                    ${isHovered ? 'journey-card--hovered' : ''}
                    ${isOtherHovered ? 'journey-card--dimmed' : ''}
                  `}
                                >
                                    <div className={`journey-card-number ${isHovered ? 'journey-card-number--hovered' : ''}`}>
                                        0{step.id}
                                    </div>

                                    <div className={`journey-card-icon ${isHovered ? 'journey-card-icon--hovered' : ''}`}>
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="journey-card-title">{step.title}</h3>
                                    <p className="journey-card-desc">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* ── 3. Document Vault ── */}
            <section className="vault-section">
                <div className="vault-mesh-bg"></div>
                <div className="vault-fade-overlay"></div>

                <div className="vault-header">
                    <h2 className="vault-title">Document Vault</h2>
                    <p className="vault-subtitle">Access required admission files</p>
                </div>

                <div
                    className="vault-trigger"
                    onMouseEnter={() => setIsVaultOpen(true)}
                    onMouseLeave={() => setIsVaultOpen(false)}
                >
                    {/* Ambient pulse behind folder */}
                    {!isVaultOpen && <div className="vault-ambient-pulse"></div>}

                    {/* Folder icon */}
                    <div className={`vault-folder ${isVaultOpen ? 'vault-folder--open' : ''}`}>
                        <div className="vault-folder-tab"></div>
                        <FileStack className="vault-folder-icon" size={28} />
                    </div>

                    {/* Hover label */}
                    <div className={`vault-hover-label ${isVaultOpen ? 'vault-hover-label--hidden' : ''}`}>
                        Hover to Open
                    </div>

                    {/* ── File Manager Panel ── */}
                    <div className={`vault-panel ${isVaultOpen ? 'vault-panel--open' : 'vault-panel--closed'}`}>

                        {/* Panel header / title bar */}
                        <div className="vault-panel-header">
                            <div className="vault-panel-header-left">
                                <div className="vault-traffic-lights">
                                    <div className="traffic-light traffic-light--red"></div>
                                    <div className="traffic-light traffic-light--yellow"></div>
                                    <div className="traffic-light traffic-light--green"></div>
                                </div>
                                <div className="vault-path">root/admissions/documents/</div>
                            </div>
                            <div className="vault-panel-header-right">
                                <span>8 ITEMS</span>
                                <span className="vault-dot"></span>
                                <span className="vault-secure-badge">
                                    <CheckCircle size={12} className="vault-secure-icon" /> SECURE
                                </span>
                            </div>
                        </div>

                        {/* Column headers */}
                        <div className="vault-col-headers">
                            <div className="vault-col-type">Type</div>
                            <div>Document Name</div>
                            <div className="vault-col-format">Format</div>
                            <div className="vault-col-status">Status</div>
                        </div>

                        {/* Document rows */}
                        <div className="vault-rows">
                            {pdfDocuments.map((doc, i) => (
                                <div
                                    key={doc.id}
                                    className="vault-row"
                                    style={{ transitionDelay: `${isVaultOpen ? i * 40 + 150 : 0}ms` }}
                                >
                                    {/* PDF icon */}
                                    <div className="vault-row-icon-wrap">
                                        <div className="pdf-icon">
                                            <div className="pdf-icon-corner"></div>
                                            <div className="pdf-icon-badge">
                                                <span className="pdf-icon-label">PDF</span>
                                            </div>
                                        </div>
                                    </div>

                                    <span className="vault-row-name">{doc.name}</span>

                                    <div className="vault-row-format">Document</div>

                                    <div className="vault-row-status-wrap">
                                        <span className="vault-row-status">Required</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Global Styles ── */}
            <style>{`

        /* ─── Fonts ─── */
        .font-serif { font-family: 'Playfair Display', serif; }

        /* ─── Page Root ─── */
        .page-root {
          min-height: 100vh;
          background: #0a0a0a;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        .page-root ::selection {
          background: #d4af37;
          color: #0a0a0a;
        }

        /* ─── Hero ─── */
        .hero-section {
          position: relative;
          height: 85vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          filter: blur(2px);
          transform: scale(1.05);
        }
        .hero-overlay-bottom {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.6), transparent);
        }
        .hero-overlay-top {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), transparent);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 64rem;
          margin: 0 auto;
          width: 100%;
          transition: opacity 1s ease;
        }
        .hero-content--visible { opacity: 1; }
        .hero-content--hidden  { opacity: 0; }

        .hero-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5rem);
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 1.5rem;
        }
        .hero-heading-accent {
          background: linear-gradient(to right, #f3d568, #e2c14c, #d4af37);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtext {
          font-weight: 300;
          color: rgba(229,231,235,1);
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 42rem;
          margin: 0 auto 4rem;
          line-height: 1.7;
        }
        .hero-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .scroll-label {
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .scroll-line {
          height: 4rem;
          width: 1px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          position: relative;
          overflow: hidden;
        }
        .scroll-line-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: #fff;
          animation: slideDown 2s ease-in-out infinite;
        }

        /* ─── Spacer ─── */
        .section-spacer {
          height: 6rem;
          background: #0a0a0a;
          position: relative;
          z-index: 10;
        }

        /* ─── Dark Wrapper ─── */
        .dark-wrapper {
          background: #0a0a0a;
          color: #cbd5e1;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        /* ─── Animated Blobs ─── */
        .blob {
          position: absolute;
          filter: blur(60px);
          opacity: 0.15;
          z-index: 0;
          border-radius: 50%;
          animation: drift 20s infinite alternate ease-in-out;
        }
        .blob-1 { top: -10%;  left: -10%; width: 40vw; height: 40vw; background: #3b82f6; }
        .blob-2 { bottom: -20%; right: -10%; width: 50vw; height: 50vw; background: #facc15; animation-delay: -5s; }
        .blob-3 { top: 40%;  left: 60%; width: 30vw; height: 30vw; background: #22c55e; animation-delay: -10s; }

        /* ─── Journey Section ─── */
        .journey-section {
          position: relative;
          z-index: 10;
          padding: 6rem 1.5rem;
          max-width: 80rem;
          margin: 0 auto;
        }
        .journey-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #fff;
          margin-bottom: 1rem;
        }
        .section-subtitle {
          color: #94a3b8;
          font-weight: 300;
          max-width: 42rem;
          margin: 0 auto;
        }
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }
        @media (min-width: 768px)  { .journey-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .journey-grid { grid-template-columns: repeat(4, 1fr); } }

        /* ─── Journey Card ─── */
        .journey-card {
          position: relative;
          cursor: pointer;
          border-radius: 1rem;
          padding: 2rem;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          transition: all 0.5s cubic-bezier(0.2,0.8,0.2,1);
          z-index: 10;
        }
        .journey-card--hovered {
          transform: scale(1.05);
          z-index: 20;
          box-shadow: 0 20px 40px rgba(212,175,55,0.15);
          background: rgba(255,255,255,0.1);
          border-color: rgba(243,213,104,0.5);
        }
        .journey-card--dimmed {
          opacity: 0.5;
          filter: blur(3px);
        }

        .journey-card-number {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          color: rgba(255,255,255,0.05);
          transition: color 0.3s ease;
        }
        .journey-card-number--hovered { color: rgba(212,175,55,0.2); }

        .journey-card-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          color: #f3d568;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .journey-card-icon--hovered {
          background: #f3d568;
          color: #0a0a0a;
        }

        .journey-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #fff;
        }
        .journey-card-desc {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.6;
          font-weight: 300;
        }

        /* ─── Vault Section ─── */
        .vault-section {
          position: relative;
          width: 100%;
          padding: 8rem 0;
          background: #050b14;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 800px;
        }
        .vault-mesh-bg {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: panMesh 40s linear infinite;
        }
        .vault-fade-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, #050b14, transparent, #050b14);
          pointer-events: none;
        }

        .vault-header {
          position: relative;
          z-index: 10;
          text-align: center;
          pointer-events: none;
          margin-bottom: 4rem;
        }
        .vault-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #fff;
          margin-bottom: 0.75rem;
          letter-spacing: 0.02em;
        }
        .vault-subtitle {
          color: rgba(147,197,253,0.6);
          font-family: monospace;
          font-size: clamp(0.65rem, 1.5vw, 0.8rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        /* ─── Vault Trigger (hover area) ─── */
        .vault-trigger {
          position: relative;
          z-index: 40;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .vault-ambient-pulse {
          position: absolute;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 5rem;
          height: 5rem;
          background: #d4af37;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.2;
          animation: pulse 2s ease-in-out infinite;
          pointer-events: none;
        }

        /* ─── Folder Icon ─── */
        .vault-folder {
          position: relative;
          width: 5rem;
          height: 3.5rem;
          background: rgba(212,175,55,0.9);
          backdrop-filter: blur(12px);
          border-radius: 0.5rem;
          box-shadow: 0 0 30px rgba(212,175,55,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(243,213,104,0.6);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          z-index: 20;
        }
        .vault-folder:hover,
        .vault-folder--open {
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(212,175,55,0.4);
        }
        .vault-folder-tab {
          position: absolute;
          top: -0.75rem;
          left: 0;
          width: 50%;
          height: 1rem;
          background: rgba(192,157,46,0.95);
          border-radius: 0.375rem 0.375rem 0 0;
        }
        .vault-folder-icon {
          position: relative;
          z-index: 10;
          color: #050b14;
        }

        .vault-hover-label {
          margin-top: 1.5rem;
          color: rgba(212,175,55,0.8);
          font-family: monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          transition: opacity 0.3s ease;
        }
        .vault-hover-label--hidden { opacity: 0; }

        /* ─── Vault Panel (file manager) ─── */
        .vault-panel {
          position: absolute;
          top: 6rem;
          left: 50%;
          transform-origin: top center;
          width: 90vw;
          max-width: 64rem;
          background: #121212;
          border-radius: 0.75rem;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: opacity 0.5s cubic-bezier(0.16,1,0.3,1),
                      transform 0.5s cubic-bezier(0.16,1,0.3,1);
          z-index: 10;
        }
        .vault-panel--open {
          opacity: 1;
          transform: translateX(-50%) scaleY(1) translateY(0);
          pointer-events: auto;
        }
        .vault-panel--closed {
          opacity: 0;
          transform: translateX(-50%) scaleY(0.95) translateY(-1rem);
          pointer-events: none;
        }

        /* ─── Panel Header ─── */
        .vault-panel-header {
          background: #1a1a1a;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .vault-panel-header {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .vault-panel-header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .vault-traffic-lights { display: flex; gap: 0.375rem; }
        .traffic-light {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
        }
        .traffic-light--red    { background: rgba(229,57,53,0.8); }
        .traffic-light--yellow { background: rgba(251,192,45,0.8); }
        .traffic-light--green  { background: rgba(67,160,71,0.8); }
        .vault-path {
          color: rgba(255,255,255,0.4);
          font-family: monospace;
          font-size: 0.75rem;
          margin-left: 1rem;
          user-select: none;
        }
        .vault-panel-header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          font-family: monospace;
          color: rgba(255,255,255,0.3);
        }
        .vault-dot {
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
        }
        .vault-secure-badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .vault-secure-icon { color: rgba(16,185,129,0.8); }

        /* ─── Column Headers ─── */
        .vault-col-headers {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          gap: 1.5rem;
          padding: 0.75rem 2rem;
          background: rgba(10,10,10,0.5);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 0.625rem;
          font-family: monospace;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          user-select: none;
        }
        .vault-col-type   { width: 2.5rem; text-align: center; }
        .vault-col-format { display: none; width: 8rem; }
        .vault-col-status { width: 6rem; text-align: right; }
        @media (min-width: 768px) { .vault-col-format { display: block; } }

        /* ─── Document Rows ─── */
        .vault-rows {
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
          background: #121212;
        }
        .vault-row {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          gap: 1.5rem;
          padding: 0.75rem 1.5rem;
          align-items: center;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background 0.3s ease, opacity 0.4s ease, transform 0.4s ease;
        }
        .vault-row:hover { background: rgba(255,255,255,0.05); }

        /* ─── PDF File Icon ─── */
        .vault-row-icon-wrap {
          width: 2.5rem;
          display: flex;
          justify-content: center;
          flex-shrink: 0;
        }
        .pdf-icon {
          position: relative;
          width: 2rem;
          height: 2.5rem;
          background: #f8f9fa;
          border-radius: 0.125rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }
        .vault-row:hover .pdf-icon { transform: scale(1.05); }
        .pdf-icon-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 0.625rem;
          height: 0.625rem;
          background: #e9ecef;
          border-bottom: 1px solid rgba(255,255,255,0.5);
          border-left:  1px solid rgba(255,255,255,0.5);
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
        .pdf-icon-badge {
          width: 100%;
          background: #E53935;
          padding: 0.1875rem 0;
          margin-top: 0.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .pdf-icon-label {
          font-size: 6.5px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.15em;
          line-height: 1;
        }

        /* ─── Row content ─── */
        .vault-row-name {
          color: #d1d5db;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
          font-weight: 300;
          letter-spacing: 0.02em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        .vault-row:hover .vault-row-name { color: #fff; }

        .vault-row-format {
          display: none;
          width: 8rem;
          color: rgba(255,255,255,0.3);
          font-size: 0.75rem;
          font-family: monospace;
          transition: color 0.3s ease;
        }
        .vault-row:hover .vault-row-format { color: rgba(255,255,255,0.5); }
        @media (min-width: 768px) { .vault-row-format { display: block; } }

        .vault-row-status-wrap {
          width: 6rem;
          display: flex;
          justify-content: flex-end;
        }
        .vault-row-status {
          font-size: 0.5625rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 0.25rem 0.625rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        .vault-row:hover .vault-row-status {
          border-color: rgba(212,175,55,0.4);
          color: #d4af37;
          background: rgba(212,175,55,0.1);
        }

        /* ─── Keyframe Animations ─── */
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s cubic-bezier(0.2,0.8,0.2,1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          0%   { transform: translateY(-100%); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        @keyframes drift {
          0%   { transform: translate(0,0) scale(1); }
          50%  { transform: translate(30px,-50px) scale(1.1); }
          100% { transform: translate(-20px,20px) scale(0.9); }
        }
        @keyframes panMesh {
          0%   { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes pulse {
          0%,100% { opacity: 0.2; }
          50%      { opacity: 0.4; }
        }
      `}</style>
        </div>
    );
}