import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 160, height = 40 }: LogoProps) {
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
      {/* Dynamic Shield/B Graphic Mark */}
      <path
        d="M10 5H30C40 5 46 10 46 17C46 22 42 25 37 26C43 27 48 31 48 38C48 45 41 49 31 49H10V5ZM20 14V22H29C32.5 22 34.5 20.5 34.5 18C34.5 15.5 32.5 14 29 14H20ZM20 30V40H30.5C34 40 36.5 38.5 36.5 35.5C36.5 32.5 34 30 30.5 30H20Z"
        fill="currentColor"
      />
      {/* Athletic Slash */}
      <path
        d="M26 1L31 1L18 49H13L26 1Z"
        fill="#D93829"
      />
      
      {/* Brand Typography: BUCKLER */}
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
        UCKLER
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
