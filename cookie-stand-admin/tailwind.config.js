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
        'Neutral': '#F6F4F2',
        'Purple':'#DF3062',
        'Blue' : '#323E74',
        'Nude' : '767C76',
        'purple-light':'#425664',

      },
    },
  },
  plugins: [],
}


