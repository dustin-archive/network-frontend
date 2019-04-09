
import tags from 'tags'
const { a } = tags

const protocols = ['http:', 'https:', 'file:', 'ftp:']

const Link = (attributes, children) => (state, actions) => {
  attributes.onclick = e => {
    e.preventDefault()

    const to = attributes.to
    const valid = protocols.includes(to.slice(0, to.indexOf('//')))

    if (valid) {
      window.location.href = attributes.to
      return // stop execution
    }

    actions.route({
      path: attributes.to,
      query: attributes.query
    })
  }

  attributes.href = attributes.to
  attributes.query = void 0
  attributes.to = void 0

  return a(attributes, children)
}

export default Link
