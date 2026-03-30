import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const facilities = [
    {
        id: 1,
        title: "Smart Classrooms",
        label: "ACADEMICS",
        desc: "Equipped with interactive digital boards and advanced learning tools to foster an engaging, highly modern educational environment.",
        intro: "Next-generation learning spaces designed for maximum engagement.",
        details: "Our smart classrooms redefine the educational experience. Fully equipped with 4K interactive digital boards, high-speed internet connectivity, and ergonomic seating, these spaces allow educators to seamlessly integrate multimedia content, real-time quizzes, and collaborative digital projects into their daily curriculum.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Central Library",
        label: "RESEARCH",
        desc: "A vast, quiet sanctuary housing thousands of physical books, digital resources, and comfortable reading zones designed for deep focus.",
        intro: "A quiet sanctuary for deep focus and endless discovery.",
        details: "Housing over 50,000 physical volumes and providing access to extensive global digital archives, the Central Library is the academic heart of our campus. It features soundproofed individual study pods, collaborative research tables, and comfortable lounge areas wrapped in warm, natural lighting.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Science Labs",
        label: "PRACTICAL",
        desc: "State-of-the-art laboratories designed for hands-on experiments, allowing students to safely explore physics, chemistry, and biology.",
        intro: "Where theoretical knowledge meets hands-on discovery.",
        details: "Our state-of-the-art physics, chemistry, and biology laboratories are designed to university standards. Featuring professional-grade equipment, rigorous safety protocols, and dedicated experimental stations, students can safely conduct complex experiments and bring scientific theories to life.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Sports Complex",
        label: "ATHLETICS",
        desc: "Extensive physical development facilities including an Olympic-sized pool, indoor courts, and a vast playground for holistic health.",
        intro: "Fostering physical excellence and team spirit.",
        details: "The expansive sports complex is dedicated to physical development and athletic excellence. It encompasses an Olympic-sized indoor swimming pool, multi-surface basketball and tennis courts, and a lush, professionally maintained athletic field, supported by experienced coaching staff.",
        image: "/Images/IMG_0281.JPG"
    },
    {
        id: 5,
        title: "Technology Hub",
        label: "INNOVATION",
        desc: "High-speed computer labs aimed at building digital literacy, coding skills, and providing comprehensive technology access.",
        intro: "Building the digital leaders and creators of tomorrow.",
        details: "Designed for the digital age, our Technology Hub features high-end workstations, 3D printing facilities, and dedicated coding zones. Students learn everything from basic digital literacy to advanced programming, robotics, and artificial intelligence in a highly collaborative environment.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Creative Arts",
        label: "EXPRESSION",
        desc: "Dedicated, inspiring studios for music, painting, and dramatic arts to carefully nurture creative expression and cultural growth.",
        intro: "Nurturing the creative spirit and cultural awareness.",
        details: "Our Creative Arts wing is a vibrant space for self-expression. It includes acoustically treated music studios with a variety of instruments, expansive art rooms bathed in natural light, and a fully equipped theater designed to cultivate dramatic arts, public speaking, and confidence.",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop"
    }
];

export default function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [radius, setRadius] = useState(1000);
    const [selectedFacility, setSelectedFacility] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            if (width >= 1280) setRadius(1100);
            else if (width >= 1024) setRadius(900);
            else if (width >= 768) setRadius(700);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (selectedFacility) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedFacility]);

    return (
        <div className="app-wrapper">

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-bg-blur"></div>
                <div className="hero-content">
                    <h1 className="hero-title serif">
                        A Home Away <br />
                        <span className="gold-text">From Home</span>
                    </h1>
                    <p className="hero-description">
                        World class facilities with cutting edge technology and modern amenities harmonizes with the serene environment to provide a value based atmosphere to heighten the intellect and comfort of our students.These facilities empowers our learners to excel academically.
                    </p>

                    <div className="hero-scroll-indicator">
                        <div className="scroll-line"></div>
                        <a href="#living" className="scroll-link">Explore Campus Life</a>
                    </div>
                </div>
            </header>

            {/* Facilities Fan Section */}
            <section className="facilities-section" id="living">
                <FacilitiesFan
                    isMobile={isMobile}
                    radius={radius}
                    selectedFacility={selectedFacility}
                    setSelectedFacility={setSelectedFacility}
                />
            </section>

            {/* Expanded Detail Panel Overlay */}
            <AnimatePresence>
                {selectedFacility && (
                    <ExpandedPanel
                        facility={selectedFacility}
                        onClose={() => setSelectedFacility(null)}
                    />
                )}
            </AnimatePresence>

        </div>
    );
}

