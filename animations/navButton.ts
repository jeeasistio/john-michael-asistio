import { Variants } from 'framer-motion'
import { inTransition, outTransition } from '../utils/utils'

export const openMenu1: Variants = {
  initial: {
    x: '100%',
    y: '-200%'
  },
  animate: {
    x: '-70%',
    y: '-200%',
    transition: inTransition()
  },
  exit: {
    x: '-200%',
    transition: outTransition()
  }
}

export const openMenu2: Variants = {
  initial: {
    x: '-200%',
    y: '50%'
  },
  animate: {
    x: '-35%',
    y: '50%',
    transition: inTransition()
  },
  exit: {
    x: '100%',
    transition: outTransition()
  }
}

export const closeMenu1: Variants = {
  initial: {
    x: '70%',
    y: '750%',
    rotate: '45deg'
  },
  animate: {
    x: '-50%',
    y: '-50%',
    transition: inTransition()
  },
  exit: {
    x: '-180%',
    y: '-950%',
    transition: outTransition()
  }
}

export const closeMenu2: Variants = {
  initial: {
    x: '-170%',
    y: '750%',
    rotate: '-45deg'
  },
  animate: {
    x: '-50%',
    y: '-50%',
    transition: inTransition()
  },
  exit: {
    x: '90%',
    y: '-950%',
    transition: outTransition()
  }
}
