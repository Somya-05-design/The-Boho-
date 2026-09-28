import React from 'react';

export function LogoMandala({ className = "w-7 h-7" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" />
      <path d="M12 2C10.5 4.5 10.5 7.5 12 9C13.5 7.5 13.5 4.5 12 2Z" stroke="currentColor" />
      <path d="M12 15C10.5 16.5 10.5 19.5 12 22C13.5 19.5 13.5 16.5 12 15Z" stroke="currentColor" />
      <path d="M2 12C4.5 10.5 7.5 10.5 9 12C7.5 13.5 4.5 13.5 2 12Z" stroke="currentColor" />
      <path d="M15 12C16.5 10.5 19.5 10.5 22 12C19.5 13.5 16.5 13.5 15 12Z" stroke="currentColor" />
      <circle cx="6.5" cy="6.5" r="1.5" stroke="currentColor" />
      <circle cx="17.5" cy="6.5" r="1.5" stroke="currentColor" />
      <circle cx="6.5" cy="17.5" r="1.5" stroke="currentColor" />
      <circle cx="17.5" cy="17.5" r="1.5" stroke="currentColor" />
    </svg>
  );
}

export function RoyalCrest({ className = "w-12 h-12" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="6" stroke="currentColor" />
      <circle cx="24" cy="24" fill="currentColor" r="1.8" />
      <path d="M24 6 C21 11 21 17 24 18 C27 17 27 11 24 6 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M24 42 C21 37 21 31 24 30 C27 31 27 37 24 42 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M6 24 C11 21 17 21 18 24 C17 27 11 27 6 24 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M42 24 C37 21 31 21 30 24 C31 27 37 27 42 24 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M11.3 11.3 C14.8 14.8 19.1 19.1 19.8 19.8 C19.1 20.5 14.8 17.5 11.3 11.3 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M36.7 36.7 C33.2 33.2 28.9 28.9 28.2 28.2 C28.9 27.5 33.2 30.5 36.7 36.7 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M36.7 11.3 C33.2 14.8 28.9 19.1 28.2 19.8 C27.5 19.1 30.5 14.8 36.7 11.3 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M11.3 36.7 C14.8 33.2 19.1 28.9 19.8 28.2 C20.5 28.9 17.5 33.2 11.3 36.7 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeDasharray="1 2" strokeWidth="0.8" />
    </svg>
  );
}

export function FourPetalIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
      <path d="M12 12C9.5 9.5 7 9.5 4.5 12C7 14.5 9.5 14.5 12 12Z" />
      <path d="M12 12C14.5 9.5 17 9.5 19.5 12C17 14.5 14.5 14.5 12 12Z" />
      <path d="M12 12C9.5 7 9.5 4.5 12 2C14.5 4.5 14.5 7 12 12Z" />
      <path d="M12 12C9.5 17 9.5 19.5 12 22C14.5 19.5 14.5 17 12 12Z" />
    </svg>
  );
}

export function LotusIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
      <path d="M12 4C10.5 7.5 7.5 11 4 13C8 14 11 13 12 20C13 13 16 14 20 13C16.5 11 13.5 7.5 12 4Z" />
      <path d="M8 17C10.5 18 13.5 18 16 17" />
    </svg>
  );
}

export function SunFlowerIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4V7M12 17V20M4 12H7M17 12H20M6.3 6.3L8.5 8.5M15.5 15.5L17.7 17.7M6.3 17.7L8.5 15.5M15.5 8.5L17.7 6.3" />
    </svg>
  );
}

export function StarEmblemIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
      <polygon points="12 2 15 8.5 22 9.5 17 14.5 18.5 21.5 12 18 5.5 21.5 7 14.5 2 9.5 9 8.5 12 2" />
    </svg>
  );
}

export function FlowerSealIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 9V15M9 12H15" />
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

export function ArrowDiagonal({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowHorizontal({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}
