import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import WhatIDo from './WhatIDo'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'

const sx: SxProps = {
  root: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column'
  },
  whatIDoCtn: {
    alignSelf: 'start'
  }
}

const Dos = () => {
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
        <Box sx={sx.whatIDoCtn}>
          <WhatIDo />
        </Box>
      </Container>
    </ParallaxCtn>
  )
}

export default Dos
