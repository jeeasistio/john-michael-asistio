import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'
import VisitButton from './VisitButton'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2
  },
  titleCtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  }
}

interface Props {
  title: string
  description: string[]
  onlineLink: string
}

const Description = ({ title, description, onlineLink }: Props) => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.titleCtn}>
        <TransitioningTypography text={title} variant="h1" />
        <VisitButton link={onlineLink} />
      </Box>

      <Box p={[0, '2%']}>
        {description.map((desc, i) => (
          <TransitioningTypography key={i} text={desc} />
        ))}
      </Box>
    </Box>
  )
}

export default Description
