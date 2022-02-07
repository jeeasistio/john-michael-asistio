import { Variants } from 'framer-motion'
import { inTransition, outTransition } from '../utils/utils'

export const slideDown: Variants = {
  initial: {
    y: '-100%',
    transition: {
      ...outTransition(),
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  animate: {
    y: '0%',
    transition: {
      ...inTransition(),
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: {
    y: '-100%',
    transition: {
      ...outTransition(),
      when: 'afterChildren',
      staggerChildren: 0.1
    }
  }
}
