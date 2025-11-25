import React from 'react';

export default function BusinessLogic() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
          BizLink Core Systems™ — The Business Logic Division of E-Gnite Link AI Systems™.
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
          Where marketing, operations, and finance merge into one living, intelligent system. This is not digital transformation. This is Digital Evolution™.
        </p>

        {/* CTA Button */}
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50 text-sm sm:text-base">
          Begin Your Digital Evolution
        </button>

        {/* Glow effect behind button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-cyan-500/5 to-transparent" />
    </div>
  );
}
