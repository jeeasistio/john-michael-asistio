import { SxProps } from '@mui/system'
import Aspiring from './WhatIWannaBe'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Container from '@mui/material/Container'
import ProfilePhotos from './ProfilePhotos'

const sx: SxProps = {
  aspiringCtn: {
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    pt: 12,
    isolation: 'isolate'
  }
}

const AspiringCtn = () => {
  return (
    <Container
      sx={sx.aspiringCtn}
      maxWidth="xl"
      component={motion.div}
      variants={staggerCtn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Aspiring />
      <ProfilePhotos />
    </Container>
  )
}

export default AspiringCtn
