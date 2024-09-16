// Importing FontAwesome icons
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";

function Contact() {
  return (
    <div className="px-4 lg:px-8 py-8">
      <h1 className="text-center text-3xl font-extrabold mb-12">Contact Me</h1>

      <div className="max-w-4xl mx-auto p-6 lg:p-8 rounded-2xl shadow-2xl bg-[#0d1a1cf1]">
        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl mb-4 text-center">
          Let&apos;s Discuss Your Next Project
        </h3>
        <p className="text-gray-400 mb-4 text-center">
       Have a question or interested in collaborating on a project? Whether you want to discuss new technologies, need guidance on your 
       current work, or just want to connect, I’m here to help. Feel free to reach out and let’s explore how we can work together on exciting
        new opportunities!
      </p>

        <div className="mt-6 text-center">
          <Link href={"mailto:alikanwal382@gmail.com"}>
            <button className="bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#0d1a1cf1] hover:text-gray-200 transition-colors">
            Send me an email
            </button>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/kanwal-heer-b3b7b62b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-200 hover:text-[#313738f1] text-3xl transition-colors" />
          </Link>
         
          <Link
            href="https://github.com/KanwalHeer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-200 hover:text-[#313738f1] text-3xl transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;