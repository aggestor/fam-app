import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import ThemeProvider, { ThemeContext } from '../constants/ThemeContext'

import 'tailwindcss/tailwind.css'
import "../styles/globals.css"
import { useState } from 'react';
import LeftNavbar from '../components/LeftNavbar';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const [enableNavbar, setEnableNavbar] = useState<boolean>(false)
  const {theme} =useContext(ThemeContext)
  
  useEffect(() => {
    function renderNavbar(allowed: boolean = true): void{
      const unAllowedPathnames : Array<string> = ["/config","/config/accesses", "/config/company","/config/design", "/config/superuser"]
      if (allowed) {
        //if the current is the unAllowedPathnames array it will not need to render the navbar
        !unAllowedPathnames.includes(pathname, 0) && setEnableNavbar(true)
      }
    }
    renderNavbar()
    return () => renderNavbar(false)
  }, [pathname])
  
  if (enableNavbar) {
    return (
      <ThemeProvider>
        <div className="w-full grid grid-cols-12">
          <LeftNavbar />
          <div className={`${theme.background.primary} col-span-10`}>
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    ); 
  }
}

export default MyApp
