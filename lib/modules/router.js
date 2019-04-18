
// data = String
const decode = data => {
  const query = data.slice(1).split(/[&=]/g)
  const result = {}

  for (let i = 0; i < query.length; i += 2) {
    result[query[i]] = query[i + 1]
  }

  return result
}

// data = { [key]: String }
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
const routerInit = data => () => {
  const { pathname, search } = window.location

  const router = {
    id: null,
    to: pathname,
    query: search ? decode(search) : null
  }

  for (let i = 0; i < data.length; i++) {
    const result = router.to.match(data[i].source)

    if (result) {
      router.id = result[0]
      router.to = data[i].destination
      break // stop iteration
    }
  }

  return { router }
}

// data = { to: String, query: Object }
const routerLink = data => state => {
  if (data.to === window.history.state) {
    window.history.back()
    return // stop execution
  }

  const to = typeof data.to === 'string'
    ? data.to
    : state.router.to

  const href = data.query
    ? to + encode(data.query)
    : to

  window.history.pushState(state.router.to, null, href)
  window.dispatchEvent(new CustomEvent('pushstate')) // eslint-disable-line
}

export default {
  state: {
    router: {
      id: null,
      to: null,
      query: null
    }
  },
  actions: {
    routerLink,
    routerInit
  }
}
