import React, { useState } from "react";
import Logo from "../Assets/Navbar/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["About Us", "Service", "Pricing", "Blog"];

  return (
    <nav className="bg-[#28293e] shadow-2xl fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo (Left) */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Navbar logo" className="w-28" />
        </div>

        {/* Centered Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-lg font-bold hover:text-sky-300 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Contact Button (Right) */}
        <div className="hidden md:block">
          <button className="text-white text-lg font-bold hover:text-sky-300 hover:scale-105 transition duration-300 ease-in-out border px-6 py-1.5 rounded">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="w-10 font-bold h-10 text-white border-1 py-1 px-2" /> : <Menu className="w-10 font-bold h-10 text-white border-1 py-1 px-2" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#28293e] px-6 pb-4">
          <ul className="space-y-4 text-white text-center">
            {navLinks.map((link) => (
              <li
                key={link}
                className="text-lg font-bold hover:text-sky-300 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Contact Button (Mobile) */}
          <div className="mt-4">
            <button className="w-full text-white text-lg font-bold hover:text-sky-300 hover:scale-105 transition duration-300 ease-in-out border px-6 py-1.5 rounded">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
