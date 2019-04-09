
import tags from 'tags'
const { div } = tags

const Mail = () => (state, actions) =>
  div({ class: 'mail' }, [
    div({ class: 'mail-label' }, 'Monday (Today)'),
    div({ class: 'mail-main' }, [
      div({ class: 'mail-item' }),
      div({ class: 'mail-item' }),
      div({ class: 'mail-item' }),
      div({ class: 'mail-item' }),
      div({ class: 'mail-item' }),
      div({ class: 'mail-item' })
    ])
  ])

const Bar = () => (state, actions) =>
  div({ class: 'bar' }, [
    div({ class: 'bar-main' })
  ])

const Home = () => (state, actions) =>
  div({ class: 'home' }, [
    Mail,
    Bar
  ])

export default Home
