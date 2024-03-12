/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'buttonmainbgcolr' : '#D74339',
        'solutionpage' : "#FDCD0E",
        'solution ' : '#373334',
        'navbar' : '#373334',
        'background' : '#F3ECE4',
        'button' : '#E8DCCC',
        'lonig' : '#EDE7D0' ,
        'lightgray' : '#E9E9E9',
        'rosebg' : '#F1ADA9',
      },
      rotate: {
        'abit': '#5B80E7',
      },
      borderRadius: {
        'index': '5rem',
        'background' : '15rem'
      },
      height : { 
        'solutionpage' : '40rem'
      },
    },
  },
  plugins: [require("daisyui")],
}

