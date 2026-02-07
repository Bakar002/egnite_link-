import React from 'react';
import phase from '../assets/images/phase.png';
export default function DigitalEvolution() {

  return (
    <div className=" bg-[#000b13] flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl aspect-video">
        {/* Title */}
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center mb-16">
          The Five Phases of Digital Evolution
        </h1>

        <img src={phase} alt="" />
      </div>
    </div>
  );
}