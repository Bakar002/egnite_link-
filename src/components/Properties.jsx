// import React from 'react';
// import leftimg from "../assets/images/Carlink page left image.png";
// export default function PropertyHero() {
//   return (
//     <div className=" bg-black flex items-center justify-center p-12">
//       <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
//         {/* Left Side - Image */}
//         <div className="relative h-[500px] rounded-lg overflow-hidden">
//           <img src={leftimg} alt="" />


//         </div>

//         {/* Right Side - Content Card */}
//         <div className=" rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700
//         relative z-10 lg:-ml-15 mt-5 " 
//         style={{
//           background: "linear-gradient(335.99deg, #252525 9.77%, #424242 89.74%)"
//         }}>
//           <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white leading-tight mb-6">
//             We Don't Market Properties.{' '}
//             <span className="text-white">
//               We Engineer The Systems That Sell Them.
//             </span>
//           </h1>

//           <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
//             REALTYLink™ is the Real-Estate Intelligence Division of E-Gnité Link AI Systems™.
//             <br />
//             It exists to unify the entire property lifecycle — marketing, operations, analytics, and client engagement — within a single AI-enhanced infrastructure that learns, adapts, and expands.
//           </p>

//           <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
//             Book Free Consultation
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import leftimg from "../assets/images/reality2nd.png";

export default function PropertyHero() {
  return (
    <div className="bg-black flex items-center justify-center p-4 sm:p-6 md:p-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* Left Image */}
        <div className="
          relative 
          h-[220px]           /* xs - 320px screens */
          max-[350px]:h-[200px] 
          sm:h-[330px] 
          md:h-[500px] 
          rounded-lg overflow-hidden
        ">
          <img src={leftimg} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Content Card */}
        <div
          className="
            rounded-3xl 
            p-4 
            max-[350px]:p-3    /* smallest screens padding fix */
            sm:p-8 
            md:p-12 
            shadow-2xl border border-gray-700
            relative z-10 
            md:mt-5
            text-center md:text-left
            md:-ml-10
          "
          style={{
            background: "linear-gradient(335.99deg, #252525 9.77%, #424242 89.74%)"
          }}
        >
          <h1 className="
            text-xl 
            max-[350px]:text-lg  /* smallest screens heading fix */
            sm:text-3xl 
            md:text-4xl 
            font-semibold 
            text-white leading-snug 
            mb-4
          ">
            We Don't Market Properties.{" "}
            <span className="text-white">We Engineer The Systems That Sell Them.</span>
          </h1>

          <p className="
            text-gray-300 
            text-xs max-[350px]:text-[11px]  /* smallest screens text fix */
            sm:text-base 
            md:text-lg 
            leading-relaxed 
            mb-6
          ">
            REALTYLink™ is the Real-Estate Intelligence Division of E-Gnité Link AI Systems™.
            It unifies the entire property lifecycle — marketing, operations, analytics, and client engagement.
          </p>

          {/* Button */}
          <div className="flex md:block justify-center md:justify-start">
            <button className="
              bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-400 hover:to-blue-500 
              text-white font-semibold 
              px-6 py-2
              max-[350px]:px-4 max-[350px]:py-2   /* button resize for 320px */
              rounded-full 
              transition-all duration-300 
              transform hover:scale-105 
              shadow-lg hover:shadow-cyan-500/50
              text-sm max-[350px]:text-xs
            ">
              Book Free Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
