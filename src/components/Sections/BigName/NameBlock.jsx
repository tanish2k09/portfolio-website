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

    return <section id="first_screen_block" className="h-screen relative flex items-center align-middle justify-center">
        <div id="corner_block" className="md:w-fit w-full rounded-xl mx-8 px-4 md:pl-8 md:pr-32 py-6 md:min-w-[50%] h-fit md:mr-48 bg-white/[.15] dark:bg-black/5 backdrop-blur-xl backdrop-contrast-[1.2] dark:backdrop-blur-md dark:backdrop-contrast-100 border-[2px] dark:border-[3px] border-white/30 dark:border-gray-800/20 transition-all duration-700 shadow-md">
            <BigName />
            <div id="click_button_container" className="md:flex mt-8 md:mt-16 lg:mt-20">
                <AccentedButton text="My work" link="#work_showcase_text" classes={primary} svg={cookie_svg} />
                <AccentedButton text="Got a job? Let's talk!" link="#contact_me_text" classes={secondary} svg={plane_svg} />
            </div>
        </div>
    </section>
});

export default NameBlock;