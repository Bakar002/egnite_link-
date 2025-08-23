import React from 'react';
import aa from '../assets/images/aa.png';
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
        description: "Strategic market positioning that defines your unique value proposition and competitive advantage in the marketplace."
      },
      {
        id: 2,
        icon: "📊", 
        title: "Philosophy Statement",
        description: "Core principles and methodologies that guide our approach to AI system development and implementation."
      }
    ]
  }
}) => {
  return (
    <div className="min-h-screen bg-black  flex items-center justify-center p-4 md:p-8 relative overflow-hidden xm: pt-5">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500 opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-cyan-500 opacity-5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 opacity-60 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-400 opacity-60 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-300 opacity-60 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-300 opacity-40 rounded-full animate-pulse delay-300"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-medium">
                {data.description}
              </p>
            </div>
            
            {/* Description Text */}
            <div className="space-y-4">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {data.fullDescription}
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-3 bg-[linear-gradient(339.19deg,#05BDF1_28.07%,#01375F_81.2%)] hover:from-cyan-400 hover:via-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95">
                <span>{data.buttonText}</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/50 to-blue-600/50 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>
          </div>
          
          {/* RIGHT COLUMN - Cards with Overflow Effect */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4">
              {/* First Card - Fully Visible */}
              <div className="group relative transform hover:scale-105 transition-all duration-500 w-80 flex-shrink-0">
                <div className="relative bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600/80 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden h-full">
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <img src={aa} alt="" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {data.cards[0].title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {data.cards[0].description}
                      </p>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <div className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300 mt-auto">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                </div>
              </div>

              {/* Second Card - Half Hidden (Partially Visible) */}
              <div className="group relative transform hover:scale-105 transition-all duration-500 w-80 flex-shrink-0">
                <div className="relative bg-slate-900/70 backdrop-blur-lg border border-slate-700/60 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600/80 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden h-full">
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                     <img src={aas} alt="" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {data.cards[1].title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {data.cards[1].description}
                      </p>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <div className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300 mt-auto">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
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