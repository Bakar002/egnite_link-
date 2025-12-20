import React from 'react'
import bg from '../assets/images/bgbegin.png'

const Begin = ({ title, description, buttonText }) => {
  return (
    <div 
      className="relative w-full bg-[#03060f] h-[60vh] pt-3 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className=" z-10 max-w-2xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {title}
        </h2>

        <p className="text-sm md:text-base text-gray-300 mb-6">
          {description}
        </p>
        <a href="#contact-section">
          <button className="bg-[linear-gradient(339.19deg,#05BDF1_28.07%,#01375F_81.2%)] text-white px-7 py-4 rounded-full font-medium transition">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  )
}

export default Begin
