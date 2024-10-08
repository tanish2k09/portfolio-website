import { useRef } from "react";
import BlobCanvas from "../components/Blobs/BlobCanvas";
import LogoCanvas from "../components/Logos/LogoCanvas";
import { OverlayContainer } from "../components/OverlayContainer";
import { LogosGrid } from "../components/Logos/LogoOverlay";
import { ThemeContainer } from "../components/ThemeContainer";
import DarkModeToggle from "../components/Sections/Nav/DarkModeToggle";
import { useWorker } from "../hooks/UseWorker";

const Error404 = () => {

    const workerRef = useWorker();
    const logosRef = useRef(null);

    function useLogos() {
        if (logosRef.current == null) {
            logosRef.current = new LogosGrid();
        }
        return logosRef.current;
    }
    const useLogosCallback = useLogos;

    return (
        <ThemeContainer>
            <div className="w-screen h-screen relative z-0 dark:bg-dark bg-primarylight overscroll-x-none transition-all duration-500 md:dark:text-shadow-md dark:text-shadow-min font-nav">
                <OverlayContainer>
                    <LogoCanvas canvasClasses="w-full h-full z-[-1] absolute" useLogos={useLogosCallback} />
                    <BlobCanvas canvasClasses="w-full h-full z-0 absolute" useWorker={workerRef} disableExpansion={true} />
                </OverlayContainer>
                <div className="relative w-full h-full flex flex-col justify-center items-center z-[1]">
                    <h1 className="text-3xl font-semibold text-textdarker dark:text-primary">404</h1>
                    <h2 className="md:text-xl lg:text-5xl font-semibold text-secondary lg:mx-64 p-8 text-center md:text-shadow-min">Cuuuurious, how'd you end up here?</h2>
                    <a href="/" className="mt-4 font-semibold text-center text-black group hover:bg-black dark:hover:bg-black hover:text-primary rounded-full border-accentsecondarytrim border-4 text-xs md:text-base px-2 py-4 sm:p-4 transition duration-500 ease-out transform hover:scale-110 bg-accentsecondary">
                        <button> Let's go back home.</button>
                    </a>
                </div>
            </div>
            <div className="absolute top-0 right-0">
                <DarkModeToggle />
            </div>

        </ThemeContainer>
    )
}

export default Error404;