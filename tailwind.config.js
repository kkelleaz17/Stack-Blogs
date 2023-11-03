/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      minHeight: {
        'Normal': '250px',
      }
    }
  },
  plugins: [],
}