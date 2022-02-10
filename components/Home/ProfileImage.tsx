import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import Image from 'next/image'

const sx: SxProps = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100%'
  }
}

const ProfileImage = () => {
  return (
    <Box sx={sx.root}>
      <Image
        className="profile-image"
        src="/"
        alt="profile"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
      />
    </Box>
  )
}

export default ProfileImage
