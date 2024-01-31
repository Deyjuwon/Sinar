/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dirty-white': '#F5F5F5'
      },
      fontSize: {
        '28s': '28px'
      },
      width: {
        '358': '358px',
        '266': '266px',
        '116': '116px',
      },
      height: {
        '498': '498px',
        '379': '379px',
        
      }
    },
  },
  plugins: [],
}

