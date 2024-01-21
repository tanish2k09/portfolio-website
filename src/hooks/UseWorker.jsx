import { useRef } from "react";
import { Blob, HALF_PI } from "../components/Blobs/BlobOverlay.js";

export const useWorker = () => {
    const workerRef = useRef(null);

    // Create new instance only if it doesn't exist
    if (workerRef.current === null) {
        workerRef.current = {
            isBlob: true,
            instance: new Blob(HALF_PI, HALF_PI),
        }
    }

    return workerRef.current;
}