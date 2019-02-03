
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

  return div(result)
}

const Home = (state, actions) => {
  const onkeydown = e => {
    if (e.key === 'Enter') {
      postComment({
        clientID: state.clientID,
        comment: e.target.value,
        name: state.clientName
      })
    }
  }

  return div({ class: 'home' }, [
    h1('Almost Realtime Comments'),
    Comments,
    input({ onkeydown, type: 'text' })
  ])
}

export default Home
