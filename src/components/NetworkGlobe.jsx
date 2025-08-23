import React from "react";
import { Users, Hash, Database, Zap, Star, Globe } from "lucide-react";

const NetworkGlobe = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden  flex items-center justify-center p-8">
      {/* Center Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80"
          alt="Globe Network"
          className="w-64 h-64  object-cover shadow-2xl opacity-80"
        />
      </div>
    </div>
  );
};

export default NetworkGlobe;
