
'use strict'

import { app } from 'hyperapp'
import { state, actions } from './domainLogic'
import routes from './routes'

import App from './views/App'

import './lib/dynamicViewport'
import './lib/automaticReload'

const view = state => App({
  fade: state.animate,
  route: routes[state.router.to]
})

const appHandler = () => {
  // Hyperapp
  const main = app(state, actions, view, document.body)

  // Router
  const routeHandler = () => {
    const routerState = main.routerInit([
      { source: /[0-9a-f]{24}$/i, destination: '/unit' }
    ])

    main.update({ animate: true })

    const reset = e => {
      main.update({ animate: null })
    }

    setTimeout(reset, 250)

    const route = routes[routerState.router.to]

    if (route && route.init) {
      return route.init(state, main)
    }
  }

  routeHandler()

  window.addEventListener('pushstate', routeHandler)
  window.addEventListener('popstate', routeHandler)
}

window.addEventListener('DOMContentLoaded', appHandler)
