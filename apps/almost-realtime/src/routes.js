
import Home from './views/Home'
import fetchComments from './requests/fetchComments'

const home = {
  name: 'Home',
  view: Home,
  init: (state, main) => {
    fetchComments(main)
  }
}

const routes = {
  '/': home
}

export default routes
