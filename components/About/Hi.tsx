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

const Hi = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          Hi I&apos;m John Michael Asistio.I love to
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          create new things, new experiences and
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          explore new tools and trends. I also love
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          my works. In each project I work on, I
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          invest plenty amount of time and effort to
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography sx={sx.text} component={motion.p} variants={slideUp}>
          ensure its quality.
        </Typography>
      </Box>
    </Box>
  )
}

export default Hi
