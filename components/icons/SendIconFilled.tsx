import React from "react";

export function SendIconFilled({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 3 22 20"
      role="img"
      aria-label="send"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      {/* Filled paper plane whose tip is exactly at y=12 */}
      <path d="M4 6 L22 12 L4 18 L8 13 L14 12 L8 11 L4 6 Z" />
    </svg>
  );
}