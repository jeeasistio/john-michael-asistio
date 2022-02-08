import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { slideUp } from '../../animations/slideUp'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxWidth: 350
  },
  textCtn: {
    overflow: 'hidden',
    mb: '4px'
  },
  text: {}
}

const WhatIDo = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          I usually do front-end works with a few
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          back-end. I prefer doing front-end works
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          because I enjoy seeing the works I&apos;ve
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          done. But I also want to explore
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          back-end to develop my skills on that
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          part. I mostly use Next JS and Material
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          UI as my frameworks when making big
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          projects.
        </Typography>
      </Box>
    </Box>
  )
}

export default WhatIDo
