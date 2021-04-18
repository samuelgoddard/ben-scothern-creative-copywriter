module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}',],
  darkMode: false,
  theme: {
    fontFamily: {
      'display': ['Chivo', 'Arial', 'sans-serif'],
      'sans': ['Inter', 'Arial', 'sans-serif'],
      'mono': ['Space Mono', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.375rem', // 2
      '2xl': '1.75rem', // 28px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.375rem', // 54px
      '7xl': '4.25rem', // 80px
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#FFF',
        'offwhite': '#FBF5EE',
        'purpledark': '#584278',
        'purple': '#7111FC',
        color: {
          light: '#ffb288',
          default: '#d18d67',
          dark: '#ce8860',
        },
      },
      lineHeight: {
        'extra-tight': '1.1',
       }
    },
  },
  variants: {
    extend: {},
  }
}