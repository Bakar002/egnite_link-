import React from 'react';
import robotImage from '../assets/images/8c97de871364e759d21fa152e628f86d97e5937f.png';

export default function FuturisticHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden flex items-center">
      
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        
        {/* Left - Robot */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 relative">
          {/* Glow effect only for lg */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-2xl scale-150"></div>
          
          <img
            src={robotImage}
            alt="Robot"
            className="w-64 sm:w-80 lg:w-[400px] lg:absolute lg:-left-10 lg:-top-17 scale-x-[-1]"
          />
        </div>

        {/* Right - Text Content */}
        <div className="text-center sm:text-left w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Systems Are Not Smart Until They{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Learn.
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md sm:max-w-lg mx-auto sm:mx-0">
            Let Us Layer Intelligence Into Your Architecture And Give Your Infrastructure The Ability To Think.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center sm:justify-start pt-4 ">
            <button className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-base sm:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:from-blue-600 hover:to-cyan-600">
              <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl">→</span>
                Request Activation Consultation
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative background only for lg */}
      <div className="hidden lg:block absolute top-20 right-20 w-80 h-80 opacity-5 pointer-events-none">
        <div className="w-full h-full border border-blue-400 rounded-full"></div>
        <div className="absolute top-8 left-8 w-64 h-64 border border-cyan-400 rounded-full"></div>
        <div className="absolute top-16 left-16 w-48 h-48 border border-blue-300 rounded-full"></div>
      </div>
    </div>
  );
}
