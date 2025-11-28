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
              <img src={logo} alt="Logo" className="h-18" />
            </Link>
          </div>

          {/* Hamburger / Toggle Button */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md hover:text-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu (hidden by default, appears on toggle) */}
      {isOpen && (
        <div className="absolute  top-20 left-0 w-full bg-black text-white px-4 py-3 lg:flex lg:items-center lg:justify-between">
          
          {/* Navigation in one line */}
          <nav className="flex mx-auto flex-col lg:flex-row lg:space-x-6 text-sm font-medium">
            <Link to="/growth-method" className="block py-1 lg:py-0 hover:text-cyan-400">Growth</Link>
            <Link to="/prointellect" className="block py-1 lg:py-0 hover:text-cyan-400">ProIntellect Systems</Link>
            <Link to="/ai-workforce" className="block py-1 lg:py-0 hover:text-cyan-400">AI Workforce</Link>
            <Link to="/aion-faces" className="block py-1 lg:py-0 hover:text-cyan-400">AiON Faces</Link>
            <Link to="/intelligence-systems" className="block py-1 lg:py-0 hover:text-cyan-400">Intelligence Systems</Link>
            <Link to="/systems-engineering" className="block py-1 lg:py-0 hover:text-cyan-400">Systems Engineering</Link>
            <Link to="/out-comes" className="block py-1 lg:py-0 hover:text-cyan-400">Outcomes</Link>
            <Link to="/core-system" className="block py-1 lg:py-0 hover:text-cyan-400">Core System</Link>
            <Link to="/reality-link" className="block py-1 lg:py-0 hover:text-cyan-400">Reality Link</Link>
            <Link to="/biz-link" className="block py-1 lg:py-0 hover:text-cyan-400">Biz Link</Link>
          </nav>

        </div>
      )}
    </header>
  );
};

export default Header;
