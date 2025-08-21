import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png" // apna logo yahan dalen
                alt="Logo"
                className="h-10"
              />
            </Link>
          </div>

          {/* Hamburger Button (Always visible) */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-400 hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (always works as toggle menu) */}
      {isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black shadow-lg">
          <Link
            to="/systems-engineering"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400"
          >
            Systems Engineering
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400"
          >
            About Us
          </Link>
          <Link
            to="/growth-method"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400"
          >
            Growth Method
          </Link>
          <Link
            to="/prointellect"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400"
          >
            ProIntellect Systems
          </Link>
          <Link
            to="/ai-workforce"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400"
          >
            AI Workforce
          </Link>
          <Link
            to="/aion-faces"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400"
          >
            AiON Faces
          </Link>
          <Link
            to="/intelligence-systems"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400"
          >
            Intelligence Systems
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
