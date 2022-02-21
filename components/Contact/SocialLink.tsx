import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SxProps } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import Box from '@mui/material/Box'
import { slideUp } from '../../animations/slideUp'
import Link from 'next/link'
import useCursor from '../../utils/useCursor'

const sx: SxProps = {
  iconCtn: {
    border: 1,
    p: 2,
    width: 50,
    height: 50,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '105%',
    backgroundColor: 'secondary.main'
  }
}

interface Props {
  icon: IconDefinition
  link: string
}

const SocialLink = ({ icon, link }: Props) => {
  const hoverControls = useAnimation()
  const { handleHover, handleLeave, handleTap } = useCursor()

  const slideIn = () => {
    hoverControls.start('animate')
  }
  const slideOut = () => {
    hoverControls.start('initial')
  }

  return (
    <Link href={link} passHref>
      <a target="_blank">
        <Box
          sx={sx.iconCtn}
          component={motion.div}
          onHoverStart={slideIn}
          onHoverEnd={slideOut}
          onTapStart={slideIn}
          onTapCancel={slideOut}
          variants={slideUp}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          whileTap={handleTap}
        >
          <Box
            sx={sx.overlay}
            component={motion.div}
            variants={slideRight}
            initial="initial"
            animate={hoverControls}
          />

          <FontAwesomeIcon
            style={{ mixBlendMode: 'difference' }}
            size="2x"
            icon={icon}
          />
        </Box>
      </a>
    </Link>
  )
}

export default SocialLink
