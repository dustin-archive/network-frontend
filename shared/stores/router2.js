
import { encode, decode } from '../helpers/queryString'

// https://github.com/chriso/validator.js/blob/master/src/lib/isHexadecimal.js
const validId = /[0-9a-f]{24}/i

const pathSplit = data => {
  const id = data.path.search(validId)

  if (id === -1) {
    return { id: null, path: data.path }
  }

  return { id, path: data.hexRoute }
}

const init = data => state => {
  const query = window.location.search
  const path = pathSplit({
    hexRoute: data && data.hexRoute,
    path: window.location.pathname
  })

  window.scrollTo(0, 0)

  return {
    id: path.id,
    path: path.path,
    query: query ? decode(query) : null
  }
}

const route = data => state => {
  if (window.history.state === data.path) {
    window.history.back()
    return // stop execution
  }

  const path = typeof data.path === 'string' ? data.path : state.path
  const href = data.query ? path + encode(data.query) : path

  window.history.pushState(state.path, null, href)
  window.dispatchEvent(new CustomEvent('pushstate')) // eslint-disable-line
}

const router = {
  state: {
    router: {
      id: null,
      path: null,
      query: null
    }
  },
  actions: {
    router: {
      init
    },
    route
  }
}

export { router }

// export { deploy, router }

// const protocols = ['http:', 'https:', 'file:', 'ftp:']
//
// const validProtocol = url => {
//   return protocols.includes(url.slice(0, url.indexOf('//')))
// }

// const deploy = main => {
//   window.addEventListener('click', e => {
//     if (e.target.nodeName === 'A' && validProtocol(e.target.href) === false) {
//       e.preventDefault()
//       main.route(e.target.href)
//     }
//   })
// }
