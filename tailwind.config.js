/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lime': '#bac34e',
        'lightyellow': '#e2d8c3',
        'bslight':'#fff',
        'white':' #ffffff',
        'light':'#fee4e7',
        'black':'#333333',
        'red':'#d3122a',
        'blue':'#0000FF',
         'blackdeep':'#212428',
         'gray': '#C4CFDE',
         'darkpink': '#ff014f'

     
      },
    },
  },
  plugins: [require("daisyui")],
}

