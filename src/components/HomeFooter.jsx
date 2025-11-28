import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import logo from '../assets/images/logo.png';

const ProfessionalFooter = () => {
  return (
    <footer className=" text-white" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Logo & Description */}
          <div className="lg:col-span-1 space-y-4">
            <img src={logo} alt="" />

            <p className="text-gray-400 text-sm leading-relaxed">
              Intelligent Infrastructure for Business Growth.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-8 h-8  rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors" style={{ backgroundColor: '#32ADE6' }}>
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8  rounded flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors" style={{ backgroundColor: '#32ADE6' }}>
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8  rounded flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors" style={{ backgroundColor: '#32ADE6' }}>
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8  rounded flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors" style={{ backgroundColor: '#32ADE6' }}>
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Useful Links</h4>
            <ul className="space-y-2">
              <li><Link to="/out-comes" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Outcomes</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact us</Link></li>
            </ul>
          </div>

          {/* Division Overview */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Division Overview</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-influencer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Influencer™</Link></li>
              <li><Link to="/growth-method" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Growth Method</Link></li>
              <li><Link to="/ai-workforce" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Workforce</Link></li>
              <li><Link to="/prointellect" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">ProIntellect™</Link></li>
              <li><Link to="/intelligence-systems" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Intelligence Systems™</Link></li>
              <li><Link to="/systems-engineering" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Systems Engineering™</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">New York, US</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">accounts@eunitel.ai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright @2024 E-Creative All Rights Reserved
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy & Policy</Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;
