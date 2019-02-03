
import { update } from './shared/actions'
import Router from './shared/stores/Router'

const state = {
  // stores
  Router: {},

  // comments
  clientID: null,
  comments: [
    {
      clientID: null,
      comment: 'Welcome to the almost realtime comment system!',
      name: 'Notice'
    }
  ]
}

const actions = {
  // stores
  Router,

  appendComments: data => state => {
    console.log(state.comments.concat(data.comments))

    return {
      comments: state.comments.concat(data.comments)
    }
  },

  // utilities
  update
}

export { state, actions }
