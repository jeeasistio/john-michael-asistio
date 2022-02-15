import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { staggerCtn } from '../../animations/slideUp'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const LetsCreate = () => {
  return (
    <Box
      component={motion.div}
      variants={staggerCtn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <TransitioningTypography text="Let's create" variant="h1" />
      <TransitioningTypography text="something new" variant="h1" />
      <TransitioningTypography text="together!" variant="h1" />
    </Box>
  )
}

export default LetsCreate
