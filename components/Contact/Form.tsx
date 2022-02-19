import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { slideUp } from '../../animations/slideUp'
import { AnimatePresence, motion } from 'framer-motion'
import SendButton from './SendButton'
import { useState } from 'react'
import axios from 'axios'
import BlendingTypography from '../StyledComponents/BlendingTypography'

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
  },
  labelCtn: {
    overflow: 'hidden'
  }
}

const Form = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleEmail = (e) => setEmail(e.target.value)
  const handleMessage = (e) => setMessage(e.target.value)

  const handleSubmit = async () => {
    setStatus('loading')

    try {
      await axios.post('/api/send-mail', { email, message })
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <Box sx={sx.root}>
      <AnimatePresence exitBeforeEnter>
        <Box sx={{ overflow: 'hidden' }}>
          {status === 'loading' && (
            <Box
              component={motion.div}
              variants={slideUp}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <BlendingTypography variant="h5">
                Mail Sending...
              </BlendingTypography>
            </Box>
          )}
          {status === 'success' && (
            <Box
              component={motion.div}
              variants={slideUp}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <BlendingTypography variant="h5">
                I&apos;ve got your mail
              </BlendingTypography>
            </Box>
          )}
          {status === 'error' && (
            <Box
              component={motion.div}
              variants={slideUp}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <BlendingTypography variant="h5">
                Mail not sent. Please try again later.
              </BlendingTypography>
            </Box>
          )}
        </Box>
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {status === '' && (
          <>
            <Box sx={sx.fieldCtn}>
              <Box sx={sx.labelCtn}>
                <Box
                  component={motion.div}
                  variants={slideUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <BlendingTypography variant="subtitle2">
                    Email
                  </BlendingTypography>
                </Box>
              </Box>

              <TextField
                sx={sx.inputStyle}
                size="small"
                value={email}
                type="email"
                onChange={handleEmail}
                component={motion.div}
                variants={slideUp}
                initial="initial"
                animate="animate"
                exit="exit"
                fullWidth
                required
              />
            </Box>

            <Box sx={sx.fieldCtn}>
              <Box sx={sx.labelCtn}>
                <Box
                  component={motion.div}
                  variants={slideUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <BlendingTypography variant="subtitle2">
                    Message
                  </BlendingTypography>
                </Box>
              </Box>

              <TextField
                sx={sx.inputStyle}
                size="small"
                multiline
                value={message}
                onChange={handleMessage}
                component={motion.div}
                variants={slideUp}
                initial="initial"
                animate="animate"
                exit="exit"
                fullWidth
                required
              />
            </Box>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {status === '' && <SendButton handleClick={handleSubmit} />}
      </AnimatePresence>
    </Box>
  )
}

export default Form
