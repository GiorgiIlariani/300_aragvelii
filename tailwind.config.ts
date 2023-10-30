/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#877EFF",
        "secondary-500": "#FFB620",
        blue: "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark-1": "#000000",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "gray-1": "#697C89",
        glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      screens: {
        "2xl": { max: "1536px" },
        // => @media (max-width: 1536px) { ... }

        xl: { max: "1280px" },
        // => @media (max-width: 1280px) { ... }

        lg: { max: "1080px" },
        // => @media (max-width: 1080px) { ... }

        lgd: { max: '968px' },
        // => @media (max-width: 968px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        sm: { max: "640px" },
        // => @media (max-width: 640px) { ... }

        xs: { max: "500px" },
        // => @media (max-width: 5000px) { ... }

        "2xs": { max: "390px" },
        // => @media (max-width: 390px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};