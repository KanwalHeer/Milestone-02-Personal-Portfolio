"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060d0ef1] text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
        {/* Website Name */}
        <div className="flex items-center">
          <Link href="#home">
            <Image
              src="/heeri.png"
              width={40}  // Adjusted size for better fit
              height={40} // Adjusted size for better fit
              alt="Website Logo"
              className="h-10 w-10 md:h-16 md:w-16 rounded-full cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links (Hidden on Mobile) */}
        <div className={`hidden md:flex items-center space-x-4 md:space-x-6`}>
          <Link
            href="#about"
            className="text-md text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          >
            About
          </Link>

          <Link
            href="#project"
            className="text-md text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="text-md text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu (Hidden on Larger Screens) */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-50 p-4 flex flex-col space-y-4 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button
            onClick={toggleMenu}
            className="text-3xl self-end bg-gray-900 p-2 rounded-full focus:outline-none"
          >
            <FaTimes />
          </button>
          <Link
            href="#about"
            className="text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
            onClick={toggleMenu}
          >
            About
          </Link>

          <Link
            href="#project"
            className="text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
            onClick={toggleMenu}
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
