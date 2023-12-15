import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

require("./components/LogoOverlay");
require("./components/BlobOverlay");

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)

require("./scripts/ContactBG");
