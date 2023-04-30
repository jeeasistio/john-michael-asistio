import { SxProps } from '@mui/system'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import WhatIDo from './WhatIDo'
import FrontEndPhotos from './FrontEndPhotos'

const sx: SxProps = {
    root: {
        my: 12,
        display: 'flex',
        justifyContent: { xs: 'center', md: 'space-around' },
        alignItems: 'center'
    }
}

const Dos = () => {
    return (
        <Container
            sx={sx.root}
            maxWidth="lg"
            component={motion.div}
            variants={staggerCtn}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: '-25%', once: true }}
        >
            <WhatIDo />
            <FrontEndPhotos />
        </Container>
    )
}

export default Dos
