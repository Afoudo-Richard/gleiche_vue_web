/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  important: true,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary': { DEFAULT: '#4B0082', '50': '#AC3BFF', '100': '#A326FF', '200': '#9200FC', '300': '#7A00D4', '400': '#6300AB', '500': '#4B0082', '600': '#2B004A', '700': '#0A0012', '800': '#000000', '900': '#000000' },
        'secondary': { DEFAULT: '#E3C171', '50': '#FFFFFF', '100': '#FEFDF9', '200': '#F7EED7', '300': '#F0DFB5', '400': '#EAD093', '500': '#E3C171', '600': '#DAAD42', '700': '#BE9126', '800': '#8F6D1C', '900': '#614913' },

      },
      fontFamily: {
        'patrick-hand': ['Patrick Hand', 'cursive'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '0rem',
          // lg: '4rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '900px',
          xl: '1050px',
          // '2xl': '1496px',
        },
      },
    },
  },
  plugins: [],
}
