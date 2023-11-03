/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./html/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "10px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1540px",
    },
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#6c757d",
        success: "#198754",
        info: "#0dcaf0",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        white: "#fff",
        gray: "#6c757d",
        red: "#dc3545",
        purple: "#6e41c0",
        dark: "#212529",
      },
      spacing: {
        22: "5.5rem",
        100: "25rem",
      },
    },
  },
  plugins: [],
};
