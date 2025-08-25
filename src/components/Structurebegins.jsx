import React from 'react';

const DivisionRoleDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center py-8 sm:py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-0">
              Role of the Division
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-2 lg:px-0">
              Unlike tools, apps, or templates — this division builds purpose-engineered infrastructure:
            </p>
          </div>

          {/* Right side - Cards grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-2 px-3 sm:px-0">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-5 lg:p-6 border border-gray-700 w-full">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-base sm:text-lg mb-1 leading-tight">Inaccessible behind</div>
                  <div className="text-gray-400 text-sm sm:text-base">vendor lock-in</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-700">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-base sm:text-lg mb-1">Inaccessible behind</div>
                  <div className="text-gray-400 text-sm sm:text-base">vendor lock-in</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-700">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-base sm:text-lg mb-1">Inaccessible behind</div>
                  <div className="text-gray-400 text-sm sm:text-base">vendor lock-in</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-5 lg:p-6 border border-gray-700">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-base sm:text-lg mb-1">Inaccessible behind</div>
                  <div className="text-gray-400 text-sm sm:text-base">vendor lock-in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionRoleDesign;