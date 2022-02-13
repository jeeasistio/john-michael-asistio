import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Image from 'next/image'

const sx: SxProps = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  exploreCtn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content'
  },
  exploreInnerCtn: {
    width: 450,
    height: 300,
    position: 'relative'
  }
}

const ExplorePhotos = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.exploreCtn}>
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
  )
}

export default ExplorePhotos
