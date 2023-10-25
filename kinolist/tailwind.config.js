/** 

@type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/img/background_LandingPage.jpg')",
      },
      width: {
        75: "18.75rem",
      },
      height: {
        110: "28.125rem",
      },
    },
  },
  plugins: [],
};
