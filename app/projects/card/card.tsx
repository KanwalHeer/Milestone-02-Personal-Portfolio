"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ heading, text, link }: any) => {
  // State to determine screen size
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Function to handle screen resizing
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      data-aos={isLargeScreen ? "fade-down" : "fade-left"}
      className="bg-[#060d0ef1] text-white p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold mb-2">{heading}</h2>
      <p className="text-gray-400 mb-4">{text}</p>
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors"
        >
          View Project
        </Link>
      ) : (
        <button className="block mt-4 bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors">
          More Info
        </button>
      )}
    </div>
  );
};

export default Card;
