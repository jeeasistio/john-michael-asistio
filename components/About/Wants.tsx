import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import WhatIWant from './WhatIWant'
import CollabPhotos from './CollabPhotos'

const sx: SxProps = {
  root: {
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const Wants = () => {
  return (
    <Container
      sx={sx.root}
      maxWidth="lg"
      component={motion.div}
      variants={staggerCtn}
      initial="initial"
      whileInView="animate"
      viewport={{ margin: '-50%', once: true }}
    >
      <CollabPhotos />
      <WhatIWant />
    </Container>
  )
}

export default Wants
