import Box from '@mui/material/Box'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const Thanks = () => {
  return (
    <Box>
      <TransitioningTypography
        text="Thanks for visiting!"
        textStyle={{ color: 'grey.500' }}
        variant="h6"
      />
      <TransitioningTypography
        text="Wanna discuss something?"
        textStyle={{ color: 'grey.500' }}
        variant="h6"
      />
    </Box>
  )
}

export default Thanks
