import React from 'react';
import Arrow from '../assets/images/Arrow.png';
import aas from '../assets/images/Vector.png';

const IgniteLinkComponent = ({
  data = {
    title: "Why E-Ignite Link AI Systems™ Exists",
    description: "Energy matters, and so does trust.",
    fullDescription: "Offering systems and solutions for businesses – designers to implementation. You'll be one-on-one with our team to walk through your vision and see how we can build it together.",
    buttonText: "Submit and Join Waitlist Today",
    cards: [
      {
        id: 1,
        icon: "🎯",
        title: "Positioning Statement",
        description: "E-Gnite Link AI Systems™ engineers permanent growth infrastructure — powered by intelligent automation and liberated from platforms, paid traffic, and media volatility."
      },
      {
        id: 2,
        icon: "📊",
        title: "Philosophy Statement",
        description: "Modern business infrastructure must operate autonomously — without relying on human  bandwidth, ad platforms, content cycles, or unpredictable algorithms."
      }
    ]
  }
}) => {
  return (
    <div className=" bg-black flex items-center justify-center p-2 sm:p-4 md:p-8 relative overflow-hidden pt-5 sm:pt-10 md:pt-16 pb-10 sm:pb-16 md:pb-24">

      {/* Floating Particles */}
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-2 h-2 bg-cyan-400 opacity-60 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-1 h-1 bg-blue-400 opacity-60 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-300 opacity-60 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-300 opacity-40 rounded-full animate-pulse delay-300"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">

          {/* LEFT COLUMN - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left px-2 sm:px-0">

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                {data.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-400 font-medium">
                {data.description}
              </p>
            </div>

            {/* Description Text */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {data.fullDescription}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-2 sm:gap-3 bg-[linear-gradient(339.19deg,#05BDF1_28.07%,#01375F_81.2%)] hover:from-cyan-400 hover:via-cyan-500 hover:to-blue-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95 w-full sm:w-auto">
                <span className="text-center flex-1 sm:flex-none">{data.buttonText}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>

                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/50 to-blue-600/50 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Cards with Overflow Effect */}
          <div className="relative overflow-hidden px-2 sm:px-0">
            <div className="flex gap-3 sm:gap-4">
              {/* First Card - Fully Visible */}
              <div className="group relative transform hover:scale-105 transition-all duration-500 w-64 sm:w-72 md:w-80 flex-shrink-0">
                <div className="relative bg-[radial-gradient(42.64%_44.32%_at_50%_0%,_rgba(57,143,255,0.4)_0%,_rgba(57,143,255,0)_98.07%)]  backdrop-blur-lg border border-slate-700/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-slate-800/80 hover:border-slate-600/80 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden h-full">

                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 sm:space-y-4">

                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl  flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <img src={Arrow} alt="" className="h-auto w-15" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {data.cards[0].title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {data.cards[0].description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-2 right-2 sm:left-4 sm:right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                </div>
              </div>

              {/* Second Card - Half Hidden (Partially Visible) */}
              <div className="group relative transform hover:scale-105 transition-all duration-500 w-64 sm:w-72 md:w-80 flex-shrink-0">
                <div className="relative bg-[radial-gradient(42.64%_44.32%_at_50%_0%,_rgba(57,143,255,0.4)_0%,_rgba(57,143,255,0)_98.07%)]  backdrop-blur-lg border border-slate-700/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-slate-800/80 hover:border-slate-600/80 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden h-full">

                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 sm:space-y-4">

                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <img src={aas} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {data.cards[1].title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {data.cards[1].description}
                      </p>
                    </div>

                  </div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-2 right-2 sm:left-4 sm:right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IgniteLinkComponent;