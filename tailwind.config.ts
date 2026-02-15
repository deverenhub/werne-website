import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Werne Enterprises Brand Colors
        primary: {
          DEFAULT: 'var(--primary-green)',
          light: 'var(--primary-green-light)',
          dark: 'var(--primary-green-dark)',
        },
        secondary: {
          DEFAULT: 'var(--deep-navy)',
          light: 'var(--deep-navy-light)', 
          dark: 'var(--deep-navy-dark)',
        },
        accent: {
          DEFAULT: 'var(--vibrant-teal)',
          light: 'var(--vibrant-teal-light)',
          dark: 'var(--vibrant-teal-dark)',
        },
        warning: 'var(--warm-orange)',
        info: 'var(--bright-yellow)',
        danger: 'var(--accent-red)',
        
        // Semantic colors
        success: 'var(--primary-green)',
        error: 'var(--accent-red)',
        
        // Base colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      backgroundPosition: {
        '0': '0% 50%',
        '100': '100% 50%',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-delayed': 'fadeIn 0.8s ease-out 0.2s both',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-up-delayed': 'slideUp 0.8s ease-out 0.3s both',
        'slide-right': 'slideRight 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'gradient-x': 'gradientX 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(76, 175, 80, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(76, 175, 80, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config