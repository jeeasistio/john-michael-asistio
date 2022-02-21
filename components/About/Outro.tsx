import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import LetsCreate from './LetsCreate'
import ContactButton from './ContactButton'
import SocialLinks from './SocialLinks'
import { motion } from 'framer-motion'
import { staggerCtn } from '../../animations/slideUp'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'

const sx: SxProps = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateY(225px)',
    gap: 5
  }
}

const Outro = () => {
  return (
    <ParallaxCtn>
      <Box
        sx={sx.root}
        component={motion.div}
        variants={staggerCtn}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: '-50%', once: true }}
      >
        <Box>
          <LetsCreate />
        </Box>

        <Box>
          <ContactButton />
        </Box>

        <Box>
          <SocialLinks />
        </Box>
      </Box>
    </ParallaxCtn>
  )
}

export default Outro
