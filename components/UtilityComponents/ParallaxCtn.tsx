import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import React from 'react'
import { inTransition } from '../../utils/utils'

interface Props {
  children: React.ReactNode
}

const ParallaxCtn = ({ children }: Props) => {
  const { scrollYProgress } = useViewportScroll()

  const yValue = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y = useSpring(yValue, inTransition())

  return <motion.div style={{ y }}>{children}</motion.div>
}

export default ParallaxCtn
