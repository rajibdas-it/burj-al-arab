/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#361a89",

          secondary: "#f2e943",

          accent: "#77dd79",

          neutral: "#29253C",

          "base-100": "#324C5D",

          info: "#60A0DC",

          success: "#0F6C3F",

          warning: "#A65F07",

          error: "#EA668A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
