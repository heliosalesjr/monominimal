/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Chivo', 'Helvetica', 'Arial', 'sans-serif'], // Define Chivo como a fonte sans-serif padrão
        serif: ['Georgia', 'serif'],
      },
      colors: {
        primary: '#2F6AD3', // Main Blue of mine <3
        secondary: '#CEDFFD', // Azul bebe
        tertiary: '#FF588F', // Stronger Pink
        accent: '#FF7BA1', // My Pink
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'graph-paper': 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
      },
      backgroundSize: {
        'graph-paper': '20px 20px', // ajusta o tamanho das células
      },
    },
  },
  variants: {},
  plugins: [],
};
