/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'lg': '1024px',
    },
    extend: {
      fontSize: {
        sm: '0.71rem',
        base: '0.76rem',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(81,255, 168, 0.35)",
          "0 0px 65px rgba(81, 255,168, 0.2)"
        ]
      }
    },
  },
  plugins: [],
}

