/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dirty-white': '#F5F5F5',
        'sinarpurple': '#896CF9',
        'sinarblue': '#56C6E7',
        'bg2': '#F5F5F5',
        'bgstart': '#F5EEFF',
        'bgend': '#DCF5FF',
        'bg3': '#E9F1FF',
        'btnBlue': '#252739',
      },
      fontSize: {
        '28s': '28px',
        '32': '32px',
        '11': '11px',
      },
      width: {
        '358': '358px',
        '266': '266px',
        '116': '116px',
        '390': '390px',
        '213': '213px'
      },
      height: {
        '498': '498px',
        '379': '379px',
        '362': '362px',
        
      }
    },
  },
  plugins: [],
}

