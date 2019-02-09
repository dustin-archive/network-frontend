
import { div, h1, input } from '@hyperapp/html'

const MessageInput = () => (state, actions) => {
  const onkeydown = e => {
    if (e.key === 'Enter') {
      actions.postComment({
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

const Comments = () => (state, actions) => {
  const { commentList } = state
  const viewport = commentList.slice(commentList.length - 32)
  const result = []

  for (let i = 0; i < viewport.length; i++) {
    const { message, name } = viewport[i]
    const item = div(name + ': ' + message)
    result.push(item)
  }

  return div({ class: 'home-comment' }, result)
}

const NameInput = () => (state, actions) => {
  const onkeyup = e => {
    actions.update({
      clientName: e.target.value
    })
  }

  return input({ placeholder: 'Name', onkeyup, type: 'text' })
}

const ClientList = () => state => {
  const clientList = state.clientList
  const result = []

  for (let i = 0; i < clientList.length; i++) {
    const client = clientList[i]

    result.push(
      div(client.name || client.id)
    )
  }

  return div({ class: 'home-client' }, result)
}

const Home = () => (state, actions) => {
  return div({ class: 'home' }, [
    h1('Almost Realtime'),
    div({ class: 'home-main' }, [
      div([
        ClientList,
        NameInput
      ]),
      div([
        Comments,
        MessageInput
      ])
    ])
  ])
}

export default Home
