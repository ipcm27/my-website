/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // ou ajusta conforme seu projeto
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        devigor: {
          primary: "#0F172A", // Navy blue base
          secondary: "#6366F1", // Indigo accent
          accent: "#7C3AED", // Optional violet variation
          neutral: "#1E293B", // Slate/neutral
          "base-100": "#F9FAFB", // Background
          info: "#0EA5E9",
          success: "#22C55E",
          warning: "#FBBF24",
          error: "#EF4444",
        },
      },
      "light", // fallback
    ],
  },
};
