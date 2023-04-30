import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { inTransition } from '../../utils/utils'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'

const sx: SxProps = {
    root: {
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        overflow: 'hidden',
        transform: 'translateY(100px)',
        p: 6
    },
    nextCtn: {
        backgroundColor: 'secondary.main',
        p: '5px',
        width: 'min-content'
    },
    nextInnerCtn: {
        width: { md: 150, lg: 200 },
        height: { md: 150, lg: 200 },
        position: 'relative'
    },
    muiCtn: {
        backgroundColor: 'secondary.main',
        p: '5px',
        width: 'min-content'
    },
    muiInnerCtn: {
        width: { md: 150, lg: 200 },
        height: { md: 150, lg: 200 },
        position: 'relative'
    }
}

const FrontEndPhotos = () => {
    return (
        <ParallaxCtn>
            <Box sx={sx.root}>
                <Box
                    sx={sx.nextCtn}
                    component={motion.div}
                    variants={{
                        initial: { y: '200%', rotate: 0 },
                        animate: {
                            y: '0%',
                            rotate: 0,
                            transition: inTransition()
                        }
                    }}
                >
                    <Box sx={sx.nextInnerCtn}>
                        <Image
                            src="/next.jpg"
                            alt="nextjs"
                            layout="fill"
                            objectFit="cover"
                            priority
                            quality={100}
                        />
                    </Box>
                </Box>

                <Box
                    sx={sx.muiCtn}
                    component={motion.div}
                    variants={{
                        initial: { y: '200%', rotate: 5 },
                        animate: {
                            y: '0%',
                            rotate: -5,
                            transition: inTransition()
                        }
                    }}
                >
                    <Box sx={sx.muiInnerCtn}>
                        <Image
                            src="/mui.jpg"
                            alt="mui"
                            layout="fill"
                            objectFit="cover"
                            priority
                            quality={100}
                        />
                    </Box>
                </Box>
            </Box>
        </ParallaxCtn>
    )
}

export default FrontEndPhotos
