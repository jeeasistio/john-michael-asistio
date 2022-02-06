import { Variants } from 'framer-motion'

export const slideRight: Variants = {
  out: {
    x: '-100%'
  },
  in: {
    x: '0%',
    transition: {
      type: 'spring',
      damping: 18,
      mass: 0.8,
      stiffness: 80
    }
  }
}
