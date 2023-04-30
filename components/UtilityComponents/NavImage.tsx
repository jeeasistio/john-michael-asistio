import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { inTransition, outTransition } from '../../utils/utils'

const sx: SxProps = {
    root: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
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

const NavImage = () => {
    return (
        <Box sx={sx.root}>
            <Image
                src="/jeeasistio_logo.png"
                alt="nav-profile"
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
            />

            <Box
                sx={sx.overlay}
                component={motion.div}
                variants={{
                    initial: { y: '0%' },
                    animate: { y: '-105%', transition: inTransition() },
                    exit: { y: '0%', transition: outTransition() }
                }}
            />
        </Box>
    )
}

export default NavImage
