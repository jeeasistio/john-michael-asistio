import Box from '@mui/material/Box'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const PhoneNumber = () => {
  return (
    <Box>
      <TransitioningTypography
        textStyle={{ color: 'grey.500' }}
        text="+63 - (945) - 431 - 9361"
      />
      <TransitioningTypography
        textStyle={{ color: 'grey.500' }}
        text="jeeasistio08@gmail.com"
      />
    </Box>
  )
}

export default PhoneNumber
