import DarkModeContext from './../contexts/DarkModeContext';
import { useDarkModeVM } from './../hooks/UseDarkModeVM';
import { useEffect } from 'react';

export const ThemeContainer = (props) => {

    const darkModeVM = useDarkModeVM();

    console.log("ThemeContainer: ", darkModeVM);

    useEffect(() => {
        function darkModeObserver(isDarkMode) {
            // Change HTML class dark mode
            if (isDarkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }

        darkModeVM.subscribe(darkModeObserver);
        return () => {
            darkModeVM.unsubscribe(darkModeObserver);
        }
    }, [darkModeVM]);

    return (
        <DarkModeContext.Provider value={darkModeVM}>
            {props.children}
        </DarkModeContext.Provider>
    )
};
