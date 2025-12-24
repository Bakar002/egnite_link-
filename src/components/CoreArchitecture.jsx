import React from 'react';

// Sample card data - easily replaceable
const cardData = [
  {
    id: 1,
    title: "AI-Motor™",
    description: "High-performance neural inference engine for on-device predictions.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  },
  {
    id: 2,
    title: "API-Run™",
    description: "Robust, scalable API gateway with observability and rate-limiting.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
  },
  {
    id: 3,
    title: "Advisors™",
    description: "Contextual recommendation layer with plug-and-play policy controls.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    id: 4,
    title: "EdgeLink Core (OFT)",
    description: "Secure edge connectivity, low-latency sync and fault tolerance.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  }
];

const CoreArchitecture = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-16 tracking-wide uppercase text-shadow">
          Core Architecture
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="group relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 
                         rounded-2xl p-8 border border-slate-700/50 shadow-xl
                         hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2
                         transition-all duration-300 ease-out
                         backdrop-blur-sm hover:border-cyan-500/50"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 
                            group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-cyan-500/5 
                            transition-all duration-300 pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Circle */}
                <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 
                              flex items-center justify-center shadow-lg shadow-cyan-500/30
                              group-hover:scale-110 group-hover:shadow-cyan-500/50
                              transition-all duration-300">
                  <svg 
                    className="w-7 h-7 text-white animate-pulse-slow" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d={card.icon} />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              {/* Focus ring for accessibility */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-cyan-500 ring-opacity-0 
                            focus-within:ring-opacity-100 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .text-shadow {
          text-shadow: 0 2px 10px rgba(6, 182, 212, 0.3);
        }
        @media (max-width: 640px) {
          /* Reduce animations on mobile for performance */
          .group:hover {
            transform: translateY(-4px) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CoreArchitecture;