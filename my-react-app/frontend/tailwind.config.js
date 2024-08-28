/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#f5f6f2",
        primary: "#f0f0f0",
        secondary: "#ff813f",
        tertiary: "#222222",
        secondaryRed: "#f42c37",
        secondaryYellow: "#fdc62e",
        secondaryPurple: "#8053FF",
        secondaryBlue: "#1376f4",
        secondaryWhite: "#eeeeee",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        hero: "url(/src/assets/bg.svg)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".square": {
          backgroundColor: "rgba(240, 240, 240, 0.559)",
          border: "1px solid #ccc",
          boxShadow: "2px 2px 4px rgba(5, 50, 200, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90px",
          borderRadius: "10px",
          width: "500px",
        },
        ".join-now-button": {
          backgroundColor: "#8053FF",
          color: "#ffffff",
          border: "none",
          padding: "5px 10px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginTop: "5px",
          marginRight: "20px",
        },
        ".grid-item": {
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "0.5px 0.5px 1px #14141480",
        },
      });
    },
  ],
};
