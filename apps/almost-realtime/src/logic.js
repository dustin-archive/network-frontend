
import { update } from './shared/actions'
import Router from './shared/stores/Router'

const state = {
  // stores
  Router: {},

  // comments
  clientList: [
    { id: '123', name: 'server' },
    { id: '123', name: 'server' },
    { id: '123', name: 'server' }
  ],
  clientName: 'anonymous',
  clientID: null,
  comments: []
}

const actions = {
  // stores
  Router,

  appendClients: data => state => {
    console.log(state.clientList.concat(data.clientList))

    return {
      comments: state.clientList.concat(data.clientList)
    }
  },
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
