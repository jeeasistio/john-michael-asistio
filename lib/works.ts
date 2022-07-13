export interface Work {
  title: string
  description: string[]
  image: string
  images: string[]
  link: string
  online_link: string
  index: number
}

const works: Work[] = [
  {
    title: 'White Fabric',
    description: [
      'An elegant and minimal portfolio for an',
      'architecture company. Previews work details',
      'and gallery.'
    ],
    image: '/white-fabric/white-fabric.jpg',
    images: [
      '/white-fabric/hero_page.png',
      '/white-fabric/nav.png',
      '/white-fabric/our-works.png',
      '/white-fabric/works.png',
      '/white-fabric/work.png'
    ],
    link: 'white-fabric',
    online_link: 'https://white-fabric.vercel.app/',
    index: 1
  },
  {
    title: 'Save Mother Earth',
    description: [
      "A climate change campaign. Let's stop",
      'being ignorant. The best time to take',
      'action is now. Even a little act of',
      'kindness can make a big difference.',
      "Let's save Mother Earth."
    ],
    image: '/save-mother-earth/save_mother_earth.jpg',
    images: [
      '/save-mother-earth/hero_page.png',
      '/save-mother-earth/article.png',
      '/save-mother-earth/causes.png',
      '/save-mother-earth/solutions.png',
      '/save-mother-earth/solution.png'
    ],
    link: 'save-mother-earth',
    online_link: 'https://save-mother-earth.vercel.app/',
    index: 2
  },
  {
    title: 'Nescoffee',
    description: [
      'An ecommerce website for a coffee',
      'product. Build up your mood with a glass',
      'of Nescoffee in the morning. Have a',
      'break and take everything slowly.'
    ],
    image: '/nescoffee/nescoffee.jpg',
    images: [
      '/nescoffee/hero_page.png',
      '/nescoffee/review.png',
      '/nescoffee/products.png',
      '/nescoffee/outro.png',
      '/nescoffee/contacts.png'
    ],
    link: 'nescoffee',
    online_link: 'https://nescoffee.vercel.app/',
    index: 3
  },
  {
    title: 'Bookshelf',
    description: [
      'Feature-rich library management system.',
      'Manage your library using this app. Keep',
      "on track on who's requesting and",
      'currently borrowing the book.'
    ],
    image: '/bookshelf/bookshelf.jpg',
    images: [
      '/bookshelf/hero_page.png',
      '/bookshelf/login.png',
      '/bookshelf/book.png',
      '/bookshelf/add_book.png',
      '/bookshelf/requests.png'
    ],
    link: 'bookshelf',
    online_link: 'https://bookshelf-ph.vercel.app/',
    index: 4
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
    image: '/gintama/gintama.jpg',
    images: [
      '/gintama/hero_page.png',
      '/gintama/global_thread.png',
      '/gintama/post.png',
      '/gintama/episode.png',
      '/gintama/user.png'
    ],
    link: 'gintama-discussion',
    online_link: 'https://gintama-discussion.vercel.app/',
    index: 5
  },
  {
    title: 'Shopy',
    description: [
      'Responsive online shopping app with',
      'cart and purchase history system.',
      'Everything in one place. Variety of',
      'categories. Shop without hassle'
    ],
    image: '/shopy/shopy.jpg',
    images: [
      '/shopy/hero_page.png',
      '/shopy/shop.png',
      '/shopy/cart.png',
      '/shopy/history.png',
      '/shopy/contacts.png'
    ],
    link: 'shopy',
    online_link: 'https://shopy-app.vercel.app/',
    index: 6
  }
]

export default works
