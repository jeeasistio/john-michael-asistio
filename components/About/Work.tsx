import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { motion, useAnimation, useCycle } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { slideRight } from '../../animations/slideRight'
import { Work } from '../../lib/works'
import getRelativeCoordinates from '../../utils/getRelativeCoordinates'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  root: {
    ':nth-of-type(1)': {
      borderTop: 2
    },
    borderBottom: 2,
    p: 3,
    position: 'relative',
    cursor: 'pointer'
  },
  overlay: {
    position: 'absolute',
    top: -1,
    left: 0,
    width: '100%',
    height: '105%',
    backgroundColor: 'secondary.main'
  },
  imageCtn: {
    position: 'absolute',
    width: 250,
    height: 300,
    margin: '-14%',
    pointerEvents: 'none',
    zIndex: 'appBar'
  },
  imageInnerCtn: {
    position: 'relative',
    width: '100%',
    height: '100%'
  }
}

interface Props extends Work {}

const Work = ({ title, image }: Props) => {
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
    <Link
      href={`/work/${title.toLowerCase().replace(/\s/g, '-')}`}
      scroll={false}
    >
      <a>
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
            sx={sx.imageCtn}
            component={motion.div}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              opacity: showing
            }}
          >
            <Box sx={sx.imageInnerCtn}>
              <Image
                src={image}
                alt="work"
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
              />
            </Box>
          </Box>

          <Box sx={{ zIndex: 3 }}>
            <TransitioningTypography text={title.toUpperCase()} variant="h1" />
          </Box>
        </Box>
      </a>
    </Link>
  )
}

export default Work
