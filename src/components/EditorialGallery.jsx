import React, { useState } from 'react';

const GALLERY_IMAGES = [
  { id: 8, src: '/images/asset_08.png', alt: 'Architectural A-frame villa nestled in tropical flora', title: 'Architectural Sanctuary' },
  { id: 9, src: '/images/asset_09.png', alt: 'Sunlight filtering through palm fronds on stone pathway', title: 'Sunlit Pathways' },
  { id: 10, src: '/images/asset_10.png', alt: 'Candid laughter around beach bonfire under night sky', title: 'Nocturnal Whispers' },
  { id: 11, src: '/images/asset_11.png', alt: 'Crystal clear pool water rippling under sunlight', title: 'Liquid Stillness' },
  { id: 12, src: '/images/asset_12.png', alt: 'Candlelit bohemian dinner table setting under tropical flora', title: 'Intimate Feasts' },
  { id: 13, src: '/images/asset_13.png', alt: 'Wide scenic landscape of calm ocean waves and secluded beach', title: 'Horizon & Solitude' },
];

export default function EditorialGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="gallery"
      className="relative w-full bg-[#FAF7F2] py-28 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none border-t border-stone-200/60"
      data-purpose="noir-editorial-gallery"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (Editorial Intro & First Photo) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 lg:pr-6">
            <div className="mb-10 lg:mb-14">
              <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#2A2622]/60 font-medium block mb-4">
                Moments at The Boho
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1F1D1A] font-light leading-[1.12] tracking-tight mb-6">
                Beyond Color.<br />
                <span className="italic font-normal">Pure Emotion.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#2A2622]/75 leading-relaxed max-w-md mb-8 font-light">
                Timeless black and white frames that speak without words — honest glimpses into life, leisure, and stillness at The Boho.
              </p>
              <button
                type="button"
                onClick={() => setSelectedPhoto(GALLERY_IMAGES[0])}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1F1D1A] text-white text-xs sm:text-[13px] font-medium tracking-wide shadow-md hover:bg-stone-800 transition-all duration-300 hover:shadow-lg active:scale-95 whitespace-nowrap cursor-pointer"
              >
                Explore Gallery
              </button>
            </div>

            {/* Photo 1: asset_08.png */}
            <div className="flex flex-col gap-5">
              <div
                onClick={() => setSelectedPhoto(GALLERY_IMAGES[0])}
                className="w-full h-64 sm:h-72 rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 group cursor-pointer relative"
              >
                <img
                  alt={GALLERY_IMAGES[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={GALLERY_IMAGES[0].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm font-serif italic">{GALLERY_IMAGES[0].title}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Editorial Gallery Grid) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 items-start">
            {/* Sub-col 1 */}
            <div className="flex flex-col gap-6">
              {/* Photo 2: asset_09.png */}
              <div
                onClick={() => setSelectedPhoto(GALLERY_IMAGES[1])}
                className="w-full h-72 sm:h-80 rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 group cursor-pointer relative"
              >
                <img
                  alt={GALLERY_IMAGES[1].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={GALLERY_IMAGES[1].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm font-serif italic">{GALLERY_IMAGES[1].title}</span>
                </div>
              </div>

              {/* Photo 3: asset_10.png */}
              <div
                onClick={() => setSelectedPhoto(GALLERY_IMAGES[2])}
                className="w-full h-60 sm:h-68 rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 group cursor-pointer relative"
              >
                <img
                  alt={GALLERY_IMAGES[2].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={GALLERY_IMAGES[2].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm font-serif italic">{GALLERY_IMAGES[2].title}</span>
                </div>
              </div>
            </div>

            {/* Sub-col 2 */}
            <div className="flex flex-col gap-6">
              {/* Editorial Captions */}
              <div className="py-6 px-4 flex flex-col gap-3 font-sans text-stone-900 select-none">
                <div className="flex items-center text-sm md:text-[15px] font-light tracking-wide text-[#1F1D1A]">
                  <span className="mr-2 text-stone-500 font-serif italic text-base">↗</span>
                  <span>Silent stories.</span>
                </div>
                <div className="flex items-center text-sm md:text-[15px] font-light tracking-wide text-[#1F1D1A]">
                  <span className="mr-2 text-stone-500 font-serif italic text-base">↗</span>
                  <span>Honest frames.</span>
                </div>
                <div className="flex items-center text-sm md:text-[15px] font-light tracking-wide text-[#1F1D1A]">
                  <span className="mr-2 text-stone-500 font-serif italic text-base">↗</span>
                  <span>Still truth.</span>
                </div>
                <div className="flex items-center text-sm md:text-[15px] font-light tracking-wide text-[#1F1D1A]">
                  <span className="mr-2 text-stone-500 font-serif italic text-base">↗</span>
                  <span>Quiet depth.</span>
                </div>
              </div>

              {/* Photo 4: asset_11.png */}
              <div
                onClick={() => setSelectedPhoto(GALLERY_IMAGES[3])}
                className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 group cursor-pointer relative"
              >
                <img
                  alt={GALLERY_IMAGES[3].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={GALLERY_IMAGES[3].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm font-serif italic">{GALLERY_IMAGES[3].title}</span>
                </div>
              </div>
            </div>

            {/* Sub-col 3 */}
            <div className="flex flex-col gap-6">
              {/* Photo 5: asset_12.png */}
              <div
                onClick={() => setSelectedPhoto(GALLERY_IMAGES[4])}
                className="w-full h-80 sm:h-[400px] rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 group cursor-pointer relative"
              >
                <img
                  alt={GALLERY_IMAGES[4].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={GALLERY_IMAGES[4].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm font-serif italic">{GALLERY_IMAGES[4].title}</span>
                </div>
              </div>

              {/* Photo 6: asset_13.png */}
              <div
                onClick={() => setSelectedPhoto(GALLERY_IMAGES[5])}
                className="w-full h-52 sm:h-56 rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 group cursor-pointer relative"
              >
                <img
                  alt={GALLERY_IMAGES[5].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={GALLERY_IMAGES[5].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-sm font-serif italic">{GALLERY_IMAGES[5].title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center text-lg transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[75vh] w-auto object-contain"
            />
            <div className="p-4 text-center w-full bg-stone-900">
              <h3 className="font-serif text-xl text-stone-200">{selectedPhoto.title}</h3>
              <p className="text-xs text-stone-400 font-sans mt-1">{selectedPhoto.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
