import Box from '@mui/material/Box'
import {
  faFacebookF,
  faGithubAlt,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { SxProps } from '@mui/system'
import SocialLink from './SocialLink'

const sx: SxProps = {
  root: {
    display: 'flex',
    gap: 8,
    overflow: 'hidden'
  }
}

const SOCMEDIAS = [
  { link: 'https://www.facebook.com/jeeasistio/', icon: faFacebookF },
  { link: 'https://twitter.com/jeeasistio', icon: faTwitter },
  { link: 'https://github.com/jeeasistio', icon: faGithubAlt }
]

const SocialLinks = () => {
  return (
    <Box sx={sx.root}>
      {SOCMEDIAS.map((media, index) => (
        <SocialLink key={index} icon={media.icon} link={media.link} />
      ))}
    </Box>
  )
}

export default SocialLinks
