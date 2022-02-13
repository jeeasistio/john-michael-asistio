import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Image from 'next/image'

const sx: SxProps = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  collab1Ctn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content'
  },
  collab1InnerCtn: {
    width: 450,
    height: 300,
    position: 'relative'
  }
}

const CollabPhotos = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.collab1Ctn}>
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
  )
}

export default CollabPhotos
