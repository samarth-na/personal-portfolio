import React from "react";
import { motion } from "framer-motion";

const bullets = [
    "3rd Year Student in Computer Science",
    "Specialising in MERN Stack Development",
    "Actively involved in Technical Communities",
];

const tags = ["Architecture", "Real-world Labs", "Community Lead", "MERN Stack"];

const Education = () => {
    return (
        <section id="education" className="py-24 md:py-32 border-b border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-14"
                >
                    <span className="section-label">Education</span>
                    <h2 className="section-title">
                        Academic foundation,
                        <br />
                        practical orientation.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="paper-block p-7 md:p-8"
                    >
                        <span className="meta-line mb-6 block" style={{ color: 'var(--accent)' }}>2023 — 2027</span>

                        <h3
                            className="text-4xl md:text-5xl font-semibold mb-1"
                            style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)" }}
                        >
                            Bachelor of Technology
                        </h3>
                        <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                            SAGE University Indore · Computer Science
                        </p>

                        <ul className="space-y-3">
                            {bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                    <span
                                        className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                                        style={{ background: "var(--accent)" }}
                                    />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="paper-block p-7 md:p-8 flex flex-col justify-center gap-6"
                    >
                        <h4
                            className="text-4xl font-semibold"
                            style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)" }}
                        >
                            Focus &amp; Specialisation
                        </h4>
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            My academic journey bridges theoretical foundations with practical, industry-standard engineering.
                            I focus on building scalable systems while maintaining clean, maintainable codebases — always with
                            real-world deployment in mind.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {tags.map((t, i) => (
                                <span key={i} className="tag">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
