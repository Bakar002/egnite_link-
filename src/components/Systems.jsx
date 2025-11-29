import React from 'react';
import robotImage from '../assets/images/8c97de871364e759d21fa152e628f86d97e5937f.png'; // Replace with your 3D robot image path


export default function FuturisticHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-cyan-900/5"></div>

      {/* Floating particles */}
      <div className="absolute top-20 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-60 right-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-40 right-40 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-50"></div>

      <div className="container mx-auto px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">

          {/* Left side - 3D Robot */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Glow effect */}
            <div className="absolute  inset-0 bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-2xl scale-150"></div>

            {/* Robot container */}
            <img src={robotImage} alt="" width={400} height={100} className=' scale-x-[-1] absolute -left-10  -top-17' />

          </div>

          {/* Right side - Content */}
          <div className="text-left space-y-8 lg:pl-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-sans">
                Systems Are Not Smart Until They{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Learn.
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Let Us Layer Intelligence Into Your Architecture And Give Your Infrastructure The Ability To Think.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:from-blue-600 hover:to-cyan-600">
                <span className="relative flex items-center justify-center gap-3">
                  <span className="text-xl">→</span>
                  Request Activation Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle geometric background elements */}
      <div className="absolute top-20 right-20 w-80 h-80 opacity-5 pointer-events-none">
        <div className="w-full h-full border border-blue-400 rounded-full"></div>
        <div className="absolute top-8 left-8 w-64 h-64 border border-cyan-400 rounded-full"></div>
        <div className="absolute top-16 left-16 w-48 h-48 border border-blue-300 rounded-full"></div>
      </div>
    </div>
  );
}