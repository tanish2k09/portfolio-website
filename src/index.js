import React from "react";
import ReactDOM from "react-dom";
import BigName from "./components/BigName.jsx";
import AccentedButton from "./components/AccentedButton.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollingCardsContent from "./components/ScrollingCardsContent.jsx";
require("./components/BlobOverlay.js");

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById("nav_section")
);

ReactDOM.render(
  <React.StrictMode>
    <BigName />
  </React.StrictMode>,
  document.getElementById("big_name_container")
);

ReactDOM.render(
  <React.StrictMode>
    <AccentedButton
      type="primary"
      text="Check out my work"
      link="#work_showcase_text"
    />
  </React.StrictMode>,
  document.getElementById("click_button_container")
);

ReactDOM.render(
  <React.StrictMode>
    <ScrollingCardsContent />
  </React.StrictMode>,
  document.getElementById("scroll_work_container")
);
