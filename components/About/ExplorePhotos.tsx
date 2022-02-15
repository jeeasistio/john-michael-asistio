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
    p: 6,
    transform: 'translateY(100px)'
  },
  exploreCtn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content'
  },
  exploreInnerCtn: {
    width: { md: 400, lg: 450 },
    height: { md: 250, lg: 300 },
    position: 'relative'
  }
}

const ExplorePhotos = () => {
  return (
    <ParallaxCtn>
      <Box sx={sx.root}>
        <Box
          sx={sx.exploreCtn}
          component={motion.div}
          variants={{
            initial: { y: '200%', rotate: 5 },
            animate: { y: '0%', rotate: -5, transition: inTransition() }
          }}
        >
          <Box sx={sx.exploreInnerCtn}>
            <Image
              src="/explore.jpg"
              alt="explore"
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

export default ExplorePhotos
