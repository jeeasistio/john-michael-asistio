import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2
  }
}

const Description = () => {
  return (
    <Box sx={sx.root}>
      <Box>
        <TransitioningTypography text="Shopy" variant="h1" />
      </Box>

      <Box p={[0, '2%']}>
        <TransitioningTypography text="Suspe arcu in nunc tem, ac iaculis." />
        <TransitioningTypography text="nam turpis elit, tristique vel vehicula," />
        <TransitioningTypography text="aliquam id quam sed nisl. Praesent" />
        <TransitioningTypography text="donec laoreet vestibulum. Mauris " />
        <TransitioningTypography text="aenean ac nibh neque. Quisque a." />
      </Box>
    </Box>
  )
}

export default Description
