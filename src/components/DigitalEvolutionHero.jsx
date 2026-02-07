import React from 'react';

export default function DigitalEvolutionHero() {
  return (
    <div className="flex items-start bg-[#000010] justify-center p-2 sm:p-4 md:p-4">
      <div className="relative w-full max-w-4xl h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-black"
          style={{
            backgroundImage: 'linear-gradient(135deg, #001f3f 0%, #0a1929 50%, #000000 100%)',
          }}
        >
          {/* Animated particles effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 sm:w-1 sm:h-1 bg-blue-300 rounded-full animate-pulse delay-75"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-400 rounded-full animate-pulse delay-150"></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 sm:w-1 sm:h-1 bg-cyan-300 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight">
            Begin Your Digital Evolution
            <span className="text-cyan-400 ml-1 sm:ml-2">+</span>
          </h1>

          {/* Description Text */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl sm:max-w-2xl md:max-w-2xl leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-4">
            Schedule A Strategic Session With An E-Gnit® Architect To Map Your Path Through 
            The REALTyLink™ Tiers. Together We Will Design The Infrastructure That Will 
            Sustain Your Real-Estate Enterprise For The Next Decade.
          </p>

          {/* CTA Button */}
          <a href="#contact-section">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base md:text-base">
            Book Your Consultation
          </button>
          </a>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 md:h-32 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
      </div>
    </div>
  );
}
