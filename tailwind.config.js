/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        devigor: {
          primary: "#0F172A", // Azul escuro
          secondary: "#6366F1", // Indigo
          accent: "#7C3AED", // Roxo
          neutral: "#1E293B",
          "base-100": "#F9FAFB",
          info: "#0EA5E9",
          success: "#22C55E",
          warning: "#FBBF24",
          error: "#EF4444",
        },
      },
      "light", // fallback
    ],
    darkTheme: "devigor",
  },
};
