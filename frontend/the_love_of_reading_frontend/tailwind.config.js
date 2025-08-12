/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
    daisyui: {
    themes: ["pastel", "retro", "garden", "acid", "cmyk", "dark", "light", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "halloween", "lofi", "luxury", "dracula", "fantasy"],
  },

}