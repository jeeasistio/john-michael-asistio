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

const WhatIWant = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          Over the years that I&apos;ve been studying
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          web development, I wonder how it feels
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          working with other people, learning and
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          sharing ideas. I want to experience new
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          things while learning and apply my skills
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          in real life. I want to develop my skills
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          along with other devs so that I can get
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          more experiences, ideas and inspiration
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          that I can put on to my works.
        </Typography>
      </Box>
    </Box>
  )
}

export default WhatIWant
