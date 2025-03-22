/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                base: '40px',
                "default": "16px",
                'mid': '4.5vw',
                'sm': '3.5vw',
                'esm': '3vw',
            },
            maxWidth: {
                "contain": "100%",
                "small": "600px",
                "medium": "900px",
                "large": "1300px",
            },
            screens: {

                "usm": "475px",
                'sm': '575px',

            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'background': '#1e1e1e',
                'dark': '#3f3cbb',
                "white": "#ffffff",
            },
        },

    },
    plugins: [],
}