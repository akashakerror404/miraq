/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        museomoderno: ['MuseoModerno', 'cursive'],
      },
            backgroundImage: {
        "bg-2": "url('/src/assets/HERO_IMAGES/icons/Ellipse 1.png')",
        "bg-3": "url('/src/assets/HERO_IMAGES/icons/pattern.png')",


       
      },
       boxShadow: {
                'inner-white-soft': 'inset 0 0 120px rgba(255, 255, 255, 0.35)',
        'inner-white-strong': 'inset 0 0 80px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}