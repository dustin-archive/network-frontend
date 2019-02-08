
import { update } from './shared/actions'
import Router from './shared/stores/Router'

const state = {
  // stores
  Router: {},

  // client
  clientID: null,
  clientList: [],
  clientName: 'anonymous',

  // comment
  commentList: []
}

const actions = {
  // stores
  Router,

  appendClients: data => state => {
    return {
      clientList: state.clientList.concat(data.clientList)
    }
  },
  appendComments: data => state => {
    return {
      commentList: state.commentList.concat(data.commentList)
    }
  },

  // utilities
  update
}

export { state, actions }
