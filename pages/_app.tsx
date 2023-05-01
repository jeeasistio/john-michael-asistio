import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/themes'
import { CssBaseline, useMediaQuery } from '@mui/material'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import CustomCursor from '../components/UtilityComponents/CustomCursor'
import { CursorProvider } from '../utils/useCursor'
config.autoAddCss = false

function MyApp({ Component, pageProps, router }: AppProps) {
    const ref = useRef<HTMLDivElement>(null)
    const matches = useMediaQuery('(min-width:900px)')

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <CursorProvider>
                <AnimatePresence
                    exitBeforeEnter
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <motion.div ref={ref} key={router.asPath}>
                        {matches && router.pathname !== '/works' && (
                            <CustomCursor />
                        )}
                        <Component
                            {...pageProps}
                            key={router.route}
                            ref={ref}
                        />
                    </motion.div>
                </AnimatePresence>
            </CursorProvider>
        </ThemeProvider>
    )
}

export default MyApp
