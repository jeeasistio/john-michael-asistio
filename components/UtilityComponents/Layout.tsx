import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import React from 'react'
import Logo from './Logo'
import NavButton from './NavButton'
import { AnimatePresence, useCycle } from 'framer-motion'
import NavPage from './NavPage'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  return (
    <>
      <Logo />

      {router.pathname !== '/' && (
        <NavButton open={open} handleClick={handleClick} />
      )}

      <AnimatePresence exitBeforeEnter>{open && <NavPage />}</AnimatePresence>

      <Box component="main" sx={sx.main}>
        {children}
      </Box>
    </>
  )
}

export default Layout
