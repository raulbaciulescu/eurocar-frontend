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
                'special1': "url('D:\\Projects\\eurocar-frontend\\public\\images\\special1-4.PNG')",
                'special2': "url('D:\\Projects\\eurocar-frontend\\public\\images\\special2.PNG')",
                'bgspecial1': "url('D:\\Projects\\eurocar-frontend\\public\\images\\bg-special2.png')",
            }
        },
    },
    plugins: [],
}

