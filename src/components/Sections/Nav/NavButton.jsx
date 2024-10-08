import { useContext } from 'react';
import NavContrastContext from '../../../contexts/NavContrastContext';

export default function NavButton(props) {

    const NavContrast = useContext(NavContrastContext);

    let overlayStyle = "";
    if (NavContrast) {
        overlayStyle = "md:dark:bg-contactdark";
    }

    return (
        <button className="bg-transparent md:backdrop-blur-md rounded-lg group md:flex p-2 md:mx-2 mt-2 md:my-2 items-center md:float-right">
            <span className="md:mr-3 font-medium lg:text-xl hidden md:inline-block">{props.text}</span>
            <span className="md:mr-3 border-b-2 md:border-b-none border-b-dark dark:border-b-primarylight font-semibold inline-block md:hidden">{props.smallText}</span>
            <span className="hidden md:flex nav-blob-wrapper relative items-center w-full min-h-1 max-h-1 md:max-h-full md:w-1 mt-2 md:mt-auto">
                <span className={`${overlayStyle} bg-textdark rounded-full nav-blob md:group-hover:h-full inline-block`}></span>
            </span>
        </button>
    )
}