import { motion } from "framer-motion";
import { Code2, Globe, Mail, Download } from "lucide-react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center px-8 md:px-20 pt-28"
      >

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2
            rounded-full border border-blue-400/30 bg-blue-400/10 mb-8">

              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

              <span className="text-sm text-blue-300">
                Available for Opportunities
              </span>
            </div>

            <p className="text-blue-400 text-lg mb-3 tracking-widest">
              HELLO, I'M
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
              Nadhif
              <br />
              <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-purple-500">
                Developer.
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Informatics Student & Future Developer
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-lg mb-8">
              I'm an Informatics student passionate about technology,
              software development, and creating digital experiences.
              I enjoy learning new technologies and building meaningful projects.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-10">

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3
                rounded-xl bg-blue-500 hover:bg-blue-600
                transition duration-300 font-medium"
              >
                Contact Me
                <Mail size={18} />
              </a>

              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3
                rounded-xl border border-white/20
                hover:bg-white/10 transition duration-300"
              >
                Download CV
                <Download size={18} />
              </a>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-5">

              <span className="text-gray-500 text-sm">
                FIND ME ON
              </span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="text-gray-400 hover:text-white transition"
              >
                <Code2 size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Globe size={22} />
              </a>

              <a
                href="mailto:your@email.com"
                title="Email"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Mail size={22} />
              </a>

            </div>

          </motion.div>


          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >

            {/* Background Glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96
            bg-blue-600/20 blur-[100px] rounded-full">
            </div>

            {/* Profile Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-72 h-80 md:w-80 md:h-96
              rounded-3xl border border-white/10
              bg-gradient-to-br from-blue-500/20
              via-purple-500/10 to-white/5
              backdrop-blur-xl flex flex-col
              items-center justify-center 
              p-5 shadow-2xl"
            >

              <div className="w-52 h-64 md:w-64 md:h-80
              rounded-2xl overflow-hidden
              border border-blue-400/40
              shadow-2xl shadow-blue-500/20">

                <img
                  src="/images/profile.jpg"
                  alt="Nadhif - Profile"
                  className="w-full h-full object-cover object-center"
                />

              </div>

              <h3 className="text-2xl font-bold mt-8">
                Nadhif
              </h3>

              <p className="text-gray-400 mt-2">
                Developer in Progress
              </p>

              <div className="flex gap-3 mt-5">

                <span className="px-3 py-1 rounded-full
                bg-blue-500/20 text-blue-300 text-xs">
                  Flutter
                </span>

                <span className="px-3 py-1 rounded-full
                bg-purple-500/20 text-purple-300 text-xs">
                  React
                </span>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT ME SECTION */}
      <AboutMe />

      {/* SKILLS SECTION */}
      <Skills />

      {/* PROJECTS SECTION */}
      <Projects />

    </main>
  );
}

export default App;