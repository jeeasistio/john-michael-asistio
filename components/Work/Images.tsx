import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { inTransition, outTransition } from '../../utils/utils'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'

const sx: SxProps = {
    root: {
        mt: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: '5%'
    },
    imageCtnOdd: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'center', sm: 'flex-end' }
    },
    imageCtnEven: {
        display: 'flex',
        justifyContent: { xs: 'center', sm: 'flex-start' },
        alignItems: 'center'
    },
    image: {
        width: { xs: 352, sm: 640, md: 854 },
        height: { xs: 198, sm: 360, md: 480 },
        position: 'relative',
        overflow: 'hidden',
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

interface Props {
    images: string[]
}

const Images = ({ images }: Props) => {
    return (
        <Box sx={sx.root}>
            {images.map((img, i) => (
                <Box key={img} sx={i % 2 ? sx.imageCtnOdd : sx.imageCtnEven}>
                    <ParallaxCtn>
                        <Box sx={sx.image}>
                            <Image
                                src={img}
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
                                    animate: {
                                        y: '-105%',
                                        transition: inTransition()
                                    },
                                    exit: {
                                        y: '0%',
                                        transition: outTransition()
                                    }
                                }}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            />
                        </Box>
                    </ParallaxCtn>
                </Box>
            ))}
        </Box>
    )
}

export default Images
