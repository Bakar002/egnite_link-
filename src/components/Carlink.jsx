import React from "react";
import carlinkBg from "../assets/images/Frame 1707480369.png";
export default function CarlinkHero() {
  return (
    <div className="w-full  bg-[#020304] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#050607] rounded-3xl p-10 shadow-2xl relative overflow-hidden border border-white/10">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-cyan-500/20 blur-3xl" />

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url(carlinkBg)] bg-cover" />

        <div className="relative z-10 text-center space-y-5">
          <h1 className="text-white text-2xl md:text-3xl font-semibold leading-snug">
            CARLink Core Systems™ — The Automotive Logic Division of
            <br /> E-Gnite Link AI Systems™
          </h1>

          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Where marketing, acquisition, and operations converge into one intelligent
            system — creating a new generation of AI-powered dealerships built for
            enduring digital leadership.
          </p>
          <a href="#contact-section">
            <button className="mt-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm md:text-base px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
              Request CARLink Core Systems™ Strategy Session
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}