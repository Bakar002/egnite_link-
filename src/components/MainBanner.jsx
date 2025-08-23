import React from "react";

export default function MainBanner({ heading, subHeading, buttonText, backgroundImage }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#0000009d] via-[#0500265d] to-[#0000009d] text-white overflow-hidden">
      {/* Hero Content */}
      <main className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          {heading}
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-sm sm:max-w-2xl lg:max-w-3xl px-2 sm:px-0">{subHeading}</p>

        {/* CTA Button */}
        <a
          href="#"
          className="mt-6 sm:mt-8 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:opacity-90 transition"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </main>

      {/* Background Overlay (illustration placeholder) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="Background Illustration"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
    </div>
  );
}