/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: '#38bdf8', // Add custom skyblue color if needed
      },
      animation: {
        reflection: 'reflection 2s linear infinite', // Continuous left to right animation
      },
      keyframes: {
        reflection: {
          '0%': {
            left: '-100%', // Start from left outside
          },
          '100%': {
            left: '100%', // End at right outside
          },
        },
      },
      boxShadow: {
        'frosted': 'inset 0 0 2000px rgba(255, 255, 255, 0.5)',
      },
      backdropBlur: {
        'md': '10px',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme, addVariant }) {
      // Add variant for ::before and ::after pseudo-elements
      addVariant('before', '&::before');
      addVariant('after', '&::after');

      addComponents({
        // ::after pseudo-element styles
        [`.glassbutton:after`]: {
          content: "''",
          position: 'absolute',
          top: '0',
          left: '-100%',
          width: '100%',
          height: '100%',
          background: `linear-gradient(90deg,transparent,rgb(44, 123, 211, .4),transparent)`,
          transition: '0.2s',
          transitionDelay: '0.2s',
        },
        // ::before pseudo-element styles
        [`.glassbutton:before`]: {
          content: "''",
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          backgroundColor: theme('colors.glass-white'),
        },
        // Hover effect
        [`.glassbutton:hover:after`]: {
          left: '100%',
          color: "#2c7bd3",
        },
        [`.glassbutton:hover:before`]: {
          left: '100%',
          color: "#2c7bd3",
        },
        ['.container::before']: {
          // content: '""',
          // position: 'absolute',
          // background: 'inherit',
          // zIndex: '0',
          // top: '0',
          // left: '0',
          // right: '0',
          // bottom: '0',
          // boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
          // filter: 'blur(10px)',
          // margin: '-7px',
        },
        
      });
    },
  ],
}
