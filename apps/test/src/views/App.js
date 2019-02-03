
import { a, div } from '@hyperapp/html'

import routes from '../routes'

const NotFound = (state, actions) => {
  return div({ class: 'app-404' }, [
    div('The page "' + state.Router.path + '" wasn\'t found.'),
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

  return div(route.view)
}

let memo = div('')

const App = state => {
  const route = Route({ path: state.Router.path })

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
