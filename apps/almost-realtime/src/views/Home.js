
import { div, h1, input } from '@hyperapp/html'

import postComment from '../requests/postComment'

const Comments = (state, actions) => {
  const { commentList } = state
  const viewport = commentList.slice(commentList.length - 32)
  const result = []

  for (let i = 0; i < viewport.length; i++) {
    const { message, name } = viewport[i]
    const item = div(name + ': ' + message)
    result.push(item)
  }

  return div({ class: 'home-comments' }, result)
}

const MessageInput = state => {
  const onkeydown = e => {
    if (e.key === 'Enter') {
      postComment({
        clientID: state.clientID,
        comment: {
          message: e.target.value,
          name: state.clientName
        }
      })

      e.target.value = ''
    }
  }

  return input({ placeholder: 'Message', onkeydown, type: 'text' })
}

const NameInput = (state, actions) => {
  const onkeyup = e => {
    actions.update({
      clientName: e.target.value
    })
  }

  return input({ placeholder: 'Name', onkeyup, type: 'text' })
}

const ClientList = state => {
  const clientList = state.clientList
  const result = []

  for (let i = 0; i < clientList.length; i++) {
    const client = clientList[i]

    result.push(
      div(client.name || client.id)
    )
  }

  return div({ class: 'home-list' }, result)
}

const Home = (state, actions) => {
  return div({ class: 'home' }, [
    h1('Almost Realtime'),
    div({ class: 'home-main' }, [
      div([
        ClientList
      ]),
      div([
        NameInput,
        Comments,
        MessageInput
      ])
    ])
  ])
}

export default Home
