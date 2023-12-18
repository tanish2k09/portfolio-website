import { useRef } from "react";
import BlobCanvas from "../components/Blobs/BlobCanvas";
import { Blob, HALF_PI } from "../components/Blobs/BlobOverlay.js";

const Error404 = () => {

    const blobRef = useRef(null);

    function useBlob() {
        if (blobRef.current == null) {
            blobRef.current = new Blob(HALF_PI, HALF_PI);
        }
        return blobRef.current;
    }

    return (
        <div className="w-screen h-screen relative z-0 md:dark:text-shadow-md dark:text-shadow-min font-nav">
            <BlobCanvas canvasId="blob_canvas" canvasClasses="w-full h-full absolute -z-[2]" useBlob={useBlob} />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold text-textdarker dark:text-primary">404</h1>
                <h2 className="md:text-xl lg:text-5xl font-semibold text-textdark dark:text-secondary lg:mx-64 p-8 text-center">Cuuuurious, how'd you end up here?</h2>
                <a href="/" className="mt-4 font-semibold text-center text-black group hover:bg-black dark:hover:bg-black hover:text-primary rounded-full border-accentsecondarytrim border-4 text-xs md:text-base px-2 py-4 sm:p-4 transition duration-500 ease-out transform hover:scale-110 bg-accentsecondary">
                    <button> Let's go back home.</button>
                </a>
            </div>
        </div>
    )
}

export default Error404;