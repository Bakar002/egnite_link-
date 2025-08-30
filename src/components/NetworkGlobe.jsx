import React from "react";
import globe from '../assets/images/Group 1000005075.png'

const NetworkGlobe = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden  flex items-center justify-center p-8">
      {/* Center Image */}
      <div className="relative">
        <img
          src={globe}
          alt="Globe Network"
          className="   object-cover shadow-2xl opacity-80"
        />
      </div>
    </div>
  );
};

export default NetworkGlobe;
