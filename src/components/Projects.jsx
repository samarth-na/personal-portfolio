import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import CampusConnectImg from "../assets/campus-connect.png";

const projects = [
    {
        title: "Campus Connect",
        description: "A centralized platform for student discovery of clubs and events, built with Next.js.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        github: "https://github.com/Maahi-0/Campus-Connect",
        image: CampusConnectImg,
    },
    {
        title: "Full-Stack Journey",
        description: "Mastering Next.js through building real-world applications and optimizing performace.",
        tech: ["Next.js", "React", "Server Components"],
        github: "https://github.com/Maahi-0/NEXt.js---full-stack",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Learning React",
        description: "A comprehensive collection of React experiments and advanced component patterns.",
        tech: ["React.js", "Vite", "Design Systems"],
        github: "https://github.com/Maahi-0/Learning-React",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Node.js Core",
        description: "Exploring backend architecture, REST APIs, and scalable server-side systems.",
        tech: ["Node.js", "Express", "API Design"],
        github: "https://github.com/Maahi-0/Node-js",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                        Selected <span className="text-[var(--text-primary)]">Work.</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg font-light max-w-2xl mx-auto">
                        A collection of projects exploring web development, product design, and software engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="card-minimal h-full flex flex-col p-4">
                                <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="px-2 pb-2 flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed font-light">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-[var(--bg-secondary)] text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] rounded-full border border-[var(--card-border)]">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-6 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] hover:opacity-70 transition-colors"
                                        >
                                            <FaGithub /> Source Code
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] hover:opacity-70 transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Case Study
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
