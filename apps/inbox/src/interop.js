
import { state, main } from './hyperapp'
import RouterInit from './interop/RouterInit'

RouterInit(state, main)

window.addEventListener('pushstate', () => RouterInit(state, main))
window.addEventListener('popstate', () => RouterInit(state, main))
