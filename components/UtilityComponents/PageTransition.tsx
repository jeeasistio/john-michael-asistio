import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'

const sx: SxProps = {
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

const PageTransition = () => {
  return (
    <Box component={motion.div}>
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
    </Box>
  )
}

export default PageTransition
