
import routes from '../routes'

const RouterInit = (state, main) => {
  const { path } = main.Router.init()
  const route = routes[path]

  main.update({ animate: true })

  const reset = e => {
    main.update({ animate: null })
  }

  setTimeout(reset, 250)

  if (route && route.init) {
    return route.init(state, main)
  }
}

export default RouterInit
