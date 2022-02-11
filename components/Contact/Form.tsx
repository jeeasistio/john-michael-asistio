import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'
import { slideUp } from '../../animations/slideUp'
import { motion } from 'framer-motion'

const sx: SxProps = {
  root: {
    mixBlendMode: 'difference'
  },
  fieldCtn: {
    my: 2,
    overflow: 'hidden'
  },
  inputStyle: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 0,
        borderWidth: 1,
        boxShadow: 1,
        borderColor: 'secondary.main'
      },
      '&:hover fieldset': {
        borderColor: 'secondary.main',
        borderWidth: 2
      },
      '&.Mui-focused fieldset': {
        borderColor: 'secondary.main'
      }
    }
  }
}

const Form = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.fieldCtn}>
        <TransitioningTypography text="Email" variant="subtitle2" />
        <TextField
          sx={sx.inputStyle}
          size="small"
          component={motion.div}
          variants={slideUp}
        />
      </Box>

      <Box sx={sx.fieldCtn}>
        <TransitioningTypography text="Message" variant="subtitle2" />
        <TextField
          sx={sx.inputStyle}
          size="small"
          component={motion.div}
          variants={slideUp}
        />
      </Box>
    </Box>
  )
}

export default Form
