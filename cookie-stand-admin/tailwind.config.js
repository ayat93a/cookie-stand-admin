module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '50%': '50%',
     '16': '4rem',
    },
    extend: {
      colors: {
        'Neutral': '#E4E7E9',
        'Purple':'#7F6B8D',
        'Blue' : '#323E74',
        'Nude' : '767C76',
        'purple-light':'#C0A9BD',

      },
    },
  },
  plugins: [],
}


