
import { state, main } from './hyperapp'
import RouterInit from './interop/RouterInit'

RouterInit(state, main)

window.addEventListener('pushstate', () => RouterInit(state, main))
window.addEventListener('popstate', () => RouterInit(state, main))

//
const source = new EventSource('API/realtime') // eslint-disable-line

source.onmessage = body => {
  const data = JSON.parse(body.data)

  console.log(data)

  //
  // client
  //

  if (data.type === 'clientList') {
    return main.update({ clientList: data.clientList })
  }

  if (data.type === 'client') {
    return main.appendClients({ clientList: [data.client] })
  }

  //
  // comment
  //

  if (data.type === 'commentList') {
    return main.update({ commentList: data.commentList })
  }

  if (data.type === 'comment') {
    return main.appendComment({ comment: data.comment })
  }

  //
  // connect
  //

  if (data.type === 'connect') {
    return main.update({ clientID: data.clientID })
  }

  //
  // timeout
  //

  if (data.type === 'timeout') {
    source.close()
    return main.update({ timeout: true })
  }
}
