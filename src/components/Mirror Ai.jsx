import React from "react";
import { Bot, Users, Settings } from "lucide-react";
import pyramidImage from "../assets/images/ChatGPT_Image_Aug_15__2025__11_07_29_AM-removebg-preview 1.png"; // Ensure you have an

const AIPyramid = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="relative w-full max-w-md">
        <img src={pyramidImage} alt="" />

        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 bg-purple-400/10 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default AIPyramid;
