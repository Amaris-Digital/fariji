/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: '40px',
        h2: '32px',
        h3: '24px',
        h4: '18px',
        h5: '14px',
        'p1-r': '16px',
        'p1-m': '16px',
        'p2-r': '14px',
        'p2-m': '14px',
        'p3-r': '12px',
        'p3-m': '12px',
      },
      fontWeight: {
        semibold: '600',
        medium: '500',
        regular: '400',
      },
      colors: {
        primary: {
          client: ['#ff9549', '#ffb987', '#ffdec6', '#f46d5b', '#ffaca0', '#fff2f0'],
          trustee: ['#2a6476', '#4d8a9b', '#a1c5cf'],
        },
        accents: {
          color: ['#ea8389', '#e2b3bf', '#f3e6e7'],
          primary: ['#dfaaef', '#e8d1ee', '#f6eff9'],
          secondary: ['#b5d579', '#d9e4c2', '#eef2e5'],
          tertiary: ['#80b5e9', '#c1d3e5', '#e6eef6'],
        },
        neutral: {
          100: '#252626',
          200: '#2d2d2d',
          300: '#373737',
          400: '#3f3f3f',
          500: '#4b4b4b',
          600: '#626262',
          700: '#dbdbdb',
          800: '#a6a6a6',
          900: '#fff',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
