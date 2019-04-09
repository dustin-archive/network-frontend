
// data = String
const decode = data => {
  const query = data.slice(1).split(/[&=]/g)
  const result = {}

  for (let i = 0; i < query.length; i += 2) {
    result[query[i]] = query[i + 1]
  }

  return result
}

// data = Object
const encode = data => {
  let result = '?'

  for (let key in data) {
    if (data[key] != null) {
      result += key + '=' + data[key] + '&'
    }
  }

  return result.slice(0, -1)
}

// data = [{ source: Regex, destination: String }]
const routerInit = data => state => {
  let id = null
  let path = window.location.pathname

  for (let i = 0; i < data.length; i++) {
    const result = path.test(data[i].source)

    if (result) {
      id = result
      path = data[i].destination
      break // stop iteration
    }
  }

  const query = window.location.search
    ? decode(window.location.search)
    : null

  return {
    router: {
      id,
      path,
      query
    }
  }
}

// data = { path: String, query: Object }
const routerTo = data => state => {
  if (data.path === window.history.state) {
    window.history.back()
    return // stop execution
  }

  const path = typeof data.path === 'string'
    ? data.path
    : state.router.path

  const href = data.query
    ? path + encode(data.query)
    : path

  window.history.pushState(state.router.path, null, href)
  window.dispatchEvent(new CustomEvent('pushstate')) // eslint-disable-line
}

export default {
  state: {
    router: {
      id: null,
      path: null,
      query: null
    }
  },
  actions: {
    routerTo,
    routerInit
  }
}
