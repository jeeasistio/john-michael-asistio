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
      viewport={{ margin: '-50%', once: true }}
    >
      <TransitioningTypography
        text="Let's create"
        variant="h2"
        textStyle={{ textAlign: 'center' }}
      />
      <TransitioningTypography
        text="something new"
        variant="h2"
        textStyle={{ textAlign: 'center' }}
      />
      <TransitioningTypography
        text="together!"
        variant="h2"
        textStyle={{ textAlign: 'center' }}
      />
    </Box>
  )
}

export default LetsCreate
