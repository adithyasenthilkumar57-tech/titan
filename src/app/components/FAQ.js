"use client";

import React, { useState } from "react";

const FAQS = [
  {
    question: "What is the delivery time for the equipment?",
    answer: "The average delivery time ranges from 30 to 60 business days, depending on the machine lot volume and the custom finishes (such as frame colors and upholstery fabric) selected."
  },
  {
    question: "Can I customize the colors of my machines?",
    answer: "Yes! TITAN offers exclusive customization for the metal frame (such as Matte Carbon, Liquid Silver, Champagne Gold) and the upholstery lining (Camel Tan, Crimson Red, Obsidian Black) to match the brand identity of your gym."
  },
  {
    question: "What warranty does TITAN offer?",
    answer: "We offer a 5-year warranty for the steel structure integrity, 1 year for mechanical bearings and pulleys, and 90 days for steel cables and cushions, with easy part replacements."
  },
  {
    question: "Are the machines produced locally or imported?",
    answer: "Our equipment combines advanced biomechanical engineering design in partnership with Realleader USA and local assembly. This guarantees international manufacturing quality with fast delivery and parts availability."
  },
  {
    question: "How does the TITAN Care after-sales support work?",
    answer: "TITAN Care provides a customer portal with priority technical support, immediate replacement parts shipping, and preventive assistance with technicians qualified for technical assembly."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" style={styles.section}>
      <div className="container">
        {/* Title */}
        <div style={styles.titleWrapper}>
          <div className="subhead-tag">
            <div style={styles.subheadDot}></div>
            <span>Support</span>
          </div>
          <h2 style={styles.title}>Frequently Asked Questions</h2>
          <p style={styles.subtitle}>
            Find answers to the most common questions regarding purchasing, customization, and technical assistance from TITAN.
          </p>
        </div>

        {/* Collapsible FAQ List */}
        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isActive ? "active" : ""}`}
                onClick={() => toggleIndex(index)}
              >
                <button className="faq-trigger" style={styles.trigger}>
                  <span>{faq.question}</span>
                  <div style={styles.iconWrapper} className="faq-trigger-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </button>
                <div className="faq-content" style={styles.contentWrapper}>
                  <p style={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "6rem 0",
    backgroundColor: "var(--bg-primary)",
    borderBottom: "1px solid var(--border)",
  },
  titleWrapper: {
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
  trigger: {
    width: "100%",
    padding: "1.5rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    color: "var(--text-primary)",
    fontFamily: "var(--font-display)",
    fontSize: "1.1rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "rgba(226, 221, 219, 0.05)",
    color: "var(--text-primary)",
  },
  contentWrapper: {
    // Height & padding are managed dynamically by the active CSS class in globals.css
  },
  answer: {
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
    lineHeight: "1.7",
  }
};
