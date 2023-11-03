import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white py-8 md:py-4 md:px-4 border-b md:shadow-lg items-center relative">
      <div className="text-3xl font-bold">
        <NavLink to="/">Techie Software</NavLink>
      </div>
      <div className="md:hidden text-gray-500 cursor-pointer" onClick={toggleMobileMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24">
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </div>
      <ul className={`md:flex space-x-6 items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <li>
          <NavLink to="/" activeClassName="text-blue-800" className="text-lg">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" activeClassName="text-blue-800" className="text-lg">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="text-blue-800" className="text-lg">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="text-blue-800" className="text-lg">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="text-blue-800" className="text-lg">
            Contact US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
