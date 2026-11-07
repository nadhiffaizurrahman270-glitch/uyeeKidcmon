import { motion } from "framer-motion";
import {
    Code2,
    Globe,
    Database,
    Smartphone,
    GitBranch,
    Cpu,
    Terminal,
    Layers,
    Palette,
} from "lucide-react";

function Skills() {
    const skillsCategories = [
        {
            title: "Programming Languages",
            description: "Languages I use to build applications.",
            skills: [
                { name: "JavaScript", icon: Code2, level: "Learning" },
                { name: "Python", icon: Code2, level: "Learning" },
                { name: "Java", icon: Code2, level: "Learning" },
                { name: "Dart", icon: Code2, level: "Learning" },
                { name: "C++", icon: Code2, level: "Learning" },
            ],
        },
        {
            title: "Development Tools",
            description: "Tools and frameworks in my workflow.",
            skills: [
                { name: "React", icon: Code2, level: "Learning" },
                { name: "flutter", icon: Smartphone, level: "Exploring" },
                { name: "HTML & CSS", icon: Globe, level: "Learning" },
                { name: "Git & GitHub", icon: GitBranch, level: "Learning" },
                { name: "VS Code", icon: Terminal, level: "Daily Use" },
            ],
        },
        {
            title: "Databases & Technology",
            description: "Databases I have experience with.",
            skills: [
                { name: "MySQL", icon: Database, level: "Learning" },
                { name: "IoT", icon: Cpu, level: "Exploring" },
                { name: "UI/UX Design", icon: Palette, level: "Exploring" },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen px-8 md:px-20 py-28 scroll-mt-20"
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
                        MY EXPERTISE
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Tech Stack & <span className="text-blue-400">Skills.</span>
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-xl mx-auto">
                        Technologies, programming languages, and tools
                        I'm currently learning and exploring.
                    </p>
                </motion.div>

                {/* SKILLS CATEGORIES */}
                <div className="grid md:grid-cols-3 gap-7">
                    {skillsCategories.map((category, index) => (

                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="p-7 rounded-3x1 border border-white/10
                            bg-white/[0.03] backdrop-blur-xl
                            hover:border-blue-400/30 hover:bg-blue-500/[0.04]
                            transition-all duration-300"
                        >

                            {/* CATEGORY HEADER */}
                            <h3 className="text-xl font-semibold mb-3">
                                {category.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-7">
                                {category.description}
                            </p>

                            {/* SKILLS LIST */}
                            <div className="space-y-3">
                                {category.skills.map((skill) => {
                                    
                                    const Icon = skill.icon;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center justify-between 
                                            p-3 rounded-x1 border border-white/5
                                            bg-white/[0.03
                                            hover:bg-blue-500/10
                                            transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3">

                                                <div className="w-10 h-10 rounded-lg
                                                bg-blue-500/10 flex items-center
                                                justify-center
                                                ">
                                                    
                                                    <Icon size={20} className="text-blue-400" />
                                                </div>

                                                <span className="text-gray-200 font-medium">
                                                    {skill.name}
                                                </span>

                                            </div>

                                            <span className="text-xs text-blue-300
                                            bg-blue-500/10 px-2 py-1 rounded-full">
                                                {skill.level}
                                            </span>

                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* BOTTOM NOTE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8}}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm">
                        Always learning new technologies and improving my skills.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;