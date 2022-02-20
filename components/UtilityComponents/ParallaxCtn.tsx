import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import {
  motion,
  useIsomorphicLayoutEffect,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import React, { useRef, useState } from 'react'
import { parallaxTransition } from '../../utils/utils'

interface Props {
  children: React.ReactNode
  boxStyle?: SxProps
}

const ParallaxCtn = ({ children, boxStyle }: Props) => {
  const ref = useRef(null)
  const [elemTop, setElemTop] = useState(0)
  const [vh, setVh] = useState(0)
  const { scrollY } = useViewportScroll()

  useIsomorphicLayoutEffect(() => {
    setElemTop(ref.current.offsetTop)
    setVh(window.innerHeight)
  }, [ref, scrollY])

  const yValue = useTransform(
    scrollY,
    [elemTop - vh, elemTop + vh],
    [-100, -200]
  )
  const y = useSpring(yValue, parallaxTransition())

  return (
    <motion.div style={{ y }} ref={ref}>
      <Box sx={boxStyle}>{children}</Box>
    </motion.div>
  )
}

export default ParallaxCtn
