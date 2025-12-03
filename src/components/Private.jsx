import React from 'react';
import bgImg from "../assets/images/bgimg.png"; // आपकी BG image

export default function GrowthMethodBanner() {
  return (
    <div className="w-full bg-black flex items-center justify-center px-4 py-10">
      
      <div 
        className="w-full bg-[#05B0E070] max-w-6xl rounded-2xl overflow-hidden relative shadow-2xl border border-gray-700"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Dark Overlay */}

        {/* Content */}
        <div className="relative z-100 flex flex-col items-center justify-center text-center px-4 py-16">

          {/* Heading */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Is Growth Method™ Right for You?
          </h2>

          {/* Button */}
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-all">
            Request Private Consultation
          </button>

        </div>

      </div>
    </div>
  );
}
