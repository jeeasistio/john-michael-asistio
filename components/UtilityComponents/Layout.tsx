import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import React from 'react'
import Logo from './Logo'
import NavButton from './NavButton'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import NavPage from './NavPage'

const sx: SxProps = {
  main: {
    minHeight: '100vh'
  },
  overlay1: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '105%',
    backgroundColor: 'secondary.main',
    zIndex: 'tooltip'
  },
  overlay2: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '105%',
    backgroundColor: 'primary.main',
    zIndex: 'tooltip'
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

      <AnimatePresence exitBeforeEnter>{open && <NavPage />}</AnimatePresence>

      <Box component={motion.main} sx={sx.main}>
        <Box
          sx={sx.overlay1}
          component={motion.div}
          variants={{
            initial: { y: '5%' },
            animate: {
              y: '-105%',
              transition: {
                type: 'spring',
                damping: 30,
                mass: 0.5,
                stiffness: 80
              }
            }
          }}
          initial="initial"
          animate="animate"
        />

        <Box
          sx={sx.overlay2}
          component={motion.div}
          variants={{
            initial: { y: '5%' },
            animate: {
              y: '-105%',
              transition: {
                type: 'spring',
                damping: 30,
                mass: 0.5,
                stiffness: 120
              }
            }
          }}
          initial="initial"
          animate="animate"
        />

        <Box
          sx={sx.overlay1}
          component={motion.div}
          variants={{
            initial: { y: '105%' },
            exit: {
              y: '-5%',
              transition: {
                type: 'spring',
                damping: 30,
                mass: 0.5,
                stiffness: 120
              }
            }
          }}
          initial="initial"
          exit="exit"
        />

        <Box
          sx={sx.overlay2}
          component={motion.div}
          variants={{
            initial: { y: '105%' },
            exit: {
              y: '-5%',
              transition: {
                type: 'spring',
                damping: 30,
                mass: 0.5,
                stiffness: 80
              }
            }
          }}
          initial="initial"
          exit="exit"
        />

        {children}
      </Box>
    </Box>
  )
}

export default Layout
