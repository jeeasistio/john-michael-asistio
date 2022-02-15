import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { inTransition } from '../../utils/utils'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'

const sx: SxProps = {
  root: {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    overflow: 'hidden',
    transform: 'translateY(100px)',
    p: 6
  },
  collab1Ctn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content'
  },
  collab1InnerCtn: {
    width: { md: 400, lg: 450 },
    height: { md: 250, lg: 300 },
    position: 'relative'
  }
}

const CollabPhotos = () => {
  return (
    <ParallaxCtn>
      <Box sx={sx.root}>
        <Box
          sx={sx.collab1Ctn}
          component={motion.div}
          variants={{
            initial: { y: '200%', rotate: -10 },
            animate: { y: '0%', rotate: 10, transition: inTransition() }
          }}
        >
          <Box sx={sx.collab1InnerCtn}>
            <Image
              src="/collab_2.jpg"
              alt="collab"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </Box>
        </Box>
      </Box>
    </ParallaxCtn>
  )
}

export default CollabPhotos
