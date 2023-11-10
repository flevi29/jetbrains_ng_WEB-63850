/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "source-code": ['"Source Code Pro"', "monospace"],
      },
      fontSize: {
        "app-xs": ["12px", "15.6px"],
        "app-sm": ["14px", "18.2px"],
        "app-base": ["16px", "20.8px"],
        "app-lg": ["18px", "27px"],
        "app-xl": ["20px", "24px"],
        "app-2xl": ["24px", "36px"],
        "app-3xl": ["30px", "45px"],
        "app-4xl": ["36px", "54px"],
      },
      colors: {
        "app-black": "#0C0C09",
        "app-white": "#FEFCFC",
        "app-background": "#F6F3F3",
        "app-alabaster": {
          DEFAULT: "#E6E6D8",
          50: "#EFEFE7",
        },
        "app-ash-gray": "#C2C2AE",
        "app-ash-gray-dark": "#A4A499",
        "app-reseda-green": "#8A8A68",
        "app-ebony": "#51513D",
      },
      boxShadow: {
        "app-sm": "0px 1px 2px rgba(0,0,0,0.08)",
        app: "0px 1px 2px -1px rgba(0,0,0,0.1), 0px 1px 3px rgba(0,0,0,0.1)",
        "app-md":
          "0px 2px 4px -2px rgba(0,0,0,0.5), 0px 4px 6px -1px rgba(0,0,0,0.1)",
        "app-lg":
          "0px 4px 6px rgba(0,0,0,0.05), 0px 10px 15px -3px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
