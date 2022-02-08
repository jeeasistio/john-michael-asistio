import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Aspiring from './Aspiring'
import { staggerCtn } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import Hi from './Hi'
import Container from '@mui/material/Container'

const sx: SxProps = {
  root: {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  aspiringCtn: {
    alignSelf: 'start'
  },
  hiCtn: {
    alignSelf: 'flex-end'
  }
}

const Intro = () => {
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
      <Box sx={sx.aspiringCtn}>
        <Aspiring />
      </Box>

      <Box sx={sx.hiCtn}>
        <Hi />
      </Box>
    </Container>
  )
}

export default Intro
