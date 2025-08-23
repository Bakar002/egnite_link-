import React, { useState } from 'react';

export default function SimpleImageContainer() {
  // Yahan aap apna image URL set kar sakte hain
  const [imageUrl, setImageUrl] = useState('src/assets/images/Div [embed-automation-background] (1).png');

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Main Image Container */}
      <div className="w-full max-w-6xl h-96 bg-gradient-to-br from-gray-800 via-blue-900 to-teal-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
        <img
          src={imageUrl}
          alt="Growth Method Design"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Agar image load nahi hoti to fallback design dikhayega
            e.target.style.display = 'none';
          }}
        />

        {/* Fallback content agar image load nahi ho */}
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 bg-opacity-50 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xl">Your Image Here</p>
          </div>
        </div>
      </div>
    </div>
  );
}