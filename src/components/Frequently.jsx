import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Video, Shield } from 'lucide-react';

const FAQComponent = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Can't find the answer you're looking for? Reach out to our customer support team.",
  supportButtons = [
    { icon: "chat", text: "Contact Live Chat Support", subtext: "We usually respond immediately" },
    { icon: "video", text: "Visit Help Center", subtext: "We usually respond immediately" },
    { icon: "shield", text: "Terms & Conditions", subtext: "We usually respond immediately" }
  ],
  faqs = [
    { question: "How To Change My Photo From Admin Dashboard?", answer: "To change your photo from the admin dashboard, go to your profile settings and upload a new image." },
    { question: "How To Change My Password Easily?", answer: "You can change your password by going to settings > security > change password." },
    { question: "How To Change My Administrator From Using PayPal?", answer: "To change administrator settings for PayPal, navigate to payment settings and update the admin credentials." },
    { question: "How To Change My Password Easily?", answer: "Access your account settings and look for the password section to update your credentials." },
    { question: "How To Change My Administrator From Using PayPal?", answer: "Go to payment gateway settings and modify the PayPal administrator configuration." }
  ]
}) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'chat': return <MessageCircle className="w-6 h-6" />;
      case 'video': return <Video className="w-6 h-6" />;
      case 'shield': return <Shield className="w-6 h-6" />;
      default: return <MessageCircle className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen  text-white p-6" style={{ backgroundColor : '#000000'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">?</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Support Buttons */}
            <div className="space-y-4">
              {supportButtons.map((button, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      {getIcon(button.icon)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{button.text}</h3>
                      <p className="text-gray-400 text-sm">{button.subtext}</p>
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
                <div key={index} className="bg-gray-800 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <div className="ml-4 flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 leading-relaxed">
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