import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
    { name: "Work",       href: "#projects"   },
    { name: "About",      href: "#about"       },
    { name: "Experience", href: "#experience"  },
    { name: "Skills",     href: "#skills"      },
    { name: "Contact",    href: "#contact"     },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen,   setIsOpen]   = useState(false);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (ticking) {
                return;
            }
            ticking = true;
            window.requestAnimationFrame(() => {
                setScrolled(window.scrollY > 40);
                ticking = false;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--line)]"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
                <a
                    href="#"
                    className="text-2xl md:text-3xl leading-none"
                    style={{ fontFamily: "var(--font-serif)" }}
                    aria-label="Go to top"
                >
                    Muskan <em className="not-italic" style={{ color: "var(--accent)" }}>Wagh</em>
                </a>

                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((l) => (
                        <a
                            key={l.name}
                            href={l.href}
                            className="text-[11px] uppercase tracking-[0.2em]"
                            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}
                        >
                            {l.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://github.com/Maahi-0"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-colors duration-200"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        <FaGithub size={15} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-colors duration-200"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        <FaLinkedin size={15} />
                    </a>
                    <div className="w-px h-4" style={{ background: "var(--line)" }} />
                    <ThemeToggle />
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="h-9 px-3 text-[10px] uppercase tracking-[0.2em] border border-[var(--line)]"
                        style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav-menu"
                    >
                        {isOpen ? "Close" : "Menu"}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]"
                        id="mobile-nav-menu"
                    >
                        <div className="px-6 pt-5 pb-7 flex flex-col gap-4">
                            {navLinks.map((l, i) => (
                                <motion.a
                                    key={l.name}
                                    href={l.href}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="text-[11px] uppercase tracking-[0.24em] py-1"
                                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {l.name}
                                </motion.a>
                            ))}
                            <div className="flex gap-5 pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                                <a href="https://github.com/Maahi-0" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FaGithub size={16} /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}><FaLinkedin size={16} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
