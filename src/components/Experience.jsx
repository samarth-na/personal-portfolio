import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const experiences = [
    {
        role: "Google Student Ambassador",
        company: "Google for Gemini",
        period: "2025 — 2026",
        description: "Representing Google AI initiatives on campus, promoting Gemini and other AI tools, and facilitating AI-focused learning opportunities for students.",
        type: "Community",
    },
    {
        role: "Campus Ambassador",
        company: "MyCaptain",
        period: "2025",
        description: "Leading marketing initiatives and student community engagement as a Campus Ambassador for MyCaptain.",
        type: "Leadership",
    },
    {
        role: "Campus Representative",
        company: "Pregrad",
        period: "2025",
        description: "Representing Pregrad as a Campus Ambassador Intern, focusing on student outreach and career acceleration initiatives.",
        type: "Leadership",
    },
    {
        role: "Sponsorship Co-Lead",
        company: "GDG on Campus SUI Indore",
        period: "2024 — 2025",
        description: "Leading sponsorship initiatives, managing relations with partners, and securing resources for community events and technical workshops.",
        type: "Community",
    },
    {
        role: "Full Stack Dev & DSA",
        company: "Technical Skill Enhancement",
        period: "Ongoing",
        description: "Currently mastering the full stack and strengthening Data Structures & Algorithms proficiency through consistent practice and project building.",
        type: "Learning",
    },
];

const ExpRow = ({ exp, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="exp-row w-full text-left px-0 py-5 md:py-6 flex items-start md:items-center justify-between gap-6 group"
            >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1 min-w-0">
                    <span className="meta-line tabular-nums shrink-0 w-6">
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3
                        className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] transition-colors duration-200 truncate"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        {exp.role}
                    </h3>

                    <span className="text-sm text-[var(--text-secondary)] shrink-0">
                        {exp.company}
                    </span>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden md:block meta-line">
                        {exp.period}
                    </span>
                    <span
                        className="hidden md:block text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border"
                        style={{
                            borderColor: 'var(--line)',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-mono)',
                        }}
                    >
                        {exp.type}
                    </span>
                    <FaChevronDown
                        size={12}
                        className={`text-[var(--text-secondary)] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                </div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pl-0 md:pl-14 flex flex-col md:flex-row gap-6">
                            <p className="leading-relaxed text-base max-w-2xl">
                                {exp.description}
                            </p>
                            <div className="flex md:hidden items-center gap-3 flex-wrap">
                                <span className="meta-line">{exp.period}</span>
                                <span
                                    className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border"
                                    style={{ borderColor: 'var(--line)', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
                                >{exp.type}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 border-b border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="section-label">02 — Experience</span>
                        <h2 className="section-title">
                            Roles, communities,
                            <br />
                            and continuous learning.
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed">
                        Community involvement, leadership roles, and ongoing skill development.
                    </p>
                </motion.div>

                <div className="border-t border-[var(--line)] paper-block px-5 md:px-7">
                    {experiences.map((exp, i) => (
                        <ExpRow key={i} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
