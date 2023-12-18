import React, { useRef } from "react";
import BigName from "../components/BigName.jsx";
import AccentedButton, { primary, secondary } from "../components/AccentedButton.jsx";
import Navbar from "../components/Navbar.jsx";
import WorkGridMasonry from "../components/WorkGridMasonry.jsx";
import ContactSocials from "../components/ContactSocials.jsx";
import ContactForm from "../components/ContactForm.jsx";
import BlobCanvas from "../components/Blobs/BlobCanvas.jsx";

import { PAPER_PLANE } from "../assets/Paper_Plane.jsx";
import { COOKIE } from "../assets/Cookie.jsx";
import { Blob, HALF_PI } from "../components/Blobs/BlobOverlay.js";

function Home() {
    const plane_svg = (
        <PAPER_PLANE className="ml-3 sm:mr-0 sm:ml-4 self-center w-5 stroke-black group-hover:stroke-white transition duration-500" />
    );
    const cookie_svg = (
        <COOKIE className="ml-3 sm:mr-0 sm:ml-4 self-center w-5 stroke-black group-hover:stroke-white transition duration-500" />
    );

    const blobRef = useRef(null);

    function useBlob() {
        if (blobRef.current == null) {
            blobRef.current = new Blob(HALF_PI, HALF_PI);
        }
        return blobRef.current;
    }

    return (
        <div id="app">
            <div className="fixed left-0 z-0 h-full w-full flex">
                <BlobCanvas canvasId="blob_canvas" canvasClasses="w-full h-full absolute" useBlob={useBlob} />
            </div>
            <nav
                id="nav_section"
                className="fixed font-nav z-50 md:right-0 md:inline-block md:bottom-auto md:w-40 xl:w-48 md:h-full bottom-0 min-w-full md:min-w-0 text-dark transition-colors duration-700"
            >
                <Navbar />
            </nav>

            <section id="first_screen_block" className="h-screen relative block">
                <div id="corner_block" className="absolute bottom-0 sm:ml-8 pb-16 md:pb-0 mb-16 md:mb-4">
                    <BigName />
                    <div id="click_button_container" className="md:flex mt-2 md:mt-16 pb-24 px-4 sm:px-0 xl:px-4">
                        <AccentedButton text="Check out my work" link="#work_showcase_text" classes={primary} svg={cookie_svg} />
                        <AccentedButton text="Got a job? Let's talk!" link="#contact_me_text" classes={secondary} svg={plane_svg} />
                    </div>
                </div>
            </section>

            <section id="second_block" className="mt-12 md:mt-32 relative inline-block w-full md:pr-48">
                <div
                    id="work_showcase_text"
                    className="font-semibold font-display big-text-heading text-textdarker dark:text-secondary md:dark:text-shadow-md dark:text-shadow-min pl-4 md:pl-6 lg:pl-8 xl:pl-12"
                >
                    <span className="text-textdarker dark:text-primary">Work</span> showcase:
                </div>
                <div id="work_grid_container" className="xl:mt-4 md:pl-2 lg:pl-6 xl:pl-8 w-full">
                    <WorkGridMasonry />
                </div>
            </section>

            <section id="third_block" className="mt-16 md:mt-32 relative block">
                <div
                    id="about_me_text"
                    className="font-semibold font-display big-text-heading text-textdarker dark:text-secondary dark:text-shadow-md pl-4 md:pl-6 lg:pl-8 xl:pl-12"
                >
                    <span className="text-textdarker dark:text-primary">About</span> me:
                </div>
                <div
                    className="about-card transition-colors duration-500 dark:bg-dark md:ml-6 lg:ml-8 xl:ml-12 text-textdarker dark:text-primary md:max-w-75p lg:max-w-80p text-sm xl:text-lg font-body p-4 sm:p-8"
                >
                    <p>So, you made it this far into my website. Hopefully you find it interesting!</p>
                    <br />
                    <p>
                        <span className="transition-colors duration-500 text-dark dark:text-accent font-medium dark:font-normal"
                        >👨‍💻 Let me introduce myself:</span
                        >
                        I'm Tanish Manku, an originally self-taught and later professionally-trained Software Developer
                        based in Vancouver, Canada.
                    </p>
                    <br />
                    <p>
                        I started coding at the age of 12 👶, and the first programming languages I ever used were qBasic
                        and C. Over the years I've picked up many skills, I've dipped my feet in Flutter, Linux, Unity,
                        Visual Basic, Web Development, and I've dived way deeper into Android and iOS . I discovered my
                        sweet spot in mobile app development for Android and iOS back when I was in high school, and I
                        devoted most of my free time to it, learning patterns like MVVM and MVC, while keeping up-to-date
                        with the latest frameworks like AndroidX and Jetpack. I've always had a particular obsession with
                        design and creating beautiful interactive interfaces, especially ones that are math or
                        physics-driven.
                    </p>
                    <br />
                    <p>
                        This allows me to build some nice and fluid user-interfaces. Bézier curves and splines seem to be
                        all the rage in animations these days. Pairing it with my UI design skills, I can create some
                        delicious eye-candy interactive custom effects. The blob and logos you see in the background is one
                        example, they react when you move the mouse around too! 🤯
                    </p>
                    <br />
                    <p>
                        Apart from coding, I also love cooking 🍔 and working out 💪 - the perfect health and fitness combo
                        - as well as playing sports like Badminton 🏸 and Soccer ⚽️. I'm no stranger to video games 🎮
                        either and spend a bunch of time playing online with my friends. Ask me about Quantum Break, my
                        favourite game, and I'll ramble on for HOURS! I've hiked 🥾 on the Himalayas 🏔️, I've walked up a
                        thousand stairs to a temple 🛕, I've gone paragliding 🪂, I've ridden horses 🏇, elephants 🐘,
                        camels 🐫 - and yet somehow I never quite learned to swim 🏊‍♂️, but I'd absolutely love to! I remember
                        taking swimming lessons as a kid for a couple weeks alongside some martial arts 🥋 lessons - but
                        surprisingly never sustained either 😂
                    </p>
                    <br />
                    <br />
                    <p className="font-mono">
                        <span className="transition-colors duration-500 text-semidark dark:text-accent text-md block"
                        >Languages:</span
                        >
                        <span className="transition-colors duration-500 mt-2 text-hintdark dark:text-hintyellow block"
                        >Java, Kotlin, Swift, JavaScript, TypeScript, Dart, C, C++, C#, HTML, SQL, CSS, XML</span
                        >
                        <br /><br />
                        <span className="transition-colors duration-500 text-semidark dark:text-accent text-md block"
                        >Have used:</span
                        >
                        <span className="transition-colors duration-500 mt-2 text-hintdark dark:text-hintyellow block"
                        >Android SDK, iOS SDK, Flutter SDK, Spotify Web API, Discord bot API, Twitter bot API, ReactJS,
                            TailwindCSS, Git, Unity</span
                        >
                    </p>
                </div>
            </section>

            <section
                id="contact_section"
                className="mt-16 md:mt-32 pt-4 md:pt-16 pb-32 md:pb-8 md:min-h-screen w-full relative block fade-section"
            >
                {/* <!-- A little help for the Netlify bots if you're not using a SSG --> */}
                <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
                    <p className="hidden">
                        <label> Don’t fill this out if you’re human: <input name="bot-field" /> </label>
                    </p>
                    <input required type="text" name="name" autoComplete="name" />
                    <input required type="email" name="email" autoComplete="email" />
                    <textarea required name="message"></textarea>
                </form>

                <div
                    id="contact_me_text"
                    className="font-semibold font-display big-text-heading text-contactlight dark:text-contactdark pl-4 md:pl-6 lg:pl-8 xl:pl-12 transition-colors duration-500"
                >
                    <span>Contact me:</span>
                </div>
                <div id="contact_form_container" className="px-4 md:pl-6 lg:pl-8 xl:pl-12 md:pr-0 md:max-w-75p">
                    <ContactForm />
                </div>
                <div id="contact_socials_container" className="pl-4 md:pl-6 lg:pl-8 xl:pl-12 md:max-w-75p">
                    <ContactSocials />
                </div>
            </section>
        </div>
    );
}

export default Home;