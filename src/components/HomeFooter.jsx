// import React from 'react';
// import { Link } from "react-router-dom";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   Mail,
//   MapPin
// } from 'lucide-react';
// import logo from '../assets/images/logo.png';

// const ProfessionalFooter = () => {
//   return (
//     <footer className="text-white" style={{ backgroundColor: '#161616' }}>
//       <div className="max-w-7xl mx-auto px-6 py-12">

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

//           {/* Company Info */}
//           <div className="space-y-4">
//             <img src={logo} alt="E-Gnite Link AI Systems Logo" />

//             <p className="text-gray-400 text-sm leading-relaxed">
//               Intelligent Infrastructure for Business Growth.
//             </p>

//             {/* Social Icons */}
//             <div className="flex space-x-3">
//               <a href="https://www.facebook.com/EGniteLinkAI/" target="_blank" rel="noopener noreferrer">
//                 <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
//                   <Facebook className="w-4 h-4" />
//                 </div>
//               </a>

//               <a href="https://x.com/E_GniteLinkAI" target="_blank" rel="noopener noreferrer">
//                 <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
//                   <Twitter className="w-4 h-4" />
//                 </div>
//               </a>

//               <a href="https://www.instagram.com/e_gnitelinkai/" target="_blank" rel="noopener noreferrer">
//                 <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
//                   <Instagram className="w-4 h-4" />
//                 </div>
//               </a>

//               <a href="https://www.youtube.com/@e-gnitelinkaisystems" target="_blank" rel="noopener noreferrer">
//                 <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
//                   <Youtube className="w-4 h-4" />
//                 </div>
//               </a>
//             </div>
//           </div>

//           {/* Useful Links */}
//           <div className="md:ms-28">
//             <h3 className="font-semibold mb-4">Useful Links</h3>
//             <ul className="space-y-3 text-sm">
//               <li>
//                 <Link to="/faqs" className="text-gray-400 hover:text-cyan-400 transition">
//                   FAQs
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Division Overview */}
//           <div className="space-y-4">
//             <h4 className="font-semibold text-lg">Division Overview</h4>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
//               <li><Link to="/growth-method" className="text-gray-400 hover:text-cyan-400">Growth Method</Link></li>
//               <li><Link to="/prointellect" className="text-gray-400 hover:text-cyan-400">ProIntellect™</Link></li>
//               <li><Link to="/ai-workforce" className="text-gray-400 hover:text-cyan-400">Workforce</Link></li>
//               <li><Link to="/aion-faces" className="text-gray-400 hover:text-cyan-400">AI Influencers</Link></li>
//               <li><Link to="/intelligence-systems" className="text-gray-400 hover:text-cyan-400">Intelligence Systems™</Link></li>
//               <li><Link to="/systems-engineering" className="text-gray-400 hover:text-cyan-400">Systems Engineering™</Link></li>
//               <li><Link to="/core-system" className="text-gray-400 hover:text-cyan-400">CARLink</Link></li>
//               <li><Link to="/realty-link" className="text-gray-400 hover:text-cyan-400">REALTYLink</Link></li>
//               <li><Link to="/biz-link" className="text-gray-400 hover:text-cyan-400">BizLink</Link></li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="space-y-4">
//             <h4 className="font-semibold text-lg">Contact Us</h4>

//             {/* Address */}
//             <div className="flex items-center space-x-2">
//               <MapPin className="w-4 h-4 text-cyan-400" />
//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=New+Jersey,+USA"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 text-sm hover:text-cyan-400 transition"
//               >
//                 New Jersey, USA
//               </a>
//             </div>

//             {/* Email */}
//             <div className="flex items-center space-x-2">
//               <Mail className="w-4 h-4 text-cyan-400" />
//               <span className="text-gray-400 text-sm">
//                 egnitelinkaisystems@gmail.com
//               </span>
//             </div>

//             {/* Google Map */}
//             {/* <div className="mt-4 w-full h-[170px] rounded-xl overflow-hidden border border-gray-700">
//               <iframe
//                 title="E-Gnite Link AI Systems New Jersey Location"
//                 src="https://www.google.com/maps?q=New+Jersey,+USA&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div> */}
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//           <div>© 2024 E-Gnite Link AI Systems. All Rights Reserved.</div>

//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link to="/privacy-policy" className="hover:text-cyan-400">Privacy & Policy</Link>
//             <Link to="/terms-conditions" className="hover:text-cyan-400">Terms & Conditions</Link>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default ProfessionalFooter;


import React from 'react';
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Linkedin
} from 'lucide-react';
import logo from '../assets/images/logo.png';
import googlemybusiness from '../assets/images/google.png'  


const ProfessionalFooter = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/"><img src={logo} alt="E-Gnite Link AI Systems Logo" /></Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Intelligent Infrastructure for Business Growth.
            </p>

            <div className="flex space-x-3">
              <Link to="https://www.facebook.com/EGniteLinkAI/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
                  <Facebook className="w-4 h-4" />
                </div>
              </Link>
              <Link to="https://x.com/E_GniteLinkAI" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
                  <Twitter className="w-4 h-4" />
                </div>
              </Link>
              <Link to="https://www.instagram.com/e_gnitelinkai/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
                  <Instagram className="w-4 h-4" />
                </div>
              </Link>
              <Link to="https://www.youtube.com/@e-gnitelinkaisystems" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
                  <Youtube className="w-4 h-4" />
                </div>
              </Link>
              <a href="https://www.linkedin.com/company/e-gnite-link-ai/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
                  <Linkedin className="w-4 h-4" />
                </div>
              </a>
            <Link to='https://share.google/rRWZLdf9NZ6Nq6IsY' target="blank">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[#32ADE6]">
                  <img src={googlemybusiness} alt="Google My Business" className="w-auto h-5" />
                </div>
              </Link>
            </div>
          </div>


          {/* Division Overview (FAQs moved here) */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Division Overview</h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <li><Link to="/growth-method" className="text-gray-400 hover:text-cyan-400">Growth Method</Link></li>
              <li><Link to="/prointellect" className="text-gray-400 hover:text-cyan-400">ProIntellect™</Link></li>
              <li><Link to="/ai-workforce" className="text-gray-400 hover:text-cyan-400">Workforce</Link></li>
              <li><Link to="/aion-faces" className="text-gray-400 hover:text-cyan-400">AI Influencers</Link></li>
              <li><Link to="/intelligence-systems" className="text-gray-400 hover:text-cyan-400">Intelligence Systems™</Link></li>
              <li><Link to="/systems-engineering" className="text-gray-400 hover:text-cyan-400">Systems Engineering™</Link></li>
              <li><Link to="/core-system" className="text-gray-400 hover:text-cyan-400">CARLink</Link></li>
              <li><Link to="/realty-link" className="text-gray-400 hover:text-cyan-400">REALTYLink</Link></li>
              <li><Link to="/biz-link" className="text-gray-400 hover:text-cyan-400">BizLink</Link></li>
              <Link
                to="/faqs"
                className="text-gray-400 hover:text-cyan-400 text-sm"
              >
                FAQs
              </Link>
            </ul>

            {/* FAQs moved here */}

          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>

            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=New+Jersey,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-cyan-400 transition"
              >
                New Jersey, USA             </a>
            </div>

            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-400 text-sm">
                egnitelinkaisystems@gmail.com
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>© 2024 E-Gnite Link AI Systems. All Rights Reserved.</div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-cyan-400">Privacy & Policy</Link>
            <Link to="/terms-conditions" className="hover:text-cyan-400">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ProfessionalFooter;
