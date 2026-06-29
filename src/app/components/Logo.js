import React from "react";

export default function Logo({ className = "", width = 160, height = 40 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block" }}
    >
      {/* Dynamic Shield/T Graphic Mark */}
      <path
        d="M10 5 H46 V15 H32 V49 H24 V15 H10 Z"
        fill="currentColor"
      />
      {/* Athletic Slash */}
      <path
        d="M26 1L31 1L18 49H13L26 1Z"
        fill="#D93829"
      />
      
      {/* Brand Typography: TITAN */}
      <text
        x="60"
        y="37"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display), 'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: "27px",
          letterSpacing: "0.12em"
        }}
      >
        TITAN
      </text>
      
      <text
        x="182"
        y="18"
        fill="#D93829"
        style={{
          fontFamily: "var(--font-display), 'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: "9px",
          letterSpacing: "0.05em"
        }}
      >
        FIT
      </text>
    </svg>
  );
}
