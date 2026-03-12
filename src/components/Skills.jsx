import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

const skills = [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#3fa556" },
    { name: "React", icon: <FaReact />, color: "#61dafb" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "currentColor" },
    { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
    { name: "Express", icon: <SiExpress />, color: "currentColor" },
    { name: "C++", icon: <SiCplusplus />, color: "#3b82f6" },
    { name: "Git", icon: <FaGithub />, color: "currentColor" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 border-b border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="section-label">04 — Skills</span>
                        <h2 className="section-title">
                            Toolkit for shipping
                            <br />
                            modern web products.
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed">
                        Technologies I use to build robust, scalable digital products.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                >
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            className="paper-block flex items-center gap-3 px-4 py-4 transition-colors duration-200 group"
                        >
                            <span
                                className="text-2xl"
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </span>
                            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)] leading-tight" style={{ fontFamily: 'var(--font-mono)' }}>
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="pull-quote mt-12 text-2xl md:text-3xl max-w-2xl"
                >
                    "Tools change fast. Fundamentals stay. I keep both in motion."
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;
