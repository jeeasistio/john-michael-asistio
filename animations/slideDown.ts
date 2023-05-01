import { Variants } from 'framer-motion'
import { inTransition, outTransition } from '../utils/utils'

export const slideDown: Variants = {
    initial: {
        y: '-105%',
        transition: {
            ...outTransition(),
            when: 'beforeChildren',
            staggerChildren: 0.03
        }
    },
    animate: {
        y: '0%',
        transition: {
            ...inTransition(),
            when: 'beforeChildren',
            staggerChildren: 0.03
        }
    },
    exit: {
        y: '-105%',
        transition: {
            ...outTransition(),
            when: 'afterChildren'
        }
    }
}
