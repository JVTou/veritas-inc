/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        "bounce-short": "bounce 1s ease-in-out 5",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1845px",
    },
    backgroundImage: {
      graphics: "url('../src/assets/background/graphics.svg')",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["business"],
          accent: "#ffe989",
        },
      },
    ],
  },
};
