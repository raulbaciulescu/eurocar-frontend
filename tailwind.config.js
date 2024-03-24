/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myblue': '#00275B',
      },
      backgroundImage: {
        'mybg': "url('D:\\Projects\\eurocar-frontend\\public\\images\\bg3.PNG')",
      }
    },
  },
  plugins: [],
}

