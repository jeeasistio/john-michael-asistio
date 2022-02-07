import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { openMenu1, openMenu2 } from '../../animations/navButton'

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

const OpenMenuButton = ({ handleClick }: Props) => {
  return (
    <Box sx={sx.root} component={motion.button} onClick={handleClick}>
      <Box
        sx={sx.line}
        component={motion.div}
        variants={openMenu1}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <Box
        sx={sx.line}
        component={motion.div}
        variants={openMenu2}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </Box>
  )
}

export default OpenMenuButton
