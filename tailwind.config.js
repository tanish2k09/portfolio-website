module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    content: [
        // Example content paths...
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        fontFamily: {
            display: ["CircularXXEduWeb", "sans-serif"],
            mono: ["CircularXXMonoEduWeb"],
            body: ["CircularXXEduWeb"],
            nav: ["CircularXXEduWeb"],
        },
        textColor: {
            black: "#000000",
            primary: "#eceff1",
            secondary: "#859299",
            accent: "#00d8b6",
            accentlight: "#00d8b6",
            accenttrim: "#00cdac",
            dark: "#000a12",
            sce: "#1F2624",
            sceteal: "#14D2B3",
            rescuedialer: "#ffcc80",
            hintyellow: "#ffe0b2",
            hintdark: "#4a5bb8",
            hubSFU: "#fe9096",
            klapse: "rgba(216, 79, 199, 1)",
            primarylight: "#eceff1",
            textdarker: "#354A54",
            textdark: "#517281",
            semidark: "#7d9cab",
            spotify: "#00D280",
            contactlight: "#006c5a",
            contactdark: "#AEBCC6",
            logosWallpaper: "#F0B4D5",
            logosWallpaperDark: "#4B213B",
            portfolio: "#292f35",
            t2syellow: "#ffe0b2",
            transparent: "transparent",
            cinebon: "#c6bdff",
        },
        extend: {
            colors: {
                dark: "#101924",
                "dark-overlay": "#2C4563",
                "light-overlay": "#C2C8CB",
                textdark: "#000a12",
                semidark: "#7d9cab",
                primary: "#cbd2d9",
                secondary: "#859299",
                accent: "#00d8b6",
                accentlight: "#00d8b6",
                accenttrim: "#00cdac",
                accentsecondary: "#58d4ff",
                accentsecondarytrim: "#1fc5ff",
                mbpink: "#f06694",
                mbpinklight: "#f27da4",
                scedark: "#12bda1",
                scedarker: "#1F2624",
                sceteal: "#14D2B3",
                klapsedark: "rgba(15, 17, 12)",
                klapsegreen: "rgba(185, 253, 137, 1)",
                klapseblue: "rgba(108, 224, 252, 1)",
                klapsered: "rgba(162, 67, 99, 1)",
                klapseyellow: "rgba(245, 198, 107, 1)",
                klapsepink: "rgba(216, 79, 199, 1)",
                klapsepurple: "rgba(91, 40, 242, 1)",
                "klapsegreen-translucent": "rgba(185, 253, 137, 0.6)",
                "klapseblue-translucent": "rgba(108, 224, 252, 0.6)",
                "klapsered-translucent": "rgba(162, 67, 99, 0.6)",
                "klapseyellow-translucent": "rgba(245, 198, 107, 0.6)",
                "klapsepink-translucent": "rgba(216, 79, 199, 0.6)",
                "klapsepurple-translucent": "rgba(91, 40, 242, 0.6)",
                "klapsegreen-translucent-light": "rgba(185, 253, 137, 0.15)",
                "klapseblue-translucent-light": "rgba(54, 112, 200, 0.6)",
                "klapsered-translucent-light": "rgba(162, 67, 99, 0.15)",
                "klapseyellow-translucent-light": "rgba(245, 198, 107, 0.3)",
                "klapsepink-translucent-light": "rgba(216, 79, 199, 0.3)",
                "klapsepurple-translucent-light": "rgba(91, 40, 242, 0.4)",
                dt2wblue: "#64b5f6",
                dt2wbluedark: "#42a5f5",
                t2syellow: "#ffe0b2",
                t2syellowdark: "#ffcc80",
                spotify: "#00D280",
                spotifydark: "#00140c",
                rescuedialerlight: "#ffcc80",
                rescuedialer: "#ffca28",
                rescuedialerdark: "#3a2c00",
                hubSFUdark: "#ff6d75",
                hubSFU: "#fe9096",
                hubSFUdarkest: "#910007",
                logosWallpaperBg: "#F0B4D5",
                logosWallpaperFgDark: "#4B213B",
                logosWallpaperFg: "#e4a7ca",
                logosWallpaperBgDark: "#582745",
                primarylight: "#eceff1",
                contactlight: "#006c5a",
                contactdark: "#AEBCC6",
                portfolio: "#172433",
                portfoliolight: "#E0E3E6",
                portfoliodarker: "#292f35",
                "cinebon-dark": "#090045",
                "cinebon-light": "#c6bdff",
                cinebon: "#9b8bfe",
            },
            fontSize: {
                "009": "0.9rem",
                "8xl": "8rem",
                "10xl": "10rem",
                "12xl": "12rem",
                "14xl": "14rem",
                "dynamic-main": "min(10vw, 18vh, 7rem)",
                "dynamic-sec": "min(3vw, 2rem)",
            },
            opacity: {
                90: "0.90",
            },
            height: {
                quarter: "25%",
                half: "50%",
            },
            width: {
                tenth: "0.1rem",
                quarter: "25%",
            },
            margin: {
                quarter: "25%",
            },
            minHeight: {
                "100px": "100px",
                56: "14rem",
                64: "16rem",
                1: "0.25rem",
            },
            minWidth: {
                thirty: "30%",
                "100px": "100px",
                1: "0.25rem",
                "25p": "25%",
                "100v": "100vw",
                "25v": "25vw",
            },
            maxHeight: {
                "50p": "50vh",
                64: "16rem",
                1: "0.25rem",
            },
            maxWidth: {
                0: "0",
                "25p": "25vw",
                "30p": "30%",
                "45p": "45%",
                "75p": "70vw",
                "80p": "80vw",
                "100v": "100vw",
                social: "30ch",
                sourcebutton: "20ch",
            },
            borderRadius: {
                bigg: "16px",
            },
            zIndex: {
                "-3": "-3",
            },
            inset: {
                4: "4px",
            },
            spacing: {
                "01": "0.1rem",
            },
            boxShadow: {
                "work-card": "0 4px 20px 0 rgba(0,0,0, 0.3)",
                "about-card": "0 8px 32px 8px rgba(0,0,0, 0.25)",
                xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                "nav-shadow": "0px -4px 3px rgba(50, 50, 50, 0.25)",
            },
            backgroundImage: ({ theme }) => ({
                klapsegradient: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)) padding-box), linear-gradient(to top right, ${theme(
                    "colors.klapseblue-translucent-light"
                )},${theme("colors.klapsegreen-translucent-light")},${theme(
                    "colors.klapseyellow-translucent-light"
                )},${theme("colors.klapsepink-translucent-light")},${theme("colors.klapsepurple-translucent-light")})`,

                klapseborderdark: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)) padding-box, linear-gradient(to top right, ${theme(
                    "colors.klapseblue-translucent-light"
                )},${theme("colors.klapsepink-translucent-light")},${theme(
                    "colors.klapsepurple-translucent-light"
                )}) border-box`,

                klapseborderlight: `linear-gradient(rgba(255, 255, 255, 0), ${theme(
                    "colors.transparent"
                )}) padding-box, linear-gradient(to top right, ${theme("colors.klapseblue-translucent")},${theme(
                    "colors.klapsegreen-translucent"
                )},${theme("colors.klapseyellow-translucent")},${theme("colors.klapsepink-translucent")},${theme(
                    "colors.klapsepurple-translucent"
                )}) border-box`,
            }),
        },
    },
};
