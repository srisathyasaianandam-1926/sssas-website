import React, { useState } from 'react';

export default function Educators() {
    const [selectedEducator, setSelectedEducator] = useState(null);
    const [isPreviewActive, setIsPreviewActive] = useState(false);

    // Curated content for Educators / Mentors
    const educators = [
        {
            id: 'dr-ramesh',
            name: "Dr. Ramesh Kumar",
            role: "Principal & Chief Warden",
            department: "Administration",
            philosophy: "Education without character is like a flower without fragrance.",
            bio: "With over 30 years of experience in educational administration, Dr. Kumar leads the institution with a perfect blend of strict discipline and profound paternal love. He ensures that the hostel environment remains conducive to both rigorous academic pursuit and deep spiritual growth.",
            qualifications: "Ph.D. in Education Management, M.A. in Value Education",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
            icon: "ph-bank"
        },
        {
            id: 'prof-anand',
            name: "Prof. Anand Sharma",
            role: "Head of Sciences",
            department: "Physics & Chemistry",
            philosophy: "Science explains the 'how', spirituality reveals the 'why'.",
            bio: "Prof. Sharma is renowned for making complex scientific concepts accessible and fascinating. Beyond the laboratory, he is a dedicated mentor in the hostel, often found helping students with late-night study sessions and encouraging analytical thinking.",
            qualifications: "M.Sc. Physics, Post-Doc in Applied Sciences",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
            icon: "ph-flask"
        },
        {
            id: 'sri-venkatesh',
            name: "Sri Venkatesh Iyer",
            role: "Spiritual Guide",
            department: "Arts & Culture",
            philosophy: "True art is an offering to the divine.",
            bio: "A master of traditional Indian arts and Vedic chanting, Sri Iyer is the soul of the hostel's cultural life. He guides the Altar and Decoration departments, teaching students to find inner peace through devotional music and classical arts.",
            qualifications: "Acharya in Vedic Studies, M.A. Fine Arts",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
            icon: "ph-hands-praying"
        },
        {
            id: 'dr-radhakrishnan',
            name: "Dr. S. Radhakrishnan",
            role: "Senior Professor",
            department: "Mathematics",
            philosophy: "Mathematics is the language with which the universe was written.",
            bio: "Known for his rigorous academic standards, Dr. Radhakrishnan instills a love for logic and problem-solving. He treats his students as his own children, always pushing them to realize their highest intellectual potential.",
            qualifications: "Ph.D. in Pure Mathematics",
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            icon: "ph-function"
        },
        {
            id: 'mr-karthik',
            name: "Mr. Karthik Reddy",
            role: "Director of Physical Education",
            department: "Sports & Athletics",
            philosophy: "A healthy mind can only reside in a healthy body.",
            bio: "Mr. Reddy oversees all sports and fitness initiatives. Under his dynamic leadership, the Annual Sports Meet has become a spectacular showcase of talent. He teaches students that teamwork and sportsmanship are vital life skills.",
            qualifications: "M.P.Ed., Certified National Coach",
            img: "https://images.unsplash.com/photo-1526510747491-58f1e63ec948?auto=format&fit=crop&q=80&w=800",
            icon: "ph-whistle"
        },
        {
            id: 'dr-narayan',
            name: "Dr. R. Narayan",
            role: "Professor of Literature",
            department: "Languages",
            philosophy: "Words have the power to heal, inspire, and transform the world.",
            bio: "Dr. Narayan's classes are immersive journeys into the world of literature. In the hostel, he frequently organizes poetry readings, debates, and public speaking workshops, helping students articulate their thoughts with confidence and grace.",
            qualifications: "Ph.D. in English Literature",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
            icon: "ph-book-open-text"
        }
    ];

    const currentIndex = educators.findIndex(e => e.id === selectedEducator?.id);

    const openPreview = (educator) => {
        setSelectedEducator(educator);
        setIsPreviewActive(true);
        document.body.style.overflow = 'hidden';
    };

    const closePreview = () => {
        setIsPreviewActive(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setSelectedEducator(null), 500);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const newIdx = (currentIndex - 1 + educators.length) % educators.length;
        setSelectedEducator(educators[newIdx]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const newIdx = (currentIndex + 1) % educators.length;
        setSelectedEducator(educators[newIdx]);
    };

    return (
        <div className="app-wrapper">
            <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css" />
            <link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC:wght@400;700&display=swap" rel="stylesheet" />

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-bg-blur"></div>
                <div className="hero-content">
                    <h1 className="hero-title serif">
                        Guiding <br />
                        <span className="gold-text">Lights</span>
                    </h1>
                    <p className="hero-description">
                        Our educators are more than teachers; they are mentors, guardians, and spiritual guides. They dedicate their lives to nurturing the character, intellect, and physical well-being of every student in the hostel.
                    </p>

                    <div className="hero-scroll-indicator">
                        <div className="scroll-line"></div>
                        <a href="#educators" className="scroll-link">Meet the Mentors</a>
                    </div>
                </div>
            </header>

            {/* Main Content - Portrait Profile Grid */}
            <main className="main-container relative" id="educators">

                <div className="section-header custom-header">
                    <h2 className="section-title serif">Our Esteemed Mentors</h2>
                    <div className="section-line"></div>
                </div>

                <div className="educator-grid">
                    {educators.map((educator) => (
                        <div
                            key={educator.id}
                            className="educator-card group"
                            onClick={() => openPreview(educator)}
                        >
                            <div className="educator-image" style={{ backgroundImage: `url('${educator.img}')` }}></div>

                            {/* Hover Reveal Overlay */}
                            <div className="educator-hover-overlay">
                                <i className="ph ph-quotes text-3xl mb-4 text-gold opacity-50"></i>
                                <p className="educator-philosophy serif">"{educator.philosophy}"</p>
                                <span className="educator-view-btn">View Profile <i className="ph ph-arrow-right"></i></span>
                            </div>

                            {/* Default Bottom Overlay */}
                            <div className="educator-info-overlay">
                                <span className="educator-dept">{educator.department}</span>
                                <h4 className="educator-name serif">{educator.name}</h4>
                                <p className="educator-role">{educator.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Glassmorphism Preview Modal */}
            <div className={`glass-preview-wrapper ${isPreviewActive ? 'active' : ''}`}>
                <div className="glass-preview-backdrop" onClick={closePreview}></div>

                <div className="glass-preview-container">
                    {selectedEducator && (
                        <>
                            {/* Navigation Arrows */}
                            <button className="nav-arrow nav-prev" onClick={handlePrev} title="Previous Educator">
                                <i className="ph ph-caret-left"></i>
                            </button>

                            <button className="nav-arrow nav-next" onClick={handleNext} title="Next Educator">
                                <i className="ph ph-caret-right"></i>
                            </button>

                            <div className="glass-card">
                                <button className="glass-close-btn" onClick={closePreview} title="Close Profile">
                                    <i className="ph ph-x"></i>
                                </button>

                                <div className="glass-layout">
                                    {/* Visual Pane */}
                                    <div className="glass-image-col portrait-col">
                                        <div className="glass-image" style={{ backgroundImage: `url('${selectedEducator.img}')` }}></div>
                                        <div className="glass-icon-badge">
                                            <i className={`ph ${selectedEducator.icon}`}></i>
                                        </div>
                                    </div>

                                    {/* Text Pane */}
                                    <div className="glass-text-col">
                                        <div className="glass-text-inner">
                                            <span className="glass-tag">{selectedEducator.department}</span>
                                            <h3 className="glass-title serif">{selectedEducator.name}</h3>
                                            <div className="glass-divider"></div>

                                            <h4 className="glass-subtitle">{selectedEducator.role}</h4>

                                            <div className="glass-quote-box">
                                                <i className="ph ph-quotes"></i>
                                                <p className="serif">"{selectedEducator.philosophy}"</p>
                                            </div>

                                            <p className="glass-detail">{selectedEducator.bio}</p>

                                            <div className="glass-creds">
                                                <i className="ph ph-graduation-cap"></i>
                                                <span>{selectedEducator.qualifications}</span>
                                            </div>
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
          --bg-light: #fdfdfd;
          --text-dark: #1a1a1a;
          --transition-smooth: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

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

        .app-wrapper {
          font-family: 'Inter', sans-serif;
          background: radial-gradient(circle at top right, #111a28 0%, #030303 100%); 
          background-attachment: fixed;
          background-color: #030303; 
          color: white;
          min-height: 100vh;
          overflow-x: hidden; 
        }

        .serif { font-family: 'Playfair Display', serif; }
        .mono { font-family: 'LXGW WenKai Mono TC', monospace; }
        .text-gold { color: var(--accent-gold); }

        /* --- HERO SECTION --- */
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
          background-image: linear-gradient(to right, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.4) 100%), 
                            url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center 20%;
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
          height: 250px;
          background: linear-gradient(to bottom, transparent, #030303);
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
          color: white;
          font-size: 3.75rem;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .hero-title { font-size: 6rem; }
        }

        .hero-description {
          color: rgba(255, 255, 255, 0.85);
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
          background: linear-gradient(to right, #f3d568, #d4af37);
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
          background-color: rgba(255, 255, 255, 0.3);
        }

        .scroll-link {
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.3s;
        }

        .scroll-link:hover { color: white; }

        /* --- MAIN CONTENT & PORTRAIT GRID --- */
        .main-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 6rem 1.5rem 8rem 1.5rem;
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
          color: white;
        }

        .section-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(to right, rgba(255,255,255,0.2), transparent);
        }

        .educator-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          width: 100%;
        }

        @media (max-width: 768px) {
          .educator-grid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 1.5rem;
          }
        }

        /* Educator Card - Portrait Aspect Ratio */
        .educator-card {
          position: relative;
          aspect-ratio: 3 / 4; /* Portrait ratio for mentors */
          border-radius: 1.5rem;
          overflow: hidden;
          cursor: pointer;
          background: #111;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        }

        .educator-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.8);
        }

        .educator-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center top;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .educator-card:hover .educator-image {
          transform: scale(1.08); 
        }

        /* Default Info Overlay (Bottom) */
        .educator-info-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .educator-dept {
          font-family: 'LXGW WenKai Mono TC', monospace;
          font-size: 0.75rem;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
        }

        .educator-name {
          color: white;
          font-size: 1.75rem;
          margin: 0 0 0.25rem 0;
          line-height: 1.2;
        }

        .educator-role {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          margin: 0;
        }

        /* Hover Reveal Overlay (Full Cover) */
        .educator-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11, 19, 43, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2.5rem;
          text-align: center;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
          z-index: 3;
        }

        .educator-card:hover .educator-hover-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .educator-card:hover .educator-info-overlay {
          opacity: 0;
        }

        .educator-philosophy {
          color: white;
          font-size: 1.4rem;
          line-height: 1.4;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .educator-view-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-gold);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: bold;
          border-bottom: 1px solid var(--accent-gold);
          padding-bottom: 2px;
        }

        /* --- GLASSMORPHISM PREVIEW --- */
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
          background: rgba(3, 3, 3, 0.6);
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
          max-width: 1100px;
          padding: 2rem 3.5rem; 
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-preview-wrapper.active .glass-preview-container {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Navigation Arrows */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          color: rgba(255, 255, 255, 0.4);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .nav-arrow:hover {
          color: var(--accent-gold);
          transform: translateY(-50%) scale(1.15);
        }

        .nav-prev { left: -1.5rem; }
        .nav-next { right: -1.5rem; }

        /* The Premium Glass Card */
        .glass-card {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.01));
          backdrop-filter: blur(30px) saturate(120%);
          -webkit-backdrop-filter: blur(30px) saturate(120%);
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 
                      inset 0 0 0 1px rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .glass-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .glass-close-btn:hover {
          background: var(--accent-gold);
          color: #000;
          border-color: var(--accent-gold);
          transform: rotate(90deg);
        }

        .glass-layout {
          display: flex;
          flex-direction: row;
          height: 100%;
          min-height: 550px;
        }

        /* Educator specific image formatting */
        .portrait-col {
          width: 40%;
          padding: 1.5rem;
        }

        .glass-image-col .glass-image {
          width: 100%;
          height: 100%;
          border-radius: 1.25rem;
          background-size: cover;
          background-position: center top;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        
        .glass-icon-badge {
          position: absolute;
          bottom: 2.5rem;
          right: 0rem;
          width: 60px;
          height: 60px;
          background: var(--accent-gold);
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.5);
          border: 4px solid #1a2235;
        }

        .glass-text-col {
          width: 60%;
          padding: 3.5rem 3.5rem 3.5rem 2.5rem;
          display: flex;
          align-items: center;
        }

        .glass-text-inner {
          width: 100%;
        }

        .glass-tag {
          display: inline-block;
          padding: 4px 14px;
          border: 1px solid rgba(212, 175, 55, 0.5);
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold);
          border-radius: 50px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .glass-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin: 0 0 0.5rem 0;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .glass-subtitle {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.6);
          margin: 0 0 2rem 0;
          font-weight: 400;
        }

        .glass-divider {
          width: 4rem;
          height: 3px;
          background: var(--accent-gold);
          margin-bottom: 1.5rem;
          border-radius: 2px;
        }

        .glass-quote-box {
          display: flex;
          gap: 1rem;
          background: rgba(255,255,255,0.05);
          border-left: 3px solid var(--accent-gold);
          padding: 1.5rem;
          border-radius: 0 1rem 1rem 0;
          margin-bottom: 2rem;
        }

        .glass-quote-box i {
          font-size: 2rem;
          color: var(--accent-gold);
          opacity: 0.5;
        }

        .glass-quote-box p {
          margin: 0;
          font-size: 1.25rem;
          color: white;
          font-style: italic;
          line-height: 1.5;
        }

        .glass-detail {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.8;
          margin: 0 0 2rem 0;
        }

        .glass-creds {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--accent-gold);
          font-family: 'LXGW WenKai Mono TC', monospace;
        }

        .glass-creds i {
          font-size: 1.5rem;
        }

        /* --- FULLY RESPONSIVE MOBILE FIXES --- */
        @media (max-width: 960px) {
          
          .glass-preview-wrapper {
            align-items: flex-start;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .glass-preview-container {
            padding: 4rem 1rem 6rem 1rem; 
            margin: auto;
            height: auto;
            min-height: 100%;
            display: flex;
            align-items: center;
          }
          
          .glass-card {
            max-height: none; 
            overflow-y: visible;
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .glass-layout {
            flex-direction: column;
            height: auto;
            min-height: auto;
          }

          .portrait-col {
            width: 100%;
            height: 350px; 
            flex-shrink: 0;
            padding: 1rem 1rem 0 1rem;
          }

          .glass-text-col {
            width: 100%;
            height: auto;
            flex-shrink: 0;
            padding: 2.5rem 1.5rem;
          }
          
          .glass-title {
            font-size: 2.5rem;
          }

          .glass-quote-box p {
            font-size: 1.1rem;
          }

          .nav-arrow {
            position: fixed;
            top: auto;
            bottom: 1.5rem;
            transform: none;
            width: 50px;
            height: 50px;
            background: rgba(20, 20, 20, 0.7);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            font-size: 1.5rem;
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          }

          .nav-prev { left: 1.5rem; }
          .nav-next { right: 1.5rem; }

          .nav-arrow:hover {
            transform: scale(1.1);
          }
        }
      ` }} />
        </div>
    );
}