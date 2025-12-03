import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-5 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-20" />
            </Link>
          </div>

          {/* Hamburger Button (All Screens) */}
          <button
            onClick={toggleMenu}
            className="text-white p-2 rounded-md hover:text-cyan-400"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Off-Canvas Sidebar (All Screens) */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-black text-white p-6 z-50 transform 
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button onClick={toggleMenu} className="text-white mb-6">
          <X className="h-6 w-6" />
        </button>

        {/* Nav Items */}
        <nav className="flex flex-col space-y-4 text-lg font-medium">
          <Link onClick={toggleMenu} to="/growth-method" className="hover:text-cyan-400">Growth Method</Link>
          <Link onClick={toggleMenu} to="/prointellect" className="hover:text-cyan-400">ProIntellect Systems</Link>
          <Link onClick={toggleMenu} to="/ai-workforce" className="hover:text-cyan-400">AI Workforce</Link>
          <Link onClick={toggleMenu} to="/aion-faces" className="hover:text-cyan-400">AiON Faces</Link>
          <Link onClick={toggleMenu} to="/intelligence-systems" className="hover:text-cyan-400">Intelligence Systems</Link>
          <Link onClick={toggleMenu} to="/systems-engineering" className="hover:text-cyan-400">Systems Engineering</Link>
          <Link onClick={toggleMenu} to="/core-system" className="hover:text-cyan-400">Car Link</Link>
          <Link onClick={toggleMenu} to="/realty-link" className="hover:text-cyan-400">Realty Link</Link>
          <Link onClick={toggleMenu} to="/biz-link" className="hover:text-cyan-400">Biz Link</Link>
          
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}
    </header>
  );
};

export default Header;
