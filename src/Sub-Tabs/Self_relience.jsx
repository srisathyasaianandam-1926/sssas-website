import React, { useState } from 'react';

export default function SelfReliance() {
    const [selectedDept, setSelectedDept] = useState(null);
    const [isPreviewActive, setIsPreviewActive] = useState(false);

    // Curated content for Self Reliance Departments
    const departments = [
        {
            id: 'audiovisual',
            title: "Audio & Visual",
            tag: "Technology",
            brief: "Managing sound engineering and multimedia during hostel events.",
            detail: "From daily prayers to grand festival celebrations, the A/V team ensures flawless acoustics and visuals. Students get hands-on experience with mixing consoles, microphones, projectors, and live broadcasting, blending technical acumen with event management.",
            img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
            icon: "ph-sliders-horizontal"
        },
        {
            id: 'dispensary',
            title: "Dispensary",
            tag: "Healthcare",
            brief: "Providing primary healthcare and maintaining medical records.",
            detail: "Operating under expert medical guidance, students in the Dispensary department learn basic first-aid, medicine dispensing, and patient care. It instills immense empathy and equips them with vital skills to handle medical emergencies responsibly.",
            img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
            icon: "ph-first-aid-kit"
        },
        {
            id: 'guest',
            title: "Guest Serving",
            tag: "Hospitality",
            brief: "Embodying the spirit of 'Atithi Devo Bhava' for visiting dignitaries.",
            detail: "Students learn the highest standards of hospitality. They are trained to respectfully receive guests, manage dining arrangements, and ensure visitors experience the warmth and discipline of the hostel. It builds confidence and excellent interpersonal skills.",
            img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            icon: "ph-tray"
        },
        {
            id: 'decoration',
            title: "Decoration",
            tag: "Aesthetics",
            brief: "Transforming spaces with floral and thematic designs for festivals.",
            detail: "This department channels student creativity. Whether it is intricate Rangoli designs, elaborate floral hangings, or thematic stage setups, students work as a team to beautify the hostel for special occasions, learning artistry and collaborative execution.",
            img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
            icon: "ph-paint-brush-broad"
        },
        {
            id: 'altar',
            title: "Altar Department",
            tag: "Spirituality",
            brief: "Maintaining the sanctity of the prayer hall and coordinating daily worship.",
            detail: "Students in the Altar Department take on the sacred responsibility of preparing the shrine for daily prayers. They arrange flowers, light lamps, and ensure the spiritual epicenter of the hostel remains pristine, cultivating deep inner peace and devotion.",
            img: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&q=80&w=800",
            icon: "ph-flower-lotus"
        },
        {
            id: 'kitchen',
            title: "Kitchen Department",
            tag: "Sustenance",
            brief: "Learning the logistics of mass meal preparation and selfless service.",
            detail: "The Kitchen Department is the backbone of the hostel. Here, students assist in prepping meals for hundreds of their brothers. They learn crucial life skills like inventory management, hygienic food handling, time management, and the profound joy of cooking and serving with love.",
            img: "https://images.unsplash.com/photo-1577563908411-50cb98976fea?auto=format&fit=crop&q=80&w=800",
            icon: "ph-cooking-pot"
        },
        {
            id: 'sports',
            title: "Sports",
            tag: "Fitness",
            brief: "Maintaining athletic gear and organizing intra-hostel tournaments.",
            detail: "The Sports department is responsible for the upkeep of all sporting equipment and the maintenance of the playfields. Students learn leadership and fair play by organizing matches, umpiring, and ensuring everyone participates in daily physical activities.",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
            icon: "ph-tennis-ball"
        },
        {
            id: 'stores',
            title: "General Stores",
            tag: "Management",
            brief: "Handling inventory, procurement, and distribution of student essentials.",
            detail: "The General Stores operates like a mini-business. Students manage the supply chain of stationery, toiletries, and daily requirements. They learn accounting, stock-taking, and resource allocation, giving them practical exposure to business management.",
            img: "https://images.unsplash.com/photo-1553456558-aff63285aaa1?auto=format&fit=crop&q=80&w=800",
            icon: "ph-storefront"
        }
    ];

    // Track the currently hovered department to change the immersive background
    const [hoveredDept, setHoveredDept] = useState(departments[0]);

    // Track current index for navigation
    const currentIndex = departments.findIndex(d => d.id === selectedDept?.id);

    const openPreview = (dept) => {
        setSelectedDept(dept);
        setIsPreviewActive(true);
        document.body.style.overflow = 'hidden';
    };

    const closePreview = () => {
        setIsPreviewActive(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setSelectedDept(null), 500); // Matches the CSS transition time
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const newIdx = (currentIndex - 1 + departments.length) % departments.length;
        setSelectedDept(departments[newIdx]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const newIdx = (currentIndex + 1) % departments.length;
        setSelectedDept(departments[newIdx]);
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
                        Learning by <br />
                        <span className="gold-text">Doing</span>
                    </h1>
                    <p className="hero-description">
                        Self-reliance is the core of our hostel life. By participating in various departments, students run the day-to-day operations themselves—building leadership, practical skills, and a profound sense of ownership.
                    </p>

                    <div className="hero-scroll-indicator">
                        <div className="scroll-line"></div>
                        <a href="#departments" className="scroll-link">Explore Departments</a>
                    </div>
                </div>
            </header>

            {/* Main Content - Immersive Typographic List */}
            <main className="dept-showcase" id="departments">

                {/* Dynamic Backgrounds */}
                {departments.map((dept) => (
                    <div
                        key={`bg-${dept.id}`}
                        className={`dept-showcase-bg ${hoveredDept?.id === dept.id ? 'active' : ''}`}
                        style={{ backgroundImage: `url('${dept.img}')` }}
                    ></div>
                ))}

                <div className="dept-showcase-overlay"></div>

                <div className="dept-content-container">
                    <div className="section-header custom-header">
                        <h2 className="section-title serif text-white">Self Reliance Departments</h2>
                        <div className="section-line"></div>
                    </div>

                    <ul className="dept-list">
                        {departments.map((dept, idx) => (
                            <li
                                key={dept.id}
                                className="dept-list-item"
                                onMouseEnter={() => setHoveredDept(dept)}
                                onClick={() => openPreview(dept)}
                            >
                                <span className="dept-num">0{idx + 1}</span>

                                <div className="dept-info-group">
                                    <h3 className="dept-name serif">{dept.title}</h3>
                                    <p className="dept-item-brief">{dept.brief}</p>
                                </div>

                                <div className="dept-icon-action">
                                    <i className={`ph ${dept.icon}`}></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            {/* NEW: Glassmorphism Preview Modal (Full screen blur) */}
            <div className={`glass-preview-wrapper ${isPreviewActive ? 'active' : ''}`}>
                <div className="glass-preview-backdrop" onClick={closePreview}></div>

                <div className="glass-preview-container">
                    {selectedDept && (
                        <>
                            {/* Navigation Arrows */}
                            <button className="nav-arrow nav-prev" onClick={handlePrev} title="Previous Department">
                                <i className="ph ph-caret-left"></i>
                            </button>

                            <button className="nav-arrow nav-next" onClick={handleNext} title="Next Department">
                                <i className="ph ph-caret-right"></i>
                            </button>

                            <div className="glass-card">
                                <button className="glass-close-btn" onClick={closePreview} title="Close Preview">
                                    <i className="ph ph-x"></i>
                                </button>

                                <div className="glass-layout">
                                    {/* Visual Pane */}
                                    <div className="glass-image-col">
                                        <div className="glass-image" style={{ backgroundImage: `url('${selectedDept.img}')` }}></div>
                                    </div>

                                    {/* Text Pane */}
                                    <div className="glass-text-col">
                                        <div className="glass-text-inner">
                                            <span className="glass-tag">{selectedDept.tag}</span>
                                            <h3 className="glass-title serif">{selectedDept.title}</h3>
                                            <div className="glass-divider"></div>
                                            <p className="glass-brief">{selectedDept.brief}</p>
                                            <p className="glass-detail">{selectedDept.detail}</p>
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

        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: #050505; /* Fixed white space at the bottom */
          color: white;
          scroll-behavior: smooth;
          margin: 0;
        }

        .serif { font-family: 'Playfair Display', serif; }
        .mono { font-family: 'LXGW WenKai Mono TC', monospace; }

        /* --- HERO SECTION --- */
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
          background: linear-gradient(to right, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.4) 100%), 
                      url('src/assets/Self_reliance.png');
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
          margin: 6rem auto 0 auto; /* Shifted down to lower the content */
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

        /* --- IMMERSIVE TYPOGRAPHIC LIST (NO CARDS) --- */
        .dept-showcase {
          position: relative;
          min-height: 100vh;
          background: #050505;
          overflow: hidden;
          padding: 6rem 0 2rem 0; /* Reduced bottom padding */
        }

        .dept-showcase-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 0.8s ease, transform 3s ease;
          transform: scale(1.05);
        }

        .dept-showcase-bg.active {
          opacity: 0.35;
          transform: scale(1);
        }

        .dept-showcase-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #050505 0%, rgba(5,5,5,0.7) 45%, transparent 100%);
        }
        
        @media (max-width: 768px) {
          .dept-showcase-overlay {
            background: linear-gradient(to top, #050505 0%, rgba(5,5,5,0.8) 50%, transparent 100%);
          }
        }

        .dept-content-container {
          position: relative;
          z-index: 2;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .custom-header {
          margin-top: 0;
          margin-bottom: 3rem;
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

        .dept-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .dept-list-item {
          display: flex;
          align-items: center;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .dept-list-item:hover {
          border-bottom-color: var(--accent-gold);
        }

        .dept-num {
          font-family: 'LXGW WenKai Mono TC', monospace;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-gold);
          width: 60px;
          flex-shrink: 0;
          transition: var(--transition-smooth);
        }

        .dept-info-group {
          flex-grow: 1;
          padding-right: 2rem;
          transition: var(--transition-smooth);
        }

        .dept-list-item:hover .dept-num,
        .dept-list-item:hover .dept-info-group {
          transform: translateX(15px);
        }

        .dept-name {
          font-size: 3.5rem;
          color: rgba(255,255,255,0.4);
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
          transition: color 0.4s ease;
        }

        .dept-list-item:hover .dept-name {
          color: white;
        }

        .dept-item-brief {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
          max-width: 500px;
          opacity: 0;
          height: 0;
          overflow: hidden;
          transform: translateY(-10px);
          transition: all 0.4s ease;
        }

        .dept-list-item:hover .dept-item-brief {
          opacity: 1;
          height: auto;
          transform: translateY(0);
          margin-top: 0.5rem;
        }

        .dept-icon-action {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          color: rgba(255,255,255,0.3);
          transition: var(--transition-smooth);
          flex-shrink: 0;
        }

        .dept-list-item:hover .dept-icon-action {
          background: var(--accent-gold);
          border-color: var(--accent-gold);
          color: #000;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .dept-list-item { padding: 1.5rem 0; }
          .dept-num { font-size: 1.25rem; width: 40px; }
          .dept-name { font-size: 2rem; color: rgba(255,255,255,0.7); }
          .dept-item-brief { display: none; }
          .dept-icon-action { width: 45px; height: 45px; font-size: 1.25rem; }
        }

        /* --- GLASSMORPHISM PREVIEW --- */
        .glass-preview-wrapper {
          position: fixed;
          inset: 0;
          top: 0; /* Changed to 0 for full screen blur */
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
          backdrop-filter: blur(25px); /* Added heavy blur */
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
          padding: 2rem 3.5rem; /* Room for navigation arrows */
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

        /* Floating Close Button inside the glass card */
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
          min-height: 500px;
        }

        /* Left Visual Pane */
        .glass-image-col {
          width: 45%;
          position: relative;
          padding: 1.5rem;
        }

        .glass-image {
          width: 100%;
          height: 100%;
          border-radius: 1.25rem;
          background-size: cover;
          background-position: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        /* Right Text Pane */
        .glass-text-col {
          width: 55%;
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
          margin-bottom: 1.5rem;
        }

        .glass-title {
          font-size: 3rem;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .glass-divider {
          width: 4rem;
          height: 3px;
          background: var(--accent-gold);
          margin-bottom: 2rem;
          border-radius: 2px;
        }

        .glass-brief {
          font-size: 1.2rem;
          font-weight: 300;
          color: #e2e8f0;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .glass-detail {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.8;
          margin: 0;
        }

        /* Responsive Glass Modal */
        @media (max-width: 960px) {
          .nav-arrow {
            font-size: 2.5rem;
          }
          
          .nav-prev { left: -0.5rem; }
          .nav-next { right: -0.5rem; }

          .glass-preview-container {
            padding: 1rem 2.5rem; /* Room for arrows */
            height: 100%;
            display: flex;
            align-items: center;
          }
          
          .glass-card {
            max-height: 100%;
            overflow-y: auto;
          }

          .glass-layout {
            flex-direction: column;
            min-height: auto;
          }

          .glass-image-col {
            width: 100%;
            height: 300px;
            padding: 1rem 1rem 0 1rem;
          }

          .glass-text-col {
            width: 100%;
            padding: 3rem 1.5rem 2rem 1.5rem;
          }
          
          .glass-title {
            font-size: 2.25rem;
          }
        }
      ` }} />
        </div>
    );
}