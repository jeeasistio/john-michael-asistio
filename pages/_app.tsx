import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/themes'
import { CssBaseline } from '@mui/material'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AnimatePresence } from 'framer-motion'
config.autoAddCss = false

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default MyApp
