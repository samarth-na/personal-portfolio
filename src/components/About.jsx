import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.webp";

const stats = [
    { value: "3rd", label: "Year CS Student" },
    { value: "5+", label: "Projects Built" },
    { value: "2+", label: "Years Coding" },
];

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 border-b border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <span className="section-label">01 — About</span>
                    <h2 className="section-title">
                        A brief account of the
                        <br />
                        engineer behind the work.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="paper-block p-3"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <img
                                src={profileImg}
                                alt="Muskan Wagh"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="meta-line mb-6">Editorial profile / Year 3 / Computer Science</div>
                        <div className="space-y-5 text-base md:text-lg leading-relaxed mb-10">
                            <p>
                                I'm a 3rd year Computer Science student, driven by the thrill of building
                                technology that solves real-world problems. What started as curiosity
                                has evolved into a dedicated pursuit of software excellence.
                            </p>
                            <p>
                                My expertise lies in crafting modern, scalable web applications using{" "}
                                <span className="text-[var(--text-primary)] font-medium">React.js</span>{" "}
                                and{" "}
                                <span className="text-[var(--text-primary)] font-medium">Next.js</span>.
                                I bridge the gap between design and development, ensuring seamless
                                experiences backed by robust systems.
                            </p>
                            <p>
                                Every project is a lesson in growth. I'm constantly experimenting with
                                MongoDB, Express, and modern APIs to understand the full stack of
                                product development.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--line)]">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.08 }}
                                    className="paper-block px-4 py-4"
                                >
                                    <div className="stat-number">{stat.value}</div>
                                    <div className="meta-line mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
