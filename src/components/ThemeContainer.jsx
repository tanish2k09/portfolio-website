import { useRef } from 'react';
import DarkModeContext from './../contexts/DarkModeContext';
import DarkModeViewModel from '../viewmodels/DarkModeViewModel';

export const ThemeContainer = (props) => {

    const darkModeVMRef = useRef(new DarkModeViewModel());

    return (
        <DarkModeContext.Provider value={darkModeVMRef.current}>
            {props.children}
        </DarkModeContext.Provider>
    )
};
