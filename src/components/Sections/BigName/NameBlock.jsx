import BigName from "./BigName.jsx";
import AccentedButton, { primary, secondary } from "./AccentedButton.jsx";
import { PAPER_PLANE } from "../../../assets/Paper_Plane.jsx";
import { COOKIE } from "../../../assets/Cookie.jsx";
import { memo } from "react";

const NameBlock = memo(() => {

    const plane_svg = (
        <PAPER_PLANE className="ml-3 sm:mr-0 sm:ml-4 self-center w-5 stroke-black group-hover:stroke-white transition duration-500" />
    );
    const cookie_svg = (
        <COOKIE className="ml-3 sm:mr-0 sm:ml-4 self-center w-5 stroke-black group-hover:stroke-white transition duration-500" />
    );

    return <section id="first_screen_block" className="h-screen relative block">
        <div id="corner_block" className="absolute bottom-0 sm:ml-8 pb-16 md:pb-0 mb-16 md:mb-4">
            <BigName />
            <div id="click_button_container" className="md:flex mt-2 md:mt-16 pb-24 px-4 sm:px-0 xl:px-4">
                <AccentedButton text="Check out my work" link="#work_showcase_text" classes={primary} svg={cookie_svg} />
                <AccentedButton text="Got a job? Let's talk!" link="#contact_me_text" classes={secondary} svg={plane_svg} />
            </div>
        </div>
    </section>
});

export default NameBlock;