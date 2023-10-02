import React from "react";
import ReactDOM from "react-dom";
import BigName from "./components/BigName.jsx";
import AccentedButton, { primary, secondary } from "./components/AccentedButton.jsx";
import Navbar from "./components/Navbar.jsx";
import WorkGridMasonry from "./components/WorkGridMasonry.jsx";
import ContactSocials from "./components/ContactSocials.jsx";
import ContactForm from "./components/ContactForm.jsx";

import { PAPER_PLANE } from "./assets/Paper_Plane.jsx";
import { COOKIE } from "./assets/Cookie.jsx";

require("./components/LogoOverlay");
require("./components/BlobOverlay");

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

ReactDOM.render(<WorkGridMasonry />, document.getElementById("work_grid_container"));

const plane_svg = (
    <PAPER_PLANE classes="ml-3 sm:mr-0 sm:ml-4 self-center w-5 stroke-black group-hover:stroke-white transition duration-500" />
);
const cookie_svg = (
    <COOKIE classes="ml-3 sm:mr-0 sm:ml-4 self-center w-5 stroke-black group-hover:stroke-white transition duration-500" />
);
ReactDOM.render(
    <React.StrictMode>
        <AccentedButton text="Check out my work" link="#work_showcase_text" classes={primary} svg={cookie_svg} />
        <AccentedButton text="Got a job? Let's talk!" link="#contact_me_text" classes={secondary} svg={plane_svg} />
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

require("./scripts/ContactBG");
