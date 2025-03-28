/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", //Enables class-based dark mode
    theme: {
        extend: {
            fontFamily: {
                allumi: ["AllumiBold", "sans-serif"],
                kanit: ["Kanit", "sans-serif"],
            },
            colors: {
                primary: "#FFFFFF", // White
                secondary: "#000000", // Black
            },
        },
    },
    plugins: [],
};
