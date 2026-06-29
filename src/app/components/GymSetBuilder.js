"use client";

import React, { useState } from "react";

// Definition of Gym Machines
const MACHINES = [
  { id: "leg-press", name: "45º Leg Press Duet", series: "Duet Series", category: "Plate Loaded", estWeight: 280, areaReq: 5.5, svgType: "press" },
  { id: "chest-press", name: "Vertical Chest Press", series: "Infinite Series", category: "Pin Loaded", estWeight: 220, areaReq: 3.5, svgType: "press" },
  { id: "lat-pulldown", name: "Lat Pulldown Prime", series: "Prime Series", category: "Pin Loaded", estWeight: 240, areaReq: 3.2, svgType: "pulldown" },
  { id: "cable-cross", name: "Functional Crossover", series: "Infinite Series", category: "Cable Cross", estWeight: 380, areaReq: 8.0, svgType: "cable" },
  { id: "treadmill", name: "Curved Treadmill RT", series: "Cardio Series", category: "Cardio", estWeight: 165, areaReq: 4.0, svgType: "treadmill" }
];

// Custom finishes options
const FRAME_COLORS = [
  { name: "Matte Carbon", value: "#1A1A1A", glow: "rgba(26,26,26,0.8)" },
  { name: "Liquid Silver", value: "#A6A6A6", glow: "rgba(166,166,166,0.6)" },
  { name: "Champagne Gold", value: "#C5A880", glow: "rgba(197,168,128,0.6)" }
];

const PAD_COLORS = [
  { name: "Camel Tan", value: "#B07D4F", texture: "radial-gradient(circle, #B07D4F 10%, #9C673B 90%)" },
  { name: "Crimson Red", value: "#991B1B", texture: "radial-gradient(circle, #991B1B 10%, #7F1D1D 90%)" },
  { name: "Obsidian Black", value: "#262524", texture: "radial-gradient(circle, #262524 10%, #151413 90%)" }
];

