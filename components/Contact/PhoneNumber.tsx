import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import { slideUp } from '../../animations/slideUp'

const sx: SxProps = {
  textCtn: {
    overflow: 'hidden'
  },
  text: {
    color: 'grey.500'
  }
}

const PhoneNumber = () => {
  return (
    <Box>
      <Box sx={sx.textCtn}>
        <Typography
          component={motion.p}
          variants={slideUp}
          variant="h6"
          sx={sx.text}
        >
          +63 - (945) - 431 - 9361
        </Typography>
      </Box>

      <Box sx={sx.textCtn}>
        <Typography
          component={motion.p}
          variants={slideUp}
          variant="h6"
          sx={sx.text}
        >
          jeeasistio08@gmail.com
        </Typography>
      </Box>
    </Box>
  )
}

export default PhoneNumber
