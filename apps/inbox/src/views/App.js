
import html from 'html'
const { a, div, span } = html

// data = void 0
const NotFound = () => {
  return div({ class: 'app-404' }, [
    div([
      div([
        span('404: '),
        'The page could not be found.'
      ]),
      a({ href: '/' }, 'Go Home')
    ])
  ])
}

// data = { route: String }
const View = data => {
  if (data.route == null) {
    return NotFound
  }

  return div(data.route.view)
}

let memo = div('')

// data = { fade: Boolean, route: String, view: Function }
const App = data => {
  const view = View({ route: data.route })

  if (data.fade) {
    return div({ class: 'app -fade' }, [
      view,
      memo
    ])
  }

  memo = div({ class: 'app' }, view)

  return memo
}

export default App
