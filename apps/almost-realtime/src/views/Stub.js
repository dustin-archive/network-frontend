
import { h } from 'hyperapp'

// const dnsPrefetch = href => {
//   return h('link', { rel: 'dns-prefetch', href })
// }

const preloadFont = href => {
  const rel = 'preload'
  const type = 'font/woff2'
  const as = 'font'
  const crossorigin = 'anonymous'

  return h('link', { rel, type, href, as, crossorigin })
}

const Stub = data => {
  const title = 'Almost Realtime'
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
      h('link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }),
      preloadFont('/inter-3.3/Inter-Medium.woff2'),
      preloadFont('/inter-3.3/Inter-Regular.woff2'),
      styles
    ]),
    h('body', {}, [
      h('div', { id: 'hyperapp' }),
      scripts
    ])
  ])
}

export default Stub
