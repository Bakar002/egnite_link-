import React from 'react';
import main1 from '../assets/images/fff copy.jpg';
import main2 from '../assets/images/image 103.png';
import main3 from '../assets/images/2img.png';

const ModernFeatureComponent = ({
  data = [
    {
      id: 1,
      mainImage: main1,
      smallImage1: main2,
      smallImage2: main3,
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
    <div className=" flex items-center justify-center p-4 sm:p-6 lg:p-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Content Container */}
        <div className="relative">


          {/* Main Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* LEFT COLUMN - Images */}
            <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] order-2 lg:order-1">

              {/* Main Central Image with Glow */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 sm:w-72 sm:h-88 lg:w-130 lg:h-100">


                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-blue-400/30 bg-slate-800/50 backdrop-blur-sm">
                  <img
                    src={item?.mainImage}
                    alt="Main feature"
                    className="w-full h-full  opacity-90"
                  />

                  {/* Overlay with Code-like Interface */}
                
                </div>
              </div>

             
         

              {/* Floating Elements */}
              
             
            </div>

            {/* RIGHT COLUMN - Content */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  {item?.title || "No ads. No content loops."}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-400">
                  {item?.subtitle || "No missing traffic"}
                </h2>
              </div>

              {/* Description Text */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed px-2 sm:px-0">
                  {item?.description || "Fast responses in well-structured growth programs - no pop-ups, no ads, no content loops."}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                  {item?.subDescription || "A direct link to business-focused content management and dedicated technical support."}
                </p>
              </div>

              {/* CTA Button */}
              {/* <div className="pt-2 sm:pt-4">
                <button className="group relative inline-flex items-center gap-2 sm:gap-3 bg-[linear-gradient(339.19deg,#05BDF1_28.07%,#01375F_81.2%)] hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                  <span className="whitespace-nowrap">{item?.buttonText || "Advanced Code Architecture"}</span>
              
                </button>
              </div> */}
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 left-12 sm:bottom-20 sm:left-20 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default ModernFeatureComponent;