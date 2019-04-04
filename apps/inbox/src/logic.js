
import utilities from './shared/utilities'
import { router } from './shared/stores/router2'

const state = {
  ...router.state
}

const actions = {
  ...utilities,
  ...router.actions
}

export { state, actions }
