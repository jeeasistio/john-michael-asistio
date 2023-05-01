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
    const scrollRef = useRef<HTMLDivElement>(null)
    const [dragging, setDragging] = useState(false)
    const [scrollRange, setScrollRange] = useState(0)
    const [vw, setVw] = useState(0)

    useIsomorphicLayoutEffect(() => {
        if (scrollRef.current) {
            setVw(window.innerWidth)
            setScrollRange(scrollRef.current.scrollWidth)
        }
    }, [scrollRef])

    const { scrollYProgress } = useViewportScroll()
    const xValue = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + vw])
    const x = useSpring(xValue, parallaxTransition())

    return (
        <>
            <Box sx={sx.title}>
                <BlendingTypography variant="h2">
                    SELECTED WORKS
                </BlendingTypography>
            </Box>

            <Box sx={sx.worksCtn}>
                <motion.div
                    ref={scrollRef}
                    onPanStart={() => {
                        setDragging(true)
                    }}
                    onPan={(e, info) => {
                        window.scrollBy(0, -info.velocity.x / 15)
                    }}
                    onPanEnd={() => {
                        setDragging(false)
                    }}
                    style={{
                        display: 'flex',
                        height: '100%',
                        paddingTop: '96px',
                        x,
                        cursor: 'pointer'
                    }}
                >
                    {works.map((work) => (
                        <Work {...work} key={work.title} dragging={dragging} />
                    ))}
                </motion.div>
            </Box>

            <div style={{ height: scrollRange }} />
        </>
    )
}

export default WorksList
