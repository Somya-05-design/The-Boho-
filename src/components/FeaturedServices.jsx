import React, { useState } from 'react';

const SERVICES = [
  {
    id: 'stay',
    title: 'Stay',
    subtitle: 'Bohemian Cottages & Getaways',
    description: 'Immerse yourself in secluded architectural villas enveloped by lush tropical flora.',
    image: '/images/asset_03.png',
  },
  {
    id: 'dine',
    title: 'Dine',
    subtitle: 'Gourmet Dining & Bar',
    description: 'Relish oceanfront culinary artistry with handcrafted cocktails under the warm dusk sky.',
    image: '/images/asset_04.png',
  },
  {
    id: 'unwind',
    title: 'Unwind',
    subtitle: 'Poolside & Nature Sanctuary',
    description: 'Bask by our panoramic infinity pool and serene cabanas amidst tropical greenery and pristine waters.',
    image: '/images/asset_02.png',
    featuredBadge: 'Featured Experience',
  },
  {
    id: 'celebrate',
    title: 'Celebrate',
    subtitle: 'Private Events & Gatherings',
    description: 'Host unforgettable seaside celebrations illuminated by candlelit beachfront tables.',
    image: '/images/asset_05.png',
  },
  {
    id: 'experience',
    title: 'Experience',
    subtitle: 'Music, Bonfires & Stargazing',
    description: 'Gather around warm acoustic fire pits for intimate evenings under celestial night skies.',
    image: '/images/asset_06.png',
  },
];

export default function FeaturedServices({ onOpenReserve }) {
  const [selectedId, setSelectedId] = useState('unwind');

  return (
    <section
      id="featured-services"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 md:px-12 overflow-hidden select-none bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2]"
      data-purpose="featured-services"
    >
      {/* Subtle Tropical & Coastal Mist Ambient Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 bg-cover bg-center mix-blend-multiply"
        style={{
          backgroundImage: `url('/images/asset_02.png')`,
          filter: 'blur(36px)',
          transform: 'scale(1.1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-white/50 to-[#FAF7F2] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="font-serif text-[#1F1D1A] text-3xl sm:text-4xl md:text-5xl font-light tracking-wide italic">
          Featured Services
        </h2>
        <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.22em] text-[#2A2622]/60 font-sans">
          Curated Stays &amp; Signature Moments
        </p>
      </div>

      {/* Horizontal Carousel Container with Vignette Gradient Fades */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto">
        {/* Left and Right Gradient Fades for Carousel Effect */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-20 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-20 pointer-events-none" />

        {/* Carousel Cards Row */}
        <div
          className="flex items-center justify-start md:justify-center gap-5 md:gap-7 overflow-x-auto pb-8 pt-6 px-4 sm:px-8 no-scrollbar scroll-smooth"
        >
          {SERVICES.map((service) => {
            const isSelected = selectedId === service.id;

            if (isSelected) {
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className="flex-shrink-0 w-[290px] sm:w-[320px] md:w-[340px] min-h-[510px] rounded-[32px] p-6 bg-white/95 backdrop-blur-xl border border-white shadow-2xl shadow-stone-400/30 flex flex-col justify-between relative transform md:-translate-y-2 z-10 transition-all duration-300 group cursor-pointer ring-1 ring-amber-300/40"
                >
                  {/* Active status top badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#cf9f48] text-white text-[10px] uppercase font-semibold tracking-[0.18em] px-4 py-1 rounded-full shadow-sm">
                    {service.featuredBadge || 'Featured Experience'}
                  </div>

                  <div>
                    <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 shadow-md relative group-hover:shadow-lg transition-all mt-1">
                      <img
                        alt={service.subtitle}
                        className="w-full h-full object-cover transition-transform duration-500"
                        src={service.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1F1D1A] font-light mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-[13px] text-[#2A2622]/80 leading-relaxed font-sans">
                      <span className="font-semibold text-[#1F1D1A]">{service.subtitle}.</span> {service.description}
                    </p>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-4 flex items-center gap-3">
                    <a
                      href="#experience-offers"
                      className="flex-1 text-center py-2.5 px-3 rounded-xl border border-[#2A2622]/20 hover:border-[#2A2622]/50 text-xs font-medium text-[#1F1D1A] hover:bg-stone-50 transition-all"
                    >
                      Details
                    </a>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenReserve) onOpenReserve();
                        const el = document.getElementById('reserve-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 text-center py-2.5 px-3 rounded-xl bg-gradient-to-b from-[#dfae55] via-[#cf9f48] to-[#be8c37] hover:brightness-105 shadow-md shadow-amber-950/20 text-xs font-medium text-white transition-all hover:shadow-lg active:scale-95 cursor-pointer"
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className="flex-shrink-0 w-[270px] sm:w-[290px] md:w-[300px] h-[460px] rounded-3xl p-6 bg-white/45 backdrop-blur-md border border-white/70 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 shadow-sm relative group-hover:shadow-md transition-all">
                    <img
                      alt={service.subtitle}
                      className="w-full h-full object-cover transition-transform duration-500"
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1F1D1A] font-light mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#2A2622]/75 leading-relaxed line-clamp-3 font-sans">
                    <span className="font-medium text-[#1F1D1A]">{service.subtitle}.</span> {service.description}
                  </p>
                </div>

                <div className="pt-4">
                  <span className="inline-flex w-full items-center justify-center py-2 px-5 rounded-full border border-[#2A2622]/30 text-xs font-medium text-[#2A2622] group-hover:border-[#cf9f48] group-hover:text-[#cf9f48] group-hover:bg-[#cf9f48]/5 transition-all">
                    Explore More
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
