/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}", // Proje dosyalarına göre düzenle
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        open: ['open sans', 'sans-serif'], 
        barlow: ['Barlow', 'sans-serif'],
      },
       colors: {
      testcolor: '#ff0000', // Kırmızı bir renk
    },
    },
  },
  plugins: [],
}