import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { slideUp } from '../../animations/slideUp'
import { AnimatePresence, motion } from 'framer-motion'
import SendButton from './SendButton'
import { ChangeEvent, FormEventHandler, useState } from 'react'
import axios from 'axios'
import BlendingTypography from '../StyledComponents/BlendingTypography'
import useCursor from '../../utils/useCursor'

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
    const { handleHover, handleLeave, handleTap } = useCursor()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')

    const handleEmail = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => setEmail(e.target.value)
    const handleMessage = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => setMessage(e.target.value)

    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (
        e
    ) => {
        e?.preventDefault()
        setStatus('loading')

        try {
            await axios.post('/api/send-mail', { email, message })
            setStatus('success')
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <Box sx={sx.root} component="form" onSubmit={handleSubmit}>
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
                                I&apos;ve got your mail.
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
                    <Box>
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

                            <Box
                                component={motion.div}
                                variants={slideUp}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                onMouseEnter={handleHover}
                                onMouseLeave={handleLeave}
                                onTapStart={handleTap}
                                onTapCancel={handleLeave}
                            >
                                <TextField
                                    sx={sx.inputStyle}
                                    size="small"
                                    value={email}
                                    type="email"
                                    onChange={handleEmail}
                                    fullWidth
                                    required
                                />
                            </Box>
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

                            <Box
                                component={motion.div}
                                variants={slideUp}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                onMouseEnter={handleHover}
                                onMouseLeave={handleLeave}
                                onTapStart={handleTap}
                                onTapCancel={handleLeave}
                            >
                                <TextField
                                    sx={sx.inputStyle}
                                    size="small"
                                    multiline
                                    value={message}
                                    onChange={handleMessage}
                                    fullWidth
                                    required
                                />
                            </Box>
                        </Box>
                    </Box>
                )}
            </AnimatePresence>

            <AnimatePresence exitBeforeEnter>
                {status === '' && <SendButton />}
            </AnimatePresence>
        </Box>
    )
}

export default Form
