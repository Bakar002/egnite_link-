import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 mt-8  flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-18" />
            </Link>
          </div>

          {/* Desktop Menu (Horizontal) */}
          <nav className="hidden md:flex space-x-6 mt-3 text-white text-sm font-medium">
            <Link to="/growth-method" className="hover:text-cyan-400">Growth</Link>
            <Link to="/prointellect" className="hover:text-cyan-400">ProIntellect Systems</Link>
            <Link to="/ai-workforce" className="hover:text-cyan-400">AI Workforce</Link>
            <Link to="/aion-faces" className="hover:text-cyan-400">AiON Faces</Link>
            <Link to="/intelligence-systems" className="hover:text-cyan-400">Intelligence Systems</Link>
            <Link to="/systems-engineering" className="hover:text-cyan-400">Systems Engineering</Link>
            <Link to="/out-comes" className="hover:text-cyan-400">Outcomes</Link>
            <Link to="/core-system" className="hover:text-cyan-400">Core System</Link>
            <Link to="/reality-link" className="hover:text-cyan-400">Reality Link</Link>
            <Link to="/biz-link" className="hover:text-cyan-400">Biz Link</Link>
          </nav>

          {/* Hamburger (Mobile Only) */} 
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md hover:text-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-4 py-4 space-y-3 text-white text-base">
          <Link to="/growth-method" className="block">Growth</Link>
          <Link to="/prointellect" className="block">ProIntellect Systems</Link>
          <Link to="/ai-workforce" className="block">AI Workforce</Link>
          <Link to="/aion-faces" className="block">AiON Faces</Link>
          <Link to="/intelligence-systems" className="block">Intelligence Systems</Link>
          <Link to="/systems-engineering" className="block">Systems Engineering</Link>
          <Link to="/out-comes" className="block">Outcomes</Link>
          <Link to="/core-system" className="block">Core System</Link>
          <Link to="/reality-link" className="block">Reality Link</Link>
          <Link to="/biz-link" className="block">Biz Link</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
