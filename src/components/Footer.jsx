import React from 'react';
import { LogoMandala } from './icons/ResortIcons';

export default function Footer() {
  const categoryPills = [
    { label: 'Our Resort', href: '#heritage' },
    { label: 'Villa', href: '#featured-services' },
    { label: 'Apartment', href: '#featured-services' },
    { label: 'Residence', href: '#featured-services' },
    { label: 'Penthouse', href: '#featured-services' },
    { label: 'Private Beach', href: '#experience-offers' },
    { label: 'Our Room', href: '#featured-services' },
    { label: 'Hotel', href: '#heritage' },
  ];

  const thumbnails = [
    { src: '/images/asset_04.png', alt: 'Resort Villa Preview' },
    { src: '/images/asset_02.png', alt: 'Ocean & Beach Preview' },
    { src: '/images/asset_03.png', alt: 'Luxury Suite Preview' },
    { src: '/images/asset_05.png', alt: 'Tropical Pool Preview' },
  ];

  return (
    <footer
      id="resort-footer"
      className="relative w-full bg-[#FAF8F4] pt-16 pb-12 px-6 sm:px-10 md:px-16 overflow-hidden select-none text-[#2A2622]"
      data-purpose="luxury-resort-footer"
    >
      {/* Subtle champagne decorative vector geometric lines in background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100,550 L1550,150" stroke="#E8DECE" strokeWidth="1.4" />
        <path d="M-50,200 L1500,750" stroke="#EFE6D6" strokeWidth="1.2" />
        <path d="M300,900 L1150,-100" stroke="#EADCC5" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Category Navigation Pills Row */}
        <nav className="w-full flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 mb-14 md:mb-16">
          {categoryPills.map((pill, idx) => (
            <a
              key={idx}
              className="px-5 sm:px-6 py-1.5 rounded-full border border-[#2A2622]/30 hover:border-[#2A2622]/60 hover:bg-[#2A2622]/5 text-[12px] sm:text-[13px] font-serif text-[#2A2622]/85 transition-all"
              href={pill.href}
            >
              {pill.label}
            </a>
          ))}
        </nav>

        {/* Brand Emblem & Crest */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-11 h-11 mb-3 text-[#2A2622]/85 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <LogoMandala className="w-10 h-10 stroke-[1.2]" />
          </div>
          <span className="font-serif tracking-[0.24em] text-xl md:text-2xl text-[#1F1D1A] uppercase font-normal">
            the boho
          </span>
          <span className="font-sans tracking-[0.28em] text-[9.5px] uppercase font-light text-[#2A2622]/70 mt-1">
            resort &amp; retreat
          </span>
          <span className="font-serif tracking-[0.16em] text-[9px] capitalize italic font-light text-[#2A2622]/60 mt-0.5">
            Honolulu, Hawaii
          </span>
        </div>

        {/* Thumbnail Preview Gallery Strip (4 miniature rounded photos) */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          {thumbnails.map((thumb, idx) => (
            <div
              key={idx}
              className="w-12 h-10 sm:w-14 sm:h-11 rounded-lg overflow-hidden border border-stone-300 shadow-sm cursor-pointer hover:border-amber-400 transition-colors"
            >
              <img
                alt={thumb.alt}
                className="w-full h-full object-cover transition-transform duration-300"
                src={thumb.src}
              />
            </div>
          ))}
        </div>

        {/* Social Media Outlined Circular Buttons */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {/* Instagram */}
          <a
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-stone-400/80 flex items-center justify-center text-[#2A2622]/80 hover:text-stone-950 hover:border-stone-800 transition-colors"
            href="#instagram"
          >
            <svg className="w-4 h-4 stroke-[1.4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect height="18" rx="5" ry="5" width="18" x="3" y="3" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" fill="currentColor" r="0.8" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            aria-label="X Twitter"
            className="w-9 h-9 rounded-full border border-stone-400/80 flex items-center justify-center text-[#2A2622]/80 hover:text-stone-950 hover:border-stone-800 transition-colors"
            href="#twitter"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            aria-label="YouTube"
            className="w-9 h-9 rounded-full border border-stone-400/80 flex items-center justify-center text-[#2A2622]/80 hover:text-stone-950 hover:border-stone-800 transition-colors"
            href="#youtube"
          >
            <svg className="w-4 h-4 stroke-[1.4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
              <polygon fill="currentColor" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </div>

        {/* Secondary Policy Links & Mini CTA */}
        <div className="w-full flex items-center justify-between max-w-3xl flex-wrap gap-4 text-xs sm:text-[13px] font-serif text-[#2A2622]/80 mb-8 sm:mb-10 px-4">
          <a className="hover:text-stone-950 transition-colors whitespace-nowrap" href="#terms">
            Term &amp; Conditions
          </a>
          <a className="hover:text-stone-950 transition-colors whitespace-nowrap" href="#privacy">
            Privacy Policy
          </a>
          <a
            className="px-6 py-1.5 rounded-full border border-[#2A2622]/40 hover:border-stone-900 hover:bg-[#2A2622]/5 text-[12px] text-stone-900 font-serif italic transition-all mx-auto sm:mx-0 whitespace-nowrap"
            href="#reserve-section"
          >
            Reserve Now
          </a>
          <a className="hover:text-stone-950 transition-colors whitespace-nowrap" href="#cookies">
            Cookies policy
          </a>
          <a className="hover:text-stone-950 transition-colors whitespace-nowrap" href="#sitemap">
            Site map
          </a>
        </div>

        {/* Giant Signature Editorial Email Display */}
        <div className="w-full text-center mt-2 mb-3">
          <a
            className="font-serif text-[42px] sm:text-[64px] md:text-[84px] lg:text-[104px] text-[#1F1D1A] font-light tracking-tight hover:opacity-85 transition-opacity leading-none block"
            href="mailto:Hello@bohoinfo.com"
          >
            Hello@bohoinfo.com
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="font-serif italic text-xs sm:text-[13px] text-[#2A2622]/70 tracking-wide text-center">
          &copy; {new Date().getFullYear()} The Boho Resort &amp; Retreat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
