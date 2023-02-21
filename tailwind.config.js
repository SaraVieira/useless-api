module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        halloween: {
          ...require("daisyui/src/colors/themes")["[data-theme=halloween]"],
        },
      },
    ],
  },
};
