
import { div, h1 } from 'h-tags'

import Link from './views/Link'

const Home = () => () => {
  return div([
    h1('home'),
    Link({ href: '/foo' }, 'foo ->'),
    Link({ href: '/bar' }, 'bar ->'),
    Link({ href: 'https://google.com' }, 'google ->')
  ])
}

const Foo = () => () => {
  return div([
    h1('foo'),
    Link({ href: '/' }, 'home ->'),
    Link({ href: '/bar', query: { hello: 'world' } }, 'bar ->')
  ])
}

const Bar = () => () => {
  return div([
    h1('bar'),
    Link({ href: '/' }, 'home ->'),
    Link({ href: '/foo', query: { goodbye: 'cruel world' } }, 'foo ->')
  ])
}

const routes = {
  '/': {
    name: 'Home',
    view: Home,
    init: (state, main) => {
      console.log('home')
    }
  },
  '/foo': {
    name: 'Home',
    view: Foo,
    init: (state, main) => {
      console.log('foo')
    }
  },
  '/bar': {
    name: 'Home',
    view: Bar,
    init: (state, main) => {
      console.log('bar')
    }
  }
}

export default routes
