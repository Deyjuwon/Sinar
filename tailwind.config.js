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
      },
      fontSize: {
        '28s': '28px',
        '32': '32px',
      },
      width: {
        '358': '358px',
        '266': '266px',
        '116': '116px',
        '390': '390px',
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

