
import { div, h1 } from 'h-tags'

const Home = () => (state, actions) => {
  return div({ class: 'home' }, [
    h1('Inbox')
  ])
}

export default Home
