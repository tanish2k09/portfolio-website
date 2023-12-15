import React from "react";
import ReactDOM from "react-dom";
import Home from "./routes/Home.jsx";
import Error404 from "./routes/Error404.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

require("./components/LogoOverlay");
// require("./components/BlobOverlay");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root")
);

// require("./scripts/ContactBG");
