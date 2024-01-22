import ContactSocials from "./ContactSocials.jsx";
import ContactForm from "./ContactForm.jsx";
import { useEffect, useRef, useState, useContext } from "react";
import ContactVisibilityContext from "../../../contexts/ContactVisibilityContext.jsx";

const ContactSection = () => {

    const [opacity, setOpacity] = useState("opacity-0");
    const contactVisibilityVM = useContext(ContactVisibilityContext);
    const sectionRef = useRef(null);

    useEffect(() => {
        function isSectionBound() {
            let rect = sectionRef.current.getBoundingClientRect();

            return rect.top <= window.innerHeight / 4;
        }

        function show() {
            if (opacity === "opacity-100") return;
            contactVisibilityVM.isVisible = true;
        }

        function hide() {
            if (opacity === "opacity-0") return;
            contactVisibilityVM.isVisible = false;
        }

        function scrollHandler() {
            if (isSectionBound()) {
                show();
            } else {
                hide();
            }
        }

        function viewModelObserver(isVisible) {
            // Attaching an observer also immediately emits
            // the currently stored value, so we need to check
            // if the value has changed before updating the state.
            // Without the opacity state check, the component would render twice.
            if (isVisible) {
                if (opacity === "opacity-100") return;
                setOpacity("opacity-100");
            } else {
                if (opacity === "opacity-0") return;
                setOpacity("opacity-0");
            }
        }

        contactVisibilityVM.subscribe(viewModelObserver);
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            contactVisibilityVM.unsubscribe(viewModelObserver);
        }
    }, [contactVisibilityVM, opacity]);

    return <section
        ref={sectionRef}
        id="contact_section"
        className={`mt-16 md:mt-32 pt-4 md:pt-16 pb-32 md:pb-8 md:min-h-screen w-full relative block transition-opacity duration-700 ease-in-out ${opacity}`}
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
        <div id="contact_form_container" className="mx-4 md:ml-6 lg:ml-8 xl:ml-12 md:pr-0 md:max-w-75p backdrop-blur-md">
            <ContactForm />
        </div>
        <div id="contact_socials_container" className="ml-4 md:ml-6 lg:ml-8 xl:ml-12 md:max-w-75p">
            <ContactSocials />
        </div>
    </section>
}

export default ContactSection;