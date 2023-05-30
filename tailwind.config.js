module.exports = {
  darkMode: 'class',
  active: 'class',
  content: ["./public/**/*.{html,js,ejs}","./views/**/*.{html,js,ejs}"],
  theme: {
    screens: {
      'sm'  : '640px',
      'md'  : '768px',
      'lg'  : '1024px',
      'xl'  : '1280px',
      '2xl' : '1536px',
      '2k'  : '1920px',
      '4k'  : '2560px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT  :'1.25rem',
        md       :'1.75rem',
        lg       :'0.875rem',
        xl       :'2.25rem',
        '2xl'    :'3rem',
        '2k'     :'1rem',
      },
    },
    fontFamily: {
      jos: ['Josefin Sans', 'sans-serif'],
      pop: ['Poppins', 'sans-serif']
    },
    fontSize: {
      'xs'   : ['.75rem', '1.1rem'],
      'sm'   : ['.875rem', '1.356rem'],
      'base' : ['1rem', '1.45rem'],
      'lg'   : ['1.125rem', '1.75rem'],
      'xl'   : ['1.25rem', '1.875rem'],
      '22'   : ['1.375rem', '2.063rem'],
      '28'   : ['1.75rem', '2.375rem'],
      '2xl'  : ['1.5rem', '2.25rem'],
      '26'   : ['1.625rem', '2.25rem'],
      '3xl'  : ['1.875rem', '2.5rem'],
      '4xl'  : ['2.25rem', '2.75rem'],
      '5xl'  : ['3rem', '3.75rem'],
      '6xl'  : ['3.75rem', '5rem'],
      '7xl'  : ['4.375rem', '5.625rem'],
    },
    extend: {
      colors: {
        scalelot: {
          primary: {
            DEFAULT : '#0B2D61',
          },
          secondary: {
            DEFAULT : '#EE3139',
          },
          dark      : '#01183A',
          darkPlus  : '#021C44',
          gray      : '#444444',
          grayLight : '#D9D9D9',
          ceil      : '#8ba1c4',
          jpIndigo  : '#283a56',
        },
      },
      boxShadow: {
        'one': '0px 0px 20px #0000000D',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },      
      animation: {
        zoom: 'zoom 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
