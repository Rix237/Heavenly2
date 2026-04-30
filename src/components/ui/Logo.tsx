import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M 10 10 L 60 40 L 75 140 L 40 90 Z" />
      <path d="M 190 10 L 140 40 L 125 140 L 160 90 Z" />
      <path d="M 75 45 L 125 45 L 100 80 Z" />
    </svg>
  );
}
