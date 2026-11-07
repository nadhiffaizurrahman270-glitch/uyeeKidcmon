import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  CalendarDays,
} from "lucide-react";

function Education() {
  const education = [
    {
      title: "Informatics",
      place: "University Student",
      period: "2024 - Present",
      description:
        "Studying informatics with a focus on software development, programming, networking, databases, and information technology.",
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      title: "Academic Projects",
      place: "Informatics Projects",
      period: "2024 - Present",
      description:
        "Developing various academic projects involving web development, Flutter applications, computer networks, databases, and computational science.",
      icon: BriefcaseBusiness,
    },
  ];

  const renderItem = (item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="relative pl-14 pb-10 last:pb-0"
      >
        {/* Timeline line */}
        <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/10 last:hidden"></div>

        {/* Icon */}
        <div className="absolute left-0 top-0 w-10 h-10 rounded-full
        bg-blue-500/10 border border-blue-400/20
        flex items-center justify-center">
          <Icon size={19} className="text-blue-400" />
        </div>

        <div className="p-6 rounded-2xl border border-white/10
        bg-white/[0.03] hover:border-blue-400/30
        hover:bg-blue-500/[0.04] transition-all duration-300">

          <div className="flex flex-col md:flex-row
          md:items-center md:justify-between gap-2 mb-3">

            <div>
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-blue-400 text-sm mt-1">
                {item.place}
              </p>
            </div>

            <div className="flex items-center gap-2
            text-gray-500 text-sm">
              <CalendarDays size={15} />
              {item.period}
            </div>

          </div>

          <p className="text-gray-400 leading-7">
            {item.description}
          </p>

        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="education"
      className="min-h-screen px-8 md:px-20 py-28 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 tracking-[0.3em] text-sm mb-4">
            MY JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Education <span className="text-blue-400">& Journey.</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            A look at my academic background and the projects
            I've worked on along the way.
          </p>
        </motion.div>

        {/* EDUCATION */}
        <div className="mb-14">

          <h3 className="text-2xl font-bold mb-7">
            Education
          </h3>

          {education.map(renderItem)}

        </div>

        {/* EXPERIENCE */}
        <div>

          <h3 className="text-2xl font-bold mb-7">
            Experience
          </h3>

          {experience.map(renderItem)}

        </div>

      </div>
    </section>
  );
}

export default Education;