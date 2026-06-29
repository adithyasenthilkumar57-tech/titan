"use client";

import React, { useState, useRef, useEffect } from "react";

export default function HeroSection({ onExploreClick, onSetBuilderClick }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const modalVideoRef = useRef(null);

  // Play / pause modal video when it opens or closes
  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) return;
    if (videoModalOpen) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [videoModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setVideoModalOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="hero" style={styles.section}>
      {/* Background Image */}
      <div className="hero-image-bg" />

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="container" style={styles.contentContainer}>
        <div style={styles.heroTextContent}>

          {/* Badge */}
          <div style={styles.badge}>
            <span style={styles.badgeNew}>NEW</span>
            <span className="badge-text-label" style={styles.badgeText}>
              Buckler 2025 Catalog!
            </span>
          </div>

          {/* Heading */}
          <h1 style={styles.title}>
            Make your gym <br />
            <span className="accent-text">Incomparable</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" style={styles.subtitle}>
            We are a complete ecosystem of high-quality fitness solutions.
            We offer{" "}
            <strong style={{ color: "#E2DDDB" }}>high-standard equipment</strong>
            {" "}and a variety of services to{" "}
            <strong style={{ color: "#E2DDDB" }}>build your gym from scratch</strong>.
          </p>

          {/* CTA Row */}
          <div style={styles.buttonRow}>
            <button className="btn-primary" onClick={onExploreClick} style={styles.btn}>
              Explore Machines
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.172 9L0 9L0 7L12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9Z" fill="currentColor" />
              </svg>
            </button>

            <button className="btn-secondary" onClick={onSetBuilderClick}>
              Build your Set
            </button>

            {/* Watch Showreel */}
            <button
              id="play-showreel-btn"
              className="btn-play-video"
              onClick={() => setVideoModalOpen(true)}
              aria-label="Watch showreel"
            >
              <span className="play-icon-circle">
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
                  <path d="M1 1.5L12 7.5L1 13.5V1.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              Watch Showreel
            </button>
          </div>
        </div>

        {/* Scroll indicator & partner logo */}
        <div style={styles.heroFooter}>
          <div style={styles.scrollIndicator} onClick={onExploreClick}>
            <img
              src="https://cdn.prod.website-files.com/66e9d3e7a6f59aedfd7b9f3f/674d1afbd80db1b0b3c40442_scroll-down.svg"
              alt="Scroll down"
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

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="video-modal-overlay"
          onClick={() => setVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="video-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setVideoModalOpen(false)}
              aria-label="Close video"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <video
              ref={modalVideoRef}
              src="/titan-herosection.mp4"
              controls
              autoPlay
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>
      )}
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
    paddingTop: "80px",
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
    backgroundColor: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(226,221,219,0.15)",
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
    marginBottom: "2.5rem",
    maxWidth: "600px",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.25rem",
    alignItems: "center",
  },
  btn: { borderRadius: "4px" },
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
    color: "rgba(226,221,219,0.7)",
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
    color: "rgba(226,221,219,0.55)",
    fontWeight: 600,
  },
  partnerLogo: {
    height: "22px",
    opacity: 0.9,
    filter: "brightness(0) invert(1)",
  },
};
