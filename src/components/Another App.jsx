import React from 'react';

export default function SpaceHeroSection() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Animated stars background */}
            <div className="absolute inset-0">
                {/* Large stars */}
                <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-16 right-16 sm:top-32 sm:right-32 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-32 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-10 sm:bottom-40 sm:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-8 sm:bottom-60 sm:left-16 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-1/4 sm:top-64 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-pulse"></div>

                {/* Small stars */}
                <div className="absolute top-12 left-1/3 sm:top-24 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
                <div className="absolute top-20 right-20 sm:top-40 sm:right-40 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
                <div className="absolute top-40 left-12 sm:top-72 sm:left-24 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
                <div className="absolute bottom-16 right-1/3 sm:bottom-32 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
                <div className="absolute bottom-24 left-1/3 sm:bottom-48 sm:left-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
                <div className="absolute top-28 right-24 sm:top-52 sm:right-48 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
                <div className="absolute top-44 left-20 sm:top-80 sm:left-40 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>
                <div className="absolute bottom-12 right-12 sm:bottom-24 sm:right-24 w-0.5 h-0.5 bg-white rounded-full opacity-70"></div>

                {/* Additional scattered stars */}
                <div className="absolute top-8 right-8 sm:top-16 sm:right-16 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-50"></div>
                <div className="absolute top-20 left-24 sm:top-36 sm:left-48 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
                <div className="absolute top-28 right-28 sm:top-56 sm:right-56 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-40"></div>
                <div className="absolute bottom-20 left-16 sm:bottom-36 sm:left-32 w-0.5 h-0.5 bg-white rounded-full opacity-80"></div>
                <div className="absolute bottom-28 right-16 sm:bottom-52 sm:right-32 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-60"></div>
                <div className="absolute top-24 left-28 sm:top-44 sm:left-56 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-gray-900/20"></div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                {/* Main heading */}
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                    You Don't Need Another App.
                    <br />
                    <span className="text-white">You Need A System.</span>
                </h1>

                {/* Subheading */}
                <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto">
                    Let Us Architect The Platform Your Business Was Meant To Run On —
                    <br className="hidden sm:block" />
                    And Automate What Others Still Chase Manually.
                </p>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    Request Systems Engineering Audit
                </button>
            </div>
        </div>
    );
}
