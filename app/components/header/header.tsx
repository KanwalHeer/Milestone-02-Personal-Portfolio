"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-[#060d0ef1] text-white shadow-lg relative">
      {/* Website Name / Logo */}
      <div className="text-white text-lg font-semibold flex items-center">
        <Link href="/">
          <Image
            src="/heeri.png"
            alt="Website Logo"
            className="rounded-full"
            width={40}
            height={40}
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-white text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link
          href="/about"
          className="text-md text-gray-300 hover:text-white border-b-2 border-transparent hover:border-white px-6 py-2 transition duration-300 ease-in-out"
        >
          About
        </Link>

        <Link
          href="/projects"
          className="text-md text-gray-300 hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className="text-md text-gray-300 hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out"
        >
          Contacts
        </Link>
      </div>

      {/* Mobile Menu (Hidden on Larger Screens) */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-50 p-4 flex flex-col space-y-4 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-3xl self-end mb-4 bg-gray-900 p-2 rounded-full"
        >
          <FaTimes />
        </button>
        <Link
          href="/about"
          className="text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          onClick={toggleMenu}
        >
          About
        </Link>

        <Link
          href="/projects"
          className="text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          onClick={toggleMenu}
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className="text-gray-300 hover:text-white px-4 py-2 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
