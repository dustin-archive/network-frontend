
import tags from 'tags'
import routes from '../routes'
const { a, div } = tags

const NotFound = (state, actions) => {
  return div({ class: 'app-404' }, [
    div('The page "' + state.router.path + '" wasn\'t found.'),
    a({ href: '/' }, 'Go Home')
  ])
}

const Route = data => state => {
  if (state.loading) {
    return 'Loading...'
  }

  const route = routes[data.path]

  if (route == null) {
    return NotFound
  }

  return div({ class: 'app-view' }, route.view)
}

let memo = div({ class: 'app-memo' })

const App = state => {
  const route = Route({ path: state.router.path })

  if (state.animate) {
    return div({ class: 'app -fade' }, [
      route,
      memo
    ])
  }

  memo = div({ class: 'app' }, route)

  return memo
}

export default App