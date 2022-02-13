import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Image from 'next/image'

const sx: SxProps = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  nextCtn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content'
  },
  nextInnerCtn: {
    width: 200,
    height: 200,
    position: 'relative'
  },
  muiCtn: {
    backgroundColor: 'secondary.main',
    p: '5px',
    width: 'min-content'
  },
  muiInnerCtn: {
    width: 200,
    height: 200,
    position: 'relative'
  }
}

const FrontEndPhotos = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.nextCtn}>
        <Box sx={sx.nextInnerCtn}>
          <Image
            src="/next.jpg"
            alt="nextjs"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
          />
        </Box>
      </Box>

      <Box sx={sx.muiCtn}>
        <Box sx={sx.muiInnerCtn}>
          <Image
            src="/mui.jpg"
            alt="mui"
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

export default FrontEndPhotos
