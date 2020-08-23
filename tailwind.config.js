module.exports = {
  corePlugins: {
    purge: false,
    variants: false,
    plugins: false,
  },
  theme: {
    fontFamily: {
      display: ["Work Sans", "sans-serif"],
      mono: ["DM Mono"],
      body: ["Work Sans"]
    },
    screens: {
      min: "360px",
      // => @media (min-width: 360px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    textColor: {
      primary: "#eceff1",
      secondary: "#859299",
      accent: "#41ffc9",
      dark: "#000a12",
      scedark: "#0a6959",
      hintyellow: "#ffe0b2"
    },
    extend: {
      colors: {
        dark: "#101924",
        textdark: "#000a12",
        primary: "#cbd2d9",
        accent: "#41ffc9",
        cards: "#18212C",
        mbpink: "#f06694",
        mbpinklight: "#f27da4",
        scedark: "#12bda1",
        sceteal: "#14D2B3",
        klapsewhite: "#eeeeee",
        dt2wblue: "#64b5f6",
        dt2wbluedark: "#42a5f5",
        t2syellow: "#ffe0b2",
        t2syellowdark: "#ffcc80"
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
        "100v": "100vw"
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
        "80p": "80vw",
        "100v": "100vw"
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
      }
    },
  },
};
