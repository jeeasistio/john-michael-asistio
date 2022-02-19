export interface Work {
  title: string
  description: string[]
  image: string
  link: string
  index: number
}

const works: Work[] = [
  {
    title: 'Save Mother Earth',
    description: [
      "A climate change campaign. Let's stop",
      'being ignorant. The best time to take',
      'action is now. Even a little act of',
      'kindness can make a big difference.',
      "Let's save Mother Earth."
    ],
    image: '/save_mother_earth.jpg',
    link: 'save-mother-earth',
    index: 1
  },
  {
    title: 'Nescoffee',
    description: [
      'An ecommerce website for a coffee',
      'product. Build up your mood with a glass',
      'of Nescoffee in the morning. Have a',
      'break and take everything slowly.'
    ],
    image: '/nescoffee.jpg',
    link: 'nescoffee',
    index: 2
  },
  {
    title: 'Bookshelf',
    description: [
      'Feature-rich library management system.',
      'Manage your library using this app. Keep',
      "on track on who's requesting and",
      'currently borrowing the book.'
    ],
    image: '/bookshelf.jpg',
    link: 'bookshelf',
    index: 3
  },
  {
    title: 'Gintama Discussion',
    description: [
      'Fullstack reddit-like app but for Gintama',
      'only. Do you know Gintama? Are you a',
      'fan too? Wanna know more about',
      'Gintama? Discuss anything here about',
      'Gintama.'
    ],
    image: '/gintama.jpg',
    link: 'gintama-discussion',
    index: 4
  },
  {
    title: 'Shopy',
    description: [
      'Responsive online shopping app with',
      'cart and purchase history system.',
      'Everything in one place. Variety of',
      'categories. Shop without hassle'
    ],
    image: '/shopy.jpg',
    link: 'shopy',
    index: 5
  }
]

export default works
