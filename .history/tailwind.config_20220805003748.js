/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      twitter: "#00ADED",
    },
  },
};
export const plugins = [require("tailwind-scrollbar-hide")];
