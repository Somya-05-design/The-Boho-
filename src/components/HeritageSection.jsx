import React from 'react';
import { RoyalCrest } from './icons/ResortIcons';

export default function HeritageSection() {
  return (
    <section
      id="heritage"
      className="relative w-full bg-[#FAF7F2] py-24 md:py-36 px-6 sm:px-12 md:px-20 overflow-hidden flex flex-col items-center justify-center text-center select-none"
      data-purpose="heritage-showcase"
    >
      {/* Subtle wavy ribbon decorative SVG background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100,120 C300,50 650,220 1100,100 C1300,40 1480,180 1560,140"
          fill="none"
          stroke="#E6DCCB"
          strokeWidth="1.5"
        />
        <path
          d="M-80,480 C320,380 580,560 1020,410 C1250,330 1450,470 1580,390"
          fill="none"
          stroke="#EDE5D8"
          strokeWidth="1.8"
        />
        <path
          d="M-50,260 C260,340 780,80 1200,280 C1380,360 1480,240 1550,290"
          fill="none"
          stroke="#F0E9DC"
          strokeWidth="1.2"
        />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Kahala Circular Floral Monogram Crest */}
        <div className="w-14 h-14 mb-8 flex items-center justify-center text-[#2A2622]/85 hover:scale-105 transition-transform duration-300">
          <RoyalCrest className="w-12 h-12" />
        </div>

        {/* Editorial Heading */}
        <h2 className="font-serif text-[#1F1D1A] text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] leading-relaxed md:leading-[1.4] font-light tracking-wide max-w-3xl mb-10">
          Where the warmth of nature, the spirit of <span className="font-normal italic">BOHEMIAN</span> living and thoughtful hospitality come together to create exquisite memories.
        </h2>

        {/* Explore More Button */}
        <a
          href="#featured-services"
          className="inline-flex items-center justify-center px-8 py-2.5 rounded-md bg-gradient-to-b from-[#D4AB4E] via-[#C59B3C] to-[#B3872A] text-white text-[13px] font-medium tracking-wide shadow-sm hover:shadow-md hover:brightness-105 transition-all duration-300 active:scale-95"
        >
          Explore More
        </a>
      </div>
    </section>
  );
}
