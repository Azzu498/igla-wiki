/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '655px',
        // => @media (min-width: 640px) { ... }

        'md': '940px',
        // => @media (min-width: 768px) { ... }

        'lg': '1250px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1540px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1825px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '2130px',
        // => @media (min-width: 1536px) { ... }

      }
    },
  },
  plugins: [require("flowbite/plugin"),require('tw-elements/dist/plugin')],
};