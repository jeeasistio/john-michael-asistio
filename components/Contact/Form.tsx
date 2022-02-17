import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'
import { slideUp } from '../../animations/slideUp'
import { motion } from 'framer-motion'
import SendButton from './SendButton'
import { useState } from 'react'
import axios from 'axios'

const sx: SxProps = {
  root: {
    mixBlendMode: 'difference'
  },
  fieldCtn: {
    mb: 3,
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
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleEmail = (e) => setEmail(e.target.value)
  const handleMessage = (e) => setMessage(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post('/api/send-mail', { email, message })

    setStatus(res.data.message)
  }

  return (
    <Box sx={sx.root} component="form" onSubmit={handleSubmit}>
      <Box sx={sx.fieldCtn}>
        <TransitioningTypography text="Email" variant="subtitle2" />
        <TextField
          sx={sx.inputStyle}
          size="small"
          value={email}
          onChange={handleEmail}
          component={motion.div}
          variants={slideUp}
          fullWidth
        />
      </Box>

      <Box sx={sx.fieldCtn}>
        <TransitioningTypography text="Message" variant="subtitle2" />
        <TextField
          sx={sx.inputStyle}
          size="small"
          value={message}
          onChange={handleMessage}
          component={motion.div}
          variants={slideUp}
          fullWidth
        />
      </Box>

      <SendButton />
    </Box>
  )
}

export default Form
