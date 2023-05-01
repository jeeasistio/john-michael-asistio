import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { staggerCtn } from '../../animations/slideUp'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'
import WorksList from './WorksList'

const SelectedWorks = () => {
    return (
        <Box mt="5%" mb="5%">
            <Box
                p={3}
                mb={4}
                component={motion.div}
                variants={staggerCtn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <TransitioningTypography
                    text="SELECTED WORKS"
                    variant="h2"
                    textStyle={{ fontWeight: 'bold' }}
                />
            </Box>

            <Box>
                <WorksList />
            </Box>
        </Box>
    )
}

export default SelectedWorks
