import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import styles from "./Home.module.css"; // Import the CSS module for styles

function Footer() {
  return (
    <section className="footer bg-[#060d0ef1] py-4 px-2 shadow-lg">
      <div className="flex flex-col items-center space-y-4 m-2">
        {/* Follow Me Section */}
        <div className="text-center">
          <h5
            className={`font-semibold text-gray-300 text-xl ${styles.typewriter}`}
          >
            Follow Me
          </h5>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row items-center justify-center space-x-4">
         
          <Link
            href="https://github.com/KanwalHeer"
            className="bg-white text-gray-600 rounded-full hover:bg-gray-300 hover:text-gray-900 p-2 text-lg flex items-center"
          >
            <FaGithub className="text-lg" />
          </Link>
         
          <Link
            href="https://www.linkedin.com/in/kanwal-heer-b3b7b62b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="bg-white text-gray-600 rounded-full hover:bg-gray-300 hover:text-gray-900 p-2 text-lg flex items-center"
          >
            <FaLinkedin className="text-lg" />
          </Link>
        </div>

        {/* Footer Info Section */}
        <div className="text-center">
          <h5 className="font-semibold text-gray-300 text-xl">My Portfolio</h5>
          <p className="text-sm md:text-lg text-gray-400">© 2024.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
