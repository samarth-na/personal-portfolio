import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import CampusConnectImg from "../assets/campus-connect.webp";

const projects = [
    {
        num: "01",
        title: "Campus Connect",
        description: "A centralized platform for student discovery of clubs and events, built with Next.js.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        github: "https://github.com/Maahi-0/Campus-Connect",
        image: CampusConnectImg,
        featured: true,
    },
    {
        num: "02",
        title: "Full-Stack Journey",
        description: "Mastering Next.js through building real-world applications and optimizing performance.",
        tech: ["Next.js", "React", "Server Components"],
        github: "https://github.com/Maahi-0/NEXt.js---full-stack",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
        featured: false,
    },
    {
        num: "03",
        title: "Learning React",
        description: "A comprehensive collection of React experiments and advanced component patterns.",
        tech: ["React.js", "Vite", "Design Systems"],
        github: "https://github.com/Maahi-0/Learning-React",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
        featured: false,
    },
    {
        num: "04",
        title: "Node.js Core",
        description: "Exploring backend architecture, REST APIs, and scalable server-side systems.",
        tech: ["Node.js", "Express", "API Design"],
        github: "https://github.com/Maahi-0/Node-js",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
        featured: false,
    },
];

const ProjectCard = ({ project, index }) => {
    const isFeatured = project.featured;

    return (
        <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`paper-block group ${isFeatured ? 'md:col-span-2' : 'md:col-span-1'}`}
        >
            <div className={`relative overflow-hidden bg-[var(--card-bg)] ${isFeatured ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white"
                        aria-label={`Open ${project.title} on GitHub`}
                    >
                        <FaGithub size={14} />
                    </a>
                </div>

                <div
                    className="absolute top-4 left-4 text-[10px] tabular-nums px-2.5 py-1 border"
                    style={{ background: 'var(--paper)', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', borderColor: 'var(--line)' }}
                >
                    {project.num}
                </div>
            </div>

            <div className="p-5 border-t border-[var(--line)]">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                        className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        {project.title}
                    </h3>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors shrink-0 mt-2"
                        aria-label={`View ${project.title} on GitHub`}
                    >
                        <FaArrowUpRightFromSquare size={14} />
                    </a>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="tag">{t}</span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 border-b border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="section-label">05 — Work</span>
                        <h2 className="section-title">
                            Selected projects
                            <br />
                            and experiments.
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed">
                        A collection of work exploring web development, product design, and engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
