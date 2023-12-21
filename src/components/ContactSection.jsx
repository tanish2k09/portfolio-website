import ContactSocials from "../components/ContactSocials.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { useEffect, useRef, useState } from "react";

const ContactSection = (props) => {

    const [opacity, setOpacity] = useState("opacity-0");
    const sectionRef = useRef(null);
    const onShow = props.onContactShow;
    const onHide = props.onContactHide;

    useEffect(() => {
        function isSectionBound() {
            let rect = sectionRef.current.getBoundingClientRect();

            return rect.top <= window.innerHeight / 4;
        }

        function show() {
            if (opacity === "opacity-100") return;
            setOpacity("opacity-100");
            onShow();
        }

        function hide() {
            if (opacity === "opacity-0") return;
            setOpacity("opacity-0");
            onHide();
        }

        function scrollHandler() {
            if (isSectionBound()) {
                show();
            } else {
                hide();
            }
        }

        window.addEventListener("scroll", scrollHandler);

        return () => { window.removeEventListener("scroll", scrollHandler); }
    }, [onShow, onHide, opacity]);

    return <section
        ref={sectionRef}
        id="contact_section"
        className={`mt-16 md:mt-32 pt-4 md:pt-16 pb-32 md:pb-8 md:min-h-screen w-full relative block fade-section ${opacity}`}
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
}

export default ContactSection;