module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        mov:{
          100:'#4F46E5'}
      },
      fontFamily:{
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}