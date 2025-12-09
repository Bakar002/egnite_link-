import React from 'react';
import bgImg from "../assets/images/bgimg.png"; 

export default function GrowthMethodBanner() {
  return (
    <div className="w-full bg-black flex items-center justify-center px-4 py-10">
      
      <div 
        className="w-full bg-[#05B0E070] max-w-5xl rounded-2xl overflow-hidden relative shadow-2xl border border-gray-700"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="relative z-100 flex flex-col items-center justify-center text-center px-4 py-16">

          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Is Growth Method™ Right for You?
          </h2>

          {/* 🔹 Replaced Button with Input + Join Now */}
          <div className="flex items-center mt-5 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-lg overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Your Email Address ..."
              className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />

            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium  hover:scale-105 transition-all">
              Join Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
