
import Home from './views/Home'

const home = {
  name: 'Home',
  view: Home,
  init: (state, main) => {
    console.log('home')
  }
}

const routes = {
  '/': home
}

export default routes
