import Box from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faGoogle,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
  return (
    <Box>
      <Box>
        <FontAwesomeIcon icon={faFacebookF} />
      </Box>

      <Box>
        <FontAwesomeIcon icon={faGoogle} />
      </Box>

      <Box>
        <FontAwesomeIcon icon={faGithubAlt} />
      </Box>
    </Box>
  )
}

export default SocialLinks
