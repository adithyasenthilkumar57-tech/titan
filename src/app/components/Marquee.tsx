"use client";

import React from "react";

const PARTNERS = [
  { name: "WORLD GYM", type: "bold" },
  { name: "BODYTECH", type: "italic" },
  { name: "CIA. ATHLETICA", type: "clean" },
  { name: "IRONWORKS", type: "gothic" },
  { name: "WELLNESS", type: "light" },
  { name: "MONSTERS FAB", type: "heavy" },
  { name: "EVOLUTION PRIME", type: "space" }
];

export default function Marquee() {
  return (
    <div style={styles.container}>
      {/* Marquee 1: Text Scrolling */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...Array(8)].map((_, index) => (
            <span key={index} className="marquee-text">
              BEYOND THE MACHINES
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 0.3 }}
              >
                <path d="M12 2L15 9H22L17 14L19 21L12 17L5 21L7 14L2 9H9L12 2Z" fill="currentColor" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* Marquee 2: Partners Badges Scrolling */}
      <div className="partners-marquee" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="partners-content">
          {[...Array(3)].map((_, blockIndex) => (
            <React.Fragment key={blockIndex}>
              {PARTNERS.map((partner, index) => (
                <div key={`${blockIndex}-${index}`} style={styles.partnerBadge}>
                  {partner.type === "bold" && (
                    <span style={{ ...styles.partnerText, fontWeight: 900, letterSpacing: "0.1em" }}>
                      ★ {partner.name}
                    </span>
                  )}
                  {partner.type === "italic" && (
                    <span style={{ ...styles.partnerText, fontStyle: "italic", fontWeight: 700 }}>
                      ◆ {partner.name}
                    </span>
                  )}
                  {partner.type === "clean" && (
                    <span style={{ ...styles.partnerText, letterSpacing: "0.2em", fontWeight: 300 }}>
                      ▲ {partner.name}
                    </span>
                  )}
                  {partner.type === "gothic" && (
                    <span style={{ ...styles.partnerText, fontFamily: "serif", fontWeight: 800 }}>
                      ✠ {partner.name}
                    </span>
                  )}
                  {partner.type === "light" && (
                    <span style={{ ...styles.partnerText, fontWeight: 400, opacity: 0.7 }}>
                      ● {partner.name}
                    </span>
                  )}
                  {partner.type === "heavy" && (
                    <span style={{ ...styles.partnerText, fontWeight: 900, color: "var(--accent)" }}>
                      🗲 {partner.name}
                    </span>
                  )}
                  {partner.type === "space" && (
                    <span style={{ ...styles.partnerText, letterSpacing: "0.3em", fontWeight: 800 }}>
                      ▼ {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  partnerBadge: {
    display: "inline-block",
    padding: "0.5rem 1.5rem",
    backgroundColor: "rgba(226, 221, 219, 0.03)",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    marginRight: "2rem",
  },
  partnerText: {
    fontFamily: "var(--font-display)",
    fontSize: "1.1rem",
    textTransform: "uppercase",
    color: "var(--text-primary)",
  }
};
