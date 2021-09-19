import ThemeProvider from '../constants/ThemeContext'

import 'tailwindcss/tailwind.css'
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  ); 
}

export default MyApp
