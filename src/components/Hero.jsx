import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-24 md:pt-28 pb-16 border-b border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="meta-line mb-8 md:mb-14"
                >
                    Issue 01 / Portfolio Chronicle / 2026 Edition
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1
                        className="font-semibold leading-[0.86] text-[var(--text-primary)]"
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(3.7rem, 10vw, 8.8rem)',
                        }}
                    >
                        Muskan<br />
                        <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Wagh.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
                    className="mt-10 md:mt-14 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14"
                >
                    <p className="text-lg md:text-2xl leading-relaxed md:pr-10" style={{ fontFamily: 'var(--font-serif)' }}>
                        Software engineer focused on meaningful products, clean interaction, and durable code.
                        I build full-stack experiences with React, Next.js, Node.js, and thoughtful design systems.
                    </p>

                    <div className="paper-block p-6 md:p-7 flex flex-col gap-6">
                        <p className="meta-line">Software Engineer / Full Stack Developer / Indore, India</p>
                        <p className="text-sm leading-relaxed">
                            Available for internships, freelance collaborations, and product engineering roles.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <a href="#projects" className="btn-primary">
                                View Work <FaArrowRight size={10} />
                            </a>
                            <a href="#contact" className="btn-ghost">Say Hello</a>
                        </div>
                    </div>
                </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="mt-14 md:mt-20 pt-6 border-t border-[var(--line)] flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
                <div className="meta-line flex items-center gap-5">
                    <span>Based in India</span>
                    <span>Open to Opportunities</span>
                </div>
                <div className="meta-line">Scroll and explore selected work</div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.65 }}
                className="pull-quote mt-16 text-2xl md:text-4xl max-w-3xl"
            >
                "Build with patience. Refine with intent. Ship with clarity."
            </motion.p>
            </div>
        </section>
    );
};

export default Hero;
