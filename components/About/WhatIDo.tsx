import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { slideUp } from '../../animations/slideUp'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxWidth: 350
  }
}

const WhatIDo = () => {
  return (
    <Box sx={sx.root}>
      <TransitioningTypography text="I usually do front-end works with a few" />
      <TransitioningTypography text="back-end. I prefer doing front-end works" />
      <TransitioningTypography text="because I enjoy seeing the works I've" />
      <TransitioningTypography text="done. But I also want to explore" />
      <TransitioningTypography text="back-end to develop my skills on that" />
      <TransitioningTypography text="part. I mostly use Next JS and Material" />
      <TransitioningTypography text="UI as my frameworks when making big" />
      <TransitioningTypography text="projects." />
    </Box>
  )
}

export default WhatIDo
