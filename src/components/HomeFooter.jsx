import React from 'react';
import { Link, Links } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  MapPin
} from 'lucide-react';
import logo from '../assets/images/logo.png';

const ProfessionalFooter = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* GRID — md fixed to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Company Logo & Description */}
          <div className="lg:col-span-1 space-y-4">
            <img src={logo} alt="" />

            <p className="text-gray-400 text-sm leading-relaxed">
              Intelligent Infrastructure for Business Growth.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link to='https://www.facebook.com/EGniteLinkAI/' target="blank">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#32ADE6' }}>
                <Facebook className="w-4 h-4" />
              </div>
              </Link>
              <Link to='https://x.com/E_GniteLinkAI' target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#32ADE6' }}>
                <Twitter className="w-4 h-4" />
              </div>
              </Link>
              <Link to='https://www.instagram.com/e_gnitelinkai/' target="blank">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#32ADE6' }}>
                <Instagram className="w-4 h-4" />
              </div>
              </Link>
              <Link to='https://www.youtube.com/@e-gnitelinkaisystems' target="blank">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#32ADE6' }}>
                <Youtube className="w-4 h-4" />
              </div>
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:ms-28">
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Division Overview */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Division Overview</h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <li>
                <Link to="/growth-method" className="text-gray-400 hover:text-cyan-400 text-sm">Growth Method</Link></li>
              <li>
                <Link to="/prointellect" className="text-gray-400 hover:text-cyan-400 text-sm">ProIntellect™</Link></li>
              <li>
                <Link to="/ai-workforce" className="text-gray-400 hover:text-cyan-400 text-sm">Workforce</Link></li>
              <li>
                <Link to="/aion-faces" className="text-gray-400 hover:text-cyan-400 text-sm">Ai Influencers</Link></li>
              <li>
                <Link to="/intelligence-systems" className="text-gray-400 hover:text-cyan-400 text-sm">Intelligence Systems™</Link></li>
              <li>
                <Link to="/systems-engineering" className="text-gray-400 hover:text-cyan-400 text-sm">Systems Engineering™</Link></li>
                <li>
                <Link to="/core-system" className="text-gray-400 hover:text-cyan-400 text-sm">CARLink</Link></li>
                <li>
                <Link to="/realty-link" className="text-gray-400 hover:text-cyan-400 text-sm">REALTYLink</Link></li>
                <li>
                <Link to="/biz-link" className="text-gray-400 hover:text-cyan-400 text-sm">BizLink</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Contact Us</h4>

            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-400 text-sm">New Jersey, US</span>
            </div>

            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-400 text-sm">
                egnitelinkaisystems@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 E-Gnite Link AI Systems. All Rights Reserved.
            </div>

            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 text-sm">
                Privacy & Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-cyan-400 text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ProfessionalFooter;
