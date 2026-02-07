import React from 'react';
import bgImage from '../assets/images/Background (2).png';

export default function DigitalEvolutionHero() {
  return (
    <div className="flex items-start bg-[#000010] justify-center p-2 sm:p-4 md:p-4">
      <div className="relative w-full max-w-4xl h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0"
           style={{ backgroundImage: `url(${bgImage})` }}>
          <img 
            src={bgImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
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
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 md:h-32 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}