import { motion } from "framer-motion";
import {
  Mail,
  Code2,
  Send,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-8 md:px-20 py-28 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 tracking-[0.3em] text-sm mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-blue-400">Connect.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Have a project, idea, or opportunity in mind?
            Feel free to reach out and let's talk.
          </p>
        </motion.div>


        {/* CONTACT CONTENT */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-10 rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl"
          >

            <div className="w-14 h-14 rounded-2xl
            bg-blue-500/10 flex items-center justify-center mb-6">

              <Mail className="text-blue-400" size={27} />

            </div>

            <h3 className="text-2xl font-bold mb-4">
              Let's talk
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              I'm always open to discussing new projects,
              creative ideas, or opportunities to learn and
              collaborate.
            </p>

            <a
              href="mailto:nadhiffaizurrahman270@gmail.com"
              className="inline-flex items-center gap-2
              text-blue-400 hover:text-blue-300 transition"
            >
              nadhiffaizurrahman270@gmail.com
              <ArrowUpRight size={17} />
            </a>


            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-10">

              <a
                href="https://github.com/nadhiffaizurrahman270-glitch"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl
                border border-white/10
                bg-white/[0.03]
                flex items-center justify-center
                hover:border-blue-400/40
                hover:bg-blue-500/10
                transition"
              >
                <Code2 size={20} />
              </a>


            </div>

          </motion.div>


          {/* RIGHT - FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="p-8 md:p-10 rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl"
          >

            <div className="space-y-5">

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  text-white placeholder-gray-600
                  outline-none
                  focus:border-blue-400/50
                  transition"
                />
              </div>


              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your@gmail.com"
                  className="w-full px-4 py-3 rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  text-white placeholder-gray-600
                  outline-none
                  focus:border-blue-400/50
                  transition"
                />
              </div>


              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  text-white placeholder-gray-600
                  outline-none resize-none
                  focus:border-blue-400/50
                  transition"
                />
              </div>


              <button
                type="submit"
                className="w-full py-3 rounded-xl
                bg-blue-500 hover:bg-blue-400
                text-white font-medium
                flex items-center justify-center gap-2
                transition"
              >
                Send Message
                <Send size={17} />
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;