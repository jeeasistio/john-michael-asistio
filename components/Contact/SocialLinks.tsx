import Box from '@mui/material/Box'
import {
    faFacebookF,
    faGithubAlt,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { SxProps } from '@mui/system'
import SocialLink from './SocialLink'
import { motion } from 'framer-motion'

const sx: SxProps = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        overflow: 'hidden',
        mixBlendMode: 'difference'
    }
}

const SOCMEDIAS = [
    { link: 'https://www.facebook.com/jeeasistio/', icon: faFacebookF },
    { link: 'https://twitter.com/jeeasistio', icon: faTwitter },
    { link: 'https://github.com/jeeasistio', icon: faGithubAlt }
]

const SocialLinks = () => {
    return (
        <Box sx={sx.root} component={motion.div} layout>
            {SOCMEDIAS.map((media, i) => (
                <SocialLink key={i} icon={media.icon} link={media.link} />
            ))}
        </Box>
    )
}

export default SocialLinks