export default function GymSetBuilder({ onAddToGlobalSet }) {
  const [selectedMachine, setSelectedMachine] = useState(MACHINES[0]);
  const [selectedFrame, setSelectedFrame] = useState(FRAME_COLORS[0]);
  const [selectedPad, setSelectedPad] = useState(PAD_COLORS[0]);
  const [addedItems, setAddedItems] = useState([]);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", gymName: "" });

  const handleAdd = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      machine: selectedMachine,
      frame: selectedFrame,
      pad: selectedPad
    };
    setAddedItems([...addedItems, newItem]);
    onAddToGlobalSet(newItem);
  };

  const handleRemove = (id) => {
    setAddedItems(addedItems.filter(item => item.id !== id));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your quote request for ${addedItems.length} TITAN machines has been successfully sent!`);
    setShowQuoteModal(false);
    setFormData({ name: "", email: "", phone: "", gymName: "" });
    setAddedItems([]);
  };

  // Calculate totals
  const totalWeight = addedItems.reduce((acc, curr) => acc + curr.machine.estWeight, 0);
  const totalArea = addedItems.reduce((acc, curr) => acc + curr.machine.areaReq, 0);

  // Render highly-detailed SVG based on customization
  const renderMachineSVG = () => {
    const frame = selectedFrame.value;
    const pad = selectedPad.value;
    const type = selectedMachine.svgType;

    if (type === "press") {
      return (
        <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main frame support */}
          <path d="M40 170L70 30H100L85 170" stroke={frame} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 170H160" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Weight Stack Guide Rods */}
          <line x1="120" y1="40" x2="120" y2="170" stroke="#666" strokeWidth="2" strokeDasharray="4 2"/>
          <line x1="135" y1="40" x2="135" y2="170" stroke="#666" strokeWidth="2" strokeDasharray="4 2"/>
          
          {/* Weights */}
          <rect x="110" y="70" width="35" height="10" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="82" width="35" height="10" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="94" width="35" height="10" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="106" width="35" height="10" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="118" width="35" height="10" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="130" width="35" height="10" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="142" width="35" height="10" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="154" width="35" height="10" rx="1" fill="#D93829"/> {/* Selected plate pin */}
          
          {/* Seat Frame */}
          <path d="M60 140H110" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          <path d="M75 140V100L95 80" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Seat Cushion Pad */}
          <rect x="58" y="132" width="45" height="8" rx="3" fill={pad} stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          
          {/* Backrest Cushion Pad */}
          <rect x="65" y="90" width="10" height="42" rx="4" transform="rotate(-15 65 90)" fill={pad} stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          
          {/* Press Arm Mechanism */}
          <path d="M85 45L120 70" stroke={frame} strokeWidth="5"/>
          <circle cx="85" cy="45" r="7" fill="var(--accent)"/>
          <path d="M50 85L85 45L40 70" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Handles */}
          <circle cx="50" cy="85" r="4" fill="#111"/>
          <circle cx="40" cy="70" r="4" fill="#111"/>
        </svg>
      );
    } else if (type === "pulldown") {
      return (
        <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main frame support */}
          <path d="M80 170V30H130V65" stroke={frame} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 170H150" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Weight Stack */}
          <line x1="120" y1="65" x2="120" y2="170" stroke="#666" strokeWidth="2" strokeDasharray="3 3"/>
          <rect x="110" y="90" width="20" height="8" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="100" width="20" height="8" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="110" width="20" height="8" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="120" width="20" height="8" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="130" width="20" height="8" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="140" width="20" height="8" rx="1" fill="#3E3D3C"/>
          <rect x="110" y="150" width="20" height="8" rx="1" fill="#D93829"/>
          
          {/* Seat Cushion Pad */}
          <rect x="52" y="125" width="30" height="8" rx="3" fill={pad} stroke="rgba(255,255,255,0.15)"/>
          <path d="M67 170V128" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Knee Pad Cushion */}
          <rect x="52" y="108" width="25" height="7" rx="3" fill={pad} stroke="rgba(255,255,255,0.15)"/>
          <path d="M60 128V111" stroke={frame} strokeWidth="4"/>
          
          {/* Pulleys */}
          <circle cx="130" cy="30" r="8" fill="#1C1B1A" stroke="#555" strokeWidth="2"/>
          <circle cx="80" cy="30" r="8" fill="#1C1B1A" stroke="#555" strokeWidth="2"/>
          
          {/* Cables */}
          <line x1="130" y1="38" x2="130" y2="90" stroke="#777" strokeWidth="1.5"/>
          <path d="M122 30H88" stroke="#777" strokeWidth="1.5"/>
          <line x1="80" y1="38" x2="80" y2="70" stroke="#777" strokeWidth="1.5"/>
          
          {/* Lat Pulldown Bar */}
          <path d="M50 72C65 72 80 70 80 70C80 70 95 72 110 72" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );
    } else if (type === "cable") {
      return (
        <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Column */}
          <path d="M40 170V40H65" stroke={frame} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Right Column */}
          <path d="M160 170V40H135" stroke={frame} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Connector Top Bar */}
          <path d="M60 40H140" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Pulley Sliders */}
          <rect x="36" y="90" width="8" height="20" rx="2" fill="var(--accent)"/>
          <circle cx="48" cy="100" r="6" fill="#1C1B1A" stroke="#555" strokeWidth="1"/>
          
          <rect x="156" y="90" width="8" height="20" rx="2" fill="var(--accent)"/>
          <circle cx="152" cy="100" r="6" fill="#1C1B1A" stroke="#555" strokeWidth="1"/>
          
          {/* Pull Handles */}
          <path d="M48 106L58 120" stroke="#777" strokeWidth="1.5"/>
          <rect x="54" y="118" width="10" height="4" rx="1" fill={pad} transform="rotate(30 54 118)"/>
          
          <path d="M152 106L142 120" stroke="#777" strokeWidth="1.5"/>
          <rect x="136" y="118" width="10" height="4" rx="1" fill={pad} transform="rotate(-30 136 118)"/>
          
          {/* Ground platform */}
          <path d="M20 170H180" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Brand Logo Watermark on Crossbar */}
          <circle cx="100" cy="40" r="8" fill="var(--accent)"/>
        </svg>
      );
    } else {
      // Treadmill
      return (
        <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base Deck */}
          <path d="M35 150C35 150 70 160 110 160C150 160 175 145 175 145" stroke={frame} strokeWidth="10" strokeLinecap="round"/>
          <path d="M42 147C42 147 75 155 110 155C145 155 168 142 168 142" stroke="#252525" strokeWidth="6" strokeLinecap="round"/>
          
          {/* Upright Arms */}
          <path d="M50 148L80 75L120 70" stroke={frame} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M70 73H130" stroke={frame} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Handles (Grip pads) */}
          <path d="M95 72L122 69" stroke={pad} strokeWidth="6" strokeLinecap="round"/>
          
          {/* Curved Belt Details */}
          <line x1="55" y1="150" x2="60" y2="152" stroke="#444" strokeWidth="2"/>
          <line x1="80" y1="156" x2="85" y2="157" stroke="#444" strokeWidth="2"/>
          <line x1="110" y1="158" x2="115" y2="158" stroke="#444" strokeWidth="2"/>
          <line x1="140" y1="154" x2="145" y2="153" stroke="#444" strokeWidth="2"/>
          
          {/* Console screen */}
          <rect x="75" y="60" width="22" height="15" rx="3" fill="#1C1B1A" stroke="rgba(255,255,255,0.15)"/>
          <rect x="79" y="63" width="14" height="9" fill="#00ffff" opacity="0.3"/> {/* Glowing blue display */}
        </svg>
      );
    }
  };

  return (
    <section id="set-builder" style={styles.section}>
      <div className="container">
        {/* Title */}
        <div style={styles.titleArea}>
          <div className="subhead-tag" style={{ justifyContent: "center" }}>
            <div style={styles.subheadDot}></div>
            <span>TITAN Studio</span>
          </div>
          <h2 style={styles.heading}>Create Your Gym Set</h2>
          <p style={styles.headingDesc}>
            Select your machines, configure the colors of steel frames and upholstery pads, and layout your perfect fitness space.
          </p>
        </div>

        <div className="builder-grid">
          {/* Visualizer Canvas */}
          <div className="builder-visualizer" style={styles.visualizer}>
            <div className="builder-stage"></div>
            {renderMachineSVG()}
            
            {/* Visualizer Details Overlay */}
            <div style={styles.visualizerOverlay}>
              <div style={styles.visualizerDetail}>
                <span style={styles.detailLabel}>Series:</span>
                <span style={styles.detailVal}>{selectedMachine.series}</span>
              </div>
              <div style={styles.visualizerDetail}>
                <span style={styles.detailLabel}>Frame:</span>
                <span style={styles.detailVal}>{selectedFrame.name}</span>
              </div>
              <div style={styles.visualizerDetail}>
                <span style={styles.detailLabel}>Upholstery:</span>
                <span style={styles.detailVal}>{selectedPad.name}</span>
              </div>
            </div>
          </div>

          {/* Configurator Controls */}
          <div style={styles.configurator}>
            {/* Step 1: Machine Selector */}
            <div style={styles.configGroup}>
              <label style={styles.configLabel}>1. Select the Machine</label>
              <div style={styles.selectWrapper}>
                <select
                  value={selectedMachine.id}
                  onChange={(e) => {
                    const m = MACHINES.find(item => item.id === e.target.value);
                    if (m) setSelectedMachine(m);
                  }}
                  style={styles.selectInput}
                >
                  {MACHINES.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2: Frame Color */}
            <div style={styles.configGroup}>
              <label style={styles.configLabel}>2. Steel Frame Color</label>
              <div style={styles.swatchRow}>
                {FRAME_COLORS.map(f => (
                  <button
                    key={f.name}
                    onClick={() => setSelectedFrame(f)}
                    style={{
                      ...styles.swatchBtn,
                      backgroundColor: f.value,
                      boxShadow: selectedFrame.name === f.name ? `0 0 0 2px var(--bg-primary), 0 0 0 4px var(--accent)` : "none"
                    }}
                    title={f.name}
                  />
                ))}
              </div>
              <span style={styles.swatchName}>{selectedFrame.name}</span>
            </div>

            {/* Step 3: Cushion Pad Color */}
            <div style={styles.configGroup}>
              <label style={styles.configLabel}>3. Upholstery Materials</label>
              <div style={styles.swatchRow}>
                {PAD_COLORS.map(p => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPad(p)}
                    style={{
                      ...styles.swatchBtn,
                      background: p.texture,
                      boxShadow: selectedPad.name === p.name ? `0 0 0 2px var(--bg-primary), 0 0 0 4px var(--accent)` : "none"
                    }}
                    title={p.name}
                  />
                ))}
              </div>
              <span style={styles.swatchName}>{selectedPad.name}</span>
            </div>

            {/* Add Button */}
            <button className="btn-primary" onClick={handleAdd} style={styles.addBtn}>
              Add to my SET
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Customized Set Summary */}
        {addedItems.length > 0 && (
          <div className="glass" style={styles.summaryCard}>
            <div style={styles.summaryHeader}>
              <h3 style={styles.summaryTitle}>Your Configured Set ({addedItems.length})</h3>
              <button onClick={() => setShowQuoteModal(true)} className="btn-primary" style={styles.quoteBtn}>
                Request a Quote
              </button>
            </div>
            
            <div style={styles.summaryStatsRow}>
              <div style={styles.statBox}>
                <span style={styles.statLabel}>Total Equipment</span>
                <span style={styles.statVal}>{addedItems.length}</span>
              </div>
              <div style={styles.statBox}>
                <span style={styles.statLabel}>Min Recommended Area</span>
                <span style={styles.statVal}>{totalArea.toFixed(1)} m²</span>
              </div>
              <div style={styles.statBox}>
                <span style={styles.statLabel}>Est Stack Weight</span>
                <span style={styles.statVal}>{totalWeight} kg</span>
              </div>
            </div>

            <div style={styles.itemsList}>
              {addedItems.map(item => (
                <div key={item.id} style={styles.itemRow}>
                  <div style={styles.itemInfo}>
                    <span style={styles.itemName}>{item.machine.name}</span>
                    <span style={styles.itemDesc}>
                      Frame: {item.frame.name} | Upholstery: {item.pad.name}
                    </span>
                  </div>
                  <button onClick={() => handleRemove(item.id)} style={styles.removeBtn} title="Remove item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quote Form Modal */}
      {showQuoteModal && (
        <div style={styles.modalOverlay}>
          <div className="glass" style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Request Set Quote</h3>
              <button onClick={() => setShowQuoteModal(false)} style={styles.closeModalBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleQuoteSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={styles.formInput}
                  placeholder="Your Name"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Corporate Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={styles.formInput}
                  placeholder="email@company.com"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={styles.formInput}
                  placeholder="+1 (000) 000-0000"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Gym Name (If applicable)</label>
                <input
                  type="text"
                  value={formData.gymName}
                  onChange={e => setFormData({ ...formData, gymName: e.target.value })}
                  style={styles.formInput}
                  placeholder="TITAN Gym"
                />
              </div>

              <div style={styles.modalSummaryBox}>
                <span style={styles.modalSummaryText}>You are requesting a quote for {addedItems.length} customized machines.</span>
              </div>
              
              <button type="submit" className="btn-primary" style={styles.submitBtn}>
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    padding: "6rem 0",
    backgroundColor: "var(--bg-primary)",
    borderTop: "1px solid var(--border)",
  },
  titleArea: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  subheadDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "var(--accent)",
    marginRight: "6px",
  },
  heading: {
    fontSize: "clamp(2rem, 3.5vw, 3rem)",
    fontWeight: 800,
    textTransform: "uppercase",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
  },
  headingDesc: {
    fontSize: "1rem",
    color: "var(--text-secondary)",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  visualizer: {
    position: "relative",
  },
  visualizerOverlay: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    backgroundColor: "rgba(18, 17, 16, 0.7)",
    backdropFilter: "blur(8px)",
    padding: "1rem",
    borderRadius: "8px",
    border: "1px solid var(--border)",
  },
  visualizerDetail: {
    display: "flex",
    gap: "0.5rem",
    fontSize: "0.75rem",
    textTransform: "uppercase",
  },
  detailLabel: {
    color: "var(--text-secondary)",
    fontWeight: 600,
  },
  detailVal: {
    color: "var(--text-primary)",
    fontWeight: 800,
  },
  configurator: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    padding: "2.5rem",
    borderRadius: "16px",
  },
  configGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  configLabel: {
    fontFamily: "var(--font-display)",
    fontSize: "0.85rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--text-secondary)",
  },
  selectWrapper: {
    position: "relative",
    width: "100%",
  },
  selectInput: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "var(--bg-tertiary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    outline: "none",
    appearance: "none",
  },
  swatchName: {
    fontSize: "0.75rem",
    color: "var(--text-secondary)",
    fontWeight: 600,
    textTransform: "uppercase",
    marginTop: "0.25rem",
  },
  swatchRow: {
    display: "flex",
    gap: "1rem",
  },
  swatchBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "2px solid transparent",
    cursor: "pointer",
    padding: 0,
    transition: "transform var(--transition-fast)",
  },
  addBtn: {
    width: "100%",
    justifyContent: "center",
    marginTop: "1rem",
    borderRadius: "8px",
  },
  summaryCard: {
    marginTop: "3rem",
    borderRadius: "16px",
    padding: "2.5rem",
  },
  summaryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--border)",
    paddingBottom: "1.5rem",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    gap: "1rem",
  },
  summaryTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  quoteBtn: {
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
  },
  summaryStatsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  statBox: {
    backgroundColor: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  statLabel: {
    fontSize: "0.75rem",
    color: "var(--text-secondary)",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  statVal: {
    fontSize: "1.5rem",
    fontWeight: 900,
    fontFamily: "var(--font-display)",
    color: "var(--text-primary)",
  },
  itemsList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  itemRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(226, 221, 219, 0.02)",
    border: "1px solid var(--border)",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
  },
  itemInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  itemName: {
    fontSize: "0.95rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  itemDesc: {
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
  },
  removeBtn: {
    background: "none",
    border: "none",
    color: "var(--text-secondary)",
    cursor: "pointer",
    padding: "0.25rem",
    transition: "color var(--transition-fast)",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    padding: "1rem",
  },
  modalContent: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "16px",
    padding: "2.5rem",
    position: "relative",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  modalTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  closeModalBtn: {
    background: "none",
    border: "none",
    color: "var(--text-secondary)",
    cursor: "pointer",
    padding: "0.25rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  formLabel: {
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "var(--text-secondary)",
  },
  formInput: {
    width: "100%",
    padding: "0.85rem 1rem",
    backgroundColor: "var(--bg-tertiary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "6px",
    fontSize: "0.9rem",
    outline: "none",
  },
  modalSummaryBox: {
    backgroundColor: "rgba(217, 56, 41, 0.05)",
    border: "1px solid rgba(217, 56, 41, 0.15)",
    borderRadius: "6px",
    padding: "0.75rem 1rem",
    textAlign: "center",
  },
  modalSummaryText: {
    fontSize: "0.85rem",
    color: "var(--text-primary)",
    fontWeight: 600,
  },
  submitBtn: {
    width: "100%",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "6px",
    marginTop: "0.5rem",
  }
};
