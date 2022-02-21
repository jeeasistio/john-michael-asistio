import { SxProps } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import Box from '@mui/material/Box'
import { slideUp } from '../../animations/slideUp'
import BlendingTypography from '../StyledComponents/BlendingTypography'
import useCursor from '../../utils/useCursor'

const sx: SxProps = {
  root: {
    overflow: 'hidden',
    mixBlendMode: 'difference',
    textAlign: 'center',
    width: '100%'
  },
  iconCtn: {
    border: 1,
    borderColor: 'secondary.main',
    py: '6px',
    px: 2,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'secondary.main'
  }
}

const SendButton = () => {
  const { handleHover, handleLeave, handleTap } = useCursor()
  const hoverControls = useAnimation()

  const slideIn = () => {
    hoverControls.start('animate')
  }
  const slideOut = () => {
    hoverControls.start('initial')
  }

  return (
    <Box
      sx={sx.root}
      component="button"
      type="submit"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      whileTap={handleTap}
    >
      <Box
        sx={sx.iconCtn}
        component={motion.div}
        onHoverStart={slideIn}
        onHoverEnd={slideOut}
        onTapStart={slideIn}
        onTapCancel={slideOut}
        variants={slideUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Box
          sx={sx.overlay}
          component={motion.div}
          variants={slideRight}
          initial="initial"
          animate={hoverControls}
        />

        <BlendingTypography color="secondary" variant="button">
          Send Mail
        </BlendingTypography>
      </Box>
    </Box>
  )
}

export default SendButton
