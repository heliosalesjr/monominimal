/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39ff14', // Verde neon
        secondary: '#00ffff', // Azul neon
        tertiary: '#ff007f', // Rosa neon
        accent: '#e1ff00', // Amarelo cítrico
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
