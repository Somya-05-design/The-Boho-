import React, { useState } from 'react';
import Navbar from './Navbar';
import {
  FourPetalIcon,
  LotusIcon,
  SunFlowerIcon,
  StarEmblemIcon,
  FlowerSealIcon,
  ArrowDiagonal
} from './icons/ResortIcons';

const HERO_PERSPECTIVES = [
  {
    badge: 'Experience',
    title: 'Private Events',
    image: '/images/asset_01.png',
    alt: 'Stunning luxury tropical bohemian resort A-frame villa and pool',
    subtitle: 'Where tranquility meets architectural brilliance'
  },
  {
    badge: 'Sanctuary',
    title: 'Pure Serenity',
    image: '/images/asset_02.png',
    alt: 'Panoramic infinity pool and lush serene cabanas',
    subtitle: 'Immerse in turquoise waters enveloped by verdant palms'
  },
  {
    badge: 'Retreat',
    title: 'Boho Cottages',
    image: '/images/asset_03.png',
    alt: 'Secluded luxury bohemian cottages nestled in tropical nature',
    subtitle: 'Handcrafted spaces designed for mindful stillness'
  },
  {
    badge: 'Cuisine',
    title: 'Sunset Dining',
    image: '/images/asset_04.png',
    alt: 'Oceanfront gourmet dining and artisanal mixology',
    subtitle: 'Artisanal dishes served under amber dusk skies'
  }
];

export default function HeroSection({ onOpenReserve }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIdx((prev) => (prev === 0 ? HERO_PERSPECTIVES.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIdx((prev) => (prev === HERO_PERSPECTIVES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const current = HERO_PERSPECTIVES[currentIdx];

  const dockItems = [
    { label: 'EXPLORE RESORT', icon: <FourPetalIcon className="w-5 h-5 text-amber-200/90 mb-1 transition-transform group-hover:scale-110" />, href: '#heritage' },
    { label: 'OUR EVENTS', icon: <LotusIcon className="w-5 h-5 text-white/85 mb-1 transition-transform group-hover:scale-110" />, href: '#experience-offers' },
    { label: 'OUR EXPERIENCES', icon: <SunFlowerIcon className="w-5 h-5 text-white/85 mb-1 transition-transform group-hover:scale-110" />, href: '#featured-services' },
    { label: 'OUR RESORTS', icon: <StarEmblemIcon className="w-5 h-5 text-white/85 mb-1 transition-transform group-hover:scale-110" />, href: '#gallery' },
    { label: 'SPECIAL OFFERS', icon: <FlowerSealIcon className="w-5 h-5 text-white/85 mb-1 transition-transform group-hover:scale-110" />, href: '#reserve-section' },
  ];

  return (
    <main
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZwrP8C01So0GK5Iq_6kuPdPL2DD7lggC7r27W5QSAGL87b0n-STWPqdkbf53RMIzvnTv2JsuWmwSuEHyPRf1NlR6eJFuSYfu4TQwssOs22TZSXsR8qWcbVIeifeaqjDp2XCj5lxEue75G8GFsZ6JDuSWAcWTIV-0QAbURQbZr5NwygvH0jktiTuiliFrACKciRk-WXC8wnLYhffD_InM1PqcTVTNtw93s80dIVnNeQSLH2nZB3FD-lxG_3DYU6DDzq6xacjznh4xIYg')`
      }}
    >
      {/* Top Navigation */}
      <Navbar onOpenReserve={onOpenReserve} />

      {/* Center Interactive Frame Section */}
      <section
        className="relative w-full flex-1 flex items-center justify-center my-4 py-6"
        data-purpose="hero-centerpiece"
      >
        {/* Outer Slider Arrow Left */}
        <button
          aria-label="Previous Perspective"
          onClick={handlePrev}
          type="button"
          className="hidden sm:flex absolute left-[15%] md:left-[22%] lg:left-[27%] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/50 bg-white/10 hover:bg-white/25 backdrop-blur-sm items-center justify-center text-white/90 hover:text-white transition-all duration-300 z-20 active:scale-90 cursor-pointer shadow-lg"
        >
          <svg className="w-6 h-6 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Center Portrait Glass Frame */}
        <div
          className="relative w-[320px] sm:w-[350px] md:w-[380px] lg:w-[410px] h-[480px] sm:h-[510px] md:h-[540px] rounded-[32px] glass-portrait-frame flex flex-col justify-end items-center pb-8 z-10 transition-all duration-500 shadow-2xl"
          data-purpose="framed-perspective-view"
          style={{ backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}
        >
          {/* Framed Image */}
          <div className="relative z-10 w-60 h-60 sm:w-68 sm:h-68 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl border border-white/60 mb-5 group cursor-pointer backdrop-blur-sm">
            <img
              src={current.image}
              alt={current.alt}
              className={`w-full h-full object-cover transition-all duration-700 ease-out ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Frosted Glass Pill Badge */}
          <div className="glass-experience-badge px-8 md:px-10 py-3 rounded-2xl shadow-lg mb-3 transform hover:scale-105 transition-transform">
            <span className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-white font-normal tracking-wide">
              {current.badge}
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white font-normal italic tracking-wide text-center drop-shadow-md leading-tight px-4">
            {current.title}
          </h1>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-3">
            {HERO_PERSPECTIVES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentIdx === idx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Outer Slider Arrow Right */}
        <button
          aria-label="Next Perspective"
          onClick={handleNext}
          type="button"
          className="hidden sm:flex absolute right-[15%] md:right-[22%] lg:right-[27%] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/50 bg-white/10 hover:bg-white/25 backdrop-blur-sm items-center justify-center text-white/90 hover:text-white transition-all duration-300 z-20 active:scale-90 cursor-pointer shadow-lg"
        >
          <svg className="w-6 h-6 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {/* Bottom Navigation Dock */}
      <footer className="w-full dock-glass py-5 px-6 md:px-12 z-30" data-purpose="bottom-navigation-dock">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-0 items-center">
          {dockItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex items-center justify-between px-3 md:px-5 ${index < dockItems.length - 1 ? 'md:border-r border-white/20' : ''
                } group cursor-pointer transition-transform hover:-translate-y-0.5`}
            >
              <div className="flex flex-col">
                {item.icon}
                <span className="text-[11px] md:text-[12px] font-normal tracking-[0.12em] text-white/90 group-hover:text-white transition-colors uppercase">
                  {item.label}
                </span>
              </div>
              <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white/80 group-hover:border-white group-hover:text-white transition-all ml-2 group-hover:bg-white/10">
                <ArrowDiagonal className="w-3.5 h-3.5 stroke-[1.4]" />
              </span>
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
