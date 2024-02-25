/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        container: {
            center: true,
            padding: 24
        },
        extend: {
            colors: {
                "dark-purple": "#4D1B7C",
                "light-gray": "#AEAEAE",
                "light-purple": "#9A6AC8"
            },
            fontFamily: {
                poppins: "'Poppins', sans-serif",
                michroma: "'Michroma', sans-serif"
            }
        }
    },
    plugins: []
}
