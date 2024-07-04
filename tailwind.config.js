/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html"],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        primary: "#1c39bb",
        background: "rgb(15 23 42)"
      }
    },
  },
  plugins: [],
}