function FacilitiesFan({ isMobile, radius, selectedFacility, setSelectedFacility }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const isPaused = hoveredIndex !== null || selectedFacility !== null;

    const fanAnimation = {
        idle: {
            rotate: [-3.5, 3.5, -3.5],
            transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
        },
        paused: {
            rotate: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    if (isMobile) {
        return (
            <div className="mobile-fan-container hide-scrollbar">
                {facilities.map((facility, index) => (
                    <div key={facility.id} className="mobile-card-wrapper">
                        <MobileFacilityCard
                            facility={facility}
                            index={index}
                            onSelect={() => setSelectedFacility(facility)}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <motion.div
            className="desktop-fan-container"
            variants={fanAnimation}
            animate={isPaused ? "paused" : "idle"}
            style={{ height: '500px', perspective: '1200px' }}
        >
            <div className="fan-base-anchor" />

            {facilities.map((facility, index) => {
                const totalAngle = 70;
                const startAngle = -totalAngle / 2;
                const angleStep = totalAngle / (facilities.length - 1);
                const angle = startAngle + index * angleStep;

                return (
                    <DesktopFacilityCard
                        key={facility.id}
                        facility={facility}
                        index={index}
                        angle={angle}
                        radius={radius}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        onSelect={() => setSelectedFacility(facility)}
                        isSelected={selectedFacility?.id === facility.id}
                    />
                );
            })}
        </motion.div>
    );
}

function DesktopFacilityCard({ facility, index, angle, radius, hoveredIndex, setHoveredIndex, onSelect, isSelected }) {
    const isHovered = hoveredIndex === index;
    const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

    const radian = (angle * Math.PI) / 180;
    const x = Math.sin(radian) * radius;
    const topOffset = 250;
    const y = -Math.cos(radian) * radius + (radius - topOffset);

    return (
        <motion.div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ x: 0, y: 300, rotate: 0, opacity: 0 }}
            animate={{
                x: isHovered ? x * 1.02 : x,
                y: isHovered ? y - 40 : y,
                rotate: isHovered ? 0 : angle,
                opacity: isSelected ? 0 : (isOtherHovered ? 0.6 : 1),
                scale: isHovered ? 1.1 : isOtherHovered ? 0.95 : 1,
                zIndex: isHovered ? 50 : index + 10,
                filter: isOtherHovered ? 'blur(4px) brightness(0.7)' : 'blur(0px) brightness(1)'
            }}
            transition={{
                type: "spring",
                stiffness: isHovered ? 250 : 150,
                damping: isHovered ? 20 : 25,
                mass: 1,
                delay: hoveredIndex === null ? index * 0.05 : 0
            }}
            className="desktop-card-wrapper"
            onClick={onSelect}
        >
            <motion.div
                layoutId={`card-container-${facility.id}`}
                className={`card-inner ${isHovered ? 'card-inner-hovered' : 'card-inner-default'}`}
            >
                {isHovered && (
                    <motion.div
                        layoutId={`glow-${facility.id}`}
                        className="card-glow"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    />
                )}

                <motion.div
                    layoutId={`image-container-${facility.id}`}
                    className="card-image-container"
                >
                    <motion.img
                        layoutId={`image-${facility.id}`}
                        src={facility.image}
                        alt={facility.title}
                        className={`card-image ${isHovered ? 'card-image-hovered' : 'card-image-default'}`}
                    />
                </motion.div>

                <motion.h3 layoutId={`title-${facility.id}`} className="card-title">
                    {facility.title}
                </motion.h3>

                <motion.p layoutId={`desc-${facility.id}`} className="card-desc">
                    {facility.desc}
                </motion.p>

                <div className="card-btn-container">
                    <motion.button
                        layoutId={`button-${facility.id}`}
                        className={`card-btn ${isHovered ? 'card-btn-hovered' : 'card-btn-default'}`}
                    >
                        See more details
                        <span aria-hidden="true" style={{ marginLeft: '4px' }}>&rarr;</span>
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}

function MobileFacilityCard({ facility, index, onSelect }) {
    return (
        <motion.div
            layoutId={`card-container-${facility.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="mobile-card"
            onClick={onSelect}
        >
            <motion.div layoutId={`image-container-${facility.id}`} className="mobile-card-img-container">
                <motion.img layoutId={`image-${facility.id}`} src={facility.image} alt={facility.title} className="mobile-card-img" />
            </motion.div>
            <motion.h3 layoutId={`title-${facility.id}`} className="mobile-card-title">
                {facility.title}
            </motion.h3>
            <motion.p layoutId={`desc-${facility.id}`} className="mobile-card-desc">
                {facility.desc}
            </motion.p>

            <motion.button layoutId={`button-${facility.id}`} className="mobile-card-btn">
                See more details
                <span aria-hidden="true">&rarr;</span>
            </motion.button>
        </motion.div>
    );
}

function ExpandedPanel({ facility, onClose }) {
    return (
        <div className="modal-wrapper">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="modal-overlay-bg"
            />

            <motion.div
                layoutId={`card-container-${facility.id}`}
                className="modal-container"
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
                <div className="modal-left">
                    <motion.div
                        animate={{
                            rotate: [0, 180, 360],
                            scale: [1, 1.1, 1],
                            borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="modal-bg-shape"
                    />

                    <motion.div layoutId={`image-container-${facility.id}`} className="modal-img-wrapper">
                        <motion.img
                            layoutId={`image-${facility.id}`}
                            src={facility.image}
                            alt={facility.title}
                            className="modal-img"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </motion.div>
                </div>

                <div className="modal-right hide-scrollbar">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="modal-label"
                    >
                        {facility.label}
                    </motion.div>

                    <motion.h2
                        layoutId={`title-${facility.id}`}
                        className="modal-title"
                    >
                        {facility.title}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
                        className="modal-divider"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        className="modal-intro"
                    >
                        {facility.intro}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="modal-details"
                    >
                        <p>{facility.details}</p>
                    </motion.div>

                    {/* Hidden elements for seamless Framer Motion exit layouts */}
                    <motion.p layoutId={`desc-${facility.id}`} style={{ display: 'none' }}>{facility.desc}</motion.p>
                    <motion.div layoutId={`button-${facility.id}`} style={{ display: 'none' }} />
                    <motion.div layoutId={`glow-${facility.id}`} style={{ display: 'none' }} />
                </div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 }}
                    onClick={onClose}
                    className="modal-close-btn"
                >
                    <X size={20} className="modal-close-icon" />
                </motion.button>
            </motion.div>
        </div>
    );
}

// -----------------------------------------------------------
// CUSTOM CSS INJECTION
// -----------------------------------------------------------
const customStyles = `
  /* --- GLOBAL SCROLLBAR REMOVAL --- */
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  :root {
    --accent-gold: #d4af37;
  }

  /* Global / App Wrapper */
  .app-wrapper {
    position: relative;
    min-height: 100vh;
    background-color: #fffbeb; /* Matches the bottom of the gradient */
    color: #1e293b;
    overflow-x: hidden;
    font-family: sans-serif;
    padding-bottom: 5rem;
  }

  /* --- Hero Section --- */
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
 
  .hero-title.serif {
    font-family: serif;
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

  /* --- Facilities Section --- */
  .facilities-section {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 600px;
    margin-top: 0; /* Ensures it sits flush with the hero section */
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    /* Gradient starts at #000 to seamlessly emerge from the hero's break */
    background: linear-gradient(to bottom, #000000 0%, #e0f2fe 25%, #fffbeb 100%);
    padding-top: 4rem;
  }
  @media (min-width: 768px) {
    .facilities-section { height: 700px; }
  }

  /* Fan Base / Structure */
  .desktop-fan-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    transform-origin: bottom;
  }
  .fan-base-anchor {
    position: absolute;
    bottom: -2.5rem;
    width: 60%;
    height: 5rem;
    border-radius: 100%;
    background-color: rgba(15, 23, 42, 0.1);
    filter: blur(24px);
  }

  /* Desktop Card Styling */
  .desktop-card-wrapper {
    position: absolute;
    bottom: -100px;
    cursor: pointer;
    transform-origin: center;
    transform-style: preserve-3d;
  }
  .card-inner {
    position: relative;
    width: 16rem;
    height: 26rem;
    border-radius: 2rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.5s ease;
    border: 1px solid;
  }
  .card-inner-default {
    background-color: rgba(15, 23, 42, 0.9);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px -5px rgba(0,0,0,0.3);
    backdrop-filter: blur(24px);
  }
  .card-inner-hovered {
    background-color: #0f172a;
    border-color: rgba(234, 179, 8, 0.5);
    box-shadow: 0 20px 50px -10px rgba(234, 179, 8, 0.25);
  }
  .card-glow {
    position: absolute;
    inset: 0;
    border-radius: 2rem;
    background: linear-gradient(to top right, rgba(234, 179, 8, 0.1), transparent);
    z-index: -1;
  }
  .card-image-container {
    width: 100%;
    height: 11rem;
    flex-shrink: 0;
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 1.25rem;
    background-color: #1e293b;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  }
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease, opacity 0.7s ease;
  }
  .card-image-default { transform: scale(1); opacity: 0.8; }
  .card-image-hovered { transform: scale(1.1); opacity: 1; }
  .card-title {
    font-weight: 600;
    color: white;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 10;
  }
  .card-desc {
    font-size: 0.75rem;
    line-height: 1.625;
    color: #cbd5e1;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    position: relative;
    z-index: 10;
  }
  .card-btn-container {
    margin-top: auto;
    padding-top: 1rem;
    width: 100%;
    position: relative;
    z-index: 10;
  }
  .card-btn {
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.625rem 1.25rem;
    border-radius: 9999px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .card-btn-default {
    background-color: #1e293b;
    color: #eab308;
    border-color: #334155;
  }
  .card-btn-default:hover { background-color: #334155; }
  .card-btn-hovered {
    background-color: #eab308;
    color: #0f172a;
    box-shadow: 0 10px 15px -3px rgba(234, 179, 8, 0.2);
  }
  .card-btn-hovered:hover { background-color: #facc15; }

  /* Mobile Experience */
  .mobile-fan-container {
    width: 100%;
    overflow-x: auto;
    display: flex;
    gap: 1.5rem;
    padding: 1rem 1.5rem 3rem 1.5rem;
    scroll-snap-type: x mandatory;
    position: relative;
    z-index: 20;
  }
  .mobile-card-wrapper {
    scroll-snap-align: center;
    flex-shrink: 0;
    width: 85vw;
    max-width: 320px;
  }
  .mobile-card {
    width: 100%;
    background-color: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(51, 65, 85, 0.5);
    border-radius: 2rem;
    padding: 1.25rem;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
  }
  .mobile-card-img-container {
    width: 100%;
    height: 12rem;
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 1.25rem;
    background-color: #1e293b;
  }
  .mobile-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
  .mobile-card-title { font-size: 1.25rem; font-weight: 600; color: white; margin-bottom: 0.5rem; }
  .mobile-card-desc { color: #cbd5e1; font-size: 0.875rem; line-height: 1.625; margin-bottom: 1.5rem; }
  .mobile-card-btn {
    margin-top: auto;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: #1e293b;
    color: #eab308;
    border: 1px solid #334155;
    font-weight: 500;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  .mobile-card-btn:hover { background-color: #334155; }

  /* Expanded Modal */
  .modal-overlay-bg {
    position: absolute;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
    cursor: pointer;
  }
  .modal-wrapper {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  @media (min-width: 768px) { .modal-wrapper { padding: 2rem; } }
  .modal-container {
    position: relative;
    width: 100%;
    max-width: 64rem;
    background: linear-gradient(to bottom right, #0f172a, #1e293b);
    border-radius: 2rem;
    box-shadow: 0 20px 60px -15px rgba(0,0,0,0.7);
    border: 1px solid rgba(51, 65, 85, 0.5);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: 90vh;
    z-index: 10;
  }
  @media (min-width: 768px) { .modal-container { border-radius: 2.5rem; flex-direction: row; height: 600px; } }
  .modal-left {
    position: relative;
    width: 100%;
    height: 16rem;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #0f172a;
  }
  @media (min-width: 768px) { .modal-left { width: 50%; height: 100%; } }
  .modal-bg-shape {
    position: absolute;
    inset: -30%;
    background: linear-gradient(to top right, rgba(202, 138, 4, 0.3), rgba(37, 99, 235, 0.2));
    mix-blend-mode: screen;
    filter: blur(80px);
  }
  .modal-img-wrapper {
    position: absolute;
    inset: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  }
  @media (min-width: 768px) { .modal-img-wrapper { inset: 2rem; border-radius: 2rem; } }
  .modal-img { width: 100%; height: 100%; object-fit: cover; }
  .modal-right {
    position: relative;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
  }
  @media (min-width: 768px) { .modal-right { width: 50%; padding: 3rem; } }
  .modal-label {
    display: inline-flex;
    align-self: flex-start;
    margin-bottom: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    border: 1px solid rgba(234, 179, 8, 0.4);
    background-color: rgba(234, 179, 8, 0.1);
    color: #eab308;
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 0 15px rgba(234, 179, 8, 0.1);
  }
  @media (min-width: 768px) { .modal-label { font-size: 0.75rem; } }
  .modal-title {
    font-size: 1.875rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
    letter-spacing: -0.025em;
  }
  @media (min-width: 768px) { .modal-title { font-size: 3rem; } }
  .modal-divider {
    width: 4rem;
    height: 0.25rem;
    background: linear-gradient(to right, #eab308, #fef08a);
    border-radius: 9999px;
    transform-origin: left;
    margin-bottom: 1.5rem;
  }
  .modal-intro {
    font-size: 1.125rem;
    color: rgba(254, 252, 232, 0.9);
    font-weight: 500;
    line-height: 1.375;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) { .modal-intro { font-size: 1.25rem; } }
  .modal-details {
    color: #cbd5e1;
    font-size: 0.875rem;
    line-height: 1.625;
  }
  @media (min-width: 768px) { .modal-details { font-size: 1rem; } }
  .modal-close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: rgba(30, 41, 59, 0.5);
    color: #94a3b8;
    border: 1px solid rgba(71, 85, 105, 0.5);
    backdrop-filter: blur(12px);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .modal-close-btn:hover {
    background-color: #334155;
    color: white;
    box-shadow: 0 0 15px rgba(255,255,255,0.1);
  }
  @media (min-width: 768px) { .modal-close-btn { top: 1.5rem; right: 1.5rem; } }
  .modal-close-icon { transition: transform 0.3s ease; }
  .modal-close-btn:hover .modal-close-icon { transform: rotate(90deg); }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
}