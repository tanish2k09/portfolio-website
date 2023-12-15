import { useRef } from "react";
import BlobCanvas from "../components/Blobs/BlobCanvas";
import { Blob, HALF_PI } from "../components/Blobs/BlobOverlay.js";

export default () => {

    const blobRef = useRef(null);

    function useBlob() {
        if (blobRef.current == null) {
            blobRef.current = new Blob(HALF_PI, HALF_PI);
        }
        return blobRef.current;
    }

    return (
        <div className="w-full h-full">
            <BlobCanvas canvasId="blob_canvas" canvasClasses="w-full h-full absolute" useBlob={useBlob} />
        </div>
    )
}