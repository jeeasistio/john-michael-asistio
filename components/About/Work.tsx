import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { motion, useAnimation, useCycle } from 'framer-motion'
import { useRef, useState } from 'react'
import { slideRight } from '../../animations/slideRight'
import getRelativeCoordinates from '../../utils/getRelativeCoordinates'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  root: {
    ':nth-of-type(1)': {
      borderTop: 2
    },
    borderBottom: 2,
    p: 3,
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'secondary.main'
  },
  image: {
    position: 'absolute',
    width: 50,
    height: 50,
    margin: '-4%',
    backgroundColor: 'error.main'
  }
}

const Work = () => {
  const [mousePosition, setMousePosition] = useState({})
  const [showing, show] = useCycle(0, 1)
  const ref = useRef(null)
  const hoverControls = useAnimation()

  const slideIn = () => {
    hoverControls.start('animate')
  }
  const slideOut = () => {
    hoverControls.start('initial')
  }
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, ref.current))
    show(1)
  }
  const handleMouseLeave = () => {
    show(0)
  }

  return (
    <Box
      ref={ref}
      sx={sx.root}
      component={motion.div}
      onHoverStart={slideIn}
      onHoverEnd={slideOut}
      onTapStart={slideIn}
      onTapCancel={slideOut}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={sx.overlay}
        component={motion.div}
        variants={slideRight}
        initial="initial"
        animate={hoverControls}
      />

      <Box
        sx={sx.image}
        component={motion.div}
        animate={{ x: mousePosition.x, y: mousePosition.y, opacity: showing }}
      />

      <TransitioningTypography text="SHOPY" variant="h1" />
    </Box>
  )
}

export default Work
