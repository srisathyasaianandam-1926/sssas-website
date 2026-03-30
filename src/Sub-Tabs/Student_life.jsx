import React, { useState } from 'react';

export default function StudentLife() {
    const [selectedAspect, setSelectedAspect] = useState(null);
    const [isModalActive, setIsModalActive] = useState(false);

    // Toggle for rotating the activity details 90 degrees (Now true by default)
    const [isDetailsVertical, setIsDetailsVertical] = useState(true);

    // Timeline data mapped from the provided routine image
    const dailyRoutine = [
        { time: "5:00 a.m.", activity: "Getting up", icon: "ph-sun" },
        { time: "5:25 to 5:45 a.m.", activity: "Morning Prayer", icon: "ph-hands-praying" },
        { time: "5:45 to 6:00 a.m.", activity: "Physical jerks", icon: "ph-person-simple-run" },
        { time: "6:00 to 6:15 a.m.", activity: "Morning Milk", icon: "ph-coffee" },
        { time: "6:15 to 7:15 a.m.", activity: "Studies", icon: "ph-book-open" },
        { time: "7:30 to 8:30 a.m.", activity: "Bath & breakfast", icon: "ph-drop" },
        { time: "12:40 to 1:45 p.m.", activity: "Lunch", icon: "ph-bowl-food" },
        { time: "4:00 to 5:00 p.m.", activity: "Games", icon: "ph-soccer-ball" },
        { time: "5:00 to 5:15 p.m.", activity: "Evening snacks", icon: "ph-cookie" },
        { time: "5:45 to 6:45 p.m.", activity: "Evening prayer", icon: "ph-sparkle" },
        { time: "7:00 to 8:30 p.m.", activity: "Studies", icon: "ph-books" },
        { time: "8:35 to 8:55 p.m.", activity: "Supper", icon: "ph-cooking-pot" },
        { time: "9:00 to 9:20 p.m.", activity: "Night prayer", icon: "ph-moon" },
        { time: "9:30 p.m.", activity: "Lights off & sleeping", icon: "ph-bed" }
    ];

    // Curated content for Hostel Life
    const lifeSections = [
        {
            id: 'living',
            title: 'Living Spaces',
            items: [
                {
                    title: "Evening Prayers",
                    tag: "Accommodation",
                    brief: "Spacious, well-ventilated rooms designed for comfort and community living.",
                    detail: "Our dormitories are more than just places to sleep; they are the heart of student community life. Designed to foster brotherhood and mutual respect, each room is well-ventilated, equipped with essential study furniture, and offers ample personal storage. The communal layout encourages students to share, learn, and grow together in a clean, disciplined environment.",
                    img: "/Images/Evening Prayers.jpeg",
                    icon: "ph-bed",
                    size: "tall",
                    colSpan: 2
                },
                {
                    title: "Quiet Study Halls",
                    tag: "Academics",
                    brief: "Dedicated silent zones for focused evening preparations.",
                    detail: "To support rigorous academic standards, the hostel features dedicated study halls. These are designated silent zones, well-lit and comfortable, allowing students to focus entirely on their evening preparations and assignments without distractions.",
                    img: "/Images/IMG20250823110540.jpg",
                    icon: "ph-books",
                    size: "short",
                    colSpan: 1
                },
                {
                    title: "Common Rooms",
                    tag: "Relaxation",
                    brief: "Lounge areas for indoor games, reading, and weekend relaxation.",
                    detail: "The common rooms are the social hubs of the hostel. Equipped with indoor games like chess and table tennis, comfortable seating, and a selection of daily newspapers and magazines, it's the perfect place for students to unwind after a long day of classes.",
                    img: "/Images/IMG_0401.CR2",
                    icon: "ph-armchair",
                    size: "short",
                    colSpan: 1
                }
            ]
        },
        {
            id: 'routine',
            title: 'Daily Rhythm',
            items: [
                {
                    title: "Morning Suprabhatam",
                    tag: "Discipline",
                    brief: "Starting the day early with prayers and meditation for inner peace.",
                    detail: "The hostel day begins before sunrise. Students gather for morning prayers (Suprabhatam) and a brief meditation session. This early start instills immense discipline, clears the mind, and sets a positive, focused tone for the rest of the day.",
                    img: "/Images/Ex-Curricular/Suprabhatam.webp",
                    icon: "ph-sun",
                    size: "short",
                    colSpan: 2
                },
                {
                    title: "Evening Sports",
                    tag: "Fitness",
                    brief: "Mandatory physical activities and team sports every evening.",
                    detail: "We believe in a healthy mind residing in a healthy body. Every evening, students hit the sports fields. Whether it's football, basketball, cricket, or athletics, physical exertion is mandatory to build teamwork, stamina, and resilience.",
                    img: "/Images/IMG_0281.JPG",
                    icon: "ph-basketball",
                    size: "tall",
                    colSpan: 1
                },
                {
                    title: "Night Routine",
                    tag: "Rest",
                    brief: "Structured lights-out policy ensuring 8 hours of restful sleep.",
                    detail: "A rigorous day requires proper rest. The hostel enforces a strict lights-out policy by 10:00 PM. This ensures every student gets at least 8 hours of uninterrupted sleep, crucial for memory consolidation and physical recovery.",
                    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
                    icon: "ph-moon-stars",
                    size: "short",
                    colSpan: 2
                }
            ]
        }
    ];

    const openDetails = (aspect) => {
        setSelectedAspect(aspect);
        setIsModalActive(true);
        document.body.style.overflow = 'hidden';
    };

    const closeDetails = () => {
        setIsModalActive(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setSelectedAspect(null), 400);
    };

    return (
        <div className="app-wrapper">
            <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css" />
            {/* Updated Font: LXGW WenKai Mono TC */}
            <link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC:wght@400;700&display=swap" rel="stylesheet" />

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-bg-blur"></div>
                <div className="hero-content">
                    <h1 className="hero-title serif">
                        A Home Away <br />
                        <span className="gold-text">From Home</span>
                    </h1>
                    <p className="hero-description">
                        Discover the vibrant, disciplined, and nurturing environment of our student hostels.
                        A place where academic rigor meets character building, forging lifelong brotherhood and values.
                    </p>

                    <div className="hero-scroll-indicator">
                        <div className="scroll-line"></div>
                        <a href="#living" className="scroll-link">Explore Campus Life</a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-container relative">
                {/* Animated Background Timeline */}
                <div className="timeline-wrapper">
                    <svg className="bg-timeline" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 10 0 C 80 20, 20 40, 60 60 C 90 80, 30 90, 50 100" vectorEffect="non-scaling-stroke" className="timeline-path-solid" />
                        <path d="M 80 0 C 10 20, 90 40, 20 60 C -10 80, 80 90, 50 100" vectorEffect="non-scaling-stroke" className="timeline-path" />
                        <path d="M 50 0 C 90 20, 10 40, 80 60 C 10 80, 90 90, 50 100" vectorEffect="non-scaling-stroke" className="timeline-path-dashed" />
                    </svg>
                </div>

                {/* --- DAILY ROUTINE TIMELINE --- */}
                <div id="routine" className="section-header">
                    <h2 className="section-title serif" style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: 0 }}>
                        Daily Routine

                        {/* Eye Toggle Button at the end of the title */}
                        <button
                            className={`routine-rotate-btn ${isDetailsVertical ? 'active' : ''}`}
                            onClick={() => setIsDetailsVertical(!isDetailsVertical)}
                            title={isDetailsVertical ? "Hide Activity Details" : "Show All Activity Details"}
                        >
                            <i className={`ph ${isDetailsVertical ? 'ph-eye-slash' : 'ph-eye'} text-lg`}></i>
                        </button>
                    </h2>
                    <div className="section-line"></div>
                </div>

                <div className={`routine-wrapper ${isDetailsVertical ? 'details-vertical' : ''}`}>
                    <div className="routine-track">
                        {dailyRoutine.map((item, index) => (
                            <div className="routine-node group" key={index}>
                                <div className="routine-icon-wrapper">
                                    <i className={`ph ${item.icon}`}></i>
                                </div>
                                <div className="routine-tooltip">
                                    <div className="routine-time">{item.time}</div>
                                    <div className="routine-activity">{item.activity}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {lifeSections.map((section) => (
                    <React.Fragment key={section.id}>
                        <div id={section.id} className="section-header">
                            <h2 className="section-title serif">{section.title}</h2>
                            <div className="section-line"></div>
                        </div>
                        <div className="masonry-grid">
                            {section.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`doc-card card-${item.size} col-span-${item.colSpan || 1} group`}
                                    onClick={() => openDetails(item)}
                                >
                                    <div className="card-bg" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                    <div className="card-overlay">
                                        <span className="card-tag">{item.tag}</span>
                                        <div className="card-content-wrapper">
                                            <i className={`ph ${item.icon} card-icon-main`}></i>
                                            <div>
                                                <h4 className="card-title serif">{item.title}</h4>
                                                <p className="card-brief">{item.brief}</p>
                                            </div>
                                        </div>
                                        <div className="card-meta">
                                            <span className="read-more-text">Explore Details</span>
                                            <i className="ph ph-arrow-right interactive-arrow"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </main>

            {/* Editorial / Randomized Content Modal */}
            <div className={`modal-container ${isModalActive ? 'active' : ''}`}>
                <div className="modal-backdrop" onClick={closeDetails}></div>
                <div className="editorial-modal">
                    <button className="modal-close-floating" onClick={closeDetails} title="Close">
                        <i className="ph ph-x text-2xl"></i>
                    </button>

                    {selectedAspect && (
                        <div className="editorial-layout">
                            <div className="editorial-visual-side">
                                <div className="editorial-image-wrapper">
                                    <div className="editorial-backdrop-shape"></div>
                                    <div className="editorial-image" style={{ backgroundImage: `url('${selectedAspect.img}')` }}></div>
                                </div>
                            </div>
                            <div className="editorial-text-side">
                                <div className="editorial-tag">{selectedAspect.tag}</div>
                                <h3 className="editorial-title serif">{selectedAspect.title}</h3>
                                <div className="editorial-divider"></div>
                                <p className="editorial-brief">{selectedAspect.brief}</p>
                                <p className="editorial-detail">{selectedAspect.detail}</p>

                                <div className="editorial-icon-watermark">
                                    <i className={`ph ${selectedAspect.icon}`}></i>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        :root {
          --accent-gold: #D4AF37;
          --bg-light: #fdfdfd;
          --text-dark: #1a1a1a;
          --text-muted: rgba(255, 255, 255, 0.65);
          --transition-smooth: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-light);
          color: var(--text-dark);
          scroll-behavior: smooth;
          margin: 0;
        }

        .serif { font-family: 'Playfair Display', serif; }

        /* Hero Section */
        .hero-section {
          height: 85vh;
          background: #000;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-blur {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.3) 100%), 
                      url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          filter: blur(4px);
          transform: scale(1.05);
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 80rem;
          padding: 0 1.5rem;
          margin: 0 auto;
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

        /* Main Content Layout */
        .main-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem 8rem 1.5rem;
          position: relative; 
        }

        /* --- 90-DEGREE TOGGLE BUTTON --- */
        .routine-rotate-btn {
          background: transparent;
          color: var(--accent-gold);
          border: 2px solid var(--accent-gold);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }
        
        .routine-rotate-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          transform: scale(1.1);
        }

        .routine-rotate-btn.active {
          background: var(--accent-gold);
          color: white;
        }

        /* --- ROUTINE TIMELINE STRUCTURE --- */
        .routine-wrapper {
          margin: 1rem 0 5rem 0;
          position: relative;
          z-index: 2;
          transition: all 0.4s ease;
        }

        .routine-track {
          display: flex;
          flex-wrap: wrap; 
          justify-content: center;
          align-items: center;
          position: relative;
          row-gap: 5rem; 
          padding: 3rem 1rem;
          transition: all 0.4s ease;
        }

        .routine-node {
          flex: 1 1 auto;
          min-width: 60px; 
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
          touch-action: manipulation;
        }

        /* Horizontal wavy dashed line */
        .routine-node::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 20px;
          transform: translateY(-50%);
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 20 0, 40 10 T 80 10' fill='none' stroke='%23D4AF37' stroke-width='2.5' stroke-linecap='round' stroke-dasharray='6 6'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          z-index: -1;
          opacity: 0.6;
        }

        /* Icon Holder */
        .routine-icon-wrapper {
          width: 44px;
          height: 44px;
          background: white;
          border: 2px solid var(--accent-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          color: var(--accent-gold);
          font-size: 1.5rem;
          box-shadow: 0 0 0 4px rgba(253, 253, 253, 1);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
        }

        .routine-node:hover .routine-icon-wrapper {
          transform: scale(1.2);
          background: var(--accent-gold);
          color: white;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
        }

        /* Tooltip (No background, precise alignment) */
        .routine-tooltip {
          position: absolute;
          width: max-content;
          background: transparent;
          color: #0f172a;
          padding: 0;
          text-align: center;
          box-shadow: none;
          opacity: 0;
          pointer-events: none;
          z-index: 10;
          font-family: 'LXGW WenKai Mono TC', monospace;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          left: 50%; /* Base center for horizontal mode */
        }

        /* --- HORIZONTAL LAYOUT (DEFAULT / CLOSED DETAILS) --- */
        .routine-wrapper:not(.details-vertical) .routine-node:nth-child(odd) .routine-tooltip { 
          bottom: 100%; 
          margin-bottom: 12px;
          transform: translateX(-50%) translateY(10px);
        }
        
        .routine-wrapper:not(.details-vertical) .routine-node:nth-child(even) .routine-tooltip { 
          top: 100%; 
          margin-top: 12px;
          transform: translateX(-50%) translateY(-10px);
        }
        
        .routine-wrapper:not(.details-vertical) .routine-node:nth-child(odd):hover .routine-tooltip,
        .routine-wrapper:not(.details-vertical) .routine-node:nth-child(even):hover .routine-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* --- ROTATED 90 DEGREE DETAILS MODE (OPEN) --- */
        .routine-wrapper.details-vertical .routine-track {
          row-gap: 16rem; /* Plenty of space for rotated text so lines don't crash when wrapping */
          padding: 7rem 1rem;
        }

        .routine-wrapper.details-vertical .routine-tooltip {
          opacity: 1; 
          visibility: visible;
          pointer-events: none;
          /* Reset positioning to exact node center */
          bottom: auto;
          top: 50%;
          left: 50%;
          transform-origin: top left;
          text-align: left; /* Keep text flowing outwards */
        }

        /* MATH EXPLANATION FOR ROTATION:
           1. Element starts with top-left corner perfectly centered in the icon.
           2. rotate(-90deg) tilts it up.
           3. To move it AWAY from the icon (up or down), we translate along the new X axis (which points UP).
           4. To CENTER it horizontally, we translate left by half its height (-50% on the new Y axis).
        */
        .routine-wrapper.details-vertical .routine-node:nth-child(odd) .routine-tooltip {
          /* 40px UP, -50% LEFT */
          transform: rotate(-90deg) translate(40px, -50%);
        }
        
        .routine-wrapper.details-vertical .routine-node:nth-child(even) .routine-tooltip {
          /* 100% DOWN (flips it past center), 40px DOWN for gap, -50% LEFT */
          transform: rotate(-90deg) translate(calc(-100% - 40px), -50%);
        }

        /* Override hover transforms to lock them perfectly in place */
        .routine-wrapper.details-vertical .routine-node:nth-child(odd):hover .routine-tooltip {
          transform: rotate(-90deg) translate(40px, -50%);
        }
        .routine-wrapper.details-vertical .routine-node:nth-child(even):hover .routine-tooltip {
          transform: rotate(-90deg) translate(calc(-100% - 40px), -50%);
        }

        /* Tooltip Text Formatting */
        .routine-time {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          line-height: 1.2;
          margin-bottom: 2px;
          white-space: nowrap;
        }

        .routine-activity {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.1;
          white-space: nowrap; 
        }

        /* --- MOBILE ADJUSTMENTS (Vertical Timeline) --- */
        @media (max-width: 768px) {
          /* Transform to Vertical Timeline on Mobile */
          .routine-track, 
          .routine-wrapper.details-vertical .routine-track { 
            flex-direction: column;
            align-items: flex-start;
            row-gap: 3.5rem !important; 
            padding: 2rem 1rem 2rem 1.5rem !important;
          }

          .routine-node {
            width: 100%;
            justify-content: flex-start;
          }

          /* Vertical Dashed Line (Replaces Wavy Horizontal Line) */
          .routine-node::before {
            top: 44px !important;
            left: 21px !important; /* Exact center of the 44px icon */
            width: 2px !important;
            height: 3.5rem !important; /* Perfectly bridges the row-gap */
            background: transparent !important;
            border-left: 2px dashed rgba(212, 175, 55, 0.6);
            transform: none !important;
          }
          
          .routine-node:last-child::before {
            display: none !important;
          }

          /* Horizontal Details Alignment on Mobile */
          .routine-tooltip,
          .routine-wrapper.details-vertical .routine-node:nth-child(odd) .routine-tooltip,
          .routine-wrapper.details-vertical .routine-node:nth-child(even) .routine-tooltip,
          .routine-wrapper:not(.details-vertical) .routine-node:nth-child(odd) .routine-tooltip,
          .routine-wrapper:not(.details-vertical) .routine-node:nth-child(even) .routine-tooltip,
          .routine-wrapper:not(.details-vertical) .routine-node:first-child .routine-tooltip,
          .routine-wrapper:not(.details-vertical) .routine-node:last-child .routine-tooltip {
            left: 70px !important;
            top: 50% !important;
            bottom: auto !important;
            right: auto !important;
            transform: translateY(-50%) !important;
            text-align: left;
            max-width: 220px;
            white-space: normal;
          }

          .routine-activity {
            white-space: normal !important;
            font-size: 1.15rem;
          }

          .routine-time {
            font-size: 0.85rem;
          }

          /* Lock hover transforms on mobile to prevent layout jumping */
          .routine-node:hover .routine-tooltip,
          .routine-wrapper.details-vertical .routine-node:nth-child(odd):hover .routine-tooltip,
          .routine-wrapper.details-vertical .routine-node:nth-child(even):hover .routine-tooltip,
          .routine-wrapper:not(.details-vertical) .routine-node:nth-child(odd):hover .routine-tooltip,
          .routine-wrapper:not(.details-vertical) .routine-node:nth-child(even):hover .routine-tooltip,
          .routine-wrapper:not(.details-vertical) .routine-node:first-child:hover .routine-tooltip,
          .routine-wrapper:not(.details-vertical) .routine-node:last-child:hover .routine-tooltip {
            transform: translateY(-50%) scale(1.02) !important;
            transform-origin: left center !important;
            opacity: 1 !important;
          }
        }

        /* --- BACKGROUND TIMELINE STYLES --- */
        .timeline-wrapper {
          position: absolute;
          inset: 0;
          top: 80px; 
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .bg-timeline {
          width: 100%;
          height: 100%;
        }

        .timeline-path-solid {
          fill: none;
          stroke: rgba(0, 0, 0, 0.02);
          stroke-width: 40px;
        }

        .timeline-path {
          fill: none;
          stroke: rgba(212, 175, 55, 0.18);
          stroke-width: 3px;
          stroke-dasharray: 20 40;
          animation: moveDash 35s linear infinite;
        }

        .timeline-path-dashed {
          fill: none;
          stroke: rgba(212, 175, 55, 0.4);
          stroke-width: 2px;
          stroke-dasharray: 4 12;
          animation: moveDashReverse 20s linear infinite;
        }

        @keyframes moveDash {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes moveDashReverse {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 1000; }
        }

        .section-header, .masonry-grid {
          position: relative;
          z-index: 1; 
        }

        .section-header {
          margin-top: 100px;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .section-title {
          font-size: 1.875rem;
          color: #0f172a;
        }

        .section-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(to right, #e2e8f0, transparent);
        }

        /* Card Grid System */
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          grid-auto-rows: 250px;
          gap: 28px;
          grid-auto-flow: dense;
        }

        .card-tall { grid-row: span 2; }
        .card-short { grid-row: span 1; }

        @media (min-width: 768px) {
          .col-span-1 { grid-column: span 1; }
          .col-span-2 { grid-column: span 2; }
          .col-span-3 { grid-column: span 3; }
        }

        .doc-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition-smooth);
          background: #1a1a1a;
        }

        .doc-card:hover { transform: scale(0.98); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }

        .card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.65;
          transition: transform 1s ease;
        }

        .doc-card:hover .card-bg { transform: scale(1.08); opacity: 0.4; }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .card-tag {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 12px;
        }

        .card-content-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .card-icon-main {
          color: white;
          font-size: 1.875rem;
          margin-top: 0.25rem;
        }

        .card-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          transition: color 0.3s;
        }

        @media (min-width: 768px) {
          .card-title { font-size: 1.5rem; }
        }

        .doc-card:hover .card-title { color: var(--accent-gold); }

        .card-brief {
          font-size: 13.5px;
          color: var(--text-muted);
          margin-top: 10px;
          line-height: 1.6;
          max-width: 95%;
        }

        .card-meta {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255,255,255,0.7);
          transition: var(--transition-smooth);
        }

        .read-more-text {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .interactive-arrow {
          font-size: 1.25rem;
          transform: translateX(0);
          transition: transform 0.3s ease;
        }

        .doc-card:hover .card-meta { color: var(--accent-gold); }
        .doc-card:hover .interactive-arrow { transform: translateX(5px); }

        /* --- EDITORIAL MODAL STYLES --- */
        .modal-container {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: flex-start; /* Changed to start from top padding */
          justify-content: center;
          padding: 85px 1.5rem 1.5rem 1.5rem; /* Padded exactly 85px from top */
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .modal-container.active {
          opacity: 1;
          pointer-events: auto;
        }

        .modal-backdrop {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(16px);
        }

        .editorial-modal {
          position: relative;
          width: 100%;
          max-width: 75rem;
          height: 100%; /* Spans remaining height beneath the 85px offset */
          background: #0b132b; 
          border-radius: 2rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
          transform: scale(0.95);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .modal-container.active .editorial-modal {
          transform: scale(1);
        }

        .modal-close-floating {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          z-index: 100;
          backdrop-filter: blur(8px);
          transition: all 0.3s;
        }

        .modal-close-floating:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        /* Update for mobile modal layout to fix clipping */
        @media (max-width: 960px) {
          .editorial-layout {
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            height: 100%;
            -webkit-overflow-scrolling: touch;
          }
          .editorial-visual-side {
            height: 350px;
            min-height: 350px;
            padding: 2rem;
            flex-shrink: 0;
          }
          .editorial-text-side {
            padding: 2.5rem 1.5rem;
            overflow-y: visible;
            flex-grow: 1;
          }
          .editorial-title {
            font-size: 2.5rem;
          }
          .editorial-icon-watermark {
            display: none;
          }
        }

        /* Desktop grid stays the same */
        @media (min-width: 961px) {
          .editorial-layout {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            height: 100%;
            width: 100%;
          }
          .editorial-visual-side {
            padding: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #111a38;
            position: relative;
            overflow: hidden;
          }
          .editorial-text-side {
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            color: white;
            overflow-y: auto;
          }
        }

        .editorial-image-wrapper {
          position: relative;
          width: 100%;
          height: 75%;
          max-height: 600px;
        }

        .editorial-backdrop-shape {
          position: absolute;
          inset: -20px;
          background: linear-gradient(135deg, var(--accent-gold), #e8a628);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          transform: rotate(-10deg);
          opacity: 0.9;
          animation: blobShaping 12s infinite alternate;
        }

        @keyframes blobShaping {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(-10deg) scale(1); }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(5deg) scale(1.05); }
        }

        .editorial-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          border-radius: 1.5rem;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          transform: rotate(3deg);
          transition: transform 0.5s;
        }

        .editorial-visual-side:hover .editorial-image {
          transform: rotate(0deg) scale(1.02);
        }

        .editorial-tag {
          display: inline-block;
          padding: 6px 16px;
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          border-radius: 50px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: bold;
          margin-bottom: 2rem;
          align-self: flex-start;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }

        .editorial-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #fdfdfd;
          position: relative;
          z-index: 2;
        }

        .editorial-divider {
          width: 4rem;
          height: 4px;
          background: var(--accent-gold);
          margin-bottom: 2rem;
          border-radius: 2px;
        }

        .editorial-brief {
          font-size: 1.25rem;
          font-weight: 300;
          color: #cbd5e1;
          margin-bottom: 2rem;
          line-height: 1.6;
          border-left: 2px solid rgba(255,255,255,0.2);
          padding-left: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .editorial-detail {
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.8;
          max-width: 95%;
          position: relative;
          z-index: 2;
        }

        .editorial-icon-watermark {
          position: absolute;
          bottom: -40px;
          right: -20px;
          font-size: 24rem;
          opacity: 0.03;
          color: white;
          pointer-events: none;
          z-index: 0;
          transform: rotate(-15deg);
        }
      ` }} />
        </div>
    );
}