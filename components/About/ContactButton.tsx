import { SxProps } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import Box from '@mui/material/Box'
import { slideUp } from '../../animations/slideUp'
import Link from 'next/link'
import BlendingTypography from '../StyledComponents/BlendingTypography'
import useCursor from '../../utils/useCursor'

const sx: SxProps = {
    root: {
        overflow: 'hidden',
        mixBlendMode: 'difference'
    },
    iconCtn: {
        border: 1,
        borderColor: 'primary.main',
        py: '6px',
        px: 2,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: 'secondary.main'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'primary.main'
    }
}

const ContactButton = () => {
    const hoverControls = useAnimation()
    const { handleHover, handleLeave, handleTap } = useCursor()

    const slideIn = () => {
        hoverControls.start('animate')
    }
    const slideOut = () => {
        hoverControls.start('initial')
    }

    return (
        <Link href="/contact" scroll={false}>
            <a>
                <Box
                    sx={sx.root}
                    component={motion.div}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onTapStart={handleTap}
                    onTapCancel={handleLeave}
                >
                    <Box
                        sx={sx.iconCtn}
                        component={motion.div}
                        onHoverStart={slideIn}
                        onHoverEnd={slideOut}
                        onTapStart={slideIn}
                        onTapCancel={slideOut}
                        variants={slideUp}
                    >
                        <Box
                            sx={sx.overlay}
                            component={motion.div}
                            variants={slideRight}
                            initial="initial"
                            animate={hoverControls}
                        />

                        <BlendingTypography variant="button">
                            Contact
                        </BlendingTypography>
                    </Box>
                </Box>
            </a>
        </Link>
    )
}

export default ContactButton
