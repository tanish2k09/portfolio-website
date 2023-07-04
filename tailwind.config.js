module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: "class",
  theme: {
    screens: {
      'min': '300px',
      // => @media (min-width: 300px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      display: ["Work Sans", "sans-serif"],
      mono: ["DM Mono"],
      body: ["Work Sans"],
      nav: ["Poppins"]
    },
    textColor: {
      black: "#000000",
      primary: "#eceff1",
      secondary: "#859299",
      accent: "#00d8b6",
      accentlight: "#00d8b6",
      accentlighter: "#C4FCF0",
      accentDarker: "#1a665a",
      accentDark: "#2db28c",
      dark: "#000a12",
      scedark: "#0a6959",
      hintyellow: "#ffe0b2",
      hintdark: "#7986cb",
      primarylight: "#eceff1",
      textdarker: "#354A54",
      textdark: "#9DB4C0",
      textsemidark: "#7d9cab",
      textaccentdark: "#1cceb5",
      contactlight: "#026255",
      contactdark: "#026255"
    },
    extend: {
      colors: {
        dark: "#101924",
        textdark: "#000a12",
        primary: "#cbd2d9",
        accent: "#00d8b6",
        accentlight: "#00d8b6",
        cards: "#18212C",
        mbpink: "#f06694",
        mbpinklight: "#f27da4",
        scedark: "#12bda1",
        sceteal: "#14D2B3",
        klapsewhite: "#f8f8f8",
        dt2wblue: "#64b5f6",
        dt2wbluedark: "#42a5f5",
        t2syellow: "#ffe0b2",
        t2syellowdark: "#ffcc80",
        spotify: "#00D280",
        spotifydark: "#00bd73",
        rescuedialer: "#ffca28",
        rescuedialerdark: "#ffb300",
        primarylight: "#eceff1",
        contactlight: "#026255",
        contactdark: "#026255"
      },
      fontSize: {
        "009": "0.9rem",
        "8xl": "8rem",
        "10xl": "10rem",
        "12xl": "12rem",
        "14xl": "14rem",
      },
      opacity: {
        "90": "0.90",
      },
      height: {
        quarter: "25%",
        half: "50%",
      },
      width: {
        tenth: "0.1rem",
        quarter: "25%"
      },
      margin: {
        quarter: "25%",
      },
      minHeight: {
        "100px": "100px",
        "56": "14rem",
        "64": "16rem",
        "1": "0.25rem"
      },
      minWidth: {
        thirty: "30%",
        "100px": "100px",
        "1": "0.25rem",
        "25p": "25%",
        "100v": "100vw",
        "25v": "25vw"
      },
      maxHeight: {
        "50p": "50vh",
        "64": "16rem",
        "1": "0.25rem"
      },
      maxWidth: {
        "0": "0",
        "25p": "25vw",
        "30p": "30%",
        "45p": "45%",
        "75p": "70vw",
        "80p": "80vw",
        "100v": "100vw",
        "social": "30ch"
      },
      borderRadius: {
        bigg: "16px",
      },
      zIndex: {
        "-3": "-3",
      },
      inset: {
        "4": "4px"
      },
      spacing: {
        "01": "0.1rem"
      },
      boxShadow: {
        'work-card': '0 4px 20px 0 rgba(0,0,0, 0.3)',
        'about-card': '0 8px 36px 8px rgba(0,0,0, 0.25)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'nav-shadow': '0px -4px 3px rgba(50, 50, 50, 0.25)'
      }
    }
  },
};
