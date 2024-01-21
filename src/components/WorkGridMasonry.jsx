import React from 'react';
import Masonry from 'react-masonry-component';
import ProjectCard, { CTA_LOGO, CTA_TEXT, github } from './ProjectCard';

import SCE from "../assets/sce-p4xl-mock.png";
import { MEDIUM_SVG } from "../assets/Medium_SVG";
import KLAPSE from "../assets/klapse.png";
import DT2W from "../assets/dt2w.svg";
import T2S from "../assets/t2s.svg";
import SPOTIFY_SVG from "../assets/spotify_svg";
import RESCUEDIALER from "../assets/rescuedialer.svg";
import { BLOBBY_SVG } from "../assets/Blobby_SVG";
import HUBSFU from "../assets/hubSFU.png";
import { LOGOS_WALL_SVG } from '../assets/LogosWallpaper_SVG';
import { PORTFOLIO_DARK_SVG, PORTFOLIO_SVG } from '../assets/portfolio_svg';

const masonryOptions = {
    transitionDuration: 200,
    columnWidth: ".work-grid",
    percentPosition: true
};

export default function WorkGridMasonry(props) {
    return (
        <Masonry options={masonryOptions}>
            <div className="work-grid md:m-0"></div>

            {/* SCE */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p border-scedark/50 dark:border-sceteal/10 border-[0.1rem]"}
                bgColor={"bg-scedark/50 dark:bg-black/70 dark:md:bg-scedark/5 backdrop-blur-md md:backdrop-blur-sm"}
                asset={SCE}
                assetAlt={"Smurf Config Editor mockup"}
                imageClasses={"object-contain"}
                tagColor={"bg-sceteal/[.85] dark:bg-sceteal/10 dark:md:bg-sceteal/10 text-sce dark:text-sceteal dark:backdrop-blur-xl dark:md:backdrop-blur-md"}
                cardColor={"bg-sceteal/80 dark:bg-sceteal/10 dark:md:bg-sceteal/[.08] dark:backdrop-blur-xl dark:md:backdrop-blur-md"}
                textColor={"text-sce dark:text-sceteal"}
                borderColor={"border-scedarker dark:border-sceteal"}
                tags={[
                    { text: "Android" },
                    { text: "Kotlin" },
                    { text: "Java" },
                    { text: "XML" }
                ]}
                name={"Smurf Config Editor"}
                description={"A beautiful, fast and modern Android companion app for SmurfKernel."}
                ctas={[
                    { url: github("SmurfConfigEditor"), title: CTA_TEXT.GITHUB, icon: CTA_LOGO.GITHUB, persistent: true, iconClasses: "fill-scedarker group-hover:fill-primary dark:fill-sceteal dark:group-hover:fill-scedarker" },
                    { url: "https://play.google.com/store/apps/details?id=com.tanish2k09.sce", title: CTA_TEXT.PSTORE, icon: CTA_LOGO.PSTORE }
                ]}
                ctaClasses={"bg-white/20 dark:bg-sceteal/10 dark:text-sceteal hover:bg-scedarker dark:hover:bg-sceteal hover:text-primary dark:hover:text-sce"}
            />

            {/* Logos Wallpaper */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p border-logosWallpaperFg/80 dark:border-logosWallpaperBgDark/70 border-[0.1rem]"}
                bgColor={"bg-logosWallpaperFg/50 dark:bg-logosWallpaperFgDark/60 backdrop-blur-lg md:backdrop-blur-sm backdrop-hue-rotate-[100deg]"}
                svgOptions={"min-h-56 max-h-64 flex align-items-center justify-center"}
                svg={<LOGOS_WALL_SVG className="fill-logosWallpaperBgDark dark:fill-logosWallpaperBg object-contain w-full" />}
                cardColor={"bg-white/20 dark:bg-logosWallpaperBgDark/30 dark:backdrop-blur-xl dark:md:backdrop-blur-sm"}
                tagColor={"bg-white/[.25] dark:bg-logosWallpaperBgDark/30 text-logosWallpaperDark dark:text-logosWallpaper dark:backdrop-blur-xl dark:md:backdrop-blur-sm"}
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
                    { url: "/privacy/logos_wallpaper.html", title: CTA_TEXT.PPOL, icon: CTA_LOGO.PPOL, persistent: true, iconClasses: "fill-logosWallpaperBgDark stroke-logosWallpaperBgDark group-hover:stroke-logosWallpaperBg dark:fill-logosWallpaperBg dark:group-hover:stroke-black" },
                    { url: "https://play.google.com/store/apps/details?id=com.tanish2k09.logoswallpaper", title: CTA_TEXT.PSTORE, icon: CTA_LOGO.PSTORE },
                ]}
                ctaClasses={"bg-white/40 dark:bg-logosWallpaperBg/10 text-logosWallpaperDark dark:text-logosWallpaper hover:bg-logosWallpaperBgDark hover:text-logosWallpaper dark:hover:bg-logosWallpaperBg dark:hover:text-logosWallpaperDark"}
            />

            {/* Medium articles */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p border-gray-100/40 dark:border-white/[.15] border-[0.1rem]"}
                bgColor={"bg-gray-100/60 dark:bg-black/70 backdrop-blur-3xl"}
                svgOptions={"align-center justify-center flex min-h-56 max-h-64"}
                svg={<MEDIUM_SVG className="fill-black dark:fill-white object-contain w-1/2" />}
                cardColor={"bg-white/50 dark:bg-white/10"}
                tagColor={"bg-white/50 dark:bg-white/10 text-dark dark:text-primary"}
                borderColor={"border-dark dark:border-primarylight"}
                textColor={"text-dark dark:text-primary"}
                tags={[
                    { text: "Miscellaneous" },
                    { text: "Blog" },
                    { text: "Android" },
                    { text: "Design" }
                ]}
                name={"Medium Articles"}
                description={"Thoughtfully crafted articles/guides published on Medium.com - covers advanced development topics I picked up over the years."}
                ctas={[
                    { url: "https://medium.com/@tanish2k09/", title: CTA_TEXT.BLOG, icon: CTA_LOGO.BLOG, persistent: true, iconClasses: "fill-dark stroke-dark dark:stroke-white group-hover:fill-primarylight group-hover:stroke-primarylight dark:fill-primarylight dark:group-hover:fill-dark dark:group-hover:stroke-dark" }
                ]}
                ctaClasses={"border-2 dark:border-transparent border-dark backdrop-blur-md dark:bg-primarylight/10 text-dark dark:text-primary hover:bg-black hover:text-primary dark:hover:bg-white dark:hover:text-dark"}
            />

            {/* Rescue Dialer */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p border-rescuedialer/60 dark:border-rescuedialer/[.15] border-[0.1rem]"}
                bgColor={"bg-rescuedialer/20 dark:bg-rescuedialerdark/40 backdrop-blur-md md:backdrop-blur-sm backdrop-hue-rotate-[250deg]"}
                svgOptions={"align-center justify-center flex min-h-64"}
                asset={RESCUEDIALER}
                assetAlt={"Rescue Dialer vector logo"}
                imageClasses={"object-contain w-64 h-64 transform scale-50"}
                cardColor={"bg-rescuedialer/40 dark:bg-rescuedialer/10 backdrop-blur-xl"}
                tagColor={"bg-rescuedialer/40 dark:bg-rescuedialer/10 backdrop-blur-xl text-dark dark:text-rescuedialer"}
                textColor={"text-dark dark:text-rescuedialer"}
                borderColor={"border-dark dark:border-rescuedialerlight"}
                tags={[
                    { text: "Android" },
                    { text: "Kotlin" },
                    { text: "XML" }
                ]}
                name={"Rescue Dialer"}
                description={"An Android app for simulating a real call, customizable with a set of triggers, timers, ringtones, pre-set audio messages and even fake contact info! This app was commissioned by OTIKA."}
                ctas={[
                    { url: "https://play.google.com/store/apps/details?id=com.otika.rescuedialer", title: CTA_TEXT.PSTORE, icon: CTA_LOGO.PSTORE, persistent: true }
                ]}
                ctaClasses={"bg-white/30 text-dark dark:text-rescuedialer hover:bg-dark hover:text-primary dark:bg-rescuedialerlight/10 dark:hover:bg-rescuedialerlight dark:hover:text-dark"}
            />

            {/* hubSFU */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p border-hubSFUdark/70 dark:border-hubSFUdark/[.15] border-[0.1rem]"}
                bgColor={"bg-hubSFUdark/70 dark:bg-hubSFUdarkest/20 backdrop-blur-lg md:backdrop-blur-sm backdrop-hue-rotate-[178deg] dark:backdrop-hue-rotate-[178deg]"}
                asset={HUBSFU}
                assetAlt={"hubSFU image"}
                imageClasses={"object-contain"}
                cardColor={"bg-white/20 dark:bg-hubSFUdark/5 dark:backdrop-blur-xl"}
                tagColor={"bg-white/20 dark:bg-hubSFUdark/10 text-dark dark:text-hubSFU"}
                textColor={"text-dark dark:text-hubSFU"}
                borderColor={"border-dark dark:border-hubSFU"}
                tags={[
                    { text: "Android" },
                    { text: "Kotlin" },
                    { text: "XML" }
                ]}
                name={"hubSFU"}
                description={"A community-focused Android app, built around the needs and feedback of local university students. This project was developed in 1 effective day - from concept to design to app - during a hackathon."}
                ctas={[
                    { url: github('stormhacks2023'), title: CTA_TEXT.GITHUB, icon: CTA_LOGO.GITHUB, persistent: true, iconClasses: "fill-dark group-hover:fill-primarylight dark:fill-hubSFU dark:group-hover:fill-dark" }
                ]}
                ctaClasses={"bg-white/20 dark:bg-hubSFUdark/10 dark:bg-hubSFU/10 hover:bg-dark hover:text-primary dark:text-hubSFU dark:hover:bg-hubSFU dark:hover:text-dark"}
            />

            {/* Spotify Release Reader */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p border-spotify/50 dark:border-spotify/10 border-[0.1rem]"}
                bgColor={"bg-spotify/50 dark:bg-spotifydark/20 backdrop-blur-md backdrop-hue-rotation-[270deg]"}
                cardColor={"bg-spotify/[.25] dark:bg-spotify/5 backdrop-blur-sm"}
                tagColor={"bg-spotify/[.35] dark:bg-spotify/10 text-dark dark:text-spotify backdrop-blur-sm"}
                textColor={"text-dark dark:text-spotify"}
                borderColor={"border-dark dark:border-spotify"}
                svg={<SPOTIFY_SVG className="fill-black dark:fill-spotify transition-colors duration-700 object-contain w-full p-8" />}
                svgOptions={"align-center justify-center flex min-h-48 max-h-56"}
                tags={[
                    { text: "Spotify" },
                    { text: "JS" },
                    { text: "Node" }
                ]}
                name={"Spotify Release Reader"}
                description={"A simple Spotify app to save your weekly Release Radar to your playlists. Capable of doing much more thanks to a modular architecture."}
                ctas={[
                    { url: github("Spotify-Release-Reader"), title: CTA_TEXT.GITHUB, icon: CTA_LOGO.GITHUB, persistent: true, iconClasses: "fill-dark group-hover:fill-primarylight dark:fill-spotify dark:group-hover:fill-dark" }
                ]}
                ctaClasses={"hover:bg-dark hover:text-primary dark:bg-spotify/10 dark:border-transparent dark:text-spotify dark:hover:bg-spotify dark:hover:text-dark"}
            />

            {/* Portfolio Website */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p border-dark/90 dark:border-portfoliodarker border-[0.1rem]"}
                bgColor={"bg-primarylight/50 dark:bg-dark/90 backdrop-blur-md backdrop-hue-rotation-[270deg]"}
                tagColor={"bg-primarylight dark:bg-portfolio text-primary dark:text-portfolio"}
                svgOptions={"align-center justify-center flex relative"}
                svg={<PORTFOLIO_SVG />}
                cardColor={"bg-portfoliolight dark:bg-white/10"}
                textColor={"text-primary dark:text-portfolio"}
                borderColor={"border-primary dark:border-portfoliodarker"}
                tags={
                    [
                        { text: "React" },
                        { text: "JS" },
                        { text: "Tailwind" },
                        { text: "CSS" },
                        { text: "Node" }
                    ]}
                name={"🎉 Portfolio Website 💻"}
                description={"This portfolio website is also a personal project which I built to learn React and Tailwind. You're interacting with it 😄 "}
                ctas={
                    [
                        { title: "Energize Blob? 👀" }
                    ]}
                ctaClasses={"border-white dark:border-portfoliodarker text-primary dark:text-portfolio hover:bg-white hover:text-dark dark:hover:bg-portfoliodarker dark:hover:text-primary"}
                useWorker={props.useWorker}
            />

            {/* K-LAPSE */}
            < ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p dark:border-klapse"}
                bgColor={"bg-white dark:bg-klapsedark border-2 border-transparent"}
                tagColor={"bg-white/30 text-dark"}
                asset={KLAPSE}
                assetAlt={"K-LAPSE banner image"}
                imageClasses={"object-cover"}
                cardColor={"opacity-90 dark:opacity-100 bg-klapsegradient transition-opacity"}
                tags={
                    [
                        { text: "Android" },
                        { text: "Linux" },
                        { text: "C" },
                        { text: "Makefile" }
                    ]}
                name={"K-LAPSE"}
                description={"A Linux kernel time-based and hook-based linear RGB interpolation module, used in hundreds of custom Android kernels for thousands of devices."}
                ctas={
                    [
                        { url: github("klapse-livedisplay"), title: CTA_TEXT.GITHUB }
                    ]}
            />

            {/* DT2W */}
            < ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-dt2wblue"}
                svgOptions={"align-center justify-center flex min-h-56 max-h-64"}
                asset={DT2W}
                assetAlt={"DT2W vector logo"}
                imageClasses={"object-contain w-24"}
                cardColor={"bg-dt2wbluedark"}
                tags={
                    [
                        { text: "Miscellaneous" },
                        { text: "Android" },
                        { text: "Linux" },
                        { text: "C" },
                        { text: "Makefile" }
                    ]}
                name={"Double Tap 2 Wake"}
                description={"An Android Linux kernel display tap-detection driver for waking up the device display or sleeping. Built for Linux kernel v3.10 but can be easily ported to newer versions."}
                ctas={
                    [
                        { url: github("doubletap2wake-2.0"), title: CTA_TEXT.GITHUB }
                    ]}
            />

            {/* T2S */}
            < ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-t2syellow"}
                svgOptions={"align-center justify-center flex min-h-64"}
                asset={T2S}
                assetAlt={"T2S vector logo"}
                imageClasses={"object-contain w-64 h-64 transform scale-50"}
                cardColor={"bg-t2syellowdark"}
                tags={
                    [
                        { text: "Miscellaneous" },
                        { text: "Android" },
                        { text: "Linux" },
                        { text: "C" },
                        { text: "Makefile" }
                    ]}
                name={"Trace 2 Sleep"}
                description={"An Android Linux kernel display parabolic corner-to-corner customizable gesture driver for waking up the device display or sleeping. Built for Linux kernel v3.10 but can be easily ported to newer versions."}
                ctas={
                    [
                        { url: github("trace2sleep"), title: CTA_TEXT.GITHUB }
                    ]}
            />
        </Masonry >
    );
}
