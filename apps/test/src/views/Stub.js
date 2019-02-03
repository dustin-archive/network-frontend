
import { h } from 'hyperapp'

//
// ... Metadata
// =============================================================================
// 1. NOTE: lighthouse complains about 414 (iphones) so use 412 (nexus)
// 2. NOTE: lighthouse complains about maximum-scale=1 and user-scalable=0, but
// we need these for a responsive scaling

const Stub = data => {
  const title = 'Almost Realtime Comments'
  const author = 'Dustin Dowell'
  const description = ''
  const keywords = ''

  const styles = PRODUCTION
    ? h('style', { innerHTML: data.css })
    : h('link', { rel: 'stylesheet', href: '/app.css' })

  const scripts = PRODUCTION
    ? h('script', { innerHTML: data.js })
    : h('script', { defer: true, src: '/app.js' })

  return h('html', { lang: 'en-US' }, [
    h('head', {}, [
      h('meta', { charset: 'utf-8' }),
      h('title', {}, title),
      h('meta', { name: 'author', content: author }),
      h('meta', { name: 'description', content: description }),
      h('meta', { name: 'keywords', content: keywords }),
      h('meta', { id: 'viewport', name: 'viewport' }),
      h('link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }),
      styles
    ]),
    h('body', {}, [
      h('div', { id: 'hyperapp' }),
      scripts
    ])
  ])
}

export default Stub
