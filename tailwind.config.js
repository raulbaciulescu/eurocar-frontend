/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'myblue': '#00275B',
                'specialcars': '#0E2E3D',
            },
            backgroundImage: {
                'mybg': "url('D:\\Projects\\eurocar-frontend2\\public\\images\\background.PNG')",
                'bgspecial1': "url('D:\\Projects\\eurocar-frontend2\\public\\images\\background-special.png')",
                'phone': "url('D:\\Projects\\eurocar-frontend2\\public\\images\\background-special-phone.JPG')",
            }
        },
    },
    plugins: [],
}

