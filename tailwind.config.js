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
        'bg4': '#E9F1FF',
        'btnBlue': '#252739',
        'bg-purple': '#8A6CF9',
        'bg-blue': '#56C6E7',
        'bg-disc1': '#F5EEFF',
        'disc2': '#E9F1FF',
        'disc3': '#E4F3FF',
        'disc4': '#DCF5FF',
        'disc-blue': '#F7F8FD',
        'black-txt': '#0D154B',
        'blue-txt': '#0D154B',
        
      },
      fontSize: {
        '28s': '28px',
        '32': '32px',
        '11': '11px',
        '22': '22px',
        '6': '6px'
      },
      width: {
        '358': '358px',
        '266': '266px',
        '116': '116px',
        '390': '390px',
        '213': '213px',
        '358': '358px',
      
      },
      height: {
        '498': '498px',
        '379': '379px',
        '362': '362px',
        '284': '284px',
        
      }
    },
  },
  plugins: [],
}

