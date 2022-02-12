import { SxProps } from '@mui/system'
import Aspiring from './WhatIWannaBe'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'

const sx: SxProps = {
  aspiringCtn: {
    minHeight: '50vh',
    pt: 12
  }
}

const AspiringCtn = () => {
  return (
    <Container
      sx={sx.aspiringCtn}
      maxWidth="lg"
      component={motion.div}
      variants={staggerCtn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Aspiring />
    </Container>
  )
}

export default AspiringCtn
