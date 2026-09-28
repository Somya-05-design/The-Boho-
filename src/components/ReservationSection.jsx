import React, { useState } from 'react';

export default function ReservationSection() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus({ state: 'error', message: 'Please enter both your name and email address.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Processing your reservation request...' });
    setTimeout(() => {
      setStatus({
        state: 'success',
        message: `Thank you, ${formData.name}! Your reservation inquiry has been received. Our concierge team will reach out shortly.`
      });
      setFormData({ name: '', email: '' });
    }, 800);
  };

  return (
    <section
      id="reserve-section"
      className="relative w-full min-h-[750px] md:min-h-[850px] flex items-center justify-center py-20 px-4 sm:px-6 md:px-10 overflow-hidden select-none bg-cover bg-center bg-no-repeat"
      data-purpose="reservation-card-section"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3shd56rrtkCCc23hk3XVm7do3ZFMzA3qrsTup5W2Ob56ig7SNZ2KOppwQlJ19rr8GtiZVcBWKq8BG3lcHVQE8ivYz96PDW9TcvH3dKkD9UC6fF0L0yZyC91Ea27stz3UYX27IjC8JrGoi_wKiGIL6pUoaD8zEuUlgisdc1pIVPkgN7goaoS7Js3PPMvUoTTaRfBgXkIEzuaJdrVmZjc6q0w5UZToRVRi3HOXtfFTJJG7VRWK0-6BLpwFuaJDIuYF8rn5d1YKvCxuxbA')`
      }}
    >
      {/* Gentle ambient dark/vignette overlay for readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Central Glassmorphic Floating Reservation Card */}
      <div
        className="relative z-10 w-full max-w-lg md:max-w-xl mx-auto rounded-[36px] p-8 sm:p-12 md:p-14 text-center border border-white/40 shadow-2xl backdrop-blur-xl bg-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 100%)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.35)',
        }}
      >
        {/* Elegant Editorial Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-[46px] text-white font-light tracking-wide leading-tight mb-8 sm:mb-10 drop-shadow-md">
          Experience the <span className="italic font-normal">perfect</span><br />
          <span className="italic">blend of luxury</span>
        </h2>

        {/* Reservation Form Inputs */}
        <form className="flex flex-col gap-3.5 mb-5" onSubmit={handleSubmit}>
          {/* Input: Name */}
          <div className="w-full">
            <input
              aria-label="Your Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Type your name"
              required
              className="w-full py-3.5 px-5 rounded-xl border border-white/40 bg-white/10 placeholder-white/70 text-white text-sm md:text-[15px] font-sans tracking-wide text-center focus:outline-none focus:border-white focus:bg-white/20 transition-all backdrop-blur-sm"
            />
          </div>

          {/* Input: Email */}
          <div className="w-full">
            <input
              aria-label="Your Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              required
              className="w-full py-3.5 px-5 rounded-xl border border-white/40 bg-white/10 placeholder-white/70 text-white text-sm md:text-[15px] font-sans tracking-wide text-center focus:outline-none focus:border-white focus:bg-white/20 transition-all backdrop-blur-sm"
            />
          </div>

          {/* Status Alert */}
          {status.message && (
            <div
              className={`p-3 rounded-xl text-xs sm:text-sm font-sans backdrop-blur-md transition-all ${
                status.state === 'success'
                  ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-400/40'
                  : status.state === 'error'
                  ? 'bg-rose-900/60 text-rose-200 border border-rose-400/40'
                  : 'bg-white/20 text-white border border-white/30'
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Golden Luxury Reserve Now CTA Button */}
          <button
            type="submit"
            disabled={status.state === 'loading'}
            className="w-full mt-1.5 py-4 px-6 rounded-xl bg-gradient-to-b from-[#dfae55] via-[#cf9f48] to-[#be8c37] hover:brightness-105 active:scale-95 shadow-lg shadow-amber-950/20 text-white text-sm md:text-base font-normal tracking-wide transition-all duration-300 font-serif italic cursor-pointer disabled:opacity-75"
          >
            {status.state === 'loading' ? 'Confirming...' : 'Reserve Now'}
          </button>
        </form>

        {/* Privacy & Trust Disclaimer Copy */}
        <p className="text-[11px] sm:text-[12px] text-white/80 font-sans tracking-normal leading-relaxed max-w-sm mx-auto">
          by entering your email, you're agreeing to our privacy policy.<br />
          We promise to keep your personal information safe and secure
        </p>
      </div>
    </section>
  );
}
