
import html from 'html'
const { body, link, meta, script, style, title } = html

const Stub = data => {
  const reference = [
    link({ rel: 'stylesheet', href: data.style.href }),
    script({ defer: true, src: data.script.src })
  ]

  const inline = [
    style({ innerHTML: data.style.css }),
    script({ innerHTML: data.script.js })
  ]

  return [
    meta({ charset: 'utf-8' }),
    title(data.title),
    meta({ name: 'author', content: data.author }),
    meta({ name: 'description', content: data.description }),
    meta({ id: 'viewport', name: 'viewport' }),
    link({ rel: 'icon', type: 'image/png', href: '/favicon.png' }),
    DEVELOPMENT ? reference : inline,
    body({ data: JSON.stringify(data.data) })
  ]
}

export default Stub

// DEVELOPMENT
//   ? [
//     link({ rel: 'stylesheet', href: data.style.href }),
//     script({ defer: true, src: data.script.src })
//   ]
//   : [
//     style({ innerHTML: data.style.css }),
//     script({ innerHTML: data.script.js })
//   ]

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
