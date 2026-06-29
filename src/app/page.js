"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GymSetBuilder from "./components/GymSetBuilder";
import EcosystemSection from "./components/EcosystemSection";
import Marquee from "./components/Marquee";
import FAQ from "./components/FAQ";
import Logo from "./components/Logo";

// Definition of Gym Equipment Categories
const CATEGORIES = [
  { name: "Pin Loaded", desc: "Selectorized machines with weight stacks and steel cables.", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600" },
  { name: "Plate Loaded", desc: "Plate-loaded selectorized equipment with converging/diverging motion.", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600" },
  { name: "Cable Cross", desc: "Functional trainers and cable crossover stations.", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600" },
  { name: "Cardio", desc: "High-performance treadmills, stairmasters, and stationary bikes.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600" },
  { name: "Benches & Racks", desc: "Adjustable benches and robust racks for free weight training.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [globalSet, setGlobalSet] = useState([]);
  const [theme, setTheme] = useState("dark");

  // Restore theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("titan-theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("titan-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fade out loader on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToGlobalSet = (item) => {
    setGlobalSet(prev => [...prev, item]);
  };

  const handleOpenCart = () => {
    scrollToSection("set-builder");
  };

  return (
    <>
      {/* Loading Screen Overlay */}
      <div
        className="loader-overlay"
        style={{
          opacity: loading ? 1 : 0,
          visibility: loading ? "visible" : "hidden",
        }}
      >
        <div className="loader-logo">
          <Logo width={160} height={40} className="accent-text" />
        </div>
      </div>

      {/* Main Website Structure */}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity var(--transition-smooth)" }}>
        
        {/* Sticky Header */}
        <Navbar
          onNavClick={scrollToSection}
          cartCount={globalSet.length}
          onCartClick={handleOpenCart}
          theme={theme}
          onThemeToggle={toggleTheme}
        />

        <main>
          {/* Hero Section */}
          <HeroSection
            onExploreClick={() => scrollToSection("machines")}
            onSetBuilderClick={() => scrollToSection("set-builder")}
          />

          {/* About / Philosophy Section */}
          <section id="about" style={styles.aboutSection}>
            <div className="container">
              <div style={styles.aboutHeader}>
                <div style={styles.aboutTextContent}>
                  <div className="subhead-tag">
                    <div style={styles.subheadDot}></div>
                    <span>About Us</span>
                  </div>
                  <h2 style={styles.sectionHeading}>Excellence, Design & Durability</h2>
                  <p style={styles.aboutDescription}>
                    As the exclusive partner of <strong>Realleader USA</strong>, Titan brings an imposing 
                    line of bodybuilding equipment to the national market. Our machines combine advanced 
                    biomechanical engineering with high-performance ergonomics, making every workout an incomparable experience.
                  </p>
                </div>
              </div>

              {/* Gym Equipment Showcase (Category Cards) */}
              <div id="machines" style={{ marginTop: "4rem" }}>
                <h3 style={styles.categoryTitle}>Machine Categories</h3>
                <div className="category-grid">
                  {CATEGORIES.map((cat, idx) => (
                    <div key={idx} className="category-card" onClick={() => scrollToSection("set-builder")}>
                      <img src={cat.img} alt={cat.name} className="category-card-img" />
                      <div className="category-card-overlay">
                        <h4 className="category-card-title">{cat.name}</h4>
                        <p style={styles.catDesc}>{cat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Custom Set Configurator Section */}
          <GymSetBuilder onAddToGlobalSet={handleAddToGlobalSet} />

          {/* Slogans & Gym Partners Marquees */}
          <Marquee />

          {/* Titan 360 Ecosystem Grid */}
          <EcosystemSection />

          {/* Testimonials Showcase Section */}
          <section id="depoimentos" style={styles.testimonialsSection}>
            <div className="container">
              <div style={styles.testimonialsHeader}>
                <div className="subhead-tag">
                  <div style={styles.subheadDot}></div>
                  <span>Validation</span>
                </div>
                <h2 style={styles.sectionHeading}>Trusted by Professionals</h2>
                <p style={styles.sectionSubheading}>
                  Professional athletes and renowned trainers who validate the biomechanical quality of Titan equipment.
                </p>
              </div>

              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <p className="testimonial-text">
                    "The biomechanics of Titan machines are out of this world. The muscle activation I feel in every single repetition is surgically precise. Equipment that truly elevates the training to a professional level."
                  </p>
                  <div style={styles.authorBox}>
                    <span style={styles.authorName}>Felipe Franco</span>
                    <span style={styles.authorTitle}>IFBB PRO Athlete & Influencer</span>
                  </div>
                </div>

                <div className="testimonial-card">
                  <p className="testimonial-text">
                    "For anyone building or renovating a gym today, investing in Titan is a huge competitive advantage. Imposing, robust design that catches the eye of members right at the entrance."
                  </p>
                  <div style={styles.authorBox}>
                    <span style={styles.authorName}>Renato Cariani</span>
                    <span style={styles.authorTitle}>Coach & Fitness Entrepreneur</span>
                  </div>
                </div>

                <div className="testimonial-card">
                  <p className="testimonial-text">
                    "In my training programs, I demand the maximum from my clients, and the machines must endure the load. Titan's pulleys slide perfectly smoothly, without friction. Outstanding durability."
                  </p>
                  <div style={styles.authorBox}>
                    <span style={styles.authorName}>Carol Vaz</span>
                    <span style={styles.authorTitle}>High-Performance Trainer</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <FAQ />
        </main>

        {/* Premium Footer */}
        <footer style={styles.footer}>
          <div className="container" style={styles.footerContainer}>
            <div style={styles.footerBrandRow}>
              <div>
                <Logo width={180} height={45} className="accent-text" />
                <p style={styles.brandSlogan}>ENHANCING THE WORKOUT EXPERIENCE</p>
              </div>
              
              <div style={styles.footerSocials}>
                <a href="#" style={styles.socialLink} title="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" style={styles.socialLink} title="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.96c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                <a href="#" style={styles.socialLink} title="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div style={styles.footerLinksGrid}>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColTitle}>Institutional</h4>
                <a href="#about" onClick={() => scrollToSection("about")} style={styles.footerLink}>About Titan</a>
                <a href="#machines" onClick={() => scrollToSection("machines")} style={styles.footerLink}>Our Catalog</a>
                <a href="#titan-360" onClick={() => scrollToSection("titan-360")} style={styles.footerLink}>Titan 360</a>
                <a href="#depoimentos" onClick={() => scrollToSection("depoimentos")} style={styles.footerLink}>Testimonials</a>
              </div>

              <div style={styles.footerColumn}>
                <h4 style={styles.footerColTitle}>Manuals & Support</h4>
                <a href="#" style={styles.footerLink}>Manual Downloads</a>
                <a href="#" style={styles.footerLink}>Become an Influencer</a>
                <a href="#" style={styles.footerLink}>Customer Portal</a>
                <a href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>Commercial Contact</a>
              </div>

              <div style={styles.footerColumn}>
                <h4 style={styles.footerColTitle}>Terms & Warranties</h4>
                <a href="#" style={styles.footerLink}>Purchase Agreement</a>
                <a href="#" style={styles.footerLink}>Privacy Policy</a>
                <a href="#" style={styles.footerLink}>Official Warranties</a>
                <a href="#" style={styles.footerLink}>Rental Terms</a>
              </div>
            </div>

            <div style={styles.footerBottom}>
              <p style={styles.copyright}>© {new Date().getFullYear()} TITAN. All rights reserved.</p>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={styles.topBtn}>
                Back to top
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "4px" }}>
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

const styles = {
  aboutSection: {
    padding: "8rem 0 6rem 0",
    backgroundColor: "var(--bg-primary)",
  },
  aboutHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  aboutTextContent: {
    maxWidth: "800px",
  },
  subheadDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "var(--accent)",
    marginRight: "6px",
  },
  sectionHeading: {
    fontSize: "clamp(2rem, 3.5vw, 3rem)",
    fontWeight: 800,
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    letterSpacing: "-0.02em",
  },
  aboutDescription: {
    fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
    color: "var(--text-secondary)",
    lineHeight: "1.7",
  },
  categoryTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    textTransform: "uppercase",
    marginBottom: "2rem",
    letterSpacing: "-0.01em",
  },
  catDesc: {
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
    marginTop: "0.25rem",
    lineHeight: "1.4",
  },
  testimonialsSection: {
    padding: "6rem 0",
    backgroundColor: "var(--bg-secondary)",
    borderTop: "1px solid var(--border)",
  },
  testimonialsHeader: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  sectionSubheading: {
    fontSize: "1rem",
    color: "var(--text-secondary)",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  authorBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    borderTop: "1px solid var(--border)",
    paddingTop: "1.25rem",
  },
  authorName: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "0.9rem",
    textTransform: "uppercase",
    color: "var(--text-primary)",
  },
  authorTitle: {
    fontSize: "0.75rem",
    color: "var(--text-secondary)",
    marginTop: "0.15rem",
  },
  footer: {
    backgroundColor: "#0d0c0b",
    borderTop: "1px solid var(--border)",
    padding: "5rem 0 3rem 0",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
  },
  footerBrandRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
  },
  brandSlogan: {
    fontFamily: "var(--font-display)",
    fontSize: "0.7rem",
    fontWeight: 800,
    color: "var(--text-secondary)",
    letterSpacing: "0.15em",
    marginTop: "0.75rem",
  },
  footerSocials: {
    display: "flex",
    gap: "1.25rem",
  },
  socialLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid var(--border)",
    color: "var(--text-secondary)",
    transition: "color var(--transition-fast), border-color var(--transition-fast)",
  },
  footerLinksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "3rem",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    padding: "3rem 0",
  },
  footerColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem",
  },
  footerColTitle: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "0.5rem",
  },
  footerLink: {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    textDecoration: "none",
    transition: "color var(--transition-fast)",
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  copyright: {
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
  },
  topBtn: {
    display: "inline-flex",
    alignItems: "center",
    background: "none",
    border: "none",
    color: "var(--text-secondary)",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    cursor: "pointer",
    transition: "color var(--transition-fast)",
  }
};
