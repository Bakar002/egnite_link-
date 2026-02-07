import React from 'react';
import bg from '../assets/images/bg.jpeg';
export default function GrowthHero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Tech Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-black/60"></div>
      </div>

      {/* Animated Network Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Particles/Stars Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(59, 130, 246, 0.8)`
            }}
          ></div>
        ))}
      </div>

      {/* Floating Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center py-20">

        {/* Top Decorative Element */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-5xl">
          <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Is Growth Method™ Right for You?          </span>
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/90 mb-12 max-w-3xl font-light tracking-wide leading-relaxed">
          Let Us Layer Intelligence Into Your Architecture And Give Your Infrastructure The Ability To Think.
        </p>

        {/* CTA Button */}
        <a href="#contact-section">
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white text-sm sm:text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black">
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <span>Request Activation Consultation</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-cyan-400/30 blur-xl"></div>
            </div>
          </button>
        </a>

        {/* Bottom Decorative Element */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Additional Info Cards (Optional) */}

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
    </div>
  );
}