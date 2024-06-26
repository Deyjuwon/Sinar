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
        'sinarblue2': '#6F48FC',
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
        'light-gray': '79757F',
        'pink1': '#FFE5FF',
        'pink2': '#FFE5FF',
        'bg-gray': '#F7F8FD',
        "prblue": "#56C6E7",
        'prdark': "#252739",
        'prgreen': "#02677D",
        'prpurple': "#8A6CF9",
        
        
      },
      fontSize: {
        '28s': '28px',
        '32': '32px',
        '11': '11px',
        '22': '22px',
        '6': '6px',
        '45': '45px',
        '16': '16px',
        '57': '57px'
      },
      width: {
        '358': '358px',
        '266': '266px',
        '116': '116px',
        '390': '390px',
        '213': '213px',
       
        '111': '111px',

      
      },
      minWidth: {
        '266': '266px',
      },
      height: {
        '498': '498px',
        '379': '379px',
        '362': '362px',
        '284': '284px',
        '69': '69px',
        
      }
    },
  },
  plugins: [],
}

