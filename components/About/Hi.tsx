import { SxProps } from '@mui/system'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'
import Box from '@mui/material/Box'
import Hi from './WhatIAm'

const sx: SxProps = {
  root: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    transform: 'translateY(100px)'
  },
  hiCtn: {
    alignSelf: 'flex-end'
  }
}

const HiCtn = () => {
  return (
    <ParallaxCtn>
      <Container
        sx={sx.root}
        maxWidth="lg"
        component={motion.div}
        variants={staggerCtn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Box sx={sx.hiCtn}>
          <Hi />
        </Box>
      </Container>
    </ParallaxCtn>
  )
}

export default HiCtn
