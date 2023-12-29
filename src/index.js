import React from "react";
import ReactDOM from "react-dom";
import Home from "./routes/Home.jsx";
import Error404 from "./routes/Error404.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContainer } from "./components/ThemeContainer.jsx";

require("./components/LogoOverlay");

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ThemeContainer>
                <Home />
            </ThemeContainer>
        ),
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));
