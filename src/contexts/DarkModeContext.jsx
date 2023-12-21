import { createContext, useState } from 'react';

const initIsDark = (localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)

export const DarkModeContext = createContext();

export const DarkModeProvider = (props) => {

    const [isDark, setDarkMode] = useState(initIsDark);

    const toggleTheme = () => {
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        setDarkMode(!isDark);
    }

    return (
        <DarkModeContext.Provider value={{ isDark, toggleTheme }}>
            {props.children}
        </DarkModeContext.Provider>
    );
}