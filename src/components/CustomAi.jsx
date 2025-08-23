import React from 'react';

const CustomAIProfessionals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-screen">
          
          {/* Left Column - Content */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="space-y-8 max-w-lg">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Custom AI
                  <br />
                  <span className="text-white">Professionals</span>
                </h1>
                <p className="text-xl text-gray-300 mt-6 leading-relaxed">
                  Tailored Intelligence. Built for Your Needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Background Image with Card Overlay */}
          <div className="relative min-h-screen">
            {/* Background Tech Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-blue-900/30">
              {/* Circuit board pattern overlay */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full object-cover" viewBox="0 0 400 600" fill="none">
                  {/* Complex tech circuit pattern */}
                  <defs>
                    <pattern id="techGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      {/* Main grid lines */}
                      <path d="M0 15h60M0 45h60M15 0v60M45 0v60" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6"/>
                      {/* Connection points */}
                      <circle cx="15" cy="15" r="2" fill="#60a5fa" opacity="0.8"/>
                      <circle cx="45" cy="15" r="2" fill="#60a5fa" opacity="0.8"/>
                      <circle cx="15" cy="45" r="2" fill="#60a5fa" opacity="0.8"/>
                      <circle cx="45" cy="45" r="2" fill="#60a5fa" opacity="0.8"/>
                      {/* Diagonal connections */}
                      <path d="M15 15L45 45M45 15L15 45" stroke="#3b82f6" strokeWidth="0.3" opacity="0.4"/>
                    </pattern>
                  </defs>
                  <rect width="400" height="600" fill="url(#techGrid)"/>
                  
                  {/* Additional tech elements */}
                  <g opacity="0.4">
                    <circle cx="100" cy="150" r="30" fill="none" stroke="#60a5fa" strokeWidth="1"/>
                    <circle cx="300" cy="300" r="40" fill="none" stroke="#3b82f6" strokeWidth="1"/>
                    <circle cx="150" cy="450" r="25" fill="none" stroke="#60a5fa" strokeWidth="1"/>
                    
                    {/* Connecting lines */}
                    <path d="M130 150L270 300M180 450L270 340" stroke="#3b82f6" strokeWidth="1" opacity="0.6"/>
                  </g>
                </svg>
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0">
                <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-60 left-2/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="absolute top-80 right-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Card Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 w-full max-w-sm shadow-2xl relative z-10">
                {/* Modal Header */}
                <div className="mb-6">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    AI has evolved. It's not enough — we need talent, individualized 
                    AI professionals, each with their own unique expertise.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm">Transform your business operations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm">Scale your team instantly</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm">Deploy AI-first solutions faster</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm">Achieve next-level productivity</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                  <span className="text-sm">Explore Talent Custom AI Development</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional background effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default CustomAIProfessionals;