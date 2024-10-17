import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['About', 'Services', 'Blog', 'Products', 'Contact'];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <svg className="w-10 h-10 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Kevin Summersill
          </h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={['Blog', 'Products'].includes(item) ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={['Blog', 'Products'].includes(item) ? `/${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;