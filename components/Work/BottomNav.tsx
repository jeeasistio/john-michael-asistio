import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import { staggerCtn } from '../../animations/slideUp'
import { Work } from '../../lib/works'
import BackButton from './BackButton'
import NextButton from './NextButton'

const sx: SxProps = {
    root: {
        marginBottom: 6,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: { xs: 'column' },
        gap: 4
    }
}

interface Props {
    next: Work
}

const BottomNav = ({ next }: Props) => {
    return (
        <Box
            sx={sx.root}
            component={motion.div}
            variants={staggerCtn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <BackButton />
            <NextButton next={next} />
        </Box>
    )
}

export default BottomNav
