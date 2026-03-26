/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0A0F1C',
        'silver': '#C0C0C0',
        'baby-blue': '#AED8F0',
        'card-bg': '#111827',
        'border-light': 'rgba(255,255,255,0.08)',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0AEC0',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(174, 216, 240, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(174, 216, 240, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
