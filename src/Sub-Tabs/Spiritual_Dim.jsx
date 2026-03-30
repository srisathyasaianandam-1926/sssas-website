import React, { useState } from 'react';

export default function SpiritualDimension() {
    const [selectedPractice, setSelectedPractice] = useState(null);
    const [isPreviewActive, setIsPreviewActive] = useState(false);

    // Spiritual practices data adapted to the light/gold aesthetic and Phosphor icons
    const practices = [
        {
            id: "meditation",
            title: "Nagar Sankirtan",
            category: "Inner Journey",
            brief: "Collaborative singing that elevates the soul and fills the atmosphere with divine vibrations.",
            detail: "Bhajans are not mere songs but a spiritual bridge to the Divine. By singing the glory of God with a pure heart, students purify the atmosphere and their own minds. This collaborative prayer fosters unity, melting away the ego and filling the soul with divine vibrations and selfless love.",
            img: "/Images/procession2.jpg",
            icon: "ph-flower-lotus"
        },
        {
            id: "yoga",
            title: "Vedam",
            category: "Mind & Body",
            brief: "The rhythmic recitation of ancient verses to purify speech and sharpen mental clarity.",
            detail: "Sri Sathya Sai Baba emphasized Veda chanting as a means to preserve ancient wisdom and promote universal peace. The rhythmic vibrations of these sacred verses purify the speech and sharpen mental clarity. It is a discipline that connects the individual’s breath and intellect with the eternal Cosmic sound.",
            img: "/Images/invocatory vedam.JPG",
            icon: "ph-wind"
        },
        {
            id: "silent-reflection",
            title: "Dhyana",
            category: "Contemplation",
            brief: "A dedicated time and space for quiet contemplation.",
            detail: "In a world filled with constant noise, we prioritize the power of silence. Dedicated periods of silent reflection allow students to process their experiences, listen to their inner voice, and cultivate a deep, self-sustaining emotional resilience.",
            img: "/Images/Ex-Curricular/J7.jpeg",
            icon: "ph-moon-stars"
        },
        {
            id: "mindfulness",
            title: "Suprabhatam",
            category: "Daily Practice",
            brief: "The prayer at dawn, waking up the spirit along with the day to offer the first thoughts to God.",
            detail: "The Suprabhatam is a morning prayer at dawn used to wake the Divinity residing within the student. By offering the day’s first thoughts to God, the student sets a sacred intention for all subsequent actions. It transforms the act of waking up into a conscious spiritual awakening for the day.",
            img: "/Images/Ex-Curricular/Suprabhatam.webp",
            icon: "ph-sun-horizon"
        },
        {
            id: "value-education",
            title: "Brahmarpanam",
            category: "Wisdom",
            brief: "The sanctification of food, turning the simple act of eating into an offering to the Divine.",
            detail: "Brahmarpanam is the sanctification of food, where eating becomes a holy offering rather than a carnal act. By chanting before meals, students recognize God as the provider and the consumer. This ritual ensures the food consumed provides the ethical, moral, and spiritual strength needed for service.",
            img: "/Images/Brahmarpanam.JPG",
            icon: "ph-book-open-text"
        },
        {
            id: "community-service",
            title: "Community Service",
            category: "Action",
            brief: "Finding purpose and connection through selfless action.",
            detail: "Spiritual growth culminates in service to others. By participating in selfless community service (Seva), students experience the joy of giving, dissolving the ego, and realizing the interconnectedness of all life.",
            img: "/Images/gram seva procession.jpg",
            icon: "ph-hand-heart"
        },
        {
            id: "nature-walks",
            title: "Laksharchana",
            category: "Connection",
            brief: "Chanting the Divine Name 100,000 times to purify the mind..",
            detail: "As a core pillar of Bhakti Marga, Laksharchana transforms repetitive chanting into a deep meditative immersion. By focusing on the Lord’s name and form, devotees transcend worldly dualities, sanctifying their thoughts and striving to embody divine ideals in daily life..",
            img: "/Images/Laksyarchana.png",
            icon: "ph-leaf"
        }
    ];

    const currentIndex = practices.findIndex(p => p.id === selectedPractice?.id);

    const openPreview = (practice) => {
        setSelectedPractice(practice);
        setIsPreviewActive(true);
        document.body.style.overflow = 'hidden';
    };

    const closePreview = () => {
        setIsPreviewActive(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setSelectedPractice(null), 500);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const newIdx = (currentIndex - 1 + practices.length) % practices.length;
        setSelectedPractice(practices[newIdx]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const newIdx = (currentIndex + 1) % practices.length;
        setSelectedPractice(practices[newIdx]);
    };

    return (
        <div className="app-wrapper">
            <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css" />
            <link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC:wght@400;700&display=swap" rel="stylesheet" />

            {/* Light Theme Hero Section */}
            <header className="hero-section">
                <div className="hero-bg-blur"></div>
                <div className="hero-content">
                    <h1 className="hero-title serif">
                        Spiritual <br />
                        <span className="gold-text">Dimension</span>
                    </h1>
                    <p className="hero-description">
                        A quiet space to journey inward, discovering the stillness and balance that resides within you. Connect deeply with your true self away from the noise of the world.
                    </p>

                    <div className="hero-scroll-indicator">
                        <div className="scroll-line"></div>
                        <a href="#intro" className="scroll-link">Explore the Path</a>
                    </div>
                </div>
            </header>

            {/* Feature Intro Section - Restyled to match the light aesthetic */}
            <section className="intro-section" id="intro">
                <div className="intro-container">
                    <div className="intro-text-side">
                        <h2 className="intro-title serif">
                            Inner Awareness <br />
                            <span className="gold-text italic">& Well-being</span>
                        </h2>
                        <div className="intro-divider"></div>
                        <p className="intro-desc">
                            At Sri Sathya Sai Anandam School, the devotional dimension is the heartbeat of our daily life. These sacred activities are designed to help each student journey inward and connect with their Divine Inner Self. This spiritual grounding results in a mind that is not only calm and focused but also deeply intuitive. By fostering this early connection with God, we see a natural blossoming of the heart, filled with selfless love, compassion, and a genuine empathy for all of creation..
                        </p>
                    </div>

                    <div className="intro-visual-side group">
                        <div className="intro-img-front">
                            <div className="intro-img" style={{ backgroundImage: "url('/Images/Swami photos/s (1030).jpg')" }}></div>
                            <div className="intro-img-overlay"></div>
                        </div>
                        <div className="intro-img-back group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700">
                            <div className="intro-img" style={{ backgroundImage: "url('/Images/s (1032).jpg')" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Clean Grid Layout (No Overlaps) */}
            <main className="main-container relative" id="practices">
                <div className="section-header custom-header">
                    <h2 className="section-title serif">Paths of Upliftment</h2>
                    <div className="section-line"></div>
                </div>

                <div className="waterfall-grid">
                    {practices.map((practice) => (
                        <div
                            key={practice.id}
                            className="waterfall-item group"
                            onClick={() => openPreview(practice)}
                        >
                            <div className="waterfall-image" style={{ backgroundImage: `url('${practice.img}')` }}></div>

                            <div className="waterfall-overlay">
                                <div className="waterfall-content">
                                    <div className="waterfall-icon">
                                        <i className={`ph ${practice.icon}`}></i>
                                    </div>
                                    <span className="waterfall-tag">{practice.category}</span>
                                    <h4 className="waterfall-title serif">{practice.title}</h4>
                                    <p className="waterfall-brief">{practice.brief}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Light Glassmorphism Preview Modal */}
            <div className={`glass-preview-wrapper ${isPreviewActive ? 'active' : ''}`}>
                <div className="glass-preview-backdrop" onClick={closePreview}></div>

                <div className="glass-preview-container">
                    {selectedPractice && (
                        <>
                            {/* Posh Navigation Arrows */}
                            <button className="nav-arrow nav-prev" onClick={handlePrev} title="Previous Practice">
                                <i className="ph ph-caret-left"></i>
                            </button>

                            <button className="nav-arrow nav-next" onClick={handleNext} title="Next Practice">
                                <i className="ph ph-caret-right"></i>
                            </button>

                            <div className="glass-card">
                                <button className="glass-close-btn" onClick={closePreview} title="Close Preview">
                                    <i className="ph ph-x"></i>
                                </button>

                                <div className="glass-layout">
                                    {/* Visual Pane */}
                                    <div className="glass-image-col">
                                        <div className="glass-image" style={{ backgroundImage: `url('${selectedPractice.img}')` }}></div>
                                    </div>

                                    {/* Text Pane - Fully Scrollable */}
                                    <div className="glass-text-col">
                                        <div className="glass-text-inner">
                                            <span className="glass-tag">{selectedPractice.category}</span>
                                            <h3 className="glass-title serif">{selectedPractice.title}</h3>
                                            <div className="glass-divider"></div>
                                            <p className="glass-brief">{selectedPractice.brief}</p>
                                            <p className="glass-detail">{selectedPractice.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        :root {
          --accent-gold: #D4AF37;
          --bg-light: #f8fafc;
          --text-dark: #0f172a;
          --text-muted: #475569;
          --transition-smooth: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Global Reset */
        *, *::before, *::after {
          box-sizing: border-box;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        body {
          margin: 0;
          scroll-behavior: smooth;
        }

        /* Scoped wrapper styling for Light Theme */
        .app-wrapper {
          font-family: 'Inter', sans-serif;
          background: #f8fafc;
          color: var(--text-dark);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .serif { font-family: 'Playfair Display', serif; }
        .mono { font-family: 'LXGW WenKai Mono TC', monospace; }
        .italic { font-style: italic; }

        /* --- HERO SECTION (Light Theme) --- */
        .hero-section {
          height: 85vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-blur {
          position: absolute;
          inset: 0;
          /* Light overlay on the meditation background image */
          background-image: linear-gradient(to right, rgba(248,250,252,0.95) 20%, rgba(248,250,252,0.4) 100%),
                            url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          filter: blur(4px);
          transform: scale(1.05);
          z-index: 0;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(to bottom, transparent, #f8fafc);
          z-index: 1;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 80rem;
          padding: 0 1.5rem;
          margin: 6rem auto 0 auto;
          text-align: left;
          animation: fadeIn 1.2s ease-out;
        }

        .hero-title {
          color: var(--text-dark);
          font-size: 3.75rem;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .hero-title { font-size: 6rem; }
        }

        .hero-description {
          color: #334155;
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.625;
          max-width: 38rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gold-text {
          color: var(--accent-gold);
          background: linear-gradient(to right, #b58500, #D4AF37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-scroll-indicator {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .scroll-line {
          height: 1px;
          width: 5rem;
          background-color: #cbd5e1;
        }

        .scroll-link {
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.3s;
        }

        .scroll-link:hover { color: var(--text-dark); }

        /* --- FEATURE INTRO SECTION (Light Theme) --- */
        .intro-section {
          max-width: 80rem;
          margin: 4rem auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .intro-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 960px) {
          .intro-container {
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
          }
        }

        .intro-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin: 0 0 1.5rem 0;
          color: var(--text-dark);
        }

        @media (min-width: 768px) {
          .intro-title { font-size: 3.5rem; }
        }

        .intro-divider {
          height: 2px;
          width: 4rem;
          background: var(--accent-gold);
          margin-bottom: 2rem;
        }

        .intro-desc {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.8;
          font-weight: 300;
        }

        .intro-visual-side {
          position: relative;
          height: 450px;
          width: 100%;
        }

        .intro-img-back {
          position: absolute;
          top: 0;
          right: 0;
          width: 80%;
          height: 320px;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
        }

        .intro-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .intro-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top right, rgba(255, 255, 255, 0.4), transparent);
        }

        .intro-img-front {
          position: absolute;
          bottom: 20px;
          left: 0;
          width: 65%;
          height: 280px;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.15);
          border: 4px solid #f8fafc;
          z-index: 10;
        }

        /* --- GRID LAYOUT (NO OVERLAPS) --- */
        .main-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 4rem 1.5rem 8rem 1.5rem;
          position: relative;
          z-index: 2;
        }

        .custom-header {
          margin-top: 0;
          margin-bottom: 4rem;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .section-title {
          font-size: 1.875rem;
          color: var(--text-dark);
        }

        .section-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
        }

        .waterfall-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem; /* Clean, consistent gap ensures no overlapping */
          align-items: start;
        }

        .waterfall-item {
          position: relative;
          height: 420px;
          border-radius: 2rem;
          overflow: hidden;
          cursor: pointer;
          background: #ffffff;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        .waterfall-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          z-index: 10;
        }

        .waterfall-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 1s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .waterfall-item:hover .waterfall-image {
          transform: scale(1.08);
        }

        /* Light Theme Card Overlay */
        .waterfall-overlay {
          position: absolute;
          inset: 0;
          /* Strong white gradient for high legibility of dark text */
          background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 20%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem;
          transition: background 0.4s ease;
        }

        .waterfall-item:hover .waterfall-overlay {
          background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 30%, transparent 100%);
        }

        .waterfall-content {
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .waterfall-item:hover .waterfall-content {
          transform: translateY(0);
        }

        .waterfall-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
        }

        .waterfall-item:hover .waterfall-icon {
          background: var(--accent-gold);
          border-color: var(--accent-gold);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }

        .waterfall-tag {
          font-size: 0.75rem;
          font-family: 'LXGW WenKai Mono TC', monospace;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
          display: block;
          font-weight: 700;
        }

        .waterfall-title {
          color: var(--text-dark);
          font-size: 1.75rem;
          margin: 0 0 0.75rem 0;
          line-height: 1.2;
        }

        .waterfall-brief {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .waterfall-item:hover .waterfall-brief {
          opacity: 1;
        }

        /* --- LIGHT GLASSMORPHISM PREVIEW (FULLY RESPONSIVE) --- */
        .glass-preview-wrapper {
          position: fixed;
          inset: 0;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .glass-preview-wrapper.active {
          pointer-events: auto;
        }

        .glass-preview-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.7); /* Light frosted backdrop */
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .glass-preview-wrapper.active .glass-preview-backdrop {
          opacity: 1;
        }

        .glass-preview-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 950px;
          padding: 85px 3.5rem 2rem 3.5rem;
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .glass-preview-wrapper.active .glass-preview-container {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Navigation Arrows (Light Theme) */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          color: rgba(0, 0, 0, 0.3);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          padding: 0;
        }

        .nav-arrow:hover {
          color: var(--accent-gold);
          transform: translateY(-50%) scale(1.15);
        }

        .nav-prev { left: -1rem; }
        .nav-next { right: -1rem; }

        /* The Premium Light Glass Card */
        .glass-card {
          position: relative;
          width: 100%;
          max-height: calc(100vh - 120px);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(30px) saturate(120%);
          -webkit-backdrop-filter: blur(30px) saturate(120%);
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1),
                      inset 0 0 0 1px rgba(255, 255, 255, 0.8);
          display: flex;
          flex-direction: column;
        }

        .glass-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          color: var(--text-dark);
          border: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .glass-close-btn:hover {
          background: var(--accent-gold);
          color: white;
          border-color: var(--accent-gold);
          transform: rotate(90deg);
        }

        .glass-layout {
          display: flex;
          flex-direction: row;
          flex: 1;
          overflow: hidden;
        }

        .glass-image-col {
          width: 45%;
          position: relative;
          padding: 1.25rem;
        }

        .glass-image {
          width: 100%;
          height: 100%;
          border-radius: 1.25rem;
          background-size: cover;
          background-position: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .glass-text-col {
          width: 55%;
          padding: 2.5rem 2.5rem 2.5rem 1.5rem;
          display: flex;
          align-items: flex-start;
          overflow-y: auto;
        }

        .glass-text-inner {
          width: 100%;
        }

        .glass-tag {
          display: inline-block;
          padding: 4px 12px;
          border: 1px solid rgba(212, 175, 55, 0.5);
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold);
          border-radius: 50px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .glass-title {
          font-size: 2.25rem;
          line-height: 1.15;
          margin: 0 0 1rem 0;
          color: var(--text-dark);
        }

        .glass-divider {
          width: 3rem;
          height: 3px;
          background: var(--accent-gold);
          margin-bottom: 1.5rem;
          border-radius: 2px;
        }

        .glass-brief {
          font-size: 1.05rem;
          font-weight: 400;
          color: #334155;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .glass-detail {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.7;
          margin: 0;
        }

        /* --- RESPONSIVE ADJUSTMENTS FOR MOBILE/TABLETS --- */
        @media (max-width: 960px) {
         
          .glass-preview-wrapper {
            align-items: flex-start;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .glass-preview-container {
            padding: 85px 1rem 6rem 1rem;
            margin: 0 auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
         
          .glass-card {
            max-height: none;
            overflow: visible;
          }

          .glass-layout {
            flex-direction: column;
            height: auto;
          }

          .glass-image-col {
            width: 100%;
            height: 240px;
            flex-shrink: 0;
            padding: 1rem 1rem 0 1rem;
          }

          .glass-text-col {
            width: 100%;
            height: auto;
            flex-shrink: 0;
            padding: 1.5rem 1.5rem 2rem 1.5rem;
            overflow-y: visible;
          }
         
          .glass-title {
            font-size: 1.8rem;
          }

          .glass-brief { font-size: 0.95rem; }
          .glass-detail { font-size: 0.85rem; }

          .nav-arrow {
            position: fixed;
            top: auto;
            bottom: 1.5rem;
            transform: none;
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(0,0,0,0.1);
            border-radius: 50%;
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            color: var(--text-dark);
          }

          .nav-prev { left: 1.5rem; }
          .nav-next { right: 1.5rem; }

          .nav-arrow:hover {
            transform: scale(1.1);
            color: var(--accent-gold);
          }
        }
      ` }} />
        </div>
    );
}
