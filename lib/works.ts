export interface Work {
    title: string
    description: string[]
    image: string
    images: string[]
    link: string
    online_link: string
}

const works: Work[] = [
    {
        title: 'Feedback Board',
        description: [
            'A feedback board app. Post your feedbacks',
            'and let others vote for it. The more votes',
            'the more likely it will be implemented.'
        ],
        image: '/feedback-board/feedback-board.jpg',
        images: [
            '/feedback-board/hero-page.png',
            '/feedback-board/detail.png',
            '/feedback-board/add.png',
            '/feedback-board/edit.png',
            '/feedback-board/roadmap.png'
        ],
        link: 'feedback-board',
        online_link: 'https://feedback-app-jeeasistio.vercel.app/'
    },
    {
        title: 'White Fabric',
        description: [
            'An elegant and minimal portfolio for an',
            'architecture company. Previews work details',
            'and gallery.'
        ],
        image: '/white-fabric/white-fabric.jpg',
        images: [
            '/white-fabric/hero-page.png',
            '/white-fabric/nav.png',
            '/white-fabric/our-works.png',
            '/white-fabric/works.png',
            '/white-fabric/work.png'
        ],
        link: 'white-fabric',
        online_link: 'https://white-fabric.vercel.app/'
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
        image: '/save-mother-earth/save-mother-earth.jpg',
        images: [
            '/save-mother-earth/hero-page.png',
            '/save-mother-earth/article.png',
            '/save-mother-earth/causes.png',
            '/save-mother-earth/solutions.png',
            '/save-mother-earth/solution.png'
        ],
        link: 'save-mother-earth',
        online_link: 'https://save-mother-earth.vercel.app/'
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
            '/nescoffee/hero-page.png',
            '/nescoffee/review.png',
            '/nescoffee/products.png',
            '/nescoffee/outro.png',
            '/nescoffee/contacts.png'
        ],
        link: 'nescoffee',
        online_link: 'https://nescoffee.vercel.app/'
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
            '/bookshelf/hero-page.png',
            '/bookshelf/login.png',
            '/bookshelf/book.png',
            '/bookshelf/add-book.png',
            '/bookshelf/requests.png'
        ],
        link: 'bookshelf',
        online_link: 'https://bookshelf-ph.vercel.app/'
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
            '/gintama/hero-page.png',
            '/gintama/global-thread.png',
            '/gintama/post.png',
            '/gintama/episode.png',
            '/gintama/user.png'
        ],
        link: 'gintama-discussion',
        online_link: 'https://gintama-discussion.vercel.app/'
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
            '/shopy/hero-page.png',
            '/shopy/shop.png',
            '/shopy/cart.png',
            '/shopy/history.png',
            '/shopy/contacts.png'
        ],
        link: 'shopy',
        online_link: 'https://shopy-app.vercel.app/'
    }
]

export default works
