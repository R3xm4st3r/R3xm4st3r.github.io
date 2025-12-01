/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Asegúrate de que esta línea esté correcta
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Definición de cómo se moverán los elementos (keyframes)
      keyframes: {
        moveHorizontal: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        moveVertical: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
        },
      },
      // 2. Definición del nombre y duración de la animación (animation)
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
    },
  },
  plugins: [],
}