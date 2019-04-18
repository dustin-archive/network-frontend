
const getState = d => state => state
const reduce = fn => (state, actions) => fn(state, actions)
const update = data => data

export default ({ getState, reduce, update })
