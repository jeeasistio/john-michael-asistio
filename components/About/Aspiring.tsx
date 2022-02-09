import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { slideUp } from '../../animations/slideUp'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

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
      <TransitioningTypography
        text="An Aspiring"
        variant="h1"
        textStyle={{ fontWeight: 'bold' }}
      />
      <TransitioningTypography
        text="fullstack web"
        variant="h1"
        textStyle={{ fontWeight: 'bold' }}
      />
      <TransitioningTypography
        text="developer"
        variant="h1"
        textStyle={{ fontWeight: 'bold' }}
      />
    </Box>
  )
}

export default Aspiring
