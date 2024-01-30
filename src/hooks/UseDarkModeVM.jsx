import DarkModeViewModel from '../viewmodels/DarkModeViewModel';
import { useRef } from 'react';

export const useDarkModeVM = () => {

    const darkModeVMRef = useRef(null)

    if (darkModeVMRef.current === null)
        darkModeVMRef.current = new DarkModeViewModel();

    return darkModeVMRef.current;
};