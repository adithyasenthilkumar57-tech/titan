"use client";

import React, { useState } from "react";
import Logo from "./Logo";

export default function Navbar({ onNavClick, cartCount, onCartClick, theme, onThemeToggle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLinkClick = (sectionId) => {
    onNavClick(sectionId);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="glass" style={styles.header}>
      <div className="container" style={styles.navContainer}>
        {/* Logo */}
        <a href="#" onClick={() => handleLinkClick("hero")} style={styles.logoLink}>
          <Logo width={150} height={38} />
        </a>

        {/* Desktop Menu */}
        <nav style={styles.desktopNav}>
          <a href="#hero" onClick={() => handleLinkClick("hero")} style={styles.navLink}>
            Home
          </a>
          
          {/* Machines Dropdown */}
          <div
            className="nav-dropdown"
            style={styles.dropdownContainer}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span style={styles.navLinkDropdown}>
              Machines
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={styles.chevron}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            
            <div className="glass nav-dropdown-menu" style={{
              ...styles.dropdownMenu,
              opacity: dropdownOpen ? 1 : 0,
              visibility: dropdownOpen ? "visible" : "hidden",
              transform: dropdownOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(10px)"
            }}>
              <div>
                <h4 style={styles.dropdownHead}>Categories</h4>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Pin Loaded</a>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Cardio</a>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Benches & Racks</a>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Plate Loaded</a>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Cable Cross</a>
              </div>
              <div>
                <h4 style={styles.dropdownHead}>Series</h4>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Infinite Series</a>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Duet Series</a>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Prime Series</a>
                <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.dropdownLink}>Cardio Series</a>
              </div>
            </div>
          </div>

          <a href="#titan-360" onClick={() => handleLinkClick("titan-360")} style={styles.navLink}>
            Titan 360
          </a>
          <a href="#set-builder" onClick={() => handleLinkClick("set-builder")} style={styles.navLink}>
            Custom Set
          </a>
          <a href="#faq" onClick={() => handleLinkClick("faq")} style={styles.navLink}>
            FAQ
          </a>
        </nav>

        {/* Right CTAs */}
        <div style={styles.rightCtas}>
          {/* Cart / Set Button */}
          <button onClick={onCartClick} style={styles.cartButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span style={styles.cartText}>Your SET</span>
            {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
          </button>

          {/* Contact Button */}
          <a
            href="https://wa.me/550000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={styles.contactBtn}
          >
            Contact
          </a>

          {/* Theme Toggle: sun = switch to light, moon = switch to dark */}
          <button
            id="theme-toggle-btn"
            className="theme-toggle-btn"
            onClick={onThemeToggle}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle colour theme"
          >
            {theme === "dark" ? (
              // Sun icon — click to go light
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              // Moon icon — click to go dark
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button onClick={toggleMobileMenu} style={styles.mobileTrigger}>
            <div style={{
              ...styles.hamburgerLine,
              transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 6px)" : "none"
            }} />
            <div style={{
              ...styles.hamburgerLine,
              opacity: mobileMenuOpen ? 0 : 1
            }} />
            <div style={{
              ...styles.hamburgerLine,
              transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none"
            }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div style={{
        ...styles.mobilePanel,
        opacity: mobileMenuOpen ? 1 : 0,
        visibility: mobileMenuOpen ? "visible" : "hidden",
        transform: mobileMenuOpen ? "translateY(0)" : "translateY(-20px)"
      }} className="glass">
        <nav style={styles.mobileNav}>
          <a href="#hero" onClick={() => handleLinkClick("hero")} style={styles.mobileNavLink}>
            Home
          </a>
          <a href="#machines" onClick={() => handleLinkClick("machines")} style={styles.mobileNavLink}>
            Machines
          </a>
          <a href="#titan-360" onClick={() => handleLinkClick("titan-360")} style={styles.mobileNavLink}>
            Titan 360
          </a>
          <a href="#set-builder" onClick={() => handleLinkClick("set-builder")} style={styles.mobileNavLink}>
            Custom Set
          </a>
          <a href="#faq" onClick={() => handleLinkClick("faq")} style={styles.mobileNavLink}>
            FAQ
          </a>
          <a href="https://wa.me/550000000000" target="_blank" rel="noopener noreferrer" style={styles.mobileNavLinkContact}>
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid var(--border)",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    color: "var(--text-primary)",
    textDecoration: "none",
  },
  desktopNav: {
    display: "none", // Managed by responsive queries (flex on larger devices)
    alignItems: "center",
    gap: "2.5rem",
  },
  navLink: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "0.8125rem",
    textTransform: "uppercase",
    color: "var(--text-primary)",
    textDecoration: "none",
    letterSpacing: "0.08em",
    transition: "color var(--transition-fast)",
  },
  navLinkDropdown: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "0.8125rem",
    textTransform: "uppercase",
    color: "var(--text-primary)",
    cursor: "pointer",
    letterSpacing: "0.08em",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  },
  chevron: {
    transition: "transform var(--transition-fast)",
  },
  dropdownContainer: {
    position: "relative",
    padding: "0.5rem 0",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: "50%",
    width: "380px",
    borderRadius: "12px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
    padding: "1.5rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    transition: "opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease",
  },
  dropdownHead: {
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    color: "var(--text-secondary)",
    marginBottom: "0.75rem",
    fontWeight: 700,
  },
  dropdownLink: {
    display: "block",
    color: "var(--text-primary)",
    fontSize: "0.875rem",
    textDecoration: "none",
    padding: "0.4rem 0",
    fontWeight: 500,
    transition: "color var(--transition-fast), padding-left var(--transition-fast)",
  },
  rightCtas: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  cartButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--bg-tertiary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-display)",
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    letterSpacing: "0.05em",
    transition: "border-color var(--transition-fast), background-color var(--transition-fast)",
  },
  cartText: {
    marginRight: "4px",
  },
  cartBadge: {
    backgroundColor: "var(--accent)",
    color: "#fff",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    fontSize: "0.65rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "4px",
  },
  contactBtn: {
    display: "none", // Shown on desktop
  },
  mobileTrigger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "24px",
    height: "18px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  hamburgerLine: {
    width: "100%",
    height: "2px",
    backgroundColor: "var(--text-primary)",
    transition: "transform var(--transition-fast), opacity var(--transition-fast)",
  },
  mobilePanel: {
    position: "absolute",
    top: "80px",
    left: 0,
    width: "100%",
    padding: "1.5rem",
    borderBottom: "1px solid var(--border)",
    transition: "opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease",
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  mobileNavLink: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "1rem",
    textTransform: "uppercase",
    color: "var(--text-primary)",
    textDecoration: "none",
    letterSpacing: "0.05em",
  },
  mobileNavLinkContact: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1rem",
    textTransform: "uppercase",
    color: "var(--accent)",
    textDecoration: "none",
    letterSpacing: "0.05em",
    marginTop: "0.5rem",
    borderTop: "1px solid var(--border)",
    paddingTop: "1.25rem",
  }
};

// Add inline desktop media query style overrides using React effect/state or inject standard CSS media rules.
if (typeof document !== "undefined") {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    @media (min-width: 992px) {
      header {
        height: 90px !important;
      }
      header nav {
        display: flex !important;
      }
      .btn-primary {
        display: inline-flex !important;
      }
      header button[style*="mobileTrigger"] {
        display: none !important;
      }
      .nav-dropdown-menu {
        display: grid !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
