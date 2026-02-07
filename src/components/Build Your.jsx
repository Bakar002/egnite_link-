import React from 'react';

export default function WorkforceHero() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-90"></div>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
                    BUILD YOUR WORKFORCE
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 font-light tracking-wide px-2">
                    Every System Needs Operators. These Ones Don't Sleep.
                </p>

                {/* CTA Button */}
                <a href="#contact-section">
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                        Request AI Workforce Consultation
                    </button>
                </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 sm:top-20 left-8 sm:left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-24 sm:top-40 right-12 sm:right-32 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 sm:bottom-32 left-10 sm:left-16 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-pulse delay-500"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-8 sm:right-20 w-2 h-2 bg-cyan-300 rounded-full opacity-60 animate-pulse delay-700"></div>
        </div>
    );
}
