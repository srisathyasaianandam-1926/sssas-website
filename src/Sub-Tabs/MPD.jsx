import React, { useState, useEffect } from 'react';

// Main App Component
export default function App() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);

  // Notice: We added a `pdfPath` property to each item. 
  // You can change these to your local paths, e.g., "/assets/docs/school-profile.pdf"
  const sections = [
    {
      id: 'A',
      title: 'General Information',
      gridId: 'grid-general',
      items: [
        { title: "Affiliation Grant", tag: "Identity", brief: "Details of CBSE Affiliation", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", icon: "ph-building", size: "tall", colSpan: 2, weight: "1.2 MB", pdfPath: "/PDF's/Affiliation Grant.pdf" },
        { title: "Trust Deed", tag: "Structure", brief: "Current list of the School Managing Committee members and designations.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800", icon: "ph-users-three", size: "short", colSpan: 1, weight: "0.8 MB", pdfPath: "/PDF's/Trust Deed.pdf" },
        { title: "PTA Details", tag: "Collaboration", brief: "Executive body members of the Parent Teacher Association.", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800", icon: "ph-handshake", size: "short", colSpan: 1, weight: "0.5 MB", pdfPath: "/PDF's/Teacher Details.pdf" }
      ]
    },
    {
      id: 'B',
      title: 'Safety & Compliance',
      gridId: 'grid-safety',
      items: [
        { title: "NOC Certificate", tag: "Compliance", brief: "No Objection Certificate issued by the State Education Department.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", icon: "ph-file-check", size: "tall", colSpan: 1, weight: "1.5 MB", pdfPath: "/PDF's/NOC.pdf" },
        { title: "Building Safety", tag: "Infrastructure", brief: "Certified structural stability analysis and occupancy clearance certificates.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800", icon: "ph-buildings", size: "short", colSpan: 2, weight: "4.5 MB", pdfPath: "/PDF's/Building Safety Certificate.pdf" },
        { title: "Fire Safety Audit", tag: "Safety", brief: "Updated fire prevention and safety systems clearance from local authorities.", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800", icon: "ph-fire-extinguisher", size: "short", colSpan: 1, weight: "2.1 MB", pdfPath: "/PDF's/Fire Safety.pdf" },
        { title: "Health & Water", tag: "Environment", brief: "Safe drinking water and sanitary condition certificate from health dept.", img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800", icon: "ph-drop", size: "short", colSpan: 1, weight: "1.1 MB", pdfPath: "/PDF's/Health & Sanitation.pdf" }
      ]
    },
    {
      id: 'C',
      title: 'Results & Academics',
      gridId: 'grid-academics',
      items: [
        { title: "Board Result Class X", tag: "Excellence", brief: "Statistical analysis of Class 10 board results for the last 3 years.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", icon: "ph-chart-bar", size: "short", colSpan: 1, weight: "2.3 MB", pdfPath: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
        { title: "Fee Structure", tag: "Transparency", brief: "Complete Free Education.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800", icon: "ph-coins", size: "tall", colSpan: 2, weight: "0.6 MB", pdfPath: "/PDF's/School Fees.pdf" },
        { title: "Academic Calendar", tag: "Planning", brief: "Annual schedule of holidays, examinations, and major events.", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800", icon: "ph-calendar-blank", size: "short", colSpan: 1, weight: "1.9 MB", pdfPath: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
      ]
    }
  ];

  const openPreview = (doc) => {
    setSelectedDoc(doc);
    setIsModalActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setIsModalActive(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedDoc(null), 400);
  };

  return (
    <div className="app-wrapper">
      {/* Include Phosphor Icons purely to ensure existing visual icons render completely */}
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css" />

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-bg-blur"></div>
        <div className="hero-content">
          <h1 className="hero-title serif">
            Trust & <br />
            <span className="gold-text">Governance</span>
          </h1>
          <p className="hero-description">
            A visual and technical archive of institutional integrity. Explore our mandatory disclosures, safety certifications, and academic milestones.
          </p>

          <div className="hero-scroll-indicator">
            <div className="scroll-line"></div>
            <a href="#A" className="scroll-link">Scroll to browse archive</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {sections.map((section) => (
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
                  onClick={() => openPreview(item)}
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
                      {/* Added an inline SVG here too, incase Phosphor fill font isn't loaded */}
                      <svg className="pdf-indicator-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-60.68,58.34a15.82,15.82,0,0,1-13.63,9.54h-1.53c-1.35,3.13-2.9,6.47-4.57,9.88a20.08,20.08,0,0,1-15.65,11.08,13.84,13.84,0,0,1-14.86-9.15c-2.31-6.17.65-15,8.81-26.31,1.52-2.11,3.16-4.25,4.89-6.38a75.14,75.14,0,0,1-3-19.16c0-11,2.5-18.42,7.4-22A12,12,0,0,1,114.5,124c6.77,0,10.64,5.82,11.5,17.29A64.71,64.71,0,0,1,124,158.85c5,4.64,10.22,8.68,15.48,12,4-1.29,7.74-2.52,10.82-3.41,7.56-2.18,13.19-2.27,15.54-.25A11.75,11.75,0,0,1,169.11,173.85ZM89.16,183.83c-3,4.19-4.22,8.37-3.62,10a1.86,1.86,0,0,0,2.15,1.26A12,12,0,0,0,98.66,189.5C95.42,187.72,92.23,185.8,89.16,183.83Zm26.34-45.72c-.17-6.52-1.22-9.73-2.43-9.73s-2,2.83-2,8.7a58.55,58.55,0,0,0,2.14,14.61C114.28,147.28,115.06,142.75,115.5,138.11Zm-5.32,29.35c-1.5,1.86-3,3.78-4.39,5.7-1.39-1.37-2.83-2.73-4.32-4.09C104.53,165.65,107.56,161.85,110.18,167.46Zm37.28-1.57c-2.48,0-6.19.8-11.45,2.44,1.48,1.23,2.88,2.56,4.18,4,3.16-1,5.65-2,7.21-2.61a5,5,0,0,0,2.12-1.74A1.66,1.66,0,0,0,147.46,165.89Z"></path>
                      </svg>
                      <span>{item.weight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </main>

      {/* Modal Preview */}
      <div className={`modal-container ${isModalActive ? 'active' : ''}`}>
        <div className="modal-backdrop" onClick={closePreview}></div>
        <div className="glass-modal">
          <div className="modal-header">
            <div className="modal-header-info">
              <div className="text-3xl text-slate-800">
                <i className={`ph ${selectedDoc?.icon || ''}`}></i>
              </div>
              <div>
                <h4 className="modal-title-main serif">{selectedDoc?.title || 'Document'}</h4>
                <p className="modal-subtitle">Official Institutional File</p>
              </div>
            </div>
            <div className="modal-actions">
              <a
                href={selectedDoc?.pdfPath || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-icon-btn"
                title="Open in new tab"
              >
                <i className="ph ph-arrow-square-out text-xl"></i>
              </a>
              <button className="modal-icon-btn" onClick={closePreview} title="Close Preview">
                <i className="ph ph-x text-xl"></i>
              </button>
            </div>
          </div>
          <div className="modal-body">
            {selectedDoc && (
              <iframe
                className="document-iframe"
                src={selectedDoc.pdfPath}
                frameBorder="0"
                title="Document Preview"
              ></iframe>
            )}
          </div>
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

        /* Global scrollbar removal while keeping scrolling functionality */
        * {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        *::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
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
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), 
                      url('/MPD.png');
          background-size: cover;
          background-position: center;
          filter: blur(2px);
          transform: scale(1.1);
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
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.625;
          max-width: 36rem;
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
        }

        /* Section Headings */
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
          background: #2a2a2a;
        }

        .doc-card:hover { transform: scale(0.98); }

        .card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.55;
          transition: transform 1s ease;
        }

        .doc-card:hover .card-bg { transform: scale(1.1); }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
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
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pdf-indicator-icon {
          color: #ef4444;
          font-size: 1.125rem;
        }

        /* Modal Styles */
        .modal-container {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: flex-start; /* Changed to start from top padding */
          justify-content: center;
          padding: 85px 1.5rem 1.5rem 1.5rem; /* 76px from Top padded */
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
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
        }

        .glass-modal {
          position: relative;
          width: 100%;
          max-width: 80rem;
          height: 100%; /* Stretches to fill the remaining area below 76px */
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 2.5rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2.0rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .modal-header-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .modal-title-main {
          font-size: 1.5rem;
          color: #0f172a;
        }

        .modal-subtitle {
          font-size: 10px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal-icon-btn {
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;
          cursor: pointer;
          background: transparent;
          color: #1a1a1a;
          text-decoration: none;
        }

        .modal-icon-btn:hover { background-color: rgba(0, 0, 0, 0.05); }

        .modal-body {
          flex-grow: 1;
          padding: 1.5rem;
          background-color: rgba(241, 245, 249, 0.3);
        }

        .document-iframe {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          background-color: white;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
      ` }} />
    </div>
  );
}