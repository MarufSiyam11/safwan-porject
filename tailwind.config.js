/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      xl: "1080px",
      "2xl": "1170px",
    },
    extend: {
      colors: {
        primary_text: "#00413D",
        secondary: "#E5745D",
      },
      boxShadow: {
        "box-shadaw": "8px 8px 20px 13px rgba(147, 147, 147,0.13)",
        "testimonial-shadaw": "6px 6px 10px 0px rgba(227, 40, 71,0.08)",
      },
    },
    container: {
      center: true,
      // padding: {

      //   DEFAULT: "1rem",
      // },
    },
  },
  plugins: [],
};
