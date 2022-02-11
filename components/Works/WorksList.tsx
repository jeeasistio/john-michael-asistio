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

const WORKS = [1, 2, 3, 4, 5]

const sx: SxProps = {
  workCtn: {
    width: { xs: '100vw', lg: '50vw' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
      <motion.div
        ref={scrollRef}
        style={{
          display: 'flex',
          height: '100vh',
          position: 'sticky',
          top: 0,
          paddingTop: '96px',
          x
        }}
      >
        {WORKS.map((work) => (
          <Box sx={sx.workCtn} key={work} component={motion.div}>
            <Work />
          </Box>
        ))}
      </motion.div>

      <div style={{ height: scrollRange }} />
    </>
  )
}

export default WorksList
