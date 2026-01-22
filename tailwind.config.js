/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'love-pink': '#FF69B4',
        'love-purple': '#DDA0DD',
        'love-red': '#FF1493',
      },
    },
  },
  plugins: [],
}
