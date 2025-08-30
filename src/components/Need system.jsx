import React from 'react';
import Need from './Need system';

const Needsystem = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 overflow-hidden">
            {/* Starry Background */}
            <div className="absolute inset-0">
                {/* Generate random stars */}
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full bg-white animate-pulse ${i % 3 === 0 ? 'w-1 h-1' : i % 2 === 0 ? 'w-0.5 h-0.5 opacity-50' : 'w-1.5 h-1.5 bg-blue-200'
                            }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: '3s'
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        You Don't Need a System. You Need a Result.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                        A private consultation to architect the real-world transformation your business requires —<br className="hidden md:block" />
                        and match it to the division(s) that drive it.
                    </p>

                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                        Request Systems Engineering Audit
                    </button>
                </div>
            </div>

            <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }

        .animate-twinkle {
          animation: twinkle 3s infinite;
        }
      `}</style>
        </div>
    );
};

export default Needsystem;