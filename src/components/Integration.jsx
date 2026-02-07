import React from 'react';

export default function EGniteIntegration({
  mainTitle = "Integration with E-Gnite Link AI Systems™",
  leftColumn = {
    title: "E-Gnite Doctrine",
    points: [
      "Systems must operate independently.",
      "Intelligence must replace instruction.",
      "Infrastructure must outline strategy."
    ]
  },
  rightColumn = {
    title: "CARLink Core Application",
    points: [
      "Each subsystem is self-governing with autonomous logic.",
      "Navies commands are replaced by real-time reasoning and endless learning.",
      "Systems predefine operational capacity-based campaigns, flawans, and short-term planning."
    ]
  },
  arrowsCount = 3,
  cardGradient = "linear-gradient(148.43deg, #262628 29.96%, #4B4B4D 81.02%)",
  bottomText,
  containerClass = "bg-black"
}) {
  return (
    <div className={`flex items-center justify-center ${containerClass} py-8`}>
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h1 className="text-white text-3xl sm:text-4xl font-semibold text-center mb-10 leading-snug">
          {mainTitle}
        </h1>

        {/* Main Card */}
        <div
          className="backdrop-blur rounded-2xl border border-gray-700/50 p-6 sm:p-10 mb-16"
          style={{ background: cardGradient }}
        >

          {/* MOBILE RESPONSIVE FIX */}
          <div className="flex flex-col gap-8 md:hidden">

            {/* Left */}
            <div className="text-center px-4 sm:px-6">
              <h2 className="text-white font-semibold text-lg mb-3">
                {leftColumn.title}
              </h2>
              <div className="space-y-2">
                {leftColumn.points.map((p, i) => (
                  <p key={i} className="text-gray-300 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex flex-col items-center space-y-2">
              {[...Array(arrowsCount)].map((_, i) => (
                <svg key={i} width="36" height="12" viewBox="0 0 48 16" fill="none">
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

            {/* Right */}
            <div className="text-center px-4 sm:px-6">
              <h2 className="text-white font-semibold text-lg mb-3">
                {rightColumn.title}
              </h2>
              <div className="space-y-2">
                {rightColumn.points.map((p, i) => (
                  <p key={i} className="text-gray-300 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* DESKTOP (unchanged) */}
          <div className="hidden md:grid grid-cols-[1fr_80px_1fr] gap-8 items-center">

            {/* Left Column */}
            <div>
              <h2 className="text-white font-semibold text-lg mb-6">
                {leftColumn.title}
              </h2>
              <div className="space-y-8">
                {leftColumn.points.map((point, i) => (
                  <p key={i} className="text-gray-300 text-sm leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </div>

            {/* Middle Arrows */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {[...Array(arrowsCount)].map((_, i) => (
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
              <h2 className="text-white font-semibold text-lg mb-6">
                {rightColumn.title}
              </h2>
              <div className="space-y-8">
                {rightColumn.points.map((point, i) => (
                  <p key={i} className="text-gray-300 text-sm leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Text */}
        {bottomText && (
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
            {bottomText}
          </h1>
        )}
      </div>
    </div>
  );
}
