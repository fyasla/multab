/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        'table': 'min(60vh, 70vw)',
        '100vw': '100vw',
      },
      height: {
        'table': 'min(60vh, 70vw)',
        '100vh': '100vh',
      },
      maxWidth: {
        '100': '100%',
      },
    },
  },
  plugins: [require("daisyui")],
}
