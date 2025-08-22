import React from 'react';
import main1 from '../assets/images/main1.png';
import main2 from '../assets/images/main2.png';
import main3 from '../assets/images/main3.png';

const ModernFeatureComponent = ({ 
  data = [
    {
      id: 1,
      mainImage: main1,
      smallImage1: main2,
      smallImage2:main3,
      title: "No ads. No content loops.",
      subtitle: "No missing traffic", 
      description: "Fast responses in well-structured growth programs - no pop-ups, no ads, no content loops.",
      subDescription: "A direct link to business-focused content management and dedicated technical support.",
      buttonText: "Advanced Code Architecture"
    }
  ]
}) => {
  const item = data[0];
  
  return (
    <div className="min-h-screen    flex items-center justify-center p-8" style={{backgroundColor:'#000000'}}>
      <div className="max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="relative">
          {/* Background Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96  rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full filter blur-3xl"></div>
          
          {/* Main Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN - Images */}
            <div className="relative h-[500px] ">
              
              {/* Main Central Image with Glow */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96">
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-2xl filter blur-xl opacity-60 scale-110"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-blue-400/30 bg-slate-800/50 backdrop-blur-sm">
                  <img 
                    src={item?.mainImage} 
                    alt="Main feature"
                    className="w-full h-full object-cover opacity-90"
                  />
                  
                  {/* Overlay with Code-like Interface */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20">
                    {/* Code Lines Simulation */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    
                    {/* Bottom Interface */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                      <div className="h-1 bg-blue-400/60 rounded w-3/4"></div>
                      <div className="h-1 bg-blue-400/40 rounded w-1/2"></div>
                      <div className="h-1 bg-blue-400/30 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Top Left Small Image */}
              <div className="absolute top-8 left-8 w-24 h-20 rounded-lg overflow-hidden border border-blue-400/40 bg-slate-800/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src={item?.smallImage1} 
                  alt="Feature 1"
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Small glow indicator */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
              </div>
              
              {/* Bottom Right Small Image */}
              <div className="absolute bottom-8 right-8 w-24 h-20 rounded-lg overflow-hidden border border-blue-400/40 bg-slate-800/50 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
                <img 
                  src={item?.smallImage2} 
                  alt="Feature 2" 
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Small glow indicator */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            </div>
            
            {/* RIGHT COLUMN - Content */}
            <div className="space-y-6">
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {item?.title || "No ads. No content loops."}
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-400">
                  {item?.subtitle || "No missing traffic"}
                </h2>
              </div>
              
              {/* Description Text */}
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed">
                  {item?.description || "Fast responses in well-structured growth programs - no pop-ups, no ads, no content loops."}
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item?.subDescription || "A direct link to business-focused content management and dedicated technical support."}
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                  <span>{item?.buttonText || "Advanced Code Architecture"}</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default ModernFeatureComponent;