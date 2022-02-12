import Box from '@mui/material/Box'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'
import WorksList from './WorksList'

const SelectedWorks = () => {
  return (
    <ParallaxCtn>
      <Box p={3} mb={4}>
        <TransitioningTypography
          text="SELECTED WORKS"
          variant="h2"
          textStyle={{ fontWeight: 'bold' }}
        />
      </Box>

      <Box>
        <WorksList />
      </Box>
    </ParallaxCtn>
  )
}

export default SelectedWorks
