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

const Hi = () => {
  return (
    <Box sx={sx.root}>
      <TransitioningTypography text="Hi I'm John Michael Asistio.I love to" />
      <TransitioningTypography text="create new things, new experiences and" />
      <TransitioningTypography text="explore new tools and trends. I also love" />
      <TransitioningTypography text="my works. In each project I work on, I" />
      <TransitioningTypography text="invest plenty amount of time and effort to" />
      <TransitioningTypography text="ensure its quality." />
    </Box>
  )
}

export default Hi
