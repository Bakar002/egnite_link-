import React from 'react';

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
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-2xl scale-150"></div>
            
            {/* Robot container */}
            <div className="relative z-10">
              {/* Robot figure */}
              <div className="relative w-80 h-96">
                
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-32 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-t-3xl rounded-b-xl shadow-2xl">
                  {/* Face panel */}
                  <div className="absolute inset-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-2xl rounded-b-lg">
                    {/* Blue glowing eye */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                      <div className="absolute top-1 left-1 w-4 h-4 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full"></div>
                      <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-white rounded-full opacity-80"></div>
                    </div>
                    
                    {/* Facial lines */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-slate-400 rounded"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-slate-400 rounded"></div>
                  </div>
                </div>
                
                {/* Neck */}
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg shadow-lg"></div>
                
                {/* Torso */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-40 h-48 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-2xl shadow-2xl">
                  {/* Chest panel */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-300/50">
                    {/* Central core */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse">
                      <div className="absolute inset-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full"></div>
                    </div>
                    {/* Tech lines */}
                    <div className="absolute top-8 left-4 w-20 h-0.5 bg-slate-400 rounded"></div>
                    <div className="absolute top-10 left-6 w-16 h-0.5 bg-slate-400 rounded"></div>
                    <div className="absolute top-12 left-8 w-12 h-0.5 bg-slate-400 rounded"></div>
                  </div>
                  
                  {/* Side panels */}
                  <div className="absolute top-32 left-2 w-6 h-12 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg"></div>
                  <div className="absolute top-32 right-2 w-6 h-12 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg"></div>
                </div>
                
                {/* Left Shoulder */}
                <div className="absolute top-36 left-8 w-12 h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded-xl shadow-xl transform -rotate-12"></div>
                
                {/* Right Shoulder */}
                <div className="absolute top-36 right-8 w-12 h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded-xl shadow-xl transform rotate-12"></div>
                
                {/* Left Arm */}
                <div className="absolute top-48 left-4 w-8 h-24 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg shadow-lg transform -rotate-6"></div>
                
                {/* Right Arm */}
                <div className="absolute top-48 right-4 w-8 h-24 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg shadow-lg transform rotate-6"></div>
                
                {/* Glowing accents */}
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute top-44 left-12 w-0.5 h-4 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-44 right-12 w-0.5 h-4 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </div>
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