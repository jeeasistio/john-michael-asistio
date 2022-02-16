export interface Work {
  title: string
  description: string
  image: string
  link: string
  index: number
}

const works: Work[] = [
  {
    title: 'Save Mother Earth',
    description: '',
    image: '/save_mother_earth.jpg',
    link: 'save-mother-earth',
    index: 1
  },
  {
    title: 'Nescoffee',
    description: '',
    image: '/nescoffee.jpg',
    link: 'nescoffee',
    index: 2
  },
  {
    title: 'Bookshelf',
    description: '',
    image: '/bookshelf.jpg',
    link: 'bookshelf',
    index: 3
  },
  {
    title: 'Gintama Discussion',
    description: '',
    image: '/gintama.jpg',
    link: 'gintama-discussion',
    index: 4
  },
  {
    title: 'Shopy',
    description: '',
    image: '/shopy.jpg',
    link: 'shopy',
    index: 5
  }
]

export default works
