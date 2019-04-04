
import { h } from 'hyperapp'

const style = data => {
  if (PRODUCTION) {
    return h('style', { innerHTML: data.css })
  }

  return h('link', { rel: 'stylesheet', href: data.href })
}

const script = data => {
  if (PRODUCTION) {
    return h('script', { innerHTML: data.js })
  }

  return h('script', { defer: true, src: data.src })
}

const Stub = data => {
  return h('html', { lang: 'en-US' }, [
    h('head', {}, [
      h('meta', { charset: 'utf-8' }),
      h('title', {}, data.title),
      h('meta', { name: 'author', content: data.author }),
      h('meta', { name: 'description', content: data.description }),
      h('meta', { id: 'viewport', name: 'viewport' }),
      h('link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }),
      h('link', { rel: 'preload', type: 'font/woff2', href: '/inter-3.3/Inter-Medium.woff2', as: 'font', crossorigin: 'anonymous' }),
      h('link', { rel: 'preload', type: 'font/woff2', href: '/inter-3.3/Inter-Regular.woff2', as: 'font', crossorigin: 'anonymous' }),
      style(data.style)
    ]),
    h('body', {}, [
      h('div', { id: 'hyperapp' }, data.body),
      script(data.script)
    ])
  ])
}

export default Stub
