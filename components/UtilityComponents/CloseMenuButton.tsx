import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { closeMenu1, closeMenu2 } from '../../animations/navButton'

const sx: SxProps = {
  root: {
    width: 50,
    height: 50,
    position: 'relative',
    cursor: 'pointer'
  },
  line: {
    width: 35,
    height: 5,
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: 'secondary.main'
  }
}

interface Props {
  handleClick(): void
}

const CloseMenuButton = ({ handleClick }: Props) => {
  return (
    <Box sx={sx.root} component={motion.button} onClick={handleClick}>
      <Box
        sx={sx.line}
        component={motion.div}
        variants={closeMenu1}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <Box
        sx={sx.line}
        component={motion.div}
        variants={closeMenu2}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </Box>
  )
}

export default CloseMenuButton
