import React from 'react';

export default function OutcomesDesign() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{
        background: "linear-gradient(180deg, #000010 0%, #011920 100%)"
      }}
    >
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Outcomes
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            REALTYLink™ converts effort into intelligence — and intelligence into growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 lg:grid-cols-2   /* md & lg untouched */
          gap-3 sm:gap-4 md:gap-3
        ">
          {/* Card 1 */}
          <div className="backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-gray-600/50 hover:scale-[1.06] transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            style={{
              background: "linear-gradient(148.43deg, #262628 29.96%, #4B4B4D 81.02%)"
            }}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-3">+40–70%</div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-md">
              increase in lead velocity
            </div>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-gray-600/50 hover:scale-[1.06] transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            style={{
              background: "linear-gradient(291.02deg, #373737 0%, #000000 98.35%)"
            }}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-3">3×–10×</div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-sm">
              ROI on sales and operations
            </div>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-gray-600/50 hover:scale-[1.06] transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            style={{
              background: "linear-gradient(148.43deg, #262628 29.96%, #4B4B4D 81.02%)"
            }}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-3">+30–50%</div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-sm">
              improvement in conversion rates
            </div>
          </div>

          {/* Card 4 */}
          <div className="backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-gray-600/50 hover:scale-[1.06] transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            style={{
              background: "linear-gradient(148.43deg, #262628 29.96%, #4B4B4D 81.02%)"
            }}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-3">60%</div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-sm">
              reduction in manual administration
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
