import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import useMouse from '@react-hook/mouse-position'
import { motion, useAnimation, useCycle } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { slideRight } from '../../animations/slideRight'
import { staggerCtn } from '../../animations/slideUp'
import works, { Work } from '../../lib/works'
import useCursor from '../../utils/useCursor'
import { inTransition } from '../../utils/utils'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  root: {
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
  overline: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 4,
    backgroundColor: 'secondary.main',
    zIndex: -1
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 3,
    backgroundColor: 'secondary.main'
  },
  imageCtn: {
    position: 'absolute',
    width: 250,
    height: 300,
    margin: '-14%',
    pointerEvents: 'none'
  },
  imageInnerCtn: {
    position: 'relative',
    width: '100%',
    height: '100%'
  }
}

interface Props extends Work {}

const Work = ({ title, image, index }: Props) => {
  const ref = useRef(null)
  const { handleHover, handleLeave, handleTap } = useCursor()
  const [showing, show] = useCycle(0, 1)
  const hoverControls = useAnimation()
  const mouse = useMouse(ref, {})

  const slideIn = () => {
    hoverControls.start('animate')
  }
  const slideOut = () => {
    hoverControls.start('initial')
  }
  const handleMouseMove = (e) => {
    show(1)
    handleHover()
  }
  const handleMouseLeave = () => {
    handleLeave()
    show(0)
  }

  return (
    <Link href={`/work/${title.toLowerCase().replace(/\s/g, '-')}`}>
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
          whileTap={handleTap}
          variants={staggerCtn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Box
            sx={sx.overlay}
            component={motion.div}
            variants={slideRight}
            initial="initial"
            animate={hoverControls}
          />

          {index === works.length && (
            <Box
              sx={sx.underline}
              component={motion.div}
              variants={slideRight}
            />
          )}
          <Box component={motion.div} sx={sx.overline} variants={slideRight} />

          <Box
            sx={sx.imageCtn}
            component={motion.div}
            animate={{
              x: mouse.x,
              y: mouse.y,
              opacity: showing
            }}
            transition={{
              opacity: { duration: 0.1, delay: 0.1 },
              type: 'spring',
              damping: 30,
              mass: 0.3,
              stiffness: 300
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

          <TransitioningTypography text={title.toUpperCase()} variant="h1" />
        </Box>
      </a>
    </Link>
  )
}

export default Work
