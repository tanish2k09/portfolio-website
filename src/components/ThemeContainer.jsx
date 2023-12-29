import { useRef, useState, useEffect } from 'react';
import DarkModeContext from './../contexts/DarkModeContext';
import DarkModeViewModel from '../viewmodels/DarkModeViewModel';

export const ThemeContainer = (props) => {

    const darkModeVMRef = useRef(null);

    const useDarkModeVM = () => {
        if (darkModeVMRef.current === null)
            darkModeVMRef.current = new DarkModeViewModel();
        return darkModeVMRef.current;
    };

    const [isDark, setDarkMode] = useState(true);

    // Subscribe to the dark mode changes via VM and manage dark mode
    const darkModeVM = useDarkModeVM();
    useEffect(() => {
        function darkModeObserver(isDarkMode) {
            // Prevent duplicate state changes
            if (isDark === isDarkMode)
                return;

            // Update the state - will cause Home to re-render
            setDarkMode(isDarkMode);
        }

        darkModeVM.subscribe(darkModeObserver);

        return () => {
            darkModeVM.unsubscribe(darkModeObserver);
        }
    }, [darkModeVM, isDark, setDarkMode]);

    return (
        <DarkModeContext.Provider value={darkModeVM}>
            <div className={`${isDark ? "dark" : ""}`}>
                {props.children}
            </div>
        </DarkModeContext.Provider>
    )
};
