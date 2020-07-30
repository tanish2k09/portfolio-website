module.exports = {
  corePlugins: {
    purge: false,
    variants: false,
    plugins: false,
  },
  theme: {
    fontFamily: {
      display: ["Work Sans", "sans-serif"],
      mono: ["Space Mono"],
      body: ["Work Sans"]
    },
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
    textColor: {
      primary: "#eceff1",
      secondary: "#859299",
      accent: "#41ffc9",
      dark: "#000a12",
    },
    extend: {
      colors: {
        dark: "#101924",
        textdark: "#000a12",
        primary: "#cbd2d9",
        accent: "#41ffc9",
        cards: "#101924"
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
        half: "50%"
      },
      width: {
        tenth: "0.1rem",
        quarter: "25%"
      },
      margin: {
        quarter: "25%",
      },
      minHeight: {
        "100px": "100px"
      },
      minWidth: {
        thirty: "30%",
        "100px": "100px",
        "1": "0.25rem"
      },
      borderRadius: {
        bigg: "16px",
      },
      zIndex: {
        "-3": "-3",
      },
      inset: {
        "-bigg": "-16px",
      },
    },
  },
};
