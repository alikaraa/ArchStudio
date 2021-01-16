import React from "react";

export default function Arrow({ width = "26", height = "20" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 26 20" fill="none">
      <path d="M15 1L24 10L15 19" stroke="white" strokeWidth="2" />
      <path d="M0 10H24" stroke="white" strokeWidth="2" />
    </svg>
  );
}
