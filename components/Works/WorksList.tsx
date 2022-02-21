import { SxProps } from '@mui/system'
import Work from './Work'
import Box from '@mui/material/Box'
import {
  motion,
  useIsomorphicLayoutEffect,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import { useRef, useState } from 'react'
import { parallaxTransition } from '../../utils/utils'
import works from '../../lib/works'
import BlendingTypography from '../StyledComponents/BlendingTypography'

const sx: SxProps = {
  title: {
    position: 'fixed',
    top: '5%',
    left: '5%'
  },
  worksCtn: {
    width: '100vw',
    height: '100vh',
    position: 'sticky',
    top: 0,
    overflowY: 'scroll',
    overflowX: 'hidden'
  }
}

const WorksList = () => {
  const scrollRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [vw, setVw] = useState(0)

  useIsomorphicLayoutEffect(() => {
    setVw(window.innerWidth)
    setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const { scrollYProgress } = useViewportScroll()
  const xValue = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + vw])
  const x = useSpring(xValue, parallaxTransition())

  return (
    <>
      <Box sx={sx.title}>
        <BlendingTypography component="h1" variant="h2">
          SELECTED WORKS
        </BlendingTypography>
      </Box>

      <Box sx={sx.worksCtn}>
        <motion.div
          ref={scrollRef}
          style={{
            display: 'flex',
            height: '100%',
            paddingTop: '96px',
            x
          }}
        >
          {works.map((work) => (
            <Work {...work} key={work.title} />
          ))}
        </motion.div>
      </Box>

      <div style={{ height: scrollRange }} />
    </>
  )
}

export default WorksList
