
import html from 'html'
const { a } = html

// data = { to: String, query: Object, ...data }
const Link = ({ to, query, ...data }, children) => (s, actions) => {
  const onclick = e => {
    e.preventDefault()
    actions.routerLink({ to, query })
  }

  return a({ ...data, href: to, onclick }, children)
}

export default Link
