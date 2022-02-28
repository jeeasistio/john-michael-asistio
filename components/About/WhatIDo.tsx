import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
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
      <TransitioningTypography text="I usually do front end works with a few" />
      <TransitioningTypography text="back end. I prefer doing front-end works" />
      <TransitioningTypography text="because I enjoy seeing the works I've" />
      <TransitioningTypography text="done. But I also want to explore back" />
      <TransitioningTypography text="end to develop my skills on that part." />
      <TransitioningTypography text="I mostly use Next JS and Material UI as" />
      <TransitioningTypography text="my frameworks when making big projects" />
    </Box>
  )
}

export default WhatIDo
