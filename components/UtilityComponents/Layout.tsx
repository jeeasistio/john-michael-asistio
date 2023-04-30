import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import React from 'react'
import Logo from './Logo'
import NavButton from './NavButton'
import { AnimatePresence, useCycle } from 'framer-motion'
import NavPage from './NavPage'
import PageTransition from './PageTransition'

const sx: SxProps = {
    main: {
        minHeight: '100vh'
    }
}

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const [open, handleClick] = useCycle(false, true)

    return (
        <Box sx={sx.root}>
            <Logo />

            <NavButton open={open} handleClick={handleClick} />

            <AnimatePresence exitBeforeEnter>
                {open && <NavPage />}
            </AnimatePresence>

            <PageTransition />

            <Box sx={sx.main}>{children}</Box>
        </Box>
    )
}

export default Layout
