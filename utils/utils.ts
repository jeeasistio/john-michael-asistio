export const inTransition = () => ({
  type: 'spring',
  damping: 15,
  mass: 0.8,
  stiffness: 80
})

export const outTransition = () => ({
  type: 'spring',
  damping: 15,
  mass: 0.8,
  stiffness: 80
})

export const parallaxTransition = () => ({
  type: 'spring',
  damping: 18,
  mass: 0.5,
  stiffness: 60
})
