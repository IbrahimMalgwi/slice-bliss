/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef8ec",
          100: "#fdefd2",
          200: "#fbe0a5",
          300: "#f8ca6d",
          400: "#f5ad33",
          500: "#f39c15", // Main primary color
          600: "#e47c0c",
          700: "#bd5d0c",
          800: "#974912",
          900: "#7a3c12",
        },
        secondary: {
          50: "#f7f7f7",
          100: "#f0eeef",
          200: "#ddd8da",
          300: "#bfb6ba",
          400: "#9b8e94",
          500: "#7f7177",
          600: "#685c62",
          700: "#564c51",
          800: "#3b2f33", // Main secondary color
          900: "#2a2225",
        },
        // Custom colors for direct use
        custom: {
          orange: "#FCB330",
          brown: "#3B2F33",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #FCB330 0%, #f5ad33 100%)",
        "gradient-primary-hover":
          "linear-gradient(135deg, #f5ad33 0%, #e47c0c 100%)",
      },
    },
  },
  plugins: [],
};
