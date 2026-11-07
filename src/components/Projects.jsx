import { motion } from "framer-motion";
import {
    ExternalLink,
    Code2,
    ArrowUpRight,
    FolderGit2
} from "lucide-react";

function Projects() {
    const projects = [
        {
            title: "BIOVERSE",
            category: "Web Application",
            description: "An interactive biology learning platform designed to help users explore biological concepts through an engaging digital experience.",
            technologies: ["Flutter", "Dart", "Material UI"],

            image: "/images/bioverse.png",

            github: "#",
            liveDemo: "#",
            status: "Featured Project"
        },

        {
            title: "Computer Network Design",
            category: "Networking",
            description: "A computer networking project involving network topology design, device configuration, IP addressing, and connectivity testing using Cisco Packet Tracer.",
            technologies: ["Cisco Packet Tracer", "Networking", "IPv4"],
            image: "network",
            github: "#",
            liveDemo: "#",
            status: "Academic Project"
        },
    ];

    return (
        <section
            id="projects"
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
                        MY WORKS
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Featured <span className="text-blue-400">Projects.</span>
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-xl mx-auto">
                        Some of the projects I've built while exploring
                        technology and developing my skills.
                    </p>

                </motion.div>

                {/* PROJECTS GRID */}
                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project, index) => (

                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group rounded-3xl overflow-hidden 
                            border border-white/10 bg-white/[0.03]
                            hover:border-blue-400/40
                            transition-all duration-300"
                        >

                                {/* PROJECT PREVIEW */}
                                <div className="relative h-64 overflow-hidden bg-gray-900">

                                {project.image.endsWith(".png") ? (
                                    <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top
                                    group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center
                                    justify-center bg-gradient-to-br from-blue-900
                                    via-indigo-900 to-black">

                                    <div className="text-center">
                                        <FolderGit2
                                        size={75}
                                        className="mx-auto text-blue-300 mb-5"
                                        />

                                        <h3 className="text-3xl font-bold">
                                        NETWORK DESIGN
                                        </h3>

                                        <p className="text-blue-200 mt-2">
                                        Computer Networking Project
                                        </p>
                                    </div>

                                    </div>
                                )}

                                <div className="absolute top-5 left-5">
                                    <span className="px-4 py-2 rounded-full text-xs
                                    bg-black/50 backdrop-blur-md border border-white/10
                                    text-blue-300">
                                    {project.status}
                                    </span>
                                </div>

                                <div className="absolute top-5 right-5
                                w-10 h-10 rounded-full bg-black/40
                                backdrop-blur-md flex items-center justify-center">
                                    <ArrowUpRight size={20} />
                                </div>

                                </div>

                            {/* PROJECT DETAILS */}
                            <div className="p-7">

                                <p className="text-blue-400 text-sm mb-3">
                                    {project.category}
                                </p>

                                <h3 className="text-2x1 font-bold mb-4
                                group-hover:text-blue-400 transition">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 leading-7 mb-6">
                                    {project.description}
                                </p>

                                {/* TECHNOLOGIES USED */}
                                <div className="flex flex-wrap gap-2 mb-7">

                                    {project.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="px-3 py-2 rounded-lg
                                            bg-blue-500/10 text-blue-300 text-xs
                                            border border-blue-400/10">
                                                {tech}
                                        </span>
                                    ))}

                                </div>

                                {/* BUTTONS */}
                                <div className="flex items-center gap-4 pt-5
                                border-t border-white/10">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2
                                        text-gray-300 hover:text-blue-400
                                        transition text-sm"
                                    >
                                        <Code2 size={18} />
                                        Source Code
                                    </a>

                                    <a
                                        href={project.liveDemo}
                                        className="flex items-center gap-2
                                        text-gray-300 hover:text-blue-400
                                        transition text-sm"
                                    >
                                        <ExternalLink size={17} />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                            </div>

                            {/* BOTTOM TEXT */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mt-16"
                            >

                                <p className="text-gray-500 text-sm">
                                    More projects coming soon!. Always building something new.
                                </p>

                            </motion.div>
                        </div>
                    </section>
                );
            }

            export default Projects;