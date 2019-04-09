
'use strict'

import './shared/dynamicViewport'
import './shared/automaticReload'

import { app } from 'hyperapp'
import { state, actions } from './logic'
import App from './views/App'
import routes from './routes'

// Hyperapp
const view = () => App
const main = app(state, actions, view, document.body)

// Router
const routeHandler = (state, main) => {
  const routerState = main.routerInit([
    { source: /[0-9a-f]{24}$/i, destination: '/dp' }
  ])

  const route = routes[routerState.router.path]

  main.update({ animate: true })

  const reset = e => {
    main.update({ animate: null })
  }

  setTimeout(reset, 250)

  if (route && route.init) {
    return route.init(state, main)
  }
}

routeHandler(state, main)

window.addEventListener('pushstate', () => routeHandler(state, main))
window.addEventListener('popstate', () => routeHandler(state, main))
