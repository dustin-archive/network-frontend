
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
    main.update({ clientList: data.clientList })
  }

  if (data.type === 'client') {
    main.appendClients({ clientList: [data.client] })
  }

  //
  // comment
  //

  if (data.type === 'commentList') {
    main.update({ commentList: data.commentList })
  }

  if (data.type === 'comment') {
    main.appendComments({ commentList: [data.comment] })
  }

  //
  // connect
  //

  if (data.type === 'connect') {
    main.update({ clientID: data.clientID })
  }

  //
  // timeout
  //

  if (data.type === 'timeout') {
    main.update({ timeout: true })
    source.close()
  }
}
