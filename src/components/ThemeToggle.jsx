import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            type="button"
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
            className="h-9 px-3 inline-flex items-center justify-center gap-2 transition-all duration-200"
            style={{
                border: '1px solid var(--line)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
            {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
            <span className="text-[10px] uppercase tracking-[0.2em]">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
    );
};

export default ThemeToggle;
