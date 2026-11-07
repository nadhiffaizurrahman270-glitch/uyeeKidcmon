import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Code2,
  Lightbulb,
  MapPin,
} from "lucide-react";

function AboutMe() {
  const personalInfo = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Informatics Student",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
    },
    {
      icon: Code2,
      label: "Focus",
      value: "Software Development",
    },
    {
      icon: Lightbulb,
      label: "Interest",
      value: "Technology & Innovation",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-8 md:px-20 pt-36 pb-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 tracking-[0.3em] text-sm mb-4">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-400">Me.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            A little introduction about myself, my background,
            and what drives me to keep learning.
          </p>
        </motion.div>


        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>

            <div className="relative p-8 md:p-10 rounded-3xl
            border border-white/10 bg-white/[0.03]
            backdrop-blur-xl">

              <div className="flex items-center gap-3 mb-7">

                <div className="p-3 rounded-xl bg-blue-500/10">
                  <User className="text-blue-400" size={25} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Who Am I?
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Personal Introduction
                  </p>
                </div>

              </div>

              <p className="text-gray-300 leading-8 mb-5">
                Hello! I'm <span className="text-blue-400 font-semibold">
                  Nadhif
                </span>, an Informatics student with a strong
                interest in technology and software development.
              </p>

              <p className="text-gray-400 leading-8 mb-5">
                I'm passionate about exploring how technology
                works and transforming ideas into useful digital
                experiences. I enjoy learning new programming
                languages, exploring modern tools, and developing
                projects that help me grow.
              </p>

              <p className="text-gray-400 leading-8">
                I believe that every project is an opportunity
                to learn something new, improve my skills, and
                become a better developer.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">

                <p className="text-blue-400 font-medium italic">
                  "Always learning, always building."
                </p>

              </div>

            </div>
          </motion.div>


          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >

            {personalInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  hover:bg-blue-500/[0.08]
                  hover:border-blue-400/30
                  transition-all duration-300"
                >

                  <div className="w-12 h-12 rounded-xl
                  bg-blue-500/10 flex items-center
                  justify-center mb-5">

                    <Icon size={24} className="text-blue-400" />

                  </div>

                  <p className="text-gray-500 text-sm mb-2">
                    {info.label}
                  </p>

                  <h3 className="text-white font-semibold">
                    {info.value}
                  </h3>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;