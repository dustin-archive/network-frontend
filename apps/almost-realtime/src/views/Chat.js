
import { div, input } from '@hyperapp/html'

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

const CommentList = () => (state, actions) => {
  const { commentList } = state
  const result = []

  for (let i = 0; i < commentList.length; i++) {
    const { message, name } = commentList[i]
    result.push(div(name + ': ' + message))
  }

  const onupdate = el => {
    el.scrollTop = el.scrollHeight - el.clientHeight
  }

  return div({ class: 'chat-comment', onupdate }, result)
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

  return div({ class: 'chat-client' }, result)
}

const Chat = () => {
  return div({ class: 'chat' }, [
    div([
      ClientList,
      NameInput
    ]),
    div([
      CommentList,
      MessageInput
    ])
  ])
}

export default Chat
