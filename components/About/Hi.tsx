import { SxProps } from '@mui/system'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Hi from './WhatIAm'

const sx: SxProps = {
  root: {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  hiCtn: {
    alignSelf: 'flex-end'
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
      <Box sx={sx.hiCtn}>
        <Hi />
      </Box>
    </Container>
  )
}

export default HiCtn
