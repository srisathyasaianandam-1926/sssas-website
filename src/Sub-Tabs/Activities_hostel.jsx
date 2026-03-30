import React, { useState } from 'react';

export default function Activities() {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [isPreviewActive, setIsPreviewActive] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    // Comprehensive list of activities categorized with varying "Bento Grid" sizes
    const activities = [
        {
            id: 'swami-birthday',
            title: "Swami's Birthday",
            category: "Festivals",
            bentoSize: "large", // Takes up 2x2 grid space
            brief: "The grandest celebration of the year featuring massive cultural displays.",
            detail: "The entire campus transforms into a beacon of light and joy. The week-long celebrations involve massive service activities (Narayana Seva), spectacular cultural programs, and an overwhelming atmosphere of love and gratitude.",
            img: "/Images/Swami_s birthday and atar.jpg",
            icon: "ph-cake"
        },
        {
            id: 'sports-meet',
            title: "Annual Sports Meet",
            category: "Initiatives",
            bentoSize: "wide", // Takes up 2 columns
            brief: "A grand showcase of athletic prowess and cultural harmony.",
            detail: "A spectacular event where students showcase extraordinary physical feats, including gymnastics, martial arts, track events, and synchronized cultural performances, demonstrating the balance of body, mind, and spirit.",
            img: "/Images/dance 4.JPG",
            icon: "ph-trophy"
        },
        {
            id: 'ganesh-chaturthi',
            title: "Ganesh Chaturthi",
            category: "Festivals",
            bentoSize: "tall", // Takes up 2 rows
            brief: "Vibrant celebrations honoring Lord Ganesha with music and devotion.",
            detail: "The campus comes alive with the sounds of bhajans and Vedic chants. Students hand-craft eco-friendly clay idols, decorate the altar, and lead the multi-day prayers, culminating in a joyous and musical immersion procession.",
            img: "/Images/Ganesh Caturthi.png",
            icon: "ph-flower-lotus"
        },
        {
            id: 'green-drive',
            title: "Green Drive",
            category: "Initiatives",
            bentoSize: "standard",
            brief: "Mass tree plantation and campus cleaning drives.",
            detail: "Fostering a deep connection with Mother Nature, students regularly organize Green Drives. This involves planting saplings, maintaining the campus gardens, and promoting eco-friendly habits like zero-plastic usage.",
            img: "/Images/gardening hope so.jpg",
            icon: "ph-tree"
        },
        {
            id: 'medical-camp',
            title: "Medical Checkups",
            category: "Initiatives",
            bentoSize: "standard",
            brief: "Regular health camps with visiting doctors.",
            detail: "Health is wealth. The hostel periodically hosts visiting doctors and specialists who conduct comprehensive medical, dental, and eye checkups for all students, ensuring their physical well-being is constantly monitored.",
            img: "/Images/medical.jpg",
            icon: "ph-stethoscope"
        },
        {
            id: 'arts-crafts',
            title: "Arts and Crafts",
            category: "Skills",
            bentoSize: "tall",
            brief: "Unleashing creativity through painting and sculpting.",
            detail: "The art room is a sanctuary for creative expression. Students learn various traditional and modern art forms, from watercolor painting to creating useful items out of recycled materials, honing their focus and aesthetic sense.",
            img: "/Images/ganesha dark.jpg",
            icon: "ph-palette"
        },
        {
            id: 'christmas',
            title: "Christmas",
            category: "Festivals",
            bentoSize: "standard",
            brief: "Spreading the message of love and sharing.",
            detail: "Embracing the unity of all faiths, Christmas is celebrated with immense joy. Students decorate the campus with stars and lights, sing carols, and perform plays depicting the birth and teachings of Jesus Christ.",
            img: "/Images/christmas 2.jpg",
            icon: "ph-star"
        },
        {
            id: 'ramanavami',
            title: "Sri Ramanavami",
            category: "Festivals",
            bentoSize: "tall",
            brief: "Celebrating the birth of Lord Rama with profound devotion.",
            detail: "The festival features special morning pujas, the chanting of the Ramayana, and the distribution of traditional prasadam. It serves as a reminder for students to emulate the righteous and dutiful life of Lord Rama.",
            img: "/Images/god_ abhisekham.jpg",
            icon: "ph-sun"
        },
        {
            id: 'independence-day',
            title: "Independence Day",
            category: "Initiatives",
            bentoSize: "wide",
            brief: "Patriotic flag hoisting and parades.",
            detail: "A celebration of the nation's freedom. The day begins with a disciplined march past and flag hoisting, followed by patriotic songs, inspiring speeches, and cultural dances that instill a deep sense of duty toward the motherland.",
            img: "/Images/Independence.jpg",
            icon: "ph-flag"
        },
        {
            id: 'gardening',
            title: "Gardening",
            category: "Skills",
            bentoSize: "standard",
            brief: "Hands-on experience in cultivating organic vegetables.",
            detail: "Students spend their weekend mornings tending to the campus gardens. They learn about soil preparation, organic composting, and plant care, developing patience and an appreciation for the food they eat.",
            img: "/Images/gardening 2.jpg",
            icon: "ph-plant"
        },
        {
            id: 'cooking',
            title: "Cooking",
            category: "Skills",
            bentoSize: "standard",
            brief: "Learning the culinary arts and the joy of feeding others.",
            detail: "Under the guidance of experienced cooks, students learn to prepare wholesome, nutritious meals. It teaches them measurement, timing, cleanliness, and the beautiful philosophy of serving food as a divine offering.",
            img: "/Images/cooking.JPG",
            icon: "ph-cooking-pot"
        }
    ];

    // Filter Logic
    const filters = ['All', 'Festivals', 'Initiatives', 'Skills'];
    const filteredActivities = activeFilter === 'All'
        ? activities
        : activities.filter(a => a.category === activeFilter);

    // Track current index based on the FILTERED list for smooth next/prev navigation
    const currentIndex = filteredActivities.findIndex(a => a.id === selectedActivity?.id);

    const openPreview = (activity) => {
        setSelectedActivity(activity);
        setIsPreviewActive(true);
        document.body.style.overflow = 'hidden';
    };

    const closePreview = () => {
        setIsPreviewActive(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setSelectedActivity(null), 500);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const newIdx = (currentIndex - 1 + filteredActivities.length) % filteredActivities.length;
        setSelectedActivity(filteredActivities[newIdx]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const newIdx = (currentIndex + 1) % filteredActivities.length;
        setSelectedActivity(filteredActivities[newIdx]);
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
                        Vibrant <br />
                        <span className="gold-text">Campus Life</span>
                    </h1>
                    <p className="hero-description">
                        Life at the hostel is a beautiful tapestry of celebrations, service initiatives, and skill-building activities. From grand national festivals to daily creative pursuits, every moment is designed for holistic development.
                    </p>

                    <div className="hero-scroll-indicator">
                        <div className="scroll-line"></div>
                        <a href="#activities" className="scroll-link">Discover Activities</a>
                    </div>
                </div>
            </header>

            {/* Main Content - Bento Box Layout */}
            <main className="main-container relative" id="activities">

                <div className="section-header custom-header">
                    <h2 className="section-title serif">Hostel Activities</h2>
                    <div className="section-line"></div>
                </div>

                {/* Filter Pills */}
                <div className="filter-container">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Dynamic Bento Box Grid */}
                <div className="bento-grid">
                    {filteredActivities.map((activity) => (
                        <div
                            key={activity.id}
                            className={`bento-item bento-${activity.bentoSize} group`}
                            onClick={() => openPreview(activity)}
                        >
                            <div className="bento-image" style={{ backgroundImage: `url('${activity.img}')` }}></div>

                            {/* Persistent Tag */}
                            <div className="bento-tag-wrapper">
                                <span className="bento-tag">{activity.category}</span>
                            </div>

                            {/* Hover Reveal Content */}
                            <div className="bento-overlay">
                                <div className="bento-content">
                                    <div className="bento-icon">
                                        <i className={`ph ${activity.icon}`}></i>
                                    </div>
                                    <h4 className="bento-title serif">{activity.title}</h4>
                                    <p className="bento-brief">{activity.brief}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Glassmorphism Preview Modal */}
            <div className={`glass-preview-wrapper ${isPreviewActive ? 'active' : ''}`}>
                <div className="glass-preview-backdrop" onClick={closePreview}></div>

                <div className="glass-preview-container">
                    {selectedActivity && (
                        <>
                            {/* Posh Navigation Arrows (No Circles) */}
                            <button className="nav-arrow nav-prev" onClick={handlePrev} title="Previous Activity">
                                <i className="ph ph-caret-left"></i>
                            </button>

                            <button className="nav-arrow nav-next" onClick={handleNext} title="Next Activity">
                                <i className="ph ph-caret-right"></i>
                            </button>

                            <div className="glass-card">
                                <button className="glass-close-btn" onClick={closePreview} title="Close Preview">
                                    <i className="ph ph-x"></i>
                                </button>

                                <div className="glass-layout">
                                    {/* Visual Pane */}
                                    <div className="glass-image-col">
                                        <div className="glass-image" style={{ backgroundImage: `url('${selectedActivity.img}')` }}></div>
                                    </div>

                                    {/* Text Pane - Fully Scrollable */}
                                    <div className="glass-text-col">
                                        <div className="glass-text-inner">
                                            <span className="glass-tag">{selectedActivity.category}</span>
                                            <h3 className="glass-title serif">{selectedActivity.title}</h3>
                                            <div className="glass-divider"></div>
                                            <p className="glass-brief">{selectedActivity.brief}</p>
                                            <p className="glass-detail">{selectedActivity.detail}</p>
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

        /* Scoped wrapper styling */
        .app-wrapper {
          font-family: 'Inter', sans-serif;
          background: #050505; 
          background-image: radial-gradient(circle at top right, #111a28 0%, #030303 100%);
          background-attachment: fixed;
          color: white;
          min-height: 100vh;
          overflow-x: hidden; 
        }

        .serif { font-family: 'Playfair Display', serif; }
        .mono { font-family: 'LXGW WenKai Mono TC', monospace; }

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
                            url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000');
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
          height: 250px;
          background: linear-gradient(to bottom, transparent, #050505);
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

        /* --- MAIN CONTENT & FILTERS --- */
        .main-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 4rem 1.5rem 8rem 1.5rem;
          position: relative; 
          z-index: 2;
        }

        .custom-header {
          margin-top: 0;
          margin-bottom: 2rem;
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

        /* Filters */
        .filter-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-pill {
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .filter-pill:hover {
          color: white;
          border-color: rgba(255, 255, 255, 0.6);
        }

        .filter-pill.active {
          background: var(--accent-gold);
          color: #000;
          border-color: var(--accent-gold);
        }

        /* --- ASYMMETRICAL BENTO GRID --- */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 250px;
          gap: 1.5rem;
          grid-auto-flow: dense; 
        }

        .bento-large { grid-column: span 2; grid-row: span 2; }
        .bento-wide { grid-column: span 2; grid-row: span 1; }
        .bento-tall { grid-column: span 1; grid-row: span 2; }
        .bento-standard { grid-column: span 1; grid-row: span 1; }

        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-wide { grid-column: span 2; }
          .bento-large { grid-column: span 2; }
        }

        @media (max-width: 768px) {
          .bento-grid { 
            grid-template-columns: 1fr; 
            grid-auto-rows: 300px;
          }
          .bento-large, .bento-wide, .bento-tall, .bento-standard {
            grid-column: span 1;
            grid-row: span 1;
          }
          .bento-large { grid-row: span 2; } 
        }

        /* Bento Item Styling */
        .bento-item {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          cursor: pointer;
          background: #111;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
        }

        .bento-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          z-index: 10;
        }

        .bento-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .bento-item:hover .bento-image {
          transform: scale(1.08); 
        }

        /* Floating Category Tag */
        .bento-tag-wrapper {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 5;
        }

        .bento-tag {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          transition: background 0.3s ease;
        }

        .bento-item:hover .bento-tag {
          background: var(--accent-gold);
          color: #000;
          border-color: var(--accent-gold);
        }

        /* Text Overlay */
        .bento-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          transition: background 0.4s ease;
        }

        .bento-item:hover .bento-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 100%);
        }

        .bento-content {
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .bento-item:hover .bento-content {
          transform: translateY(0);
        }

        .bento-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
        }

        .bento-item:hover .bento-icon {
          background: var(--accent-gold);
          color: #000;
          transform: scale(1.1);
        }

        .bento-title {
          color: white;
          font-size: 1.6rem;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        .bento-brief {
          color: rgba(255, 255, 255, 0.7);
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

        .bento-item:hover .bento-brief {
          opacity: 1;
        }

        /* --- GLASSMORPHISM PREVIEW (FULLY RESPONSIVE) --- */
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
          background: rgba(5, 5, 5, 0.6);
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
          max-width: 950px; /* Reduced width for a tighter, cleaner look */
          padding: 85px 3.5rem 2rem 3.5rem; /* STRICT TOP PADDING OF 85px */
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
          padding: 0;
        }

        .nav-arrow:hover {
          color: var(--accent-gold);
          transform: translateY(-50%) scale(1.15);
        }

        .nav-prev { left: -1rem; }
        .nav-next { right: -1rem; }

        /* The Premium Glass Card */
        .glass-card {
          position: relative;
          width: 100%;
          max-height: calc(100vh - 120px); /* Prevents overflow off bottom on laptops */
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.01));
          backdrop-filter: blur(30px) saturate(120%);
          -webkit-backdrop-filter: blur(30px) saturate(120%);
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 
                      inset 0 0 0 1px rgba(255, 255, 255, 0.05);
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
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
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
          color: #000;
          border-color: var(--accent-gold);
          transform: rotate(90deg);
        }

        .glass-layout {
          display: flex;
          flex-direction: row;
          flex: 1; /* Takes available space */
          overflow: hidden; /* Vital to let the text column handle its own scrolling */
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
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .glass-text-col {
          width: 55%;
          padding: 2.5rem 2.5rem 2.5rem 1.5rem;
          display: flex;
          align-items: flex-start;
          overflow-y: auto; /* SCROLLING ENABLED FOR TEXT IF TOO LONG */
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
          font-size: 0.7rem; /* Scaled down */
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .glass-title {
          font-size: 2.25rem; /* Scaled down to prevent overwhelming height */
          line-height: 1.15;
          margin: 0 0 1rem 0;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .glass-divider {
          width: 3rem;
          height: 3px;
          background: var(--accent-gold);
          margin-bottom: 1.5rem;
          border-radius: 2px;
        }

        .glass-brief {
          font-size: 1.05rem; /* Scaled down */
          font-weight: 300;
          color: #e2e8f0;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .glass-detail {
          font-size: 0.95rem; /* Scaled down */
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }

        /* --- RESPONSIVE ADJUSTMENTS FOR MOBILE/TABLETS --- */
        @media (max-width: 960px) {
          
          .glass-preview-wrapper {
            align-items: flex-start;
            overflow-y: auto; /* Allows modal wrapper to scroll */
            -webkit-overflow-scrolling: touch;
          }

          .glass-preview-container {
            padding: 85px 1rem 6rem 1rem; /* Maintains 85px top padding */
            margin: 0 auto;
            height: auto;
            display: flex;
            align-items: flex-start; 
          }
          
          .glass-card {
            max-height: none; /* Expand fully on mobile */
            overflow: visible;
          }

          .glass-layout {
            flex-direction: column;
            height: auto;
          }

          .glass-image-col {
            width: 100%;
            height: 240px; /* Scaled down height for mobile */
            flex-shrink: 0;
            padding: 1rem 1rem 0 1rem;
          }

          .glass-text-col {
            width: 100%;
            height: auto;
            flex-shrink: 0;
            padding: 1.5rem 1.5rem 2rem 1.5rem; /* Tighter padding */
            overflow-y: visible; /* Text naturally flows */
          }
          
          .glass-title {
            font-size: 1.8rem;
          }

          .glass-brief { font-size: 0.95rem; }
          .glass-detail { font-size: 0.85rem; }

          /* Keep Navigation Arrows fixed at bottom for easy thumb access */
          .nav-arrow {
            position: fixed;
            top: auto;
            bottom: 1.5rem;
            transform: none;
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            background: rgba(20, 20, 20, 0.7);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            color: white;
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