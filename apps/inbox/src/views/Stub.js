
import tags from 'tags'
const { html, link, meta, script, style, title } = tags

const Stub = data => {
  return html({ lang: 'en-US' }, [
    meta({ charset: 'utf-8' }),
    title(data.title),
    meta({ name: 'author', content: data.author }),
    meta({ name: 'description', content: data.description }),
    meta({ id: 'viewport', name: 'viewport' }),
    link({ rel: 'icon', type: 'image/png', href: '/favicon.png' }),
    DEVELOPMENT
      ? [
        link({ rel: 'stylesheet', href: data.style.href }),
        script({ defer: true, src: data.script.src })
      ]
      : [
        style({ innerHTML: data.style.css }),
        script({ innerHTML: data.script.js })
      ]
  ])
}

export default Stub

// link({
//   rel: 'preload',
//   type: 'font/woff2',
//   href: '/inter-3.3/Inter-Medium.woff2',
//   as: 'font',
//   crossorigin: 'anonymous'
// }),
// link({
//   rel: 'preload',
//   type: 'font/woff2',
//   href: '/inter-3.3/Inter-Regular.woff2',
//   as: 'font',
//   crossorigin: 'anonymous'
// }),
