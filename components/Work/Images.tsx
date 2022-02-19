import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { inTransition, outTransition } from '../../utils/utils'
import ParallaxCtn from '../UtilityComponents/ParallaxCtn'

const sx: SxProps = {
  root: {
    mt: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  imageCtnOdd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    transform: { md: 'translateY(-25%)' }
  },
  imageCtnEven: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: 426,
    height: 240,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'secondary.main'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'primary.main'
  }
}

const IMAGES = [1, 2, 3, 4, 5, 6]

interface Props {
  images: string[]
}

const Images = ({ images }: Props) => {
  return (
    <ParallaxCtn>
      <Container sx={sx.root}>
        {IMAGES.map((img, i) => (
          <Box key={img} sx={i % 2 ? sx.imageCtnOdd : sx.imageCtnEven}>
            <Box sx={sx.image}>
              <Image
                src="/shopy.jpg"
                alt="nav-profile"
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
              />

              <Box
                sx={sx.overlay}
                component={motion.div}
                variants={{
                  initial: { y: '0%' },
                  animate: { y: '-105%', transition: inTransition() },
                  exit: { y: '0%', transition: outTransition() }
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              />
            </Box>
          </Box>
        ))}
      </Container>
    </ParallaxCtn>
  )
}

export default Images
