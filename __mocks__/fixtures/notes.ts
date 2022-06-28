import { FeedItem } from 'rss-parserr/lib/types'

const notes: Array<FeedItem> = [
  {
    id: '1',
    title: 'Item 1',
    links: [{ url: 'Link 1 url', rel: 'Link 1 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 1 is this',
    authors: [{ name: 'Ashish 1' }],
    categories: [{ name: 'category 1' }],
    published: '1 day 2022',
    imageUrl: '1image.com',
    enclosures: [{ url: 'enclosures 1', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '2',
    title: 'Item 2',
    links: [{ url: 'Link 2 url', rel: 'Link 2 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 2 is this',
    authors: [{ name: 'Ashish 2' }],
    categories: [{ name: 'category 2' }],
    published: '2 day 2022',
    imageUrl: '2image.com',
    enclosures: [{ url: 'enclosures 2', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '3',
    title: 'Item 3',
    links: [{ url: 'Link 3 url', rel: 'Link 3 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 3 is this',
    authors: [{ name: 'Ashish 3' }],
    categories: [{ name: 'category 3' }],
    published: '3 day 2022',
    imageUrl: '3image.com',
    enclosures: [{ url: 'enclosures 3', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '4',
    title: 'Item 4',
    links: [{ url: 'Link 4 url', rel: 'Link 1 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 4 is this',
    authors: [{ name: 'Ashish 4' }],
    categories: [{ name: 'category 4' }],
    published: '4 day 2022',
    imageUrl: '4image.com',
    enclosures: [{ url: 'enclosures 4', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '5',
    title: 'Item 5',
    links: [{ url: 'Link 5 url', rel: 'Link 5 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 5 is this',
    authors: [{ name: 'Ashish 5' }],
    categories: [{ name: 'category 5' }],
    published: '5 day 2022',
    imageUrl: '5image.com',
    enclosures: [{ url: 'enclosures 5', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '6',
    title: 'Item 6',
    links: [{ url: 'Link 1 url', rel: 'Link 1 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 1 is this',
    authors: [{ name: 'Ashish 1' }],
    categories: [{ name: 'category 1' }],
    published: '1 day 2022',
    imageUrl: '1image.com',
    enclosures: [{ url: 'enclosures 1', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '7',
    title: 'Item 7',
    links: [{ url: 'Link 2 url', rel: 'Link 2 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 2 is this',
    authors: [{ name: 'Ashish 2' }],
    categories: [{ name: 'category 2' }],
    published: '2 day 2022',
    imageUrl: '2image.com',
    enclosures: [{ url: 'enclosures 2', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '8',
    title: 'Item 8',
    links: [{ url: 'Link 3 url', rel: 'Link 3 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 3 is this',
    authors: [{ name: 'Ashish 3' }],
    categories: [{ name: 'category 3' }],
    published: '3 day 2022',
    imageUrl: '3image.com',
    enclosures: [{ url: 'enclosures 3', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '9',
    title: 'Item 9',
    links: [{ url: 'Link 4 url', rel: 'Link 1 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 4 is this',
    authors: [{ name: 'Ashish 4' }],
    categories: [{ name: 'category 4' }],
    published: '4 day 2022',
    imageUrl: '4image.com',
    enclosures: [{ url: 'enclosures 4', length: '99', mimeType: 'rss' }],
    itunes: undefined
  },
  {
    id: '10',
    title: 'Item 10',
    links: [{ url: 'Link 5 url', rel: 'Link 5 rel' }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: 'Item 5 is this',
    authors: [{ name: 'Ashish 5' }],
    categories: [{ name: 'category 5' }],
    published: '5 day 2022',
    imageUrl: '5image.com',
    enclosures: [{ url: 'enclosures 5', length: '99', mimeType: 'rss' }],
    itunes: undefined
  }
]

export default notes
