
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

  if (data.type === 'client') {
    main.appendClients({ clientList: [data.client] })
  }

  if (data.type === 'comment') {
    main.appendComments({ comments: [data.comment] })
  }

  if (data.type === 'connect') {
    main.update({ clientID: data.clientID })
  }

  if (data.type === 'timeout') {
    main.update({ timeout: true })
    source.close()
  }
}
