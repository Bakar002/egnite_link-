import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const ProfessionalFooter = () => {
  return (
    <footer className=" text-white" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Logo & Description */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">✧</span>
              </div>
              <div>
                <h3 className="text-cyan-400 font-bold text-lg">E-UNITE LINK</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">SOLUTIONS</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Intelligent Infrastructure for Business Growth.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Outcomes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact us</a></li>
            </ul>
          </div>

          {/* Division Overview */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Division Overview</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Influencer™</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Growth Method</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Workforce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">ProIntellect™</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Intelligence Systems™</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Systems Engineering™</a></li>
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
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy & Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;