import React, { useState, useRef, useEffect } from 'react';
import { ArrowHorizontal } from './icons/ResortIcons';

const OFFERS = [
  {
    id: 'stay',
    title: 'STAY — Bohemian Cottages',
    image: '/images/asset_07.png',
    alt: 'Stay - Bohemian Cottages',
  },
  {
    id: 'dine',
    title: 'DINE — Gourmet Experiences',
    image: '/images/asset_04.png',
    alt: 'Dine - Gourmet Experiences',
  },
  {
    id: 'unwind',
    title: 'UNWIND — Poolside Escapes',
    image: '/images/asset_02.png',
    alt: 'Unwind - Poolside Escapes',
  },
  {
    id: 'gather',
    title: 'GATHER — Private Celebrations',
    image: '/images/asset_05.png',
    alt: 'Gather - Private Celebrations',
  },
  {
    id: 'listen',
    title: 'LISTEN — Live Music & Bonfires',
    image: '/images/asset_06.png',
    alt: 'Listen - Live Music & Bonfires',
  },
  {
    id: 'stargaze',
    title: 'STARGAZE — Evenings Under Open Skies',
    image: '/images/asset_10.png',
    alt: 'Stargaze - Evenings Under Open Skies',
  },
];

export default function ExperienceOffers({ onSelectOffer }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewTop, setPreviewTop] = useState(60);
  const rowRefs = useRef([]);

  useEffect(() => {
    const currentRow = rowRefs.current[activeIndex];
    if (currentRow) {
      const top = currentRow.offsetTop + currentRow.offsetHeight / 2;
      setPreviewTop(top);
    }
  }, [activeIndex]);

  const activeOffer = OFFERS[activeIndex] || OFFERS[0];

  return (
    <section
      id="experience-offers"
      className="relative w-full bg-[#FAF8F4] py-24 md:py-32 px-4 sm:px-8 md:px-16 overflow-hidden select-none"
      data-purpose="experience-offers"
    >
      {/* Subtle champagne luminous curved ribbon waves background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 850"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-80,480 C260,280 480,50 680,240 C880,430 1150,780 1520,620"
          stroke="#F1E8D9"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <path
          d="M-60,520 C280,310 490,90 690,260 C890,430 1120,740 1480,720"
          stroke="#EADBC3"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
        <path
          d="M180,-20 C220,240 540,580 940,480 C1200,410 1360,200 1500,280"
          stroke="#F4EDE0"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <path
          d="M980,850 C1080,680 1220,520 1440,440"
          stroke="#E3D1B4"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Header Title */}
        <h2 className="font-serif text-[#221F1B] text-2xl sm:text-3xl md:text-[34px] font-normal tracking-wide text-center mb-14 md:mb-16">
          The Experience Offers
        </h2>

        {/* Interactive Offerings List Table */}
        <div className="relative w-full border-t border-stone-200/80">
          {/* Dynamic Floating Preview Card (Positioned on the left side of the active row) */}
          <div
            className="hidden md:block absolute left-2 lg:left-6 xl:left-8 -translate-y-1/2 w-64 lg:w-72 h-44 lg:h-48 rounded-2xl overflow-hidden shadow-2xl shadow-stone-800/20 border border-stone-200/60 z-20 pointer-events-none transition-all duration-500 ease-out bg-stone-100"
            style={{ top: `${previewTop}px` }}
          >
            <img
              alt={activeOffer.alt}
              className="w-full h-full object-cover transition-opacity duration-300"
              src={activeOffer.image}
            />
          </div>

          {/* Offer Rows */}
          {OFFERS.map((offer, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={offer.id}
                ref={(el) => (rowRefs.current[index] = el)}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  setActiveIndex(index);
                  if (onSelectOffer) onSelectOffer(offer);
                }}
                className={`group relative w-full border-b border-stone-200/80 py-7 md:py-9 cursor-pointer transition-colors duration-300 ${
                  isActive ? 'bg-stone-100/40' : 'hover:bg-stone-50/50'
                }`}
              >
                <div className="w-full px-4 sm:px-6 md:px-12 flex items-center justify-between">
                  {/* Left Spacer on Desktop for Preview Card */}
                  <div className="w-24 sm:w-32 hidden md:block" />

                  {/* Title */}
                  <span
                    className={`offer-title font-serif tracking-wide text-center transition-all duration-300 ${
                      isActive
                        ? 'text-2xl sm:text-3xl md:text-[42px] text-stone-900 italic font-medium'
                        : 'text-xl sm:text-2xl md:text-[36px] text-stone-700 font-light group-hover:text-stone-950'
                    }`}
                  >
                    {offer.title}
                  </span>

                  {/* Action */}
                  <div
                    className={`offer-action flex items-center justify-end w-24 sm:w-32 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <span className="font-serif italic text-sm text-stone-700 mr-2 whitespace-nowrap hidden sm:inline">
                      View More
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                        isActive
                          ? 'border-stone-800 text-stone-900 bg-white/60'
                          : 'border-stone-400 text-stone-600 group-hover:border-stone-800 group-hover:text-stone-900'
                      }`}
                    >
                      <ArrowHorizontal className="w-3.5 h-3.5 stroke-[1.4]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
