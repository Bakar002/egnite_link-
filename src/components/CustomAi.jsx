import React from 'react';
import bg from '../assets/images/bg.png';

export default function CustomAIProfessionals() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div  
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      
      {/* Floating Icon - hidden on small screens */}
      <div className="hidden md:block absolute bottom-1/3 right-1/3 bg-blue-500/20 rounded-lg p-3 backdrop-blur-sm border border-blue-400/30">
        <div className="w-12 h-12">
          <div className="w-full h-8 border-2 border-blue-400/60 rounded-t-lg"></div>
          <div className="flex gap-1 mt-1">
            <div className="flex-1 h-2 bg-blue-400/40 rounded"></div>
            <div className="flex-1 h-2 bg-blue-400/40 rounded"></div>
            <div className="flex-1 h-2 bg-blue-400/40 rounded"></div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 sm:px-10 md:px-40 max-w-7xl md:-mx-25 py-12 md:py-0 gap-8 md:gap-0">

        {/* Left Side - Text Content */}
        <div className="text-white lg:mt-30 max-w-md text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Custom AI<br />Professionals
          </h1>
          <p className="text-blue-200 text-base sm:text-lg">
            Tailored Intelligence. Built for Your Model.
          </p>
        </div>

        {/* Right Side - Card */}
        <div className="bg-[linear-gradient(167.89deg,#262628_25.18%,#4B4B4D_90.45%)] backdrop-blur-xl rounded-2xl p-6 sm:p-8 w-full max-w-md border border-slate-700/50 shadow-2xl lg:mt-30 md:mt-12">
          <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            When product is not enough — we architect a dedicated AI Professional to function within your unique operational model.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-xl">★</span>
              <span className="text-gray-200 text-xs sm:text-sm">Trained on your documents</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-xl">★</span>
              <span className="text-gray-200 text-xs sm:text-sm">Instructed in your positioning</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-xl">★</span>
              <span className="text-gray-200 text-xs sm:text-sm">Aligned to your decision framework</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-xl">★</span>
              <span className="text-gray-200 text-xs sm:text-sm">Secured within your AI Workspace™</span>
            </div>
          </div>
          <a href="#contact-section">
          <button className="w-full sm:w-auto bg-[linear-gradient(360.19deg,#05BDF1_28.07%,#01375F_81.2%)] hover:bg-cyan-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-[91.6854px] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 text-sm sm:text-base">
            Inquire About Custom AI Deployment
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}