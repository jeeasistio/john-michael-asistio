import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { slideUp } from '../../animations/slideUp'

const sx: SxProps = {
  root: {},
  textCtn: {
    overflow: 'hidden'
  },
  text: {
    fontWeight: 'bold'
  }
}

const Aspiring = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.textCtn}>
        <Typography
          sx={sx.text}
          component={motion.h2}
          variants={slideUp}
          variant="h1"
        >
          An aspiring
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography
          sx={sx.text}
          component={motion.h2}
          variants={slideUp}
          variant="h1"
        >
          fullstack web
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography
          sx={sx.text}
          component={motion.h2}
          variants={slideUp}
          variant="h1"
        >
          developer
        </Typography>
      </Box>
    </Box>
  )
}

export default Aspiring
