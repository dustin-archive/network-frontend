
const decode = query => {
  query = query.slice(1).split(/[&=]/g)

  const result = {}

  for (let i = 0; i < query.length; i += 2) {
    result[query[i]] = query[i + 1]
  }

  return result
}

const encode = query => {
  let result = '?'

  for (let key in query) {
    if (query[key] != null) {
      result += key + '=' + query[key] + '&'
    }
  }

  return result.slice(0, -1)
}

export { decode, encode }
