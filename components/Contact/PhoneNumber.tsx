import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'

const sx: SxProps = {
  number: {
    color: 'grey.500'
  }
}

const PhoneNumber = () => {
  return (
    <Box>
      <Typography sx={sx.number}>+63 - (945) - 431 - 9361</Typography>
    </Box>
  )
}

export default PhoneNumber
