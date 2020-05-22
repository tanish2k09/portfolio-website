module.exports = {
  corePlugins: {
    purge: false,
    variants: false,
    plugins: false,
  },
  theme: {
    fontFamily: {
      display: ["Work Sans", "sans-serif"],
      mono: ["Fira Code"],
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
      accent: "#1de9b6",
      danger: "#e57373",
      dark: "#000a12",
    },
    extend: {
      colors: {
        dark: "#1f2933",
        primary: "#cbd2d9",
        accent: "#1de9b6",
        danger: "#e57373",
        cards: "#37404f",
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
        tenth: "0.1rem",
        quarter: "25%",
        half: "50%",
        threequarters: "75%",
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
      },
      minWidth: {
        thirty: "30%",
        "100px": "100px",
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
