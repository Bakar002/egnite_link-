import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import facebook from '../assets/images/Facebook.png'
import twitter from '../assets/images/Twitter.png'
import instagram from '../assets/images/Instagram.png'
import linkedin from '../assets/images/LinkedIn.png'
import youtube from '../assets/images/YouTube.png'
import { Link } from "react-router-dom";
//new upate 
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };


  return (
    <div
      id="contact-section"
      className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6"
    >      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Contact Info */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Get In Touch With Us
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Every E-Gnite deployment begins with a private consultation — designed to assess your infrastructure, identify friction, and map intelligent systems to your model.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Location */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-white">
                  Location
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  New Jersey, US                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-white">
                  Support
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  +1 (908) 597-1760              </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-white">
                  Email Us
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  egnitelinkaisystems@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}

          <div className="flex flex-wrap gap-3 pt-4">
            <Link to='https://www.facebook.com/EGniteLinkAI/' target="blank">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#32ADE6", borderRadius: '5.51371px' }}
              >
                <img src={facebook} alt="" />
              </div>
            </Link>
            <Link to="https://x.com/E_GniteLinkAI" target="_blank" rel="noopener noreferrer">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#32ADE6", borderRadius: '5.51371px' }}
              >
                <img src={twitter} alt="" />
              </div>
            </Link>
            <Link to='https://www.instagram.com/e_gnitelinkai/' target="blank">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#32ADE6", borderRadius: '5.51371px' }}
              >
                <img src={instagram} alt="" />
              </div>
            </Link>
            {/* linkdien */}
            {/* <div
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#32ADE6", borderRadius: '5.51371px' }}
            >
              <img src={linkedin} alt="" />
            </div> */}
            <Link to='https://www.youtube.com/@e-gnitelinkaisystems' target="blank">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "#32ADE6", borderRadius: '5.51371px' }}
              >
                <img src={youtube} alt="" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side - Contact Form with Border */}
        <div className="border border-gray-600 rounded-2xl p-6 sm:p-8 bg-black/50 backdrop-blur-sm">
          <div className="space-y-4 sm:space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors text-sm"
                  required
                />
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Primary Phone Point"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Business / Role"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors text-sm"
                />
              </div>
            </div>

            {/* Secondary Phone */}
            <div>
              <input
                type="tel"
                placeholder="Primary Phone Point"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none text-sm"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 sm:space-x-3 group w-full sm:w-fit justify-center sm:justify-start"
            >
              <span>Request Consultation</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
