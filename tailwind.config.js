/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#02B674',
      'light-green': '#8CD348',
      'yellow': '#FCE300',
      'teal': '#009389',
      'black': '#000000',
      'white': '#FFFFFF',
      'red' : 'red',
    },
    extend: {},
  },
  plugins: [],
}