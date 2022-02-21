import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/themes'
import { CssBaseline } from '@mui/material'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import CustomCursor from '../components/UtilityComponents/CustomCursor'
config.autoAddCss = false

function MyApp({ Component, pageProps, router }: AppProps) {
  const ref = useRef(null)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div ref={ref}>
            <CustomCursor componentRef={ref.current} />
            <Component {...pageProps} key={router.route} ref={ref} />
          </motion.div>
        </AnimatePresence>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default MyApp
