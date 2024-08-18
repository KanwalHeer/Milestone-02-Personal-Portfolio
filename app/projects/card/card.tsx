// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Card = ({ heading, text, link }: any) => {
//   // State to determine screen size
//   const [isLargeScreen, setIsLargeScreen] = useState(true);

//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({ duration: 1000 });

//     // Function to handle screen resizing
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth > 768); // Adjust the breakpoint as needed
//     };

//     // Initial check
//     handleResize();

//     // Add event listener for resize
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       data-aos={isLargeScreen ? "fade-down" : "fade-up"}
//       className="bg-[#060d0ef1] text-white p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//     >
//       <h2 className="text-xl font-semibold mb-2">{heading}</h2>
//       <p className="text-gray-400 mb-4">{text}</p>
//       {link ? (
//         <Link
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block mt-4 bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors"
//         >
//           View Project
//         </Link>
//       ) : (
//         <button className="block mt-4 bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors">
//           More Info
//         </button>
//       )}
//     </div>
//   );
// };

// export default Card;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ heading, text, link, image }: { heading: string; text: string; link?: string; image?: string }) => {
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
      data-aos={isLargeScreen ? "fade-down" : "fade-up"}
      className="bg-[#060d0ef1] text-white p-6 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {image && (
        <div className="mb-4 flex-shrink-0">
          <Image
            src={image}
            alt="Card image"
            width={400}  // Fixed width
            height={250} // Fixed height
            className="w-full h-auto object-cover rounded-t-lg"
          />
        </div>
      )}
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        <p className="text-gray-400 mb-4">{text}</p>
      </div>
      <div className="mt-auto">
        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors"
          >
            View Project
          </Link>
        ) : (
          <button className="block bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors">
            More Info
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
