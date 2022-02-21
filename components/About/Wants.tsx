import { SxProps } from '@mui/system'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import WhatIWant from './WhatIWant'
import CollabPhotos from './CollabPhotos'

const sx: SxProps = {
  root: {
    my: 12,
    display: 'flex',
    justifyContent: { xs: 'center', md: 'space-around' },
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
      viewport={{ margin: '-25%', once: true }}
    >
      <CollabPhotos />
      <WhatIWant />
    </Container>
  )
}

export default Wants
