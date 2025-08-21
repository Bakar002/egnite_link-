import React from "react";

export default function InfoSection({
  title,
  description,
  subDescription,
  buttonText,
  buttonLink,
  image1,
  image2,
}) {
  return (
    <section className="relative bg-gradient-to-br from-black via-[#050026] to-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-gray-300 mb-4">{description}</p>
          <p className="text-gray-400">{subDescription}</p>

          {/* CTA Button */}
          <a
            href={buttonLink}
            className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
          >
            {buttonText}
          </a>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={image1}
            alt="Main Illustration"
            className="w-72 md:w-80 lg:w-96 rounded-lg shadow-lg relative z-10"
          />
          <img
            src={image2}
            alt="Overlay Illustration"
            className="w-56 z-50 md:w-64 lg:w-72 rounded-lg shadow-lg absolute -bottom-10 -left-10 md:-bottom-12 md:-left-16"
          />
        </div>
      </div>
    </section>
  );
}
