import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const channels = [
    {
        label: "Email",
        value: "muskanwagh1608@gmail.com",
        href: "mailto:muskanwagh1608@gmail.com",
        icon: <FaEnvelope size={18} />,
    },
    {
        label: "LinkedIn",
        value: "Muskan Wagh",
        href: "https://linkedin.com",
        icon: <FaLinkedin size={18} />,
    },
    {
        label: "GitHub",
        value: "Maahi-0",
        href: "https://github.com/Maahi-0",
        icon: <FaGithub size={18} />,
    },
];

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 border-b border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="section-label">06 — Contact</span>
                        <h2 className="section-title">
                            Open for
                            <br />
                            thoughtful collaborations.
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-secondary)" }}>
                        Open to new opportunities, collaborations, and conversations. Drop me a line — I reply within 24 hours.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        {channels.map((ch) => (
                            <a
                                key={ch.label}
                                href={ch.href}
                                target={ch.href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="paper-block group flex items-center gap-4 p-5 transition-colors duration-200"
                                aria-label={`Open ${ch.label}: ${ch.value}`}
                            >
                                <div
                                    className="w-10 h-10 border border-[var(--line)] flex items-center justify-center shrink-0 transition-colors duration-200"
                                    style={{
                                        background: "var(--card-bg)",
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    {ch.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="meta-line mb-0.5"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {ch.label}
                                    </p>
                                    <p
                                        className="text-sm truncate"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {ch.value}
                                    </p>
                                </div>
                                <FiArrowUpRight
                                    size={16}
                                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    style={{ color: "var(--accent)" }}
                                />
                            </a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="paper-block p-8 md:p-10 flex flex-col justify-between gap-8"
                    >
                        <div>
                            <h3
                                className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Want to collaborate?
                            </h3>
                            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                                I&apos;m actively looking for new opportunities and would love to talk about how I can contribute to your team or project.
                            </p>
                        </div>
                        <a
                            href="mailto:muskanwagh1608@gmail.com"
                            className="btn-primary self-start"
                        >
                            Send a Message <FiArrowUpRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
