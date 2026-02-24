/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#fefaec', // light beige from the image background
                    dark: '#584951', // dark muted purple/brown from buttons and text
                    accent: '#c99180', // copper/peach accent from the lines
                    white: '#ffffff',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}