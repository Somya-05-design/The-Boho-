import React, { useState } from 'react';
import { LogoMandala } from './icons/ResortIcons';

export default function Navbar({ onOpenReserve }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-7 px-6 sm:px-8 md:px-14 z-30 flex items-center justify-between relative" data-purpose="top-navigation">
      {/* Left Side Links (Desktop) */}
      <nav className="hidden lg:flex items-center space-x-7 md:space-x-9 text-[15px] font-normal tracking-wide text-white/90">
        <a className="nav-link whitespace-nowrap" href="#hero">Home</a>
        <a className="nav-link whitespace-nowrap" href="#featured-services">Stay</a>
        <a className="nav-link whitespace-nowrap" href="#experience-offers">Experience</a>
        <a className="nav-link whitespace-nowrap" href="#gallery">Gallery</a>
        <a className="nav-link whitespace-nowrap" href="#heritage">About Us</a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white/90 p-2 focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Center Logo & Crest */}
      <a href="#hero" className="flex flex-col items-center justify-center text-center cursor-pointer group" data-purpose="resort-branding">
        <LogoMandala className="w-7 h-7 mb-1.5 text-white/95 transition-transform duration-300 group-hover:scale-105" />
        <span className="font-serif tracking-[0.28em] text-[19px] md:text-[21px] font-normal leading-tight text-white uppercase ml-1">
          the boho
        </span>
        <span className="tracking-[0.24em] text-[8.5px] uppercase font-light text-white/80 mt-1">
          farms &amp; retreat
        </span>
        <span className="tracking-[0.16em] text-[7.5px] capitalize font-light text-white/70 italic mt-0.5 font-serif">
          india
        </span>
      </a>

      {/* Right Action CTA Buttons */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Contact Us Pill Button */}
        <a
          className="hidden sm:inline-block px-5 md:px-6 py-2.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-md text-[13.5px] font-normal tracking-wide text-white transition-all duration-300 whitespace-nowrap"
          href="#resort-footer"
        >
          Contact us
        </a>
        {/* Reserve Now Luxury Golden Button */}
        <button
          type="button"
          onClick={() => {
            if (onOpenReserve) onOpenReserve();
            const el = document.getElementById('reserve-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-5 md:px-6 py-2.5 rounded-xl bg-gradient-to-b from-[#dfae55] via-[#cf9f48] to-[#be8c37] hover:brightness-105 shadow-md shadow-amber-950/20 text-[13.5px] font-normal tracking-wide text-white transition-all duration-300 hover:shadow-lg whitespace-nowrap active:scale-95 cursor-pointer"
        >
          Reserve Now
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-stone-900/95 backdrop-blur-xl border-b border-white/10 py-6 px-8 flex flex-col gap-4 text-center z-50 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <a onClick={() => setMobileMenuOpen(false)} className="nav-link py-2 text-lg text-white/90" href="#hero">Home</a>
          <a onClick={() => setMobileMenuOpen(false)} className="nav-link py-2 text-lg text-white/90" href="#featured-services">Stay</a>
          <a onClick={() => setMobileMenuOpen(false)} className="nav-link py-2 text-lg text-white/90" href="#experience-offers">Experience</a>
          <a onClick={() => setMobileMenuOpen(false)} className="nav-link py-2 text-lg text-white/90" href="#gallery">Gallery</a>
          <a onClick={() => setMobileMenuOpen(false)} className="nav-link py-2 text-lg text-white/90" href="#heritage">About Us</a>
          <a onClick={() => setMobileMenuOpen(false)} className="nav-link py-2 text-lg text-amber-300" href="#resort-footer">Contact Us</a>
        </div>
      )}
    </header>
  );
}
