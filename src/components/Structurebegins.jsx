import React from 'react';

const SmartAdvisorsComponent = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Structure Begins With
                <br />
                <span className="text-white">Smart Advisors</span>
              </h1>
            </div>
            
            <div>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-md">
                A Single AI Professional can replace weeks of back-and-forth —
                with structured, scenario-based logic at your fingertips
              </p>
            </div>
            
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                Request Consultation
              </button>
            </div>
          </div>
          
          {/* Right Column - Decorative Design */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Central flower design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Flower petals */}
                  <div className="w-32 h-32 relative">
                    {/* Top petal */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-teal-400 to-transparent rounded-full opacity-20"></div>
                    {/* Right petal */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-12 bg-gradient-to-l from-teal-400 to-transparent rounded-full opacity-20"></div>
                    {/* Bottom petal */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-t from-teal-400 to-transparent rounded-full opacity-20"></div>
                    {/* Left petal */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-12 bg-gradient-to-r from-teal-400 to-transparent rounded-full opacity-20"></div>
                    
                    {/* Center circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating dots around the flower */}
              {/* Top right - Orange */}
              <div className="absolute top-8 right-12 w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>
              
              {/* Top right corner - Red */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
              
              {/* Right - Pink */}
              <div className="absolute right-0 top-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-lg"></div>
              
              {/* Bottom right - Purple */}
              <div className="absolute bottom-12 right-8 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
              
              {/* Bottom - Yellow */}
              <div className="absolute bottom-4 right-1/3 w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
              
              {/* Left - Blue */}
              <div className="absolute left-8 top-1/3 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
              
              {/* Top left - Cyan */}
              <div className="absolute top-12 left-12 w-4 h-4 bg-cyan-500 rounded-full shadow-lg"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-16 right-20 w-3 h-3 bg-indigo-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-16 left-16 w-3 h-3 bg-green-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAdvisorsComponent;