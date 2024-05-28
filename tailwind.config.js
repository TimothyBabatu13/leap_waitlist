/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#FAFAFA",
        "secondary": "#28272A"
      },
      fontWeight: {
        "sixHundrend": "600",
        "fourHundrend": "400"
      },
      fontSize: {
        "twentyTwo": "22px",
        "fourteen": "14px",
        "seventy": "70px"
        
      }
    },
  },
  plugins: [],
};
