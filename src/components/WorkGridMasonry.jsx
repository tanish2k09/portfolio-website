import React from 'react';
import Masonry from 'react-masonry-component';
import ProjectCard from './ProjectCard';

import SCE from "../assets/sce-p4xl-mock.png";
import KLAPSE from "../assets/klapse.png";
import MUSICBENDER from "../assets/musicbender.svg";
import DT2W from "../assets/dt2w.svg";
import T2S from "../assets/t2s.svg";
import SPOTIFY from "../assets/spotify.svg";
import RESCUEDIALER from "../assets/rescuedialer.svg";
import BLOBBYDARK from "../assets/blobbydark.png";
import BLOBBYLIGHT from "../assets/blobbylight.png";

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
                    { id: 1, text: "Android" },
                    { id: 2, text: "Kotlin" },
                    { id: 3, text: "Java" },
                    { id: 4, text: "XML" }
                ]}
                name={"Smurf Config Editor"}
                description={"A beautiful, fast and modern Android companion app for SmurfKernel."}
                repo={"SmurfConfigEditor"}
                isPlayStore={true}
                url={"https://play.google.com/store/apps/details?id=com.tanish2k09.sce"}
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
                    { id: 1, text: "Android" },
                    { id: 2, text: "Linux" },
                    { id: 3, text: "C" },
                    { id: 4, text: "Makefile" }
                ]}
                name={"K-LAPSE"}
                description={"A Linux kernel time-based and hook-based linear RGB interpolation module, used in hundreds of custom Android kernels for thousands of devices."}
                repo={"klapse-livedisplay"}
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
                    { id: 1, text: "Android" },
                    { id: 2, text: "Kotlin" },
                    { id: 3, text: "XML" }
                ]}
                name={"Rescue Dialer"}
                description={"An Android app for simulating a real call, customizable with a set of triggers, timers, ringtones, pre-set audio messages and even fake contact info! This app was commissioned by OTIKA."}
                isPlayStore={true}
                url={"https://play.google.com/store/apps/details?id=com.otika.rescuedialer"}
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
                    { id: 1, text: "Spotify" },
                    { id: 2, text: "JS" },
                    { id: 3, text: "Node" }
                ]}
                name={"Spotify Release Reader"}
                description={"A simple Spotify app to save your weekly Release Radar to your playlists. Capable of doing much more thanks to a modular architecture."}
                repo={"Spotify-Release-Reader"}
            />

            {/* Portfolio Website */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"dark:bg-accentlight bg-accent"}
                svgOptions={"align-center justify-center flex min-h-64"}
                asset={BLOBBYLIGHT}
                assetDark={BLOBBYDARK}
                assetAlt={"Portfolio icon"}
                imageClasses={"object-cover dark:inline hidden"}
                imageClassesDark={"object-cover inline dark:hidden"}
                cardColor={"dark:bg-primarylight bg-dark"}
                textColor={"text-primary dark:text-black"}
                borderColor={"border-primary dark:border-black"}
                tags={[
                    { id: 1, text: "React" },
                    { id: 2, text: "JS" },
                    { id: 3, text: "Tailwind" },
                    { id: 4, text: "CSS" },
                    { id: 5, text: "Node" }
                ]}
                name={"🎉 Portfolio Website 💻"}
                description={"This portfolio website is also a personal project which I built to learn React and Tailwind. You're interacting with it 😄 "}
            />

            {/* Musicbender */}
            <ProjectCard
                cardClasses={"lg:max-w-45p xl:max-w-25p"}
                bgColor={"bg-mbpinklight"}
                svgOptions={"align-center justify-center flex min-h-56"}
                asset={MUSICBENDER}
                assetAlt={"Musicbender vector logo"}
                imageClasses={"object-contain w-16"}
                cardColor={"bg-mbpink"}
                tags={[
                    { id: 1, text: "Discord" },
                    { id: 2, text: "JS" },
                    { id: 3, text: "Node" },
                    { id: 4, text: "C#" },
                    { id: 5, text: ".NET Core" }
                ]}
                name={"Musicbender"}
                description={"A Discord bot focused on sound effects and media playback, with a basic CRUD interface. A great project to learn workload clustering and asynchronous request handling."}
                repo={"musicbender-discord"}
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
                    { id: 1, text: "Android" },
                    { id: 2, text: "Linux" },
                    { id: 3, text: "C" },
                    { id: 4, text: "Makefile" }
                ]}
                name={"Double Tap 2 Wake"}
                description={"An Android Linux kernel display tap-detection driver for waking up the device display or sleeping. Built for Linux kernel v3.10 but can be easily ported to newer versions."}
                repo={"doubletap2wake-2.0"}
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
                    { id: 1, text: "Android" },
                    { id: 2, text: "Linux" },
                    { id: 3, text: "C" },
                    { id: 4, text: "Makefile" }
                ]}
                name={"Trace 2 Sleep"}
                description={"An Android Linux kernel display parabolic corner-to-corner customizable gesture driver for waking up the device display or sleeping. Built for Linux kernel v3.10 but can be easily ported to newer versions."}
                repo={"trace2sleep"}
            />

        </Masonry>
    );
}
