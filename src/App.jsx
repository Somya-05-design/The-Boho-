import React from 'react';
import HeroSection from './components/HeroSection';
import HeritageSection from './components/HeritageSection';
import FeaturedServices from './components/FeaturedServices';
import ExperienceOffers from './components/ExperienceOffers';
import EditorialGallery from './components/EditorialGallery';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToReserve = () => {
    const el = document.getElementById('reserve-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans selection:bg-[#cf9f48] selection:text-white">
      {/* 1. Hero & Top Navigation Section */}
      <HeroSection onOpenReserve={scrollToReserve} />

      {/* 2. Heritage & Bohemian Living Elegance Section */}
      <HeritageSection />

      {/* 3. Featured Services Carousel */}
      <FeaturedServices onOpenReserve={scrollToReserve} />

      {/* 4. The Experience Offers Section */}
      <ExperienceOffers onSelectOffer={scrollToReserve} />

      {/* 5. Noir Editorial Gallery */}
      <EditorialGallery />

      {/* 6. Reservation & Contact Aerial Section */}
      <ReservationSection />

      {/* 7. Luxury Resort Footer */}
      <Footer />
    </div>
  );
}
