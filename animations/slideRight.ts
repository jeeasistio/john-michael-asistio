import { Variants } from 'framer-motion'
import { inTransition, outTransition } from '../utils/utils'

export const slideRight: Variants = {
  initial: {
    x: '-105%',
    transition: outTransition()
  },
  animate: {
    x: '0%',
    transition: inTransition()
  }
}
