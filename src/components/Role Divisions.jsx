import React from 'react';

const DivisionRoleDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Role of the Division
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              Unlike tools, apps, or templates — this division builds purpose-engineered infrastructure:
            </p>
          </div>

          {/* Right side - Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-lg mb-1">Inaccessible behind</div>
                  <div className="text-gray-400 text-base">vendor lock-in</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-lg mb-1">Inaccessible behind</div>
                  <div className="text-gray-400 text-base">vendor lock-in</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-lg mb-1">Inaccessible behind</div>
                  <div className="text-gray-400 text-base">vendor lock-in</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-lg mb-1">Inaccessible behind</div>
                  <div className="text-gray-400 text-base">vendor lock-in</div>
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
