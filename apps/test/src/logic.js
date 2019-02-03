
import { update } from './shared/actions'
import Router from './shared/stores/Router'

const state = {
  // stores
  Router: {},

  comments: [
    { comment: 'foobar', name: 'test' }
  ]
}

const actions = {
  // stores
  Router,

  appendComments: data => state => {
    console.log('appendComments')
    return {
      comments: state.comments.concat(data.comments)
    }
  },
  // postComment: data => (state, actions) => {
  //   console.log('postComment')
  // },

  // utilities
  update
}

export { state, actions }
