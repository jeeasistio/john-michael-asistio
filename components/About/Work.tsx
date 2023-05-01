import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { slideRight } from '../../animations/slideRight'
import { staggerCtn } from '../../animations/slideUp'
import works, { Work } from '../../lib/works'
import useCursor from '../../utils/useCursor'
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
    }
}

interface Props extends Work {
    index: number
}

const Work = ({ title, image, index }: Props) => {
    const ref = useRef(null)
    const { handleShowImg, handleHideImg } = useCursor()
    const hoverControls = useAnimation()

    const slideIn = () => {
        hoverControls.start('animate')
    }
    const slideOut = () => {
        hoverControls.start('initial')
    }
    const handleMouseMove = () => {
        handleShowImg(image)
    }
    const handleMouseLeave = () => {
        handleHideImg()
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

                    {index === works.length - 1 && (
                        <Box
                            sx={sx.underline}
                            component={motion.div}
                            variants={slideRight}
                        />
                    )}
                    <Box
                        component={motion.div}
                        sx={sx.overline}
                        variants={slideRight}
                    />

                    <TransitioningTypography
                        text={title.toUpperCase()}
                        variant="h1"
                    />
                </Box>
            </a>
        </Link>
    )
}

export default Work
