import React from "react";

export default function MainBanner({ heading, subHeading, buttonText, backgroundImage }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#0000009d] via-[#0500265d] to-[#0000009d] text-white overflow-hidden">
      {/* Hero Content */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-12 flex-1">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {heading}
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl">{subHeading}</p>

        {/* CTA Button */}
        <a
          href="#"
          className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
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
