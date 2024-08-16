import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <main className="bg-[#000505] min-h-screen flex flex-col items-center py-12">
      {/* Main container */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-6">
        {/* Image div */}
        <div className="mb-8 flex justify-center">
          <Image
            src={"/heeri.png"}
            alt="Profile Picture"
            width={300} // Increased size
            height={175} // Increased size
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Social media icons */}
        <div className="mb-8 flex space-x-6">
          <Link
            href="https://www.facebook.com/"
            className="bg-white text-gray-600 rounded-full hover:bg-gray-300 hover:text-gray-900 p-2 text-sm flex items-center"
          >
            <FaFacebook className="text-lg" />
          </Link>
          <Link
            href="https://apps.microsoft.com/detail/9wzdncrfj140?hl=en-us&gl=US"
            className="bg-white text-gray-600 rounded-full hover:bg-gray-300 hover:text-gray-900 p-2 text-sm flex items-center"
          >
            <FaTwitter className="text-lg" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="bg-white text-gray-600 rounded-full hover:bg-gray-300 hover:text-gray-900 p-2 text-sm flex items-center"
          >
            <FaInstagram className="text-lg" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kanwal-heer/"
            className="bg-white text-gray-600 rounded-full hover:bg-gray-300 hover:text-gray-900 p-2 text-sm flex items-center"
          >
            <FaLinkedin className="text-lg" />
          </Link>
        </div>

        {/* Main information div */}
        <div className="text-center text-gray-200">
          <h1 className="text-4xl mb-6 font-semibold">About Me</h1>
          <p className="text-lg leading-relaxed max-w-prose mx-auto">
            I cherish the small joys in life, like savoring coffee, enjoying
            pastries, and hearing great stories. These simple pleasures bring me
            happiness. Outside of coding, I love being outdoors, playing
            basketball, and relaxing with a classic Old Fashioned cocktail.
            These activities keep me grounded and inspire my creativity.I began
            my path as a Full Stack Developer nearly two years ago after
            transitioning from graphic design. In this time, I’ve honed my
            skills in both front-end and back-end development. Currently, I’m
            expanding my expertise with AI through a specialized course. Driven
            by a passion for continuous learning and technological advancement,
            I’m dedicated to pushing the boundaries and growing in this
            ever-evolving field.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
