
import fs from 'fs'
import { renderToString } from '@hyperapp/render/browser'
import { state } from './domainLogic'
import Stub from './views/Stub'

const view = Stub({
  title: 'Inbox',
  author: 'Dustin Dowell',
  description: '',
  canonical: 'http://inbox.whaaaley.com/path',
  style: {
    css: fs.readFileSync('./public/app.css', 'utf-8'),
    href: '/app.css'
  },
  script: {
    js: fs.readFileSync('./public/app.js', 'utf-8'),
    src: '/app.js'
  }
})

process.stdout.write('<!DOCTYPE html>' + renderToString(view, state))
