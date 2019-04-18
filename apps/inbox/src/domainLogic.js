
import utilities from './lib/utilities'
import router from './lib/modules/router'

const state = {
  ...router.state
}

const actions = {
  ...utilities,
  ...router.actions
}

export { state, actions }
