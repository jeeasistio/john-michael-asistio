import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import {
    MotionStyle,
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
    rootStyle?: MotionStyle
}

const ParallaxCtn = ({ children, boxStyle, rootStyle }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [elemTop, setElemTop] = useState(0)
    const [vh, setVh] = useState(0)
    const { scrollY } = useViewportScroll()

    useIsomorphicLayoutEffect(() => {
        if (ref.current) {
            setElemTop(ref.current.offsetTop)
            setVh(window.innerHeight)
        }
    }, [ref, scrollY])

    const yValue = useTransform(
        scrollY,
        [elemTop - vh, elemTop + vh],
        [-100, -200]
    )
    const y = useSpring(yValue, parallaxTransition())

    return (
        <motion.div style={{ y, ...rootStyle }} ref={ref}>
            <Box sx={boxStyle}>{children}</Box>
        </motion.div>
    )
}

export default ParallaxCtn
