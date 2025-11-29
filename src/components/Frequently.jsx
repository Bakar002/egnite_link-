import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Video,
  Shield,
} from "lucide-react";
import faq from "../assets/images/faq.png.png";

const FAQComponent = ({
  title = "Frequently Asked Questions",
  subtitle = "Can't find the answer you're looking for? Reach out to our customer support team.",
  supportButtons = [
    {
      icon: "chat",
      text: "Contact Live Chat Support",
    },
    {
      icon: "video",
      text: "Visit Help Center",
    },
    {
      icon: "shield",
      text: "Terms & Conditions",
    },
  ],
  faqs = [
    {
      question: "How To Change My Photo From Admin Dashboard?",
      answer:
        "To change your photo from the admin dashboard, go to your profile settings and upload a new image. Navigate to the user management section and select your profile to update your display picture.",
    },
    {
      question: "How To Change My Password Easily?",
      answer:
        "You can change your password by going to settings > security > change password. Make sure to use a strong password with at least 8 characters including numbers and special characters.",
    },
    {
      question: "How To Change My Administrator From Using PayPal?",
      answer:
        "To change administrator settings for PayPal, navigate to payment settings and update the admin credentials. You'll need to verify your identity before making administrative changes.",
    },
    {
      question: "How To Setup Two-Factor Authentication?",
      answer:
        "Enable two-factor authentication by going to security settings and following the setup wizard. This adds an extra layer of security to your account.",
    },
    {
      question: "How To Reset My Account Settings?",
      answer:
        "Go to account settings and look for the reset option. You can restore default settings or selectively reset specific configurations as needed.",
    },
  ],
}) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case "chat":
        return <MessageCircle className="w-5 h-5" />;
      case "video":
        return <Video className="w-5 h-5" />;
      case "shield":
        return <Shield className="w-5 h-5" />;
      default:
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  return (
   <div
  className="text-white px-4 pt-30 py-6 sm:px-4 sm:py-6 md:p-25 lg:p-32 xl:p-40 2xl:p-48"
  style={{ backgroundColor: "black" }}
>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              {/* Logo/Image Section */}
              <div className="flex absolute left-0 items-start justify-start gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-24 sm:h-25 rounded-2xl flex items-start justify-start shadow-lg">
                  <img src={faq} alt="" className="w-full h-full object-contain" />
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Support Buttons */}
            <div className="space-y-3">
              {supportButtons.map((button, index) => (
                <div
                  key={index}
                  className="bg-[#2D2D2D] border border-gray-700/50 rounded-xl p-3 sm:p-4 hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-200 cursor-pointer group backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      {getIcon(button.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm sm:text-base mb-1 group-hover:text-blue-300 transition-colors">
                        {button.text}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{button.subtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 border border-gray-700/60 rounded-xl overflow-hidden backdrop-blur-sm hover:border-gray-600/70 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-700/30 transition-all duration-200 group"
                  >
                    <span className="font-medium text-white text-base sm:text-lg group-hover:text-blue-300 transition-colors pr-2 sm:pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        {openFAQ === index ? (
                          <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                        )}
                      </div>
                    </div>
                  </button>

                  {openFAQ === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="border-t border-gray-700/50 pt-4 sm:pt-5">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
