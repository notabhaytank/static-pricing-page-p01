/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        // Add a custom color
        primary: '#f6f5fa',
        secondary: '#180c5b',
        button: '#8b3bf0'
        // ...
      },
    },
  },
  plugins: [],
}