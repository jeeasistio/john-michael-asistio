import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { slideUp } from '../../animations/slideUp'
import React from 'react'
import { SxProps } from '@mui/material'

interface Props {
  variant?:
    | 'inherit'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | undefined
  blending?: boolean
  textStyle?: SxProps
  text: string
}

const TransitioningTypography = ({
  variant = 'body1',
  blending = true,
  textStyle,
  text
}: Props) => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        mb: '4px',
        mixBlendMode: blending ? 'difference' : 'inherit'
      }}
    >
      <motion.div variants={slideUp}>
        <Typography sx={textStyle} variant={variant}>
          {text}
        </Typography>
      </motion.div>
    </Box>
  )
}

export default TransitioningTypography
