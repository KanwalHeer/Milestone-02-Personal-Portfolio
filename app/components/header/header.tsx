"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowAltCircleRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" flex items-center justify-between m-2 ">
      {/* Website Name */}
      <div className="text-white text-lg font-semibold flex items-center ">
        <Link href={"/"}>
          <FaArrowAltCircleRight className="h-10 w-10" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-white text-xl pr-2">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links (Hidden on Mobile) */}
      <div
        className={`space-x-2  flex items-center ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <Link
          href="/about"
          className="text-md text-gray-300 hover:text-white border border-gray-600 rounded-full px-6 py-2 transition duration-100 ease-in-out"
        >
          About
        </Link>

        <Link
          href="/projects"
          className="text-md text-gray-300 hover:text-white border border-gray-600 rounded-full px-4 py-2 transition duration-300 ease-in-out"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className=" text-md text-gray-300 hover:text-white border border-gray-400 rounded-full px-4 py-2 transition duration-300 ease-in-out"
        >
          Contacts
        </Link>
      </div>

      {/* Mobile Menu (Hidden on Larger Screens) */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-50 p-4 flex flex-col space-y-4 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-3xl self-end bg-gray-900 p-2 rounded-full"
        >
          <FaTimes />
        </button>
        <Link
          href="/about"
          className="text-gray-300 hover:text-white border border-gray-600 rounded-full px-4 py-2 transition duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          About
        </Link>

        <Link
          href="/projects"
          className="text-gray-300 hover:text-white border border-gray-600 rounded-full px-4 py-2 transition duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className="text-gray-400 hover:text-white border border-gray-600 rounded-full px-4 py-2 transition duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
