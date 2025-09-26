/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          keyframes: {
        fadeInLetter: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px #D700CE, 0 0 20px #4FD9D6" },
          "50%": { textShadow: "0 0 20px #D700CE, 0 0 40px #4FD9D6" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
      animation: {
        fadeInLetter: "fadeInLetter 0.5s ease-out forwards",
        glow: "glow 2s infinite alternate",
        blink: "blink 1.2s infinite",
      },
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