"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaReact, // Keeping this for TypeScript icon as placeholder
} from "react-icons/fa";
// You might want to use an actual Next.js icon if available

type IconType =
  | "html"
  | "css"
  | "js"
  | "typescript"
  | "nodejs"
  | "nextjs"
  | "mongodb"
  | "postgresql"
  | "vercel"
  | "tailwindcss";

const iconMap: { [key in IconType]: JSX.Element } = {
  html: <FaHtml5 className="text-[#E44D26]" />,
  css: <FaCss3Alt className="text-[#1572B6]" />,
  js: <FaJsSquare className="text-[#F7DF1E]" />,
  typescript: <FaReact className="text-[#007ACC]" />, // Example, replace with TypeScript icon if available
  nodejs: <FaNodeJs className="text-[#8CC84B]" />,
  nextjs: <FaReact className="text-[#fcfafa]" />, // Example placeholder for Next.js
  mongodb: <FaDatabase className="text-[#47A248]" />, // Example for MongoDB
  postgresql: <FaDatabase className="text-[#336791]" />, // Example for PostgreSQL
  vercel: <FaServer className="text-[#000000]" />, // Example for Vercel
  tailwindcss: <FaCss3Alt className="text-[#38BDF8]" />, // Example, replace with Tailwind CSS icon if available
};
interface Card2Props {
  heading: string;
  text: string;
  link?: string;
  icon?: IconType;
}

const Card2: React.FC<Card2Props> = ({ heading, text, link, icon }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
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
      data-aos={isLargeScreen ? "zoom-in" : "flip-up"} // Apply AOS animation based on screen size
      className="bg-[#060d0ef1] text-white p-4 sm:p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        {/* Render icon only if provided */}
        {icon && <span className="mr-3 text-2xl">{iconMap[icon]}</span>}
        {/* Heading */}
        <h2 className="text-lg sm:text-xl font-semibold">{heading}</h2>
      </div>
      <p className="text-gray-400 mb-4 text-sm sm:text-base">{text}</p>
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors"
        >
          More Info
        </Link>
      )}
    </div>
  );
};

export default Card2;
