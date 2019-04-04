
import { app } from 'hyperapp'
import { state, actions } from './logic'
import App from './views/App'

const view = () => App
const container = document.getElementById('hyperapp')
const main = app(state, actions, view, container)

export { state, main }
