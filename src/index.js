import React from "react";
import ReactDOM from "react-dom";
import BigName from "./components/BigName.jsx";
import AccentedButton from "./components/AccentedButton.jsx";
import Navbar from "./components/Navbar.jsx";
import WorkGridMasonry from "./components/WorkGridMasonry.jsx";
import ContactSocials from "./components/ContactSocials.jsx";
import ContactForm from "./components/ContactForm.jsx";

require('./components/BlobOverlay');

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
  <WorkGridMasonry />,
  document.getElementById("work_grid_container")
);

ReactDOM.render(
  <React.StrictMode>
    <AccentedButton
      text="Check out my work"
      link="#work_showcase_text"
    />
  </React.StrictMode>,
  document.getElementById("click_button_container")
);

ReactDOM.render(
  <React.StrictMode>
    <ContactForm />
  </React.StrictMode>,
  document.getElementById("contact_form_container")
);

ReactDOM.render(
  <React.StrictMode>
    <ContactSocials />
  </React.StrictMode>,
  document.getElementById("contact_socials_container")
);

require('./scripts/ContactBG');