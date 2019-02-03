
import { encode, decode } from '../helpers/queryString'

// https://github.com/chriso/validator.js/blob/master/src/lib/isHexadecimal.js
const validId = /[0-9a-f]{24}/i

const pathSplit = path => {
  const id = path.search(validId)

  if (id !== -1) {
    return { id, path: '/unit' }
  }

  return { id: null, path }
}

const Router = {
  init: d => state => {
    const query = window.location.search
    const path = pathSplit(window.location.pathname)

    window.scrollTo(0, 0)

    return {
      id: path.id,
      path: path.path,
      query: query ? decode(query) : null
    }
  },
  route: data => state => {
    if (state.path === data.path) {
      return console.log('Skipped routing; route is the same...')
    }

    const path = typeof data.path === 'string' ? data.path : state.path
    const url = data.query ? path + encode(data.query) : path

    window.history.pushState(null, null, url)
    window.dispatchEvent(new CustomEvent('pushstate')) // eslint-disable-line
  }
}

export default Router
