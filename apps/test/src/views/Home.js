
import { div, h1, input } from '@hyperapp/html'

import postComment from '../requests/postComment'

const Comments = (state, actions) => {
  const { comments } = state
  const result = []

  for (let i = 0; i < comments.length; i++) {
    const { comment, name } = comments[i]
    const item = div(name + ': ' + comment)
    result.push(item)
  }

  return div({ class: 'home-comments' }, result)
}

const MessageInput = state => {
  const onkeydown = e => {
    if (e.key === 'Enter') {
      postComment({
        clientID: state.clientID,
        comment: e.target.value,
        name: state.clientName
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

const Home = (state, actions) => {
  return div({ class: 'home' }, [
    h1('Almost Realtime Comments'),
    Comments,
    MessageInput,
    NameInput
  ])
}

export default Home
