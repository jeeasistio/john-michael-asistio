import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import WhatIWant from './WhatIWant'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'

const sx: SxProps = {
  root: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column'
  },
  whatIWantCtn: {
    alignSelf: 'flex-end'
  }
}

const Wants = () => {
  return (
    <ParallaxCtn>
      <Container
        sx={sx.root}
        maxWidth="lg"
        component={motion.div}
        variants={staggerCtn}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: '-20%', once: true }}
      >
        <Box sx={sx.whatIWantCtn}>
          <WhatIWant />
        </Box>
      </Container>
    </ParallaxCtn>
  )
}

export default Wants
