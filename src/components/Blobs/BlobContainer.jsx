import { memo } from "react"
import BlobCanvas from "./BlobCanvas.jsx";

export const BlobContainer = memo(({ useBlob }) => {
    return <div className="fixed left-0 z-0 h-full w-full flex">
        <BlobCanvas canvasId="blob_canvas" canvasClasses="w-full h-full absolute" useBlob={useBlob} />
    </div>
});