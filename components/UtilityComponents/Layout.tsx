import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import React from 'react'
import Logo from './Logo'
import NavButton from './NavButton'
import { AnimatePresence, useCycle } from 'framer-motion'
import NavPage from './NavPage'

const sx: SxProps = {
  header: {
    minHeight: '10vh',
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 4,
    mixBlendMode: 'difference',
    zIndex: 'appBar'
  },
  main: {
    minHeight: '90vh'
  }
}

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const [open, handleClick] = useCycle(false, true)

  return (
    <>
      <Box component="header" sx={sx.header}>
        <Logo />
        <NavButton open={open} handleClick={handleClick} />
      </Box>

      <AnimatePresence exitBeforeEnter>{open && <NavPage />}</AnimatePresence>

      <Box component="main" sx={sx.main}>
        {children}
      </Box>
    </>
  )
}

export default Layout
