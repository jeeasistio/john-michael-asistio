import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import Image from 'next/image'

const sx: SxProps = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#00000033'
  }
}

const ProfileImage = () => {
  return (
    <Box sx={sx.root}>
      <Image
        src="/profile.png"
        alt="profile"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
      />

      <Box sx={sx.overlay} />
    </Box>
  )
}

export default ProfileImage
