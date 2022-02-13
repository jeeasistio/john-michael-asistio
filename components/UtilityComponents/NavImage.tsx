import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import Image from 'next/image'

const sx: SxProps = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    filter: 'grayscale(100%)'
  }
}

const NavImage = () => {
  return (
    <Box sx={sx.root}>
      <Image
        src="/nav_profile.jpg"
        alt="nav-profile"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
      />
    </Box>
  )
}

export default NavImage
