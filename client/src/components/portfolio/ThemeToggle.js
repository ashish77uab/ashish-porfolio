import React, { useState, useEffect } from 'react';
import { reactIcons } from '../../utils/icons';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark';
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="w-12 h-12 rounded-full text-xl flex-center  text-white bg-sky-600 dark:bg-yellow-500 dark:text-black     z-[1000] fixed top-4 right-4"
        >
            {darkMode ? reactIcons.moon : reactIcons.sun}
        </button>
    );
};

export default ThemeToggle;
