import { Variants } from 'framer-motion'

export const slideRight: Variants = {
  initial: {
    x: '-100%',
    transition: {
      type: 'spring',
      damping: 20,
      mass: 0.8,
      stiffness: 120
    }
  },
  animate: {
    x: '0%',
    transition: {
      type: 'spring',
      damping: 20,
      mass: 0.8,
      stiffness: 130
    }
  }
}
