import React from 'react'
import Image from 'next/image'
import styles from "./Home.module.css"; // Import the CSS module for styles
export default function HomePage() {
  return (
    <main className="bg-[#000505] min-h-screen flex flex-col ">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full">
          {/* Main Information Div */}
          <div className="text-white max-w-lg md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
              Hello, I Am
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Kanwal Heer
            </h1>
            <h2
              className={`text-xl md:text-2xl font-bold mb-6 ${styles.typewriter}`}
            >
              I am a Full Stack Developer
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Hi, I am Kanwal Heer, a Full Stack Developer from Karachi,
              Pakistan. I have a deep passion for IT and spend most of my time
              immersed in technology. Exploring and solving tech challenges is
              what drives me.
            </p>
          </div>

          {/* Image Div */}
          <div className="relative w-full md:w-1/2 flex justify-center ">
            <Image
              src="/heeri.png"
              alt="Kanwal Heer"
              width={300}
              height={300}
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>
     
    </main>
  )
}
