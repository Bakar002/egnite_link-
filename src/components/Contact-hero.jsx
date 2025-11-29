import React from 'react';
import bg from '../assets/images/bgimage.png';

export default function ContactUs() {
  return (
    <div className="relative   w-full h-[32vh] flex items-center justify-center "style={{ 
       background: 'linear-gradient(165.76deg, rgba(1, 6, 8, 0.55) 53.41%, rgba(0, 21, 36, 0.55) 174.75%)' 
     }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
      </div>

      {/* Content */}
      <h1 className="relative z-10 text-white text-4xl font-bold tracking-wide">
        Contact Us
      </h1>
    </div>
  );
}
