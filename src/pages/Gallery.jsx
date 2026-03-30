import React, { useState, useEffect, useRef, useCallback } from 'react';
import galleryData from '../assets/Gallery.json'

// ============================================================================
// LOCAL DEVELOPMENT INSTRUCTIONS:
// To separate this data into a JSON file in your local project:
// 1. Create a new file named 'galleryData.json' in your assets folder.
// 2. Copy the entire object below (from the opening '{' to the closing '}') into it.
// 3. Delete this 'const galleryData = {...}' block entirely.
// 4. Add this import at the top of the file: 
//    import galleryData from '../assets/galleryData.json';
// ============================================================================


// --- 2. Native React 3D Tilt Component (NO Inline CSS) ---
const TiltCard = ({ children, className }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        cardRef.current.style.setProperty('--rx', `${rotateX}deg`);
        cardRef.current.style.setProperty('--ry', `${rotateY}deg`);
        cardRef.current.classList.add('tilted');
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.classList.remove('tilted');
        }
    };

    return (
        <div ref={cardRef} className={`${className} tilt-card`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    );
};

export default function App() {
    const [activeTab, setActiveTab] = useState('photos');
    const [selectedGalleryId, setSelectedGalleryId] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [modalBg, setModalBg] = useState("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop");
    const [modalMounted, setModalMounted] = useState(false);
    const lightboxImgRef = useRef(null);

    // Extract dynamic keys from the JSON object
    const photoKeys = Object.keys(galleryData).filter(k => galleryData[k].type === 'photo');
    const videoKeys = Object.keys(galleryData).filter(k => galleryData[k].type === 'video');

    const lightboxMedia = selectedGalleryId && galleryData[selectedGalleryId]?.type === 'photo'
        ? galleryData[selectedGalleryId].media
        : [];

    // Configuration for the 4 staggered columns
    const columnsConfig = [
        { offsetClass: '', speed: "0.10" },
        { offsetClass: 'grid-offset-lg', speed: "-0.15" },
        { offsetClass: 'grid-offset-md', speed: "0.18" },
        { offsetClass: 'grid-offset-xl', speed: "-0.08" }
    ];

    // Navigation and URL Sync logic
    const closeGallery = useCallback(() => {
        setSelectedGalleryId(null);
        window.history.pushState(null, '', window.location.pathname + window.location.search);
    }, []);

    const openGallery = useCallback((id) => {
        setSelectedGalleryId(id);
        window.history.pushState(null, '', `#${id}`);
    }, []);

    // Handle deep linking and browser back/forward buttons
    useEffect(() => {
        const handlePopState = () => {
            const hash = window.location.hash.substring(1);
            if (hash && galleryData[hash]) {
                setSelectedGalleryId(hash);
            } else {
                setSelectedGalleryId(null);
            }
        };

        window.addEventListener('popstate', handlePopState);
        handlePopState(); // Check on mount

        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Set Dynamic modal background based on gallery selection
    useEffect(() => {
        if (selectedGalleryId && galleryData[selectedGalleryId]) {
            const data = galleryData[selectedGalleryId];
            let randomBgUrl = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop";
            if (data.type === 'photo' && data.media.length > 0) {
                // If a specific thumbnail is provided, use it for the blur background
                randomBgUrl = data.thumbnail || data.media[0].url;
            } else if (data.type === 'video') {
                randomBgUrl = data.thumbnail || "https://images.unsplash.com/photo-1523580494112-0229276f9a53?q=80&w=800&auto=format&fit=crop";
            }
            setModalBg(randomBgUrl);
        }
    }, [selectedGalleryId]);

    // Setup Body Lock
    useEffect(() => {
        if (selectedGalleryId || lightboxIndex !== null) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [selectedGalleryId, lightboxIndex]);

    // Delay modal items animation for smooth entry
    useEffect(() => {
        if (selectedGalleryId) {
            const timer = setTimeout(() => setModalMounted(true), 150);
            return () => clearTimeout(timer);
        } else {
            setModalMounted(false);
        }
    }, [selectedGalleryId]);

    // Setup GSAP for Scroll Reveal & Parallax
    useEffect(() => {
        let ctx;
        const initGSAP = () => {
            if (!window.gsap || !window.ScrollTrigger) return;
            window.gsap.registerPlugin(window.ScrollTrigger);

            ctx = window.gsap.context(() => {
                const revealWrappers = window.gsap.utils.toArray('.reveal-wrapper');
                window.gsap.fromTo(revealWrappers,
                    { y: 150, opacity: 0, scale: 0.95 },
                    {
                        y: 0, opacity: 1, scale: 1, duration: 1.4, stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".main-content",
                            start: "top 80%",
                            end: "top 20%",
                            toggleActions: "play none none none",
                        }
                    }
                );

                let mm = window.gsap.matchMedia();
                mm.add("(min-width: 768px)", () => {
                    const columns = window.gsap.utils.toArray('.parallax-col');
                    columns.forEach(col => {
                        const speed = parseFloat(col.getAttribute('data-parallax-speed'));
                        window.gsap.to(col, {
                            y: () => -window.innerHeight * speed,
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".main-content",
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 1.5,
                            }
                        });
                    });
                });
            });
        };

        const loadScript = (src) => new Promise(resolve => {
            if (document.querySelector(`script[src="${src}"]`)) return resolve();
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            document.head.appendChild(s);
        });

        Promise.all([
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js')
        ]).then(() => {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js').then(() => {
                setTimeout(initGSAP, 100);
            });
        });

        return () => {
            if (ctx) ctx.revert();
        };
    }, [photoKeys.length, videoKeys.length]);

    // Refresh scroll triggers when tabs change
    useEffect(() => {
        if (window.ScrollTrigger) {
            setTimeout(() => window.ScrollTrigger.refresh(), 100);
        }
    }, [activeTab]);

    // Keybindings (Esc, Arrow keys)
    const handleKeyDown = useCallback((e) => {
        if (lightboxIndex !== null) {
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') triggerLightboxChange((lightboxIndex + 1) % lightboxMedia.length);
            if (e.key === 'ArrowLeft') triggerLightboxChange((lightboxIndex - 1 + lightboxMedia.length) % lightboxMedia.length);
        } else if (selectedGalleryId !== null) {
            if (e.key === 'Escape') closeGallery();
        }
    }, [lightboxIndex, selectedGalleryId, lightboxMedia.length, closeGallery]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const triggerLightboxChange = (newIndex) => {
        if (lightboxImgRef.current) {
            lightboxImgRef.current.classList.add('lightbox-fade');
            setTimeout(() => {
                setLightboxIndex(newIndex);
                lightboxImgRef.current.classList.remove('lightbox-fade');
            }, 150);
        } else {
            setLightboxIndex(newIndex);
        }
    };

    return (
        <div className="app-wrapper">

            <style>{`
                .dynamic-modal-bg { background-image: url('${modalBg}'); }
            `}</style>

            <div className="ambient-bg-container">
                <div className="aurora aurora-1"></div>
                <div className="aurora aurora-2"></div>
                <div className="noise-overlay"></div>
            </div>

            <header className="hero-header">
                <div className="hero-bg-wrapper">
                    <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop" alt="Campus Background" className="hero-bg-img" />
                    <div className="hero-overlay-dark"></div>
                    <div className="hero-overlay-gradient"></div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Life at <br />
                        <span className="hero-title-highlight">Anandam</span>
                    </h1>
                    <p className="hero-desc">
                        A visual archive of campus stories, celebrations, and milestones across the years. Explore the moments that define us through stunning photography and immersive video.
                    </p>
                </div>
            </header>

            <div className="content-offset">

                <main className="main-content">
                    {/* PHOTOS TAB - DYNAMICALLY RENDERED */}
                    <section className={`gallery-section ${activeTab === 'photos' ? 'tab-visible' : 'tab-hidden'}`}>
                        <div className="gallery-grid gallery-grid-photos">

                            {columnsConfig.map((colConfig, colIdx) => (
                                <div key={`col-${colIdx}`} className={`grid-col ${colConfig.offsetClass} parallax-col`} data-parallax-speed={colConfig.speed}>

                                    {photoKeys.filter(id => {
                                        // If 'column' is specified in JSON, use it. Otherwise fallback to array modulus distribution.
                                        const colIndex = galleryData[id].column !== undefined ? galleryData[id].column : photoKeys.indexOf(id) % 4;
                                        return colIndex === colIdx;
                                    }).map(id => {
                                        const data = galleryData[id];
                                        return (
                                            <div key={id} className="reveal-wrapper clickable-area" onClick={() => openGallery(id)}>
                                                <TiltCard className={`gallery-card ${data.aspectRatio || 'aspect-square'}`}>
                                                    <img src={data.thumbnail || data.media[0]?.url || ""} className="card-bg-img" alt={data.title} />
                                                    <div className="card-glass-hover"></div>
                                                    <div className="card-gradient"></div>
                                                    <div className="card-content-overlay">
                                                        <span className={`card-subtitle ${data.colorClass || 'txt-amber'}`}>{data.subtitle}</span>
                                                        <h3 className="card-title">{data.title}</h3>
                                                    </div>
                                                </TiltCard>
                                            </div>
                                        );
                                    })}

                                </div>
                            ))}

                        </div>
                    </section>

                    {/* VIDEOS TAB - DYNAMICALLY RENDERED */}
                    <section className={`gallery-section ${activeTab === 'videos' ? 'tab-visible' : 'tab-hidden'}`}>
                        <div className="gallery-grid gallery-grid-videos">

                            {videoKeys.map((id) => {
                                const data = galleryData[id];

                                return (
                                    <div key={id} className="reveal-wrapper clickable-area" onClick={() => openGallery(id)}>
                                        <TiltCard className="gallery-card aspect-video video-card-shadow">
                                            {data.thumbnailVideo ? (
                                                <video autoPlay loop muted playsInline className="card-bg-img img-dimmed object-cover">
                                                    <source src={data.thumbnailVideo} type="video/mp4" />
                                                </video>
                                            ) : (
                                                <img src={data.thumbnail || "https://images.unsplash.com/photo-1523580494112-0229276f9a53?q=80&w=800&auto=format&fit=crop"} className="card-bg-img img-dimmed" alt={data.title} />
                                            )}
                                            <div className="card-glass-hover"></div>
                                            <div className="video-dark-overlay"></div>
                                            <div className="video-play-btn-wrapper">
                                                <div className="video-play-btn">
                                                    <svg className="video-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                </div>
                                            </div>
                                            <div className="card-content-overlay video-text-grad">
                                                <span className={`card-subtitle ${data.colorClass || 'txt-amber'}`}>{data.subtitle}</span>
                                                <h3 className="card-title video-title">{data.title}</h3>
                                            </div>
                                        </TiltCard>
                                    </div>
                                );
                            })}

                        </div>
                    </section>

                </main>
            </div>

            {/* FLOATING TABS CONTROLLER (Bottom Popup Selection) */}
            <div className="floating-tabs-container">
                <div className="floating-tabs-wrapper">
                    <div className="tabs-pill-container">
                        <button onClick={() => setActiveTab('photos')} className={`tab-btn ${activeTab === 'photos' ? 'tab-btn-active' : 'tab-btn-inactive'}`}>
                            📸 Photos
                        </button>
                        <button onClick={() => setActiveTab('videos')} className={`tab-btn ${activeTab === 'videos' ? 'tab-btn-active' : 'tab-btn-inactive'}`}>
                            🎥 Videos
                        </button>
                    </div>
                </div>
            </div>

            {/* INTERACTIVE SPLIT-SCREEN MODAL */}
            <div className={`split-modal ${selectedGalleryId ? 'split-modal-open' : 'split-modal-closed'}`}>
                {/* Left Side: Hero Information */}
                <div className="split-modal-left">
                    <div className="dynamic-modal-bg split-modal-bg"></div>
                    <div className="split-modal-overlay-dark"></div>
                    <div className="split-modal-overlay-grad-x"></div>
                    <div className="split-modal-overlay-grad-y"></div>

                    <button onClick={closeGallery} className="modal-back-btn">
                        <svg className="svg-icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>

                    <div className="modal-text-content">
                        <span className="modal-subtitle">{galleryData[selectedGalleryId]?.subtitle}</span>
                        <h2 className="modal-title">{galleryData[selectedGalleryId]?.title}</h2>
                        <div className="modal-divider"></div>
                        <p className="modal-desc">{galleryData[selectedGalleryId]?.description}</p>
                    </div>
                </div>

                {/* Right Side: Scrollable Media Area */}
                <div className="split-modal-right">
                    <div className={`modal-media-grid ${galleryData[selectedGalleryId]?.type === 'photo' ? 'grid-photos' : 'grid-videos'}`}>

                        {selectedGalleryId && galleryData[selectedGalleryId].type === 'photo' && galleryData[selectedGalleryId].media.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setLightboxIndex(index)}
                                className={`modal-photo-card clickable-area delay-${index > 15 ? 15 : index} ${modalMounted ? 'card-anim-entered' : 'card-anim-initial'}`}
                            >
                                <img src={item.url} className="modal-photo-img" alt={`Gallery item ${index + 1}`} />
                            </div>
                        ))}

                        {selectedGalleryId && galleryData[selectedGalleryId].type === 'video' && galleryData[selectedGalleryId].media.map((vid, index) => (
                            <div
                                key={index}
                                className={`modal-video-card delay-${index > 15 ? 15 : index} ${modalMounted ? 'card-anim-entered' : 'card-anim-initial'} ${vid.type === 'youtube' ? 'video-bg-dark' : 'video-bg-light'}`}
                            >
                                {vid.type === 'youtube' ? (
                                    <iframe className="modal-video-iframe" src={vid.url} title="YouTube player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                ) : (
                                    <video className="modal-video-element" controls>
                                        <source src={vid.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FULLSCREEN LIGHTBOX VIEWER */}
            <div
                className={`lightbox ${lightboxIndex !== null ? 'lightbox-open' : 'lightbox-closed'}`}
                onClick={() => setLightboxIndex(null)}
            >
                <button onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }} className="lightbox-btn lightbox-close">
                    <svg className="svg-icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <button onClick={(e) => { e.stopPropagation(); triggerLightboxChange((lightboxIndex - 1 + lightboxMedia.length) % lightboxMedia.length); }} className="lightbox-btn lightbox-prev">
                    <svg className="svg-icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </button>

                <button onClick={(e) => { e.stopPropagation(); triggerLightboxChange((lightboxIndex + 1) % lightboxMedia.length); }} className="lightbox-btn lightbox-next">
                    <svg className="svg-icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </button>

                <div className="lightbox-content-container" onClick={(e) => e.stopPropagation()}>
                    <img ref={lightboxImgRef} src={lightboxIndex !== null && lightboxMedia[lightboxIndex] ? lightboxMedia[lightboxIndex].url : ''} alt="Fullscreen view" className="lightbox-img" />
                    <p className="lightbox-caption" onClick={(e) => e.stopPropagation()}>{lightboxIndex !== null && lightboxMedia[lightboxIndex] ? lightboxMedia[lightboxIndex].description : ''}</p>
                </div>

                <div className="lightbox-counter" onClick={(e) => e.stopPropagation()}>
                    {lightboxIndex !== null ? `${lightboxIndex + 1} / ${lightboxMedia.length}` : ''}
                </div>
            </div>

            {/* ========================================================================= */}
            {/* FULLY CUSTOM CSS                                                          */}
            {/* ========================================================================= */}
            <style>{`
                /* Font Imports */
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=M+PLUS+Code+Latin:wght@300;400;500&family=Syne+Mono&display=swap');

                /* Base Resets & Variables */
                :root {
                    --top-offset: 75px;
                    
                    --font-sans: 'Inter', system-ui, sans-serif;
                    --font-serif: 'Cormorant Garamond', Georgia, serif;
                    --font-syne: 'Syne Mono', monospace;
                    
                    /* Colors */
                    --bg-main: #FDFBF7;
                    --text-main: #1C1917;
                    --stone-950: #0a0a0f;
                    --stone-900: #1c1917;
                    --stone-800: #292524;
                    --stone-700: #44403c;
                    --stone-500: #78716c;
                    --stone-400: #a8a29e;
                    --stone-300: #d6d3d1;
                    --stone-200: #e7e5e4;
                    --stone-100: #f5f5f4;
                    --color-amber: #fbbf24;
                    --color-orange: #fdba74;
                    --color-purple: #c084fc;
                    --color-rose: #fda4af;
                    --color-yellow: #fde047;
                    --color-green: #4ade80;
                    --color-teal: #5eead4;
                    --color-cyan: #67e8f9;
                    --color-indigo: #818cf8;
                    
                    /* Shadows */
                    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
                    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                }

                * { box-sizing: border-box; margin: 0; padding: 0; }
                html { scroll-behavior: smooth; }
                body { background-color: var(--bg-main); color: var(--text-main); font-family: var(--font-sans); }
                body.modal-open { overflow: hidden; }
                button { background: transparent; border: none; font-family: inherit; cursor: pointer; }
                button:focus { outline: none; }
                
                /* Typographic Utilities */
                .font-serif { font-family: var(--font-serif); }
                .italic { font-style: italic; }

                /* Scrollbar */
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: var(--bg-main); }
                ::-webkit-scrollbar-thumb { background: var(--stone-200); border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: var(--stone-300); }

                /* Global Utilities */
                .app-wrapper { position: relative; min-height: 100vh; }
                .content-offset { padding-top: var(--top-offset); }
                .clickable-area { cursor: pointer; }
                .svg-icon-sm { width: 1.5rem; height: 1.5rem; }
                .svg-icon-md { width: 1.75rem; height: 1.75rem; }
                .svg-icon-lg { width: 2rem; height: 2rem; }
                .svg-icon-xl { width: 2.5rem; height: 2.5rem; }

                /* Staggered transition delays for modal entry */
                .delay-0 { transition-delay: 0ms; }
                .delay-1 { transition-delay: 100ms; }
                .delay-2 { transition-delay: 200ms; }
                .delay-3 { transition-delay: 300ms; }
                .delay-4 { transition-delay: 400ms; }
                .delay-5 { transition-delay: 500ms; }
                .delay-6 { transition-delay: 600ms; }
                .delay-7 { transition-delay: 700ms; }
                .delay-8 { transition-delay: 800ms; }
                .delay-9 { transition-delay: 900ms; }
                .delay-10 { transition-delay: 1000ms; }
                .delay-11 { transition-delay: 1100ms; }
                .delay-12 { transition-delay: 1200ms; }
                .delay-13 { transition-delay: 1300ms; }
                .delay-14 { transition-delay: 1400ms; }
                .delay-15 { transition-delay: 1500ms; }

                /* Ambient Background */
                .ambient-bg-container { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 0; overflow: hidden; pointer-events: none; }
                .aurora { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.7; }
                .aurora-1 { top: 20%; left: -10%; width: 50vw; height: 50vw; background: radial-gradient(circle, rgba(251,191,36,0.2) 0%, rgba(253,251,247,0) 70%); }
                .aurora-2 { bottom: -10%; right: -10%; width: 60vw; height: 60vw; background: radial-gradient(circle, rgba(244,114,182,0.15) 0%, rgba(253,251,247,0) 70%); }
                .noise-overlay {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.05; mix-blend-mode: overlay;
                    background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');
                }

                /* Main Hero Section */
                .hero-header {
                    position: relative; width: 100%; min-height: 85vh; display: flex; flex-direction: column;
                    justify-content: center; align-items: flex-start; text-align: left; overflow: hidden;
                    z-index: 10; background-color: var(--stone-900); box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .hero-bg-wrapper { position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0; overflow: hidden; }
                .hero-bg-img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.1); filter: blur(12px); opacity: 0.7; }
                .hero-overlay-dark { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(28,25,23,0.5); mix-blend-mode: multiply; }
                .hero-overlay-gradient { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to top, var(--stone-900), rgba(28,25,23,0.4), transparent); }
                
                .hero-content { position: relative; z-index: 10; width: 100%; max-width: 64rem; margin: 0; padding: 6rem 2rem; }
                @media (min-width: 640px) { .hero-content { padding: 6rem 4rem; } }
                @media (min-width: 1280px) { .hero-content { padding: 6rem 8rem; } }
                
                .hero-title { margin-top: 4rem; font-family: var(--font-serif); font-size: 3rem; line-height: 1; letter-spacing: -0.025em; margin-bottom: 1.5rem; color: white; font-weight: 600; text-shadow: 0 10px 15px rgba(0,0,0,0.5); }
                @media (min-width: 640px) { .hero-title { font-size: 4.5rem; } }
                @media (min-width: 1280px) { .hero-title { font-size: 6rem; } }
                .hero-title-highlight { background-image: linear-gradient(to right, var(--color-amber), var(--color-yellow), var(--color-orange)); -webkit-background-clip: text; color: transparent; }
                
                .hero-desc { font-size: 1.125rem; font-weight: 300; color: var(--stone-300); margin-bottom: 3rem; max-width: 42rem; margin-left: 0; line-height: 1.625; text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
                @media (min-width: 768px) { .hero-desc { font-size: 1.25rem; } }

                /* Floating Tabs Navigation (Bottom Popup Selection) */
                .floating-tabs-container { position: fixed; bottom: 2.5rem; left: 50%; transform: translateX(-50%); z-index: 35; }
                .floating-tabs-wrapper { display: flex; justify-content: center; }
                
                .tabs-pill-container { 
                    display: inline-flex; 
                    background-color: rgba(253, 251, 247, 0.85); 
                    backdrop-filter: blur(16px);
                    padding: 0.375rem; 
                    border-radius: 9999px; 
                    border: 1px solid rgba(231,229,228,0.6);
                    box-shadow: var(--shadow-2xl);
                }
                .tab-btn { 
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.625rem 2.5rem; 
                    border-radius: 9999px; 
                    font-size: 0.875rem; 
                    font-weight: 600; 
                    color: var(--stone-500);
                    transition: all 0.2s ease; 
                }
                .tab-btn-active { 
                    background-color: white; 
                    color: var(--stone-900); 
                    box-shadow: var(--shadow-sm); 
                }
                .tab-btn-inactive { 
                    background-color: transparent;
                }
                .tab-btn-inactive:hover { 
                    color: var(--stone-900); 
                }

                /* Main Content Gallery */
                .main-content { position: relative; z-index: 10; width: 100%; min-height: 100vh; }
                
                .gallery-section { padding-bottom: 8rem; padding-left: 1.5rem; padding-right: 1.5rem; width: 100%; max-width: 90rem; margin: 0 auto; transition: opacity 0.4s ease; }
                @media (min-width: 640px) { .gallery-section { padding-left: 2rem; padding-right: 2rem; } }
                @media (min-width: 1280px) { .gallery-section { padding-left: 3rem; padding-right: 3rem; } }
                
                .tab-visible { display: block; opacity: 1; }
                .tab-hidden { display: none; opacity: 0; }

                .gallery-grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1.25rem; }
                @media (min-width: 768px) { .gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
                
                .gallery-grid-photos { }
                @media (min-width: 1024px) { .gallery-grid-photos { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; } }
                @media (min-width: 1280px) { .gallery-grid-photos { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
                
                .gallery-grid-videos { }
                @media (min-width: 1024px) { .gallery-grid-videos { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; } }

                .grid-col { display: flex; flex-direction: column; gap: 1.25rem; }
                @media (min-width: 1024px) { .grid-col { gap: 1.5rem; } }
                @media (min-width: 768px) { .grid-offset-lg { padding-top: 4rem; } }
                @media (min-width: 768px) { .grid-offset-md { padding-top: 2rem; } }
                @media (min-width: 1280px) { .grid-offset-xl { padding-top: 6rem; } }

                /* Cards and Hover Effects */
                .reveal-wrapper { opacity: 0; transform: translateY(150px) scale(0.95); }
                
                .tilt-card { transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); }
                .tilt-card.tilted { transition: none; transform: perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale3d(1.02, 1.02, 1.02); }
                
                .gallery-card { position: relative; width: 100%; border-radius: 1rem; overflow: hidden; border: 1px solid rgba(255,255,255,0.8); background-color: rgba(255,255,255,0.4); backdrop-filter: blur(12px); box-shadow: 0 20px 25px -5px rgba(231,229,228,0.5); }
                .aspect-portrait { aspect-ratio: 4/5; }
                .aspect-portrait-alt { aspect-ratio: 3/4; }
                .aspect-square { aspect-ratio: 1/1; }
                .aspect-video { aspect-ratio: 16/9; }

                .card-bg-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.85; mix-blend-mode: multiply; transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
                .tilt-card:hover .card-bg-img { transform: scale(1.08); }
                
                .card-glass-hover { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; pointer-events: none; opacity: 0; transition: all 0.5s; border-radius: 1rem; background-color: rgba(255,255,255,0.1); backdrop-filter: blur(4px); border: 2px solid rgba(255,255,255,0.2); }
                .tilt-card:hover .card-glass-hover { opacity: 1; }

                .card-gradient { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(28,25,23,0.9), rgba(28,25,23,0.2), transparent); }
                
                .card-content-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 1.5rem; display: flex; flex-direction: column; justify-content: flex-end; z-index: 20; pointer-events: none; transition: transform 0.5s; }
                .tilt-card:hover .card-content-overlay { transform: translateY(-0.5rem); }

                .card-subtitle { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.5rem; }
                .txt-amber { color: var(--color-amber); }
                .txt-orange { color: var(--color-orange); }
                .txt-purple { color: var(--color-purple); }
                .txt-rose { color: var(--color-rose); }
                .txt-yellow { color: var(--color-yellow); }
                .txt-green { color: var(--color-green); }
                .txt-teal { color: var(--color-teal); }
                .txt-cyan { color: var(--color-cyan); }
                .txt-indigo { color: var(--color-indigo); }

                .card-title { font-family: var(--font-serif); font-size: 1.5rem; font-weight: 600; color: white; margin-bottom: 0.5rem; }

                /* Video Card Specifics */
                .video-card-shadow { box-shadow: var(--shadow-xl); }
                .img-dimmed { opacity: 0.7; }
                .video-dark-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4); transition: background-color 0.3s; }
                .tilt-card:hover .video-dark-overlay { background-color: rgba(0,0,0,0.2); }
                
                .video-play-btn-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index: 20; }
                .video-play-btn { width: 3.5rem; height: 3.5rem; border-radius: 50%; background-color: rgba(255,255,255,0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center; color: white; box-shadow: var(--shadow-lg); transition: transform 0.3s; }
                .tilt-card:hover .video-play-btn { transform: scale(1.1); }
                .video-icon { width: 1.75rem; height: 1.75rem; margin-left: 0.25rem; }
                
                .video-text-grad { padding: 1.5rem; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); top: auto; bottom: 0; height: auto; }
                .video-title { font-size: 1.25rem; }

                /* Section Divider */
                .section-divider-container { width: 100%; max-width: 90rem; margin: 0 auto; padding: 0 1.5rem; }
                @media (min-width: 640px) { .section-divider-container { padding-left: 2rem; padding-right: 2rem; } }
                @media (min-width: 1280px) { .section-divider-container { padding-left: 3rem; padding-right: 3rem; } }
                .section-divider { border: 0; height: 1px; background: linear-gradient(to right, transparent, var(--stone-300), transparent); margin: 3rem 0; }

                /* About Section */
                .about-section { position: relative; z-index: 10; padding: 2rem 1.5rem 10rem 1.5rem; width: 100%; text-align: center; }
                @media (min-width: 768px) { .about-section { padding-left: 3rem; padding-right: 3rem; } }
                
                .about-title { font-family: var(--font-serif); font-size: 1.875rem; font-weight: 600; color: var(--stone-900); margin-bottom: 1.5rem; }
                @media (min-width: 768px) { .about-title { font-size: 2.25rem; } }
                
                .about-desc { color: var(--stone-700); font-size: 1.125rem; line-height: 1.625; margin-bottom: 2rem; font-weight: 300; max-width: 42rem; margin-left: auto; margin-right: auto; }
                .about-divider-wrapper { display: inline-flex; align-items: center; gap: 1rem; color: var(--color-amber); font-weight: 500; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; }
                .about-divider-line { width: 3rem; height: 1px; background-color: rgba(251,191,36,0.5); }

                /* Split Modal Styles */
                .split-modal { position: fixed; top: var(--top-offset); left: 0; right: 0; bottom: 0; height: calc(100vh - var(--top-offset)); z-index: 40; display: flex; flex-direction: column; background-color: var(--stone-950); transition: opacity 0.5s ease; overflow-y: auto; overflow-x: hidden; }
                @media (min-width: 1024px) { .split-modal { flex-direction: row; overflow-y: hidden; } }
                .split-modal-open { opacity: 1; pointer-events: auto; }
                .split-modal-closed { opacity: 0; pointer-events: none; }

                /* Split Modal Left */
                .split-modal-left { width: 100%; color: white; position: relative; display: flex; flex-direction: column; justify-content: center; padding: 2rem; border-bottom: 1px solid var(--stone-800); flex-shrink: 0; z-index: 20; overflow: hidden; background-color: var(--stone-950); box-shadow: var(--shadow-2xl); }
                /* Narrowed down to 30% as requested */
                @media (min-width: 1024px) { .split-modal-left { width: 30%; max-width: 450px; height: 100%; padding: 3rem; border-bottom: none; border-right: 1px solid var(--stone-800); } }
                
                .split-modal-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; background-repeat: no-repeat; filter: blur(35px); transform: scale(1.15); opacity: 0.8; transition: all 0.7s; }
                .split-modal-overlay-dark { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(10,10,15,0.4); mix-blend-mode: multiply; }
                .split-modal-overlay-grad-x { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(10,10,15,0.95), rgba(10,10,15,0.8), transparent); }
                .split-modal-overlay-grad-y { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(10,10,15,0.9), transparent); }

                .modal-back-btn { position: absolute; top: 2rem; left: 2rem; padding: 0.75rem; border-radius: 50%; background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--stone-300); transition: all 0.3s; z-index: 30; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(12px); }
                .modal-back-btn:hover { background-color: rgba(255,255,255,0.15); color: white; }

                .modal-text-content { position: relative; z-index: 10; margin-top: 4rem; }
                @media (min-width: 1024px) { .modal-text-content { margin-top: 0; } }
                
                .modal-subtitle { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em; color: var(--color-amber); text-transform: uppercase; display: block; margin-bottom: 1rem; }
                .modal-title { font-family: var(--font-serif); font-size: 3rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.1; letter-spacing: -0.025em; }
                @media (min-width: 1024px) { .modal-title { font-size: 3.5rem; } }
                .modal-divider { width: 3rem; height: 4px; background-color: var(--color-amber); margin-bottom: 2rem; }
                .modal-desc { font-family: 'M PLUS Code Latin', monospace; font-size: 1.05rem; color: var(--stone-300); font-weight: 300; line-height: 1.625; }

                /* Split Modal Right */
                .split-modal-right { width: 100%; height: auto; overflow-y: visible; background-color: white; position: relative; padding: 1.5rem; padding-bottom: 6rem; box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05); }
                /* Expanded to 70% width */
                @media (min-width: 1024px) { .split-modal-right { width: 70%; flex: 1; height: 100%; overflow-y: auto; padding: 3rem; padding-bottom: 6rem; } }
                
                .modal-media-grid { max-width: 64rem; margin: 3rem auto 0; }
                @media (min-width: 1024px) { .modal-media-grid { margin-top: 1.5rem; } }
                
                .grid-photos { column-count: 1; column-gap: 1.5rem; }
                @media (min-width: 640px) { .grid-photos { column-count: 2; } }
                @media (min-width: 1280px) { .grid-photos { column-count: 3; } }
                .grid-videos { display: flex; flex-direction: column; gap: 2rem; max-width: 56rem; margin-left: auto; margin-right: auto; }

                .modal-photo-card { break-inside: avoid; margin-bottom: 1.5rem; border-radius: 1.5rem; overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--stone-100); background-color: white; padding: 0.625rem; transition: all 0.7s, box-shadow 0.3s; }
                .modal-photo-card:hover { box-shadow: var(--shadow-xl); }
                .card-anim-initial { opacity: 0; transform: translateY(2rem); }
                .card-anim-entered { opacity: 1; transform: translateY(0); }
                
                .modal-photo-img { width: 100%; height: auto; border-radius: 1rem; object-fit: cover; transition: transform 0.5s; }
                .modal-photo-card:hover .modal-photo-img { transform: scale(1.05); }

                .modal-video-card { transition: all 0.7s; width: 100%; aspect-ratio: 16/9; border-radius: 1.5rem; overflow: hidden; box-shadow: var(--shadow-2xl); border: 1px solid var(--stone-200); }
                .video-bg-dark { background-color: white; padding: 0.5rem; }
                .video-bg-light { background-color: white; padding: 0.5rem; }
                
                .modal-video-iframe { width: 100%; height: 100%; border-radius: 1rem; }
                .modal-video-element { width: 100%; height: 100%; object-fit: cover; border-radius: 1rem; }

                /* Fullscreen Lightbox */
                .lightbox { position: fixed; top: var(--top-offset); left: 0; right: 0; bottom: 0; height: calc(100vh - var(--top-offset)); z-index: 60; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: rgba(0,0,0,0.95); transition: opacity 0.3s; backdrop-filter: blur(4px); }
                .lightbox-open { opacity: 1; pointer-events: auto; }
                .lightbox-closed { opacity: 0; pointer-events: none; }

                .lightbox-btn { position: absolute; padding: 0.5rem; border-radius: 50%; color: rgba(255,255,255,0.5); transition: all 0.3s; z-index: 80; }
                .lightbox-btn:hover { color: white; background-color: rgba(255,255,255,0.1); }
                .lightbox-close { top: 1.5rem; right: 1.5rem; }
                @media (min-width: 1024px) { .lightbox-close { top: 2rem; right: 2rem; } }
                
                /* Vertically centered lightbox buttons */
                .lightbox-prev { left: 1rem; top: 50%; transform: translateY(-50%); }
                @media (min-width: 1024px) { .lightbox-prev { left: 2rem; } }
                .lightbox-next { right: 1rem; top: 50%; transform: translateY(-50%); }
                @media (min-width: 1024px) { .lightbox-next { right: 2rem; } }

                .lightbox-content-container { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; max-width: 90rem; max-height: calc(90vh - var(--top-offset)); padding: 0 1rem; position: relative; }
                @media (min-width: 768px) { .lightbox-content-container { padding: 0 5rem; } }

                .lightbox-img { max-width: 100%; max-height: calc(82vh - var(--top-offset)); object-fit: contain; border-radius: 0.5rem; box-shadow: var(--shadow-2xl); user-select: none; transition: opacity 0.15s ease-in-out; opacity: 1; }
                .lightbox-fade .lightbox-img { opacity: 0.5; }

                .lightbox-caption { font-family: var(--font-syne); margin-top: 1.5rem; color: rgba(255,255,255,0.9); font-size: 1.1rem; font-weight: 400; text-align: center; max-width: 800px; line-height: 1.5; transition: opacity 0.15s; }
                .lightbox-fade .lightbox-caption { opacity: 0; }
                
                .lightbox-counter { position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%); color: rgba(255,255,255,0.6); letter-spacing: 0.1em; font-size: 0.7rem; font-weight: 500; z-index: 70; }
            `}</style>
        </div>
    );
}