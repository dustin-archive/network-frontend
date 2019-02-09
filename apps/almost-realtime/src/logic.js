
import utilities from './shared/utilities'
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
  ...utilities,

  //
  // stores
  //

  Router,

  //
  // toast
  //

  // data = { toast }
  appendToast: data => state => {
    state.toastList.push(data.toast)

    return {
      toastList: state.toastList
    }
  },

  //
  // comment
  //

  // data = { comment }
  appendComment: data => state => {
    const { commentList } = state

    if (commentList.length > 32) {
      commentList.shift()
    }

    commentList.push(data.comment)

    return { commentList }
  },

  // data = {  }
  postComment: data => (s, actions) => {
    const ok = json => {
      actions.appendToast({ toast: json })
    }

    const notOK = error => {
      actions.appendToast({
        toast: { message: error, status: false }
      })
    }

    const done = () => {
      return { fetching: false }
    }

    postComment(data).then(ok, notOK).then(done)

    return { fetching: true }
  },

  //
  // client
  //

  appendClients: data => state => {
    return {
      clientList: state.clientList.concat(data.clientList)
    }
  }
}

export { state, actions }
