import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <span
                        className="text-2xl text-[var(--text-primary)]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        Muskan <span style={{ color: 'var(--accent)' }}>Wagh</span>
                    </span>
                </div>
                <span className="meta-line text-center">
                        © {new Date().getFullYear()} Muskan Wagh. All rights reserved.
                </span>
                <div className="flex items-center gap-5">
                    <a
                        href="https://github.com/Maahi-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={15} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={15} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
