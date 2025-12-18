import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // Modern arrow icon

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            bg-gradient-to-r from-blue-500 to-indigo-500 
            text-white p-4 rounded-full shadow-2xl 
            hover:scale-110 hover:shadow-xl 
            transition-transform duration-300
            flex items-center justify-center
          "
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
