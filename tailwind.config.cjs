/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background.png')",
        'nlw-gradient' : 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 40.94%, #E1D55D 33.57%)',
        'game-gradient' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))'
      },
    },
  },
  plugins: [],
}
