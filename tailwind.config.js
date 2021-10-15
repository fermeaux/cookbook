module.exports = {
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    minHeight: {
      '20': '80px'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    }
  }
};
