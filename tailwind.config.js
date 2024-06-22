module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'purple-400': '#9333ea',
        'pink-600': '#db2777',
      }),
    },
  },
  plugins: [],
}