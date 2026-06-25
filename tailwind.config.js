/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: 'var(--accent-cyan)',
        purple: 'var(--accent-purple)',
        bg: 'var(--bg-primary)',
        card: 'var(--bg-card)',
        textMain: 'var(--text-primary)',
        textMuted: 'var(--text-muted)'
      }
    },
  },
  plugins: [],
}
