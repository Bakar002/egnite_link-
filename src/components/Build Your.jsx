import React from 'react';

export default function WorkforceHero() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern/Grid */}
            <div className="absolute inset-0 bg-black opacity-90"></div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight whitespace-nowrap">
                    BUILD YOUR WORKFORCE
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
                    Every System Needs Operators. These Ones Don't Sleep.
                </p>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                    Request AI Workforce Consultation
                </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-300 rounded-full opacity-60 animate-pulse delay-700"></div>
        </div>
    );
}