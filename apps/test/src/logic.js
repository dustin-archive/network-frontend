
import { update } from './shared/actions'
import Router from './shared/stores/Router'

const state = {
  // stores
  Router: {},

  // comments
  clientName: 'anonymous',
  clientID: null,
  comments: []
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
