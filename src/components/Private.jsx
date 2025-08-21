import React from 'react';
import { Users, Target, TrendingUp, Zap, Globe, User } from 'lucide-react';

export default function GrowthMethodBanner() {
  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 rounded-2xl overflow-hidden p-8 min-h-[400px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
      </div>
      
      {/* Radiating Lines - Left Side */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        {[...Array(12)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="absolute w-32 h-px bg-gradient-to-r from-purple-400/60 to-transparent origin-left"
            style={{
              transform: `rotate(${-45 + (i * 7.5)}deg)`,
              left: '120px',
            }}
          />
        ))}
      </div>
      
      {/* Radiating Lines - Right Side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        {[...Array(12)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="absolute w-32 h-px bg-gradient-to-l from-orange-400/60 to-transparent origin-right"
            style={{
              transform: `rotate(${45 - (i * 7.5)}deg)`,
              right: '120px',
            }}
          />
        ))}
      </div>
      
      {/* Left Side Icons */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 space-y-8">
        <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-600/30">
          <Users className="w-6 h-6 text-purple-300" />
        </div>
        <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-600/30">
          <Target className="w-6 h-6 text-purple-300" />
        </div>
        <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-600/30">
          <TrendingUp className="w-6 h-6 text-purple-300" />
        </div>
      </div>
      
      {/* Right Side Icons */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-8">
        <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-600/30">
          <Zap className="w-6 h-6 text-orange-300" />
        </div>
        <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-600/30">
          <Globe className="w-6 h-6 text-orange-300" />
        </div>
        <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-600/30">
          <User className="w-6 h-6 text-orange-300" />
        </div>
      </div>
      
      {/* Central Hub */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl border border-cyan-400/30">
          <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-sm flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full ml-0.5"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Is Growth Method™ Right for You?
        </h1>
        
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-cyan-400/30">
          Request Private Consultation
        </button>
      </div>
      
      {/* Subtle Animation Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}