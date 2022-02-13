import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Image from 'next/image'

const sx: SxProps = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  profile1Ctn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content'
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
    <Box sx={sx.root}>
      <Box sx={sx.profile1Ctn}>
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

      <Box sx={sx.profile2Ctn}>
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
  )
}

export default ProfilePhotos
