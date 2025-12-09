import React from "react";
import { Play } from "lucide-react";
import rectangle from "../assets/images/Rectangle 22.png";
import { Link } from "react-router-dom";

const SecurityShieldComponent = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - 3D Shield with Play Button */}
        <div className="flex-1 flex justify-center relative">
          {/* Replace this div with your image */}
          <img src={rectangle} alt="" />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              There is Nothing Else Like This
              <br />
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              E-Gnite Link AI Systems™ are not versions, not templates, not
              tools. They are fully integrated AI architectures — engineered
              with proprietary logic, autonomous cognition, and deployment-based
              intelligence
            </p>

            <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
              Every E-Gnite deployment is: <br />
              • Built from original logic frameworks <br />
              • Driven by autonomous, adaptive workflows <br />
              • Aligned to a unified operating structure <br />• Non-replicable
              by nature, not policy
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link to="/contact-us">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/3 via-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default SecurityShieldComponent;
