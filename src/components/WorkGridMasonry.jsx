import React from 'react';
import Masonry from 'react-masonry-component';
import ProjectCard, { CTA_TEXT, github } from './ProjectCard';

import SCE from "../assets/sce-p4xl-mock.png";
import MEDIUM from "../assets/Medium-Logo-Black-RGB.svg";
import KLAPSE from "../assets/klapse.png";
import DT2W from "../assets/dt2w.svg";
import T2S from "../assets/t2s.svg";
import SPOTIFY from "../assets/spotify.svg";
import RESCUEDIALER from "../assets/rescuedialer.svg";
import BLOBBYDARK from "../assets/blobbydark.png";
import BLOBBYLIGHT from "../assets/blobbylight.png";
import HUBSFU from "../assets/hubSFU.png";
import LOGOSWALL from "../assets/logos-wallpaper.svg";
import LOGOSWALLDARK from "../assets/logos-wallpaper-dark.svg";

const masonryOptions = {
    transitionDuration: 200,
    columnWidth: ".work-grid",
    percentPosition: true
};

export default function WorkGridMasonry() {
    return (
        <Masonry options={masonryOptions}>
            <div className="work-grid md:m-0"></div>

            {/* SCE */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-sceteal"}
                asset={SCE}
                assetAlt={"Smurf Config Editor mockup"}
                imageClasses={"object-contain"}
                cardColor={"bg-scedark"}
                tags={[
                    { text: "Android" },
                    { text: "Kotlin" },
                    { text: "Java" },
                    { text: "XML" }
                ]}
                name={"Smurf Config Editor"}
                description={"A beautiful, fast and modern Android companion app for SmurfKernel."}
                ctas={[
                    { url: github("SmurfConfigEditor"), title: CTA_TEXT.GITHUB },
                    { url: "https://play.google.com/store/apps/details?id=com.tanish2k09.sce", title: CTA_TEXT.PSTORE }
                ]}
            />

            {/* Medium articles */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-klapsewhite"}
                svgOptions={"align-center justify-center flex min-h-56 max-h-64"}
                asset={MEDIUM}
                assetAlt={"Medium.com vector logo"}
                imageClasses={"object-contain w-1/2"}
                cardColor={"bg-white"}
                tags={[
                    { text: "Miscellaneous" },
                    { text: "Blog" },
                    { text: "Android" },
                    { text: "Design" }
                ]}
                name={"Medium Articles"}
                description={"Thoughtfully crafted articles/guides published on Medium.com - covers advanced development topics I picked up over the years."}
                ctas={[
                    { url: "https://medium.com/@tanish2k09/", title: CTA_TEXT.BLOG }
                ]}
            />

            {/* Logos Wallpaper */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-logosWallpaperFg dark:bg-logosWallpaperFgDark"}
                svgOptions={"min-h-56 max-h-64 relative flex align-items-center justify-center top-0 left-0"}
                asset={LOGOSWALLDARK}
                assetDark={LOGOSWALL}
                assetAlt={"Logos Wallpaper app vector logo"}
                // imageClasses={"object-contain w-1/2"}
                imageClasses={"object-contain w-1/2 relative top-0 left-0 opacity-100 dark:opacity-0 transition-opacity duration-500"}
                imageClassesDark={"object-contain w-1/2 opacity-0 dark:opacity-100 transition-opacity duration-500"}
                imageOverlapClasses={'absolute flex align-items-center justify-center top-0 left-0 h-full w-full'}
                cardColor={"bg-logosWallpaperBg dark:bg-logosWallpaperBgDark"}
                tagColor={"bg-logosWallpaperFg dark:bg-logosWallpaperFgDark text-logosWallpaperDark dark:text-logosWallpaper"}
                textColor={"text-logosWallpaperDark dark:text-logosWallpaper"}
                borderColor={"border-logosWallpaperBgDark dark:border-logosWallpaperBg"}
                tags={[
                    { text: "Android" },
                    { text: "Kotlin" },
                    { text: "Jetpack Compose" }
                ]}
                name={"Logos Wallpaper"}
                description={"Logos Wallpaper is a modern, clean and minimal wallpaper generator app using beautiful logo sets. Each generated wallpaper is designed specifically for your device. With 400+ logos and a whole lot of customization options you can make the perfect wallpaper - be yourself!"}
                ctas={[
                    { url: "https://play.google.com/store/apps/details?id=com.tanish2k09.logoswallpaper", title: CTA_TEXT.PSTORE },
                    { url: "/privacy/logos_wallpaper.html", title: CTA_TEXT.PPOL }
                ]}
                ctaClasses={"border-logosWallpaperBgDark dark:border-logosWallpaperBg text-logosWallpaperDark dark:text-logosWallpaper hover:bg-logosWallpaperBgDark hover:text-logosWallpaper dark:hover:bg-logosWallpaperBg dark:hover:text-logosWallpaperDark transition-colors duration-500"}
            />

            {/* Rescue Dialer */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-rescuedialer"}
                svgOptions={"align-center justify-center flex min-h-64"}
                asset={RESCUEDIALER}
                assetAlt={"Rescue Dialer vector logo"}
                imageClasses={"object-contain w-64 h-64 transform scale-50"}
                cardColor={"bg-rescuedialerdark"}
                tags={[
                    { text: "Android" },
                    { text: "Kotlin" },
                    { text: "XML" }
                ]}
                name={"Rescue Dialer"}
                description={"An Android app for simulating a real call, customizable with a set of triggers, timers, ringtones, pre-set audio messages and even fake contact info! This app was commissioned by OTIKA."}
                ctas={[
                    { url: "https://play.google.com/store/apps/details?id=com.otika.rescuedialer", title: CTA_TEXT.PSTORE }
                ]}
            />

            {/* hubSFU */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-hubSFU"}
                asset={HUBSFU}
                assetAlt={"hubSFU image"}
                imageClasses={"object-contain"}
                cardColor={"bg-hubSFUdark"}
                tags={[
                    { text: "Android" },
                    { text: "Kotlin" },
                    { text: "XML" }
                ]}
                name={"hubSFU"}
                description={"A community-focused Android app, built around the needs and feedback of local university students. This project was developed in 1 effective day - from concept to design to app - during a hackathon."}
                ctas={[
                    { url: github('stormhacks2023'), title: CTA_TEXT.GITHUB }
                ]}
            />

            {/* Spotify Release Reader */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-spotify"}
                svgOptions={"align-center justify-center flex min-h-64"}
                asset={SPOTIFY}
                assetAlt={"Spotify vector logo"}
                imageClasses={"object-contain w-64 h-64 transform scale-50"}
                cardColor={"bg-spotifydark"}
                tags={[
                    { text: "Spotify" },
                    { text: "JS" },
                    { text: "Node" }
                ]}
                name={"Spotify Release Reader"}
                description={"A simple Spotify app to save your weekly Release Radar to your playlists. Capable of doing much more thanks to a modular architecture."}
                ctas={[
                    { url: github("Spotify-Release-Reader"), title: CTA_TEXT.GITHUB }
                ]}
            />

            {/* Portfolio Website */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"dark:bg-primarylight bg-dark transition-colors duration-500"}
                tagColor={"dark:bg-accentlight bg-accent"}
                asset={BLOBBYLIGHT}
                assetDark={BLOBBYDARK}
                assetAlt={"Portfolio icon"}
                imageClasses={"object-cover absolute inline opacity-0 dark:opacity-100 transition-opacity duration-500"}
                imageClassesDark={"object-cover inline opacity-100 dark:opacity-0 transition-opacity duration-500"}
                cardColor={"dark:bg-primarylight bg-dark transition-colors duration-500"}
                textColor={"text-primary dark:text-black transition-colors duration-500"}
                borderColor={"border-primary dark:border-black"}
                tags={[
                    { text: "React" },
                    { text: "JS" },
                    { text: "Tailwind" },
                    { text: "CSS" },
                    { text: "Node" }
                ]}
                name={"🎉 Portfolio Website 💻"}
                description={"This portfolio website is also a personal project which I built to learn React and Tailwind. You're interacting with it 😄 "}
                ctas={[
                    { title: "Energize Blob? 👀" }
                ]}
                ctaClasses={"border-white dark:border-black text-primary dark:text-dark hover:bg-white hover:text-dark dark:hover:bg-black dark:hover:text-primary transition-colors duration-500"}
            />

            {/* K-LAPSE */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-white"}
                asset={KLAPSE}
                assetAlt={"K-LAPSE banner image"}
                imageClasses={"object-cover"}
                cardColor={"bg-klapsewhite"}
                tags={[
                    { text: "Android" },
                    { text: "Linux" },
                    { text: "C" },
                    { text: "Makefile" }
                ]}
                name={"K-LAPSE"}
                description={"A Linux kernel time-based and hook-based linear RGB interpolation module, used in hundreds of custom Android kernels for thousands of devices."}
                ctas={[
                    { url: github("klapse-livedisplay"), title: CTA_TEXT.GITHUB }
                ]}
            />

            {/* DT2W */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-dt2wblue"}
                svgOptions={"align-center justify-center flex min-h-56 max-h-64"}
                asset={DT2W}
                assetAlt={"DT2W vector logo"}
                imageClasses={"object-contain w-24"}
                cardColor={"bg-dt2wbluedark"}
                tags={[
                    { text: "Miscellaneous" },
                    { text: "Android" },
                    { text: "Linux" },
                    { text: "C" },
                    { text: "Makefile" }
                ]}
                name={"Double Tap 2 Wake"}
                description={"An Android Linux kernel display tap-detection driver for waking up the device display or sleeping. Built for Linux kernel v3.10 but can be easily ported to newer versions."}
                ctas={[
                    { url: github("doubletap2wake-2.0"), title: CTA_TEXT.GITHUB }
                ]}
            />

            {/* T2S */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-t2syellow"}
                svgOptions={"align-center justify-center flex min-h-64"}
                asset={T2S}
                assetAlt={"T2S vector logo"}
                imageClasses={"object-contain w-64 h-64 transform scale-50"}
                cardColor={"bg-t2syellowdark"}
                tags={[
                    { text: "Miscellaneous" },
                    { text: "Android" },
                    { text: "Linux" },
                    { text: "C" },
                    { text: "Makefile" }
                ]}
                name={"Trace 2 Sleep"}
                description={"An Android Linux kernel display parabolic corner-to-corner customizable gesture driver for waking up the device display or sleeping. Built for Linux kernel v3.10 but can be easily ported to newer versions."}
                ctas={[
                    { url: github("trace2sleep"), title: CTA_TEXT.GITHUB }
                ]}
            />
        </Masonry>
    );
}
