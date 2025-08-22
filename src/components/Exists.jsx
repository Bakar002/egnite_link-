import React from 'react';

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
    <div className="min-h-screen  from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8" style={{ backgroundColor:'#000000'}}>
      <div className="max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="relative">
          {/* Background Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          
          {/* Main Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN - Content */}
            <div className="space-y-6">
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {data.title}
                </h1>
                <p className="text-xl lg:text-2xl text-cyan-400 font-medium">
                  {data.description}
                </p>
              </div>
              
              {/* Description Text */}
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed">
                  {data.fullDescription}
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
                  <span>{data.buttonText}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* RIGHT COLUMN - Cards */}
            <div className="space-y-6">
              {data.cards.map((card, index) => (
                <div key={card.id} className="group relative">
                  {/* Card Container */}
                  <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      
                      {/* Icon Container */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {/* Circular Icon Background */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-400/30 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-cyan-400/60 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-cyan-300"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <h3 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {card.description}
                        </p>
                      </div>
                      
                      {/* Arrow Indicator */}
                      <div className="flex-shrink-0 w-6 h-6 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Bottom glow line */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
              
              {/* Additional Decorative Card */}
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 group hover:border-cyan-500/30 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold text-sm">Ready to Transform?</h4>
                    <p className="text-gray-400 text-xs">Join our AI revolution today</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-300/50 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default IgniteLinkComponent;