
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2k': '1920px',
      '4k': '2560px',
    },
    fontFamily: {
      primary: ['Readex Pro', 'sans-serif']
    },
    extend: {
      fontSize: {
        '10': ['0.625rem', '0.75rem'],
        'xs': ['0.813rem', '1rem'],
        'sm': ['0.875rem', '1.25rem'],
        'base': ['1rem', '1.25rem'],
        'lg': ['1.125rem', '1.5rem'],
        'xl': ['1.25rem', '1.5rem'],
        '22': ['1.375rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '28': ['1.75rem', '2.25rem'],
        '32': ['2rem', '2.75rem'],
        '36': ['2.25rem', '2.75rem'],
        '32': ['2rem', '2.75rem'],
        '44': ['2.75rem', '3.25rem'],
      },
      colors: {
        Dark: '#2D3643',       // gray
        base_dark: '#1C222B',  // dark
        grey: '#8897AE',   // light-gray
        dark_grey: '#5E718D',    // red    
        light_gery: '#F9FAFB', // green
        primary: '#3062D4', // green
        inactive: '#F6A351', // green
        active: '#097C69', // green
        niagara: '#0AB39C', // green
        red: '#C53434', // green
      },
      // boxShadow: {
      //   'shadow': '0px 0px 10px rgba(0, 0, 0, 0.09)',
      // },
      // boxShadow: {
      //   '3xl': '0px 0px 5px rgba(0, 0, 0, 0.1)',
      //   'red': '0px 0px 1px 2px #FE4D5F',
      //   'black': '0px 0px 1px 2px rgba(36, 36, 39, 0.6)',
      // }
    },
  },
  plugins: [],
}

