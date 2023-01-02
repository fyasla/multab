/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        'table': 'min(60vh, 70vw)',
        '100vw': '100vw',
        '1/11': '9.09090909090909%',
      },
      height: {
        'table': 'min(60vh, 70vw)',
        '100vh': '100vh',
        '1/11': '9.09090909090909%',
      },
      maxWidth: {
        '100': '100%',
      },
    },
  },
  plugins: [require("daisyui")],
}
