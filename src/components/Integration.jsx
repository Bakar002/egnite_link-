import React from 'react';

export default function EGniteIntegration() {
  return (
    <div className="bg-black flex items-center justify-center ">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-white text-4xl font-semibold text-center mb-10">
          Integration with E-Gnite Link AI Systems™
        </h1>

        {/* Main Card */}
        <div className=" backdrop-blur rounded-2xl border border-gray-700/50 p-10 mb-16"
          style={{
            background: "linear-gradient(148.43deg, #262628 29.96%, #4B4B4D 81.02%)"
          }}>
          <div className="grid grid-cols-[1fr_80px_1fr] gap-8 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-white font-semibold text-lg mb-6">E-Gnite Doctrine</h2>
              <div className="space-y-8">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Systems must operate independently.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Intelligence must replace instruction.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Infrastructure must outline strategy.
                </p>
              </div>
            </div>

            {/* Middle Column - Arrows */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {[...Array(3)].map((_, i) => (
                <svg key={i} width="48" height="16" viewBox="0 0 48 16" fill="none">
                  <path
                    d="M0 8H46M46 8L38 1M46 8L38 15"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-white font-semibold text-lg mb-6">CARLink Core Application</h2>
              <div className="space-y-8">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Each subsystem is self-governing with autonomous logic.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Navies commands are replaced by real-time reasoning and endless learning.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Systems predefine operational capacity-based campaigns, flawans, and short-term planning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
         <h1 className="text-4xl md:text-4xl font-bold  text-white text-center ">
          Business Impact
        </h1>
      </div>
    </div>
  );
}
