import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-wavy">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center max-w-4xl"
                >
                    <h2 className="text-lg md:text-xl font-medium text-[var(--text-primary)] mb-4 tracking-tight">
                        Software Engineer & Full Stack Developer
                    </h2>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-[var(--text-primary)]">
                        Muskan <br className="md:hidden" /> Wagh.
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        Crafting intuitive digital experiences through clean code.
                        Focused on building scalable web applications with Next.js.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="#projects"
                            className="group relative px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-4 border border-[var(--card-border)] text-[var(--text-primary)] rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all active:scale-95"
                        >
                            Get in touch
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Subtle floating elements for a premium feel */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-[var(--text-secondary)] to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--text-secondary)] font-bold">Scroll</span>
            </motion.div>
        </section >
    );
};

export default Hero;
