import React from 'react';
import mainbg from "../assets/images/Frame 2147228679.png";
import righthero from "../assets/images/aion righthero.png";
export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={mainbg}
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-transparent to-transparent"></div>
      </div>



      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 xl:px-24 py-12 lg:py-0 min-h-screen">

        {/* Left Content */}
        <div className="w-full mt-9 lg:w-1/2 text-white space-y-6 mb-12 lg:mb-0 lg:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            AiON Faces™
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            The Intelligent Face of<br />
            Your Brand.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg leading-relaxed">
            AiON Faces™ by E-Gnite deploys intelligent, camera-ready AI personalities that articulate, represent, and deliver your message — without fatigue, hesitation, or compromise. No creators.
          </p>

          <button className="group flex items-center gap-3 bg-[#00b8d4] hover:bg-[#00a3bf] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full text-base lg:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
            Request AiON Consultation
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">

            {/* AI Face Image */}
            <div className="relative mt-30">
              <img
                src={righthero}
                alt="AI Face"
                className="relative z-10 w-full h-auto object-contain"
              />

              {/* Orange Circle Icon (Top Right of Face) */}
              <div className="absolute top-[30%] right-[25%] w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}