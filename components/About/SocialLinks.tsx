import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import SocialLink from './SocialLink'

const sx: SxProps = {
  root: {
    display: 'flex',
    gap: 4,
    overflow: 'hidden'
  }
}

const SOCMEDIAS = [
  { link: 'https://www.facebook.com/jeeasistio/', name: 'Facebook' },
  { link: 'https://twitter.com/jeeasistio', name: 'Twitter' },
  { link: 'https://github.com/jeeasistio', name: 'Github' }
]

const SocialLinks = () => {
  return (
    <Box sx={sx.root}>
      {SOCMEDIAS.map((media, index) => (
        <SocialLink key={index} name={media.name} link={media.link} />
      ))}
    </Box>
  )
}

export default SocialLinks
