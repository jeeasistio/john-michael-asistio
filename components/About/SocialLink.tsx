import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { motion, useAnimation } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'
import Link from 'next/link'
import useCursor from '../../utils/useCursor'

const sx: SxProps = {
    root: {
        overflow: 'hidden',
        position: 'relative',
        p: '2px',
        cursor: 'pointer'
    },
    underline: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 2,
        backgroundColor: 'primary.main'
    }
}

interface Props {
    name: string
    link: string
}

const SocialLink = ({ name, link }: Props) => {
    const hoverControls = useAnimation()
    const { handleHover, handleLeave, handleTap } = useCursor()

    const slideIn = () => {
        hoverControls.start('animate')
        handleTap()
    }
    const slideOut = () => {
        hoverControls.start('initial')
        handleLeave()
    }

    return (
        <Link href={link} passHref>
            <a target="_blank">
                <Box
                    sx={sx.root}
                    component={motion.div}
                    onHoverStart={slideIn}
                    onHoverEnd={slideOut}
                    onTapStart={slideIn}
                    onTapCancel={slideOut}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                >
                    <Box
                        sx={sx.underline}
                        component={motion.div}
                        variants={slideRight}
                        initial="initial"
                        animate={hoverControls}
                    />

                    <TransitioningTypography
                        text={name}
                        textStyle={{ color: 'secondary.contrastText' }}
                    />
                </Box>
            </a>
        </Link>
    )
}

export default SocialLink
