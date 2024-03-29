import { SxProps } from '@mui/system'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Hi from './WhatIAm'
import ExplorePhotos from './ExplorePhotos'

const sx: SxProps = {
    root: {
        my: 12,
        display: 'flex',
        justifyContent: { xs: 'flex-start', sm: 'space-around' },
        alignItems: 'center'
    }
}

const HiCtn = () => {
    return (
        <Container
            sx={sx.root}
            maxWidth="lg"
            component={motion.div}
            variants={staggerCtn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <ExplorePhotos />
            <Hi />
        </Container>
    )
}

export default HiCtn
