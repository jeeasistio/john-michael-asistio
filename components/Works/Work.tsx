import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { useState } from 'react'
// import Typography from '@mui/material/Typography'
// import Image from 'next/image'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  root: {},
  imageCtn: {
    height: 550,
    width: 550,
    backgroundColor: 'success.main'
  },
  textCtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }
}

const Work = () => {
  return (
    <Box>
      <Box sx={sx.imageCtn}>
        {/* <Image
          className="work-image"
          src="/"
          alt="work"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        /> */}
      </Box>

      <Box sx={sx.textCtn}>
        <Box sx={sx.indexCtn}>
          <TransitioningTypography text="01" variant="h3" />
        </Box>

        <Box sx={sx.titleCtn}>
          {/* <Typography display="inline" variant="h2">
            / Shopy
          </Typography> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Work
