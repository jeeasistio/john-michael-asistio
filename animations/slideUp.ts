import { Variants } from 'framer-motion'
import { inTransition, outTransition } from '../utils/utils'

export const staggerCtn: Variants = {
  initial: {
    transition: { ...outTransition(), staggerChildren: 0.1 }
  },
  animate: {
    transition: { ...inTransition(), staggerChildren: 0.1 }
  },
  exit: {
    transition: { ...outTransition(), staggerChildren: 0.1 }
  }
}

export const slideUp: Variants = {
  initial: {
    y: '100%',
    transition: outTransition()
  },
  animate: {
    y: '0%',
    transition: inTransition()
  },
  exit: {
    y: '100%',
    transition: outTransition()
  }
}
