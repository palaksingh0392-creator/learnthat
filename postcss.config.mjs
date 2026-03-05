const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        coral: "#f7806a",
        dark: "#1a1a1a",
        muted: "#6b6b6b",
      },
      borderRadius: {
        "4xl": "2rem",
        pill: "999px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "fade-up-delay": "fadeUp 0.9s 0.15s cubic-bezier(0.22,1,0.36,1) both",
        "fade-up-slow": "fadeUp 0.9s 0.3s cubic-bezier(0.22,1,0.36,1) both",
        "fade-up-brand": "fadeUp 0.9s 0.45s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
};
export default config;
