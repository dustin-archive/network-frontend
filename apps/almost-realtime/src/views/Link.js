
import { a } from 'h-tags'

const Link = (attr, children) => (state, actions) => {
  if (attr.route) {
    attr.route = void 0
    attr.onclick = () => actions.Router.route(attr.route)
  }

  return a(attr, children)
}

export default Link

// Link({
//   class: 'component -modifier',
//   route: {
//     path: '/foo-bar',
//     query: {
//       foo: 'bar',
//       baz: 'qux'
//     }
//   }
// })
