module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        neonGlow: "neonGlow 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        neonGlow: {
          "0%": {
            boxShadow: "0 0 5px rgba(0, 255, 255, 0.7)",
          },
          "100%": {
            boxShadow: "0 0 20px rgba(0, 255, 255, 1)",
          },
        },
      },
      colors: {
        neonBlue: "#00FFFF",
        neonPink: "#FF007A",
      },
    },
  },
  plugins: [],
}
