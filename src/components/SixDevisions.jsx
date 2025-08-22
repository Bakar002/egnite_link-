import React from 'react';
import c1 from '../assets/images/c1.png';
import c4 from '../assets/images/c4.png';
import c5 from '../assets/images/c5.png';

const SixDivisionsComponent = ({ 
  data = {
    mainTitle: "Six Divisions. One Growth Engine",
    subtitle: "It doesn't stop at 'Opportunity' - that is questions. It's a technology of interconnected - components working holistically at performance-focused tasks, giving AI agency, clarity and leadership across all domains.",
    cards: [
      {
        id: 1,
        image: c1,
        title: "Growth Methods™",
        description: "Cultivating deep, meaningful relationships between companies through our research-backed products and services across multiple channels and locations."
      },
      {
        id: 2,
        title: "Publicized Systems™",
        description: "Through machine automation developed for cross-platform content distribution, we create sustainable, repeatable outcomes."
      },
      {
        id: 3,
        title: "AI Workforce™",
        description: "Developing systems of shared AI trust between you and your customers, connecting them through structured feedback loops."
      },
      {
        id: 4,
        image:c4,
        title: "AI Influences™",
        description: "We offer customer-facing AI capabilities that build trust through performance measurement, competitive analytics, and operational oversight."
      },
      {
        id: 5,
        image: c5,
        title: "Intelligence Systems™",
        description: "Analytics that inform decision-making through comprehensive data intelligence, providing insights that drive strategic advantages."
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop",
        title: "Systems Engineering™",
        description: "Built to understand your infrastructure and deliver efficient solutions that scale with your growth and operational requirements."
      }
    ]
  }
}) => {
  return (
    <div className="min-h-screen  via-slate-800 to-slate-900 py-16 px-8" style={{backgroundColor:'#000000'}}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {data.mainTitle}
          </h1>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            {data.subtitle}
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, index) => (
            <div key={card.id} className="group relative">
              {/* Card Container */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 space-y-4">
                  
                  {/* Image Section */}
                  <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50">
                    {/* Image with overlay */}
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    
                    {/* Icon/Visual Element based on card type */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30 flex items-center justify-center">
                      {index === 0 && (
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      )}
                      {index === 5 && (
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="space-y-3">
                    <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="pt-2">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default SixDivisionsComponent;