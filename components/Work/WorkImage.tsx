import Box from '@mui/material/Box'
import {
    motion,
    useSpring,
    useTransform,
    useViewportScroll
} from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../../utils/useWindowDimensions'

const WorkImage = ({ src }: { src: string }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { height: vh } = useWindowDimensions()
    const [offsetTop, setOffsetTop] = useState(0)
    const [elemHeight, setElemHeight] = useState(0)
    const range = [offsetTop, offsetTop + elemHeight]

    useEffect(() => {
        setOffsetTop(ref.current?.offsetTop || 0)
        setElemHeight(ref.current?.clientHeight || 0)
    }, [])

    const { scrollY } = useViewportScroll()
    const scaleValue = useTransform(scrollY, range, [1, 0.8])
    const opacityValue = useTransform(scrollY, range, [1, 0])
    const yValue = useTransform(scrollY, [range[0] - vh, range[1]], [300, -300])
    const opacity = useSpring(opacityValue, { damping: 20, stiffness: 80 })
    const scale = useSpring(scaleValue, { damping: 20, stiffness: 80 })
    const y = useSpring(yValue, { damping: 20, stiffness: 80 })

    return (
        <Box sx={{ position: 'sticky', top: 20 }} ref={ref}>
            {/* @ts-ignore */}
            <Box
                sx={{
                    width: '100%',
                    height: { xs: 300, sm: 600, md: '100dvh' },
                    position: 'relative'
                }}
                component={motion.div}
                style={{ scale, opacity, y }}
            >
                <Image
                    src={src}
                    alt="work-image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                />
            </Box>
        </Box>
    )
}

export default WorkImage
