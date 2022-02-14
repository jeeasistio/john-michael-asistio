import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { inTransition } from '../../utils/utils'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'

const sx: SxProps = {
  root: {
    display: { xs: 'none', lg: 'flex' },
    alignItems: 'center',
    minHeight: '50vh',
    overflow: 'hidden',
    p: 6,
    transform: 'translateY(100px)'
  },
  profile1Ctn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content',
    zIndex: 2
  },
  profile1InnerCtn: {
    width: 200,
    height: 300,
    position: 'relative'
  },
  profile2Ctn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content'
  },
  profile2InnerCtn: {
    width: 200,
    height: 200,
    position: 'relative'
  }
}

const ProfilePhotos = () => {
  return (
    <ParallaxCtn>
      <Box sx={sx.root}>
        <Box
          sx={sx.profile1Ctn}
          component={motion.div}
          variants={{
            initial: { y: '200%', rotate: -15 },
            animate: { y: '0%', rotate: 15, transition: inTransition() }
          }}
        >
          <Box sx={sx.profile1InnerCtn}>
            <Image
              src="/profile_1.jpg"
              alt="profile"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </Box>
        </Box>

        <Box
          sx={sx.profile2Ctn}
          component={motion.div}
          variants={{
            initial: { y: '200%', rotate: 10 },
            animate: { y: '0%', rotate: -10, transition: inTransition() }
          }}
        >
          <Box sx={sx.profile2InnerCtn}>
            <Image
              src="/profile_2.jpg"
              alt="profile"
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

export default ProfilePhotos
