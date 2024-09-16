import Card2 from "../about/card2/card2";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div>
      <section className="testimonials min-h-screen bg-[#000505] w-full flex flex-col items-center">
        <div className="w-full h-full flex flex-col lg:flex-col bg-[#000505] md:flex-col p-4 lg:p-8 space-y-4 lg:space-y-0 lg:space-x-4">
          <h1 className="text-gray-200 text-center text-3xl font-bold p-2">
            About Me
          </h1>
          {/* first Section */}
          <div className="flex-1 flex flex-col space-y-4 lg:space-y-8 bg-[#060d0ef1]">
            <div className="border border-gray-600 rounded-3xl p-4 lg:p-8">
              <h3 className="text-gray-400 text-2xl sm:text-3xl lg:text-4xl mb-4 text-center lg:text-left">
                My Journey So Far
              </h3>
              <p className="text-gray-400 mb-4">
                My journey as a Full Stack Developer began nearly two years ago,
                following a transition from a background in graphic design. Over
                this period, I have cultivated a robust skill set in both
                front-end and back-end development, mastering a range of
                technologies and tools. My expertise now includes creating
                seamless, user-friendly interfaces and building scalable,
                efficient server-side solutions.
              </p>
              <p className="text-gray-400 mb-4">
                Currently, I am deepening my knowledge with a specialized course
                in artificial intelligence. This new focus reflects my
                commitment to staying at the forefront of technological
                innovation and my passion for exploring the intersections of AI
                and software development. My goal is to leverage my diverse
                skills and experiences to drive impactful projects and
                contribute to cutting-edge advancements in technology.
              </p>
            </div>

            {/* image section div */}
            <div className="flex-1 flex flex-col space-y-4 lg:space-y-8">
              <div className="border bg-[#060d0ef1] rounded-3xl p-4 lg:p-6 flex flex-col lg:flex-row items-start lg:items-center">
                <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0 flex items-center justify-center">
                  <Image
                    src="/heeri.png"
                    height={300} // Smaller height
                    width={300} // Smaller width
                    className="rounded-3xl w-auto h-auto object-cover"
                    alt="p1"
                  />
                </div>

                <div className="flex-1 lg:ml-6">
  <h3 className="text-gray-400 text-xl sm:text-2xl lg:text-3xl mb-4 text-center lg:text-left">
    What Makes Me, Me
  </h3>
  <p className="text-gray-400 mb-4 text-center lg:text-left">
    As a passionate developer, I find joy in crafting elegant code and solving complex problems. I thrive on creating seamless user experiences and continuously learning about new technologies.
  </p>
  <p className="text-gray-400 mb-4 text-center lg:text-left">
    Beyond the screen, I cherish the simple pleasures of life, like savoring a good cup of coffee, exploring new pastries, and delving into inspiring stories. When I’m not coding, I enjoy spending quality time with my family, going on outings, and discovering new places together.
  </p>
  <p className="text-gray-400 mb-4 text-center lg:text-left">
    Balancing my professional and personal life keeps me grounded and fuels my creativity. These activities not only provide relaxation but also inspire new ideas for my projects.
  </p>
</div>

              </div>
            </div>
            {/* third section */}
            <div className="border border-gray-600 p-4 lg:p-6 rounded-2xl">
              <h3 className="text-gray-400 text-2xl sm:text-3xl lg:text-4xl mb-4 text-center lg:text-left">
                Let’s Create Something Amazing
              </h3>
              <p className="text-gray-400 mb-4">
                Ready to bring your vision to life? If you’re thinking about
                launching a new web project, I’m excited to collaborate with
                you. Let’s discuss your ideas and turn them into a remarkable
                reality.
              </p>
              <div className="mt-4 text-center lg:text-left">
              <Link href={'/contact'}><button className="bg-[#000505] text-white py-2 px-4 rounded-full hover:bg-[#060d0ef1] transition-colors">
                  Get in Touch
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tech stack cards */}
      <div className="p-4 lg:p-8">
        <h1 className="text-gray-300 text-2xl sm:text-3xl lg:text-4xl mb-4 text-center">
          My Tech Stack
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Card2
            heading="HTML"
            text="Hypertext Markup Language"
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            icon="html"
          />
          <Card2
            heading="CSS"
            text="Cascading Style Sheets"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
            icon="css"
          />
          <Card2
            heading="JavaScript"
            text="A versatile programming language"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            icon="js"
          />
          <Card2
            heading="TypeScript"
            text="A superset of JavaScript with static types."
            link="https://www.typescriptlang.org/"
            icon="typescript"
          />
          <Card2
            heading="Node.js"
            text="JavaScript runtime built on Chrome's V8 engine."
            link="https://nodejs.org/"
            icon="nodejs"
          />
          <Card2
            heading="Nextjs"
            text="A versatile programming language known for its readability."
            link="https://www.python.org/"
            icon="nextjs"
          />
          <Card2
            heading="MongoDB"
            text="A NoSQL database known for its flexibility and scalability."
            link="https://www.mongodb.com/"
            icon="mongodb"
          />
          <Card2
            heading="PostgreSQL"
            text="An open-source relational database system known for its robustness."
            link="https://www.postgresql.org/"
            icon="postgresql"
          />
          <Card2
            heading="Tailwind CSS"
            text="A utility-first CSS framework for creating custom designs quickly."
            link="https://tailwindcss.com/"
            icon="tailwindcss"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
