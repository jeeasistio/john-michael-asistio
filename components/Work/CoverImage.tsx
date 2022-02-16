import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'

const sx: SxProps = {
  root: {}
}

interface Props {
  image: string
}

const CoverImage = ({ image }: Props) => {
  return (
    <Box sx={sx.root}>
      <Box></Box>
    </Box>
  )
}

export default CoverImage
