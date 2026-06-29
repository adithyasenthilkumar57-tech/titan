"use client";

import React, { useRef, useEffect } from "react";

export default function HeroSection({ onExploreClick, onSetBuilderClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.log("Video autoplay handled:", err);
      });
    }
  }, []);

  return (
    <section id="hero" style={styles.section}>
      {/* Background Video */}
      <div className="hero-video-bg">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/titan%20herosection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay for Dark Theme Contrast */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container" style={styles.contentContainer}>
        <div style={styles.heroTextContent}>
          {/* Badge Tagline */}
          <div style={styles.badge}>
            <span style={styles.badgeNew}>NEW</span>
            <span style={styles.badgeText}>Buckler 2025 Catalog!</span>
          </div>

          {/* Heading */}
          <h1 style={styles.title}>
            Make your gym <br />
            <span className="accent-text">Incomparable</span>
          </h1>

          {/* Subtitle */}
          <p style={styles.subtitle}>
            We are a complete ecosystem of high-quality fitness solutions. 
            We offer <strong style={{ color: '#fff' }}>high-standard equipment</strong> and a variety of services to 
            <strong style={{ color: '#fff' }}> build your gym from scratch</strong>.
          </p>

          {/* CTA Buttons */}
          <div style={styles.buttonRow}>
            <button className="btn-primary" onClick={onExploreClick} style={styles.btn}>
              Explore Machines
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.172 8.99998L-3.83699e-07 8.99998L-2.96276e-07 6.99998L12.172 6.99998L6.808 1.63598L8.222 0.221985L16 7.99998L8.222 15.778L6.808 14.364L12.172 8.99998Z" fill="currentColor"/>
              </svg>
            </button>
            
            <button className="btn-secondary" onClick={onSetBuilderClick}>
              Build your Set
            </button>
          </div>
        </div>

        {/* Scroll Indicator & Partners */}
        <div style={styles.heroFooter}>
          <div style={styles.scrollIndicator} onClick={onExploreClick}>
            <img 
              src="https://cdn.prod.website-files.com/66e9d3e7a6f59aedfd7b9f3f/674d1afbd80db1b0b3c40442_scroll-down.svg" 
              alt="Scroll down indicator" 
              style={styles.scrollIcon}
            />
            <span style={styles.scrollText}>Scroll to explore</span>
          </div>

          <div style={styles.partnerLogoWrapper}>
            <span style={styles.partnerLabel}>Exclusive Partner:</span>
            <img 
              src="https://cdn.prod.website-files.com/66e9d3e7a6f59aedfd7b9f3f/67be1e1a85efc6345b4ad338_LogoRealLeader.svg" 
              alt="RealLeader USA Logo" 
              style={styles.partnerLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    width: "100%",
    height: "100vh",
    minHeight: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    paddingTop: "80px", // space for navbar
  },
  iframe: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100vw",
    height: "56.25vw", // 16:9 Ratio
    minHeight: "100vh",
    minWidth: "177.78vh", // 16:9 Ratio
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    border: "none",
  },
  contentContainer: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "4rem",
    paddingBottom: "3rem",
  },
  heroTextContent: {
    maxWidth: "750px",
    marginTop: "auto",
    marginBottom: "auto",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid var(--border)",
    padding: "0.4rem 1rem",
    borderRadius: "100px",
    marginBottom: "2rem",
  },
  badgeNew: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "0.65rem",
    color: "#fff",
    backgroundColor: "var(--accent)",
    padding: "0.15rem 0.5rem",
    borderRadius: "4px",
    letterSpacing: "0.05em",
  },
  badgeText: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: "var(--text-secondary)",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
    lineHeight: "1.1",
    fontWeight: 900,
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    letterSpacing: "-0.03em",
  },
  subtitle: {
    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
    lineHeight: "1.6",
    color: "var(--text-secondary)",
    marginBottom: "2.5rem",
    maxWidth: "600px",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.25rem",
  },
  btn: {
    borderRadius: "4px",
  },
  heroFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginTop: "auto",
    width: "100%",
    flexWrap: "wrap",
    gap: "1.5rem",
  },
  scrollIndicator: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    cursor: "pointer",
    opacity: 0.7,
    transition: "opacity var(--transition-fast)",
  },
  scrollIcon: {
    width: "24px",
    height: "24px",
    animation: "scroll-float 2s infinite ease-in-out",
  },
  scrollText: {
    fontFamily: "var(--font-display)",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: "0.1em",
  },
  partnerLogoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "0.4rem",
  },
  partnerLabel: {
    fontSize: "0.65rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--text-secondary)",
    fontWeight: 600,
  },
  partnerLogo: {
    height: "22px",
    opacity: 0.9,
  }
};

if (typeof document !== "undefined") {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    @keyframes scroll-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(6px); }
    }
  `;
  document.head.appendChild(styleEl);
}
