import React from 'react';

export default function InfluenceAtScale() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-6xl w-full relative">
        {/* Background gradient effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top left blue glow */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          {/* Bottom right purple glow */}
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"></div>
          {/* Center subtle glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main content */}
        <div className="relative text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Influence at Scale.
          </h1>
          
          {/* Subheading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            Delivered With Precision.
          </h2>
          
          {/* Description text */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Secure digital currency solutions, trusted worldwide and 
            <br className="" />
            delivering value to millions of users. Your digital future starts here.
          </p>
          
          {/* CTA Button */}
          <a href="#contact-section">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            Start your digital journey today
          </button>
          </a>
        </div>

        {/* Decorative elements */}
        
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-purple-300 rounded-full opacity-30 animate-pulse delay-700"></div>
        
        {/* Grid pattern overlay */}
       
        </div>
      </div>
  );
}