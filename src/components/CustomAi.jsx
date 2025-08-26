import React from 'react';
import imgbg from '../assets/images/Rectangle 25.png';
const CustomAIProfessionals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-screen">

          {/* Left Column - Content */}
          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-16">
            <div className="space-y-6 sm:space-y-8 max-w-lg text-center lg:text-left">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Custom AI
                  <br />
                  <span className="text-white">Professionals</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 leading-relaxed">
                  Tailored Intelligence. Built for Your Needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Background Image with Card Overlay */}
          <div className="relative min-h-[60vh] lg:min-h-screen">
            {/* Background Tech Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-blue-900/30">
              {/* Circuit board pattern overlay */}
              

              {/* Floating particles */}
              <div className='pt-30 absolute inset-0 overflow-hidden'>
              <img src={imgbg} alt="" />
            </div>
            </div>

            {/* Card Overlay */}
            <div className="absolute inset-0 flex items-center justify-start p-4  sm:p-6 md:p-8">
              <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl relative z-10">
                {/* Modal Header */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    AI has evolved. It's not enough — we need talent, individualized
                    AI professionals, each with their own unique expertise.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Transform your business operations",
                    "Scale your team instantly",
                    "Deploy AI-first solutions faster",
                    "Achieve next-level productivity",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200 text-xs sm:text-sm md:text-base">{text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                  <span className="text-xs sm:text-sm md:text-base">Explore Talent Custom AI Development</span>
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
