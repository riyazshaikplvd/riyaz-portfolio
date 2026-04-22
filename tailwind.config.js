/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // (safe even if you don't use pages)
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "text-cyan-400","text-blue-400","text-red-400","text-green-400",
    "text-orange-400","text-yellow-400","text-purple-400","text-pink-400",
    "text-teal-400","text-rose-400",
    "bg-cyan-500/10","bg-blue-500/10","bg-red-500/10","bg-green-500/10",
    "bg-orange-500/10","bg-yellow-500/10","bg-purple-500/10","bg-pink-500/10",
    "bg-teal-500/10","bg-rose-500/10"
  ],
  plugins: [],
}
