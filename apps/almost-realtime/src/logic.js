
import { update } from './shared/actions'
import Router from './shared/stores/Router'

import postComment from './requests/postComment'

const state = {
  // stores
  Router: {},

  // toast
  toastList: [],

  // client
  clientID: null,
  clientList: [],
  clientName: 'anonymous',

  // comment
  commentList: []
}

const actions = {
  //
  // stores
  //

  Router,

  //
  // toast
  //

  // appendToast: data => {
  //   state.toastList.push(data.toast)
  //
  //   return {
  //     toastList: state.toastList
  //   }
  // },

  //
  // comment
  //

  appendComment: data => state => {
    state.commentList.push(data.comment)

    return {
      commentList: state.commentList
    }
  },
  postComment: data => async (state, actions) => {
    const { toastList } = state

    try {
      toastList.push(await postComment(data))
    } catch (error) {
      toastList.push({ message: error, status: false })
    }

    return { toastList }
  },

  //
  // client
  //

  appendClients: data => state => {
    return {
      clientList: state.clientList.concat(data.clientList)
    }
  },

  //
  // utilities
  //
  update
}

export { state, actions }
