"use client";

import React, { useState } from "react";

interface CardData {
  id: number;
  title: string;
  frontText: string;
  backText: string;
  imgUrl: string;
  icon: string;
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "Buckler Machines",
    frontText: "High-standard strength and cardio equipment.",
    backText: "We offer machines with advanced biomechanics, premium ergonomic design, and unmatched durability to guarantee top-level workouts.",
    imgUrl: "https://cdn.prod.website-files.com/66e9d3e7a6f59aedfd7b9f3f/67d0d18716f0889d7af37ab7_Feature-min.jpg",
    icon: "dumbbell"
  },
  {
    id: 2,
    title: "Buckler Care",
    frontText: "Premium technical support and exclusive customer service.",
    backText: "At Buckler Care, every customer is unique. We provide dedicated post-sale support, preventive maintenance plans, and original parts to keep your operation 100% running.",
    imgUrl: "https://cdn.prod.website-files.com/66e9d3e7a6f59aedfd7b9f3f/67d0d5f1079857304c942efa_Feature-3-min.jpg",
    icon: "heart"
  },
  {
    id: 3,
    title: "Buckler GAAS",
    frontText: "Strategy, marketing, and architecture for your gym.",
    backText: "Gym As A Service: We assist from the 3D architectural project and branding to launch marketing strategies and technical certification of coaches.",
    imgUrl: "https://cdn.prod.website-files.com/66e9d3e7a6f59aedfd7b9f3f/67d0d623f023ca8094bc4320_Feature-5-min.jpg",
    icon: "business"
  },
  {
    id: 4,
    title: "Buckler Tracking",
    frontText: "Total transparency from order to delivery.",
    backText: "Track all your order progress in real-time. Know exactly when your equipment will be manufactured, shipped, and installed by our team.",
    imgUrl: "https://cdn.prod.website-files.com/66e9d3e7a6f59aedfd7b9f3f/67d0d67853f76f38e16b736e_Feature-2-min.jpg",
    icon: "tracking"
  }
];

export default function EcosystemSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardClick = (id: number) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cId => cId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case "dumbbell":
        return (
          <svg className="flip-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5M3.75 12h16.5M12 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
          </svg>
        );
      case "heart":
        return (
          <svg className="flip-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        );
      case "business":
        return (
          <svg className="flip-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M21 21a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0021 4.5h-9a2.25 2.25 0 00-2.25 2.25V18.75A2.25 2.25 0 0012 21" />
          </svg>
        );
      default:
        return (
          <svg className="flip-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <section id="buckler-360" style={styles.section}>
      <div className="container">
        {/* Header Title */}
        <div style={styles.header}>
          <div className="subhead-tag">
            <div style={styles.subheadDot}></div>
            <span>Buckler 360</span>
          </div>
          <h2 style={styles.title}>A Complete Experience</h2>
          <p style={styles.subtitle}>
            We don't just sell machines. We offer an integrated ecosystem to ensure your business model is highly profitable and unstoppable.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="flip-card-grid">
          {CARDS.map(card => {
            const isFlipped = flippedCards.includes(card.id);
            return (
              <div
                key={card.id}
                className={`flip-card ${isFlipped ? "flipped" : ""}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img src={card.imgUrl} alt={card.title} className="flip-card-front-img" />
                    <div className="flip-card-front-content">
                      <h3 style={styles.cardTitle}>{card.title}</h3>
                      <div style={styles.cardFrontFooter}>
                        <p style={styles.cardFrontText}>{card.frontText}</p>
                        <div style={styles.flipArrowWrapper}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div style={styles.cardBackHeader}>
                      {renderIcon(card.icon)}
                      <h3 style={styles.cardBackTitle}>{card.title}</h3>
                    </div>
                    <p style={styles.cardBackText}>{card.backText}</p>
                    <span style={styles.tapToFlipBack}>Click to close</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "6rem 0",
    backgroundColor: "var(--bg-primary)",
  },
  header: {
    marginBottom: "3rem",
  },
  subheadDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "var(--accent)",
    marginRight: "6px",
  },
  title: {
    fontSize: "clamp(2rem, 3.5vw, 3rem)",
    fontWeight: 800,
    textTransform: "uppercase",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1rem",
    color: "var(--text-secondary)",
    maxWidth: "600px",
    lineHeight: "1.6",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    letterSpacing: "-0.01em",
    color: "#fff",
    textTransform: "uppercase",
  },
  cardFrontFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    gap: "1.5rem",
  },
  cardFrontText: {
    fontSize: "0.85rem",
    color: "var(--text-primary)",
    lineHeight: "1.4",
    opacity: 0.9,
  },
  flipArrowWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "var(--accent)",
    color: "#fff",
    flexShrink: 0,
  },
  cardBackHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  cardBackTitle: {
    fontSize: "1.25rem",
    fontWeight: 800,
    textTransform: "uppercase",
  },
  cardBackText: {
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    lineHeight: "1.6",
  },
  tapToFlipBack: {
    fontSize: "0.7rem",
    textTransform: "uppercase",
    color: "var(--accent)",
    fontWeight: 700,
    letterSpacing: "0.1em",
    marginTop: "auto",
  }
};
