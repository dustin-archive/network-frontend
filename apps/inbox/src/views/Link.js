
import { a } from 'h-tags'

const protocols = ['http:', 'https:', 'file:', 'ftp:']

const Link = (attributes, children) => (state, actions) => {
  attributes.onclick = e => {
    e.preventDefault()

    const href = attributes.href
    const valid = protocols.includes(href.slice(0, href.indexOf('//')))

    if (valid) {
      window.location.href = attributes.href
      return // stop execution
    }

    actions.route({
      path: attributes.href,
      query: attributes.query
    })
  }

  attributes.query = void 0

  return a(attributes, children)
}

export default Link
