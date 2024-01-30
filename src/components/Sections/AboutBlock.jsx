import { memo } from "react";

export const AboutBlock = memo(() => {
    return <section id="third_block" className="mt-16 md:mt-32 relative block">
        <div
            id="about_me_text"
            className="backdrop-blur-sm w-fit rounded-lg font-semibold font-display big-text-heading text-textdarker dark:text-secondary dark:text-shadow-md pl-4 md:pl-6 lg:pl-8 xl:pl-12 transition-all"
        >
            <span className="text-textdarker dark:text-primary">About</span> me:
        </div>
        <div
            className="about-card text-md md:text-xl transition-colors duration-500 bg-primarylight/75 md:bg-white/60 dark:bg-dark/75 dark:md:bg-dark/[.60] backdrop-blur-md md:backdrop-blur-xl md:ml-6 lg:ml-8 xl:ml-12 text-textdarker dark:text-primary md:max-w-75p lg:max-w-80p font-body p-4 sm:p-8 border-[2px] border-gray-100/40 dark:border-dark/50"
        >
            <p>So, you made it this far into my website. Hopefully you find it interesting!</p>
            <br />
            <p>
                <span className="transition-colors duration-500 text-dark dark:text-accent font-medium dark:font-normal pr-2"
                >👨‍💻 Let me introduce myself:</span>
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
            <div>
                <span className="transition-colors duration-500 text-textdarker font-medium dark:text-accent text-md block"
                >Languages:</span>
                <span className="transition-colors duration-500 mt-2 text-hintdark dark:text-hintyellow block font-mono"
                >Java, Kotlin, Swift, JavaScript, TypeScript, Dart, C, C++, C#, HTML, SQL, CSS, XML</span
                >
                <br /><br />
                <span className="transition-colors duration-500 text-textdarker font-medium dark:text-accent text-md block"
                >Have used:</span>
                <span className="transition-colors duration-500 mt-2 text-hintdark dark:text-hintyellow block font-mono"
                >Android SDK, iOS SDK, Flutter SDK, Spotify Web API, Discord bot API, Twitter bot API, ReactJS,
                    TailwindCSS, Git, Unity</span>
            </div>
        </div>
    </section>
});