import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  root: {
    marginTop: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: { xs: 'column' },
    gap: 4
  },
  allWorks: {
    alignSelf: 'flex-start'
  },
  nextWork: {
    alignSelf: 'flex-end'
  }
}

const BottomNav = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.allWorks}>
        <TransitioningTypography variant="h1" text="All Works" />
      </Box>

      <Box sx={sx.nextWork}>
        <TransitioningTypography variant="h1" text="Next Work" />
      </Box>
    </Box>
  )
}

export default BottomNav
