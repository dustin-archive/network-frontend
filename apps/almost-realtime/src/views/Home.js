
import { div, h1 } from '@hyperapp/html'
import Chat from './Chat'

const Home = () => (state, actions) => {
  return div({ class: 'home' }, [
    h1('Almost Realtime'),
    Chat
  ])
}

export default Home
