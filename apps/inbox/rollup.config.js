
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

// NOTE
// 1. This is a flimsy solution to remove logs
// 2. Setting main to false allows imports in symlinked files

const project = JSON.stringify(process.env.PROJECT)

const production = {
  'console.log': 'void 0 && console.log', // 1
  'API': '',
  'DEVELOPMENT': null,
  'PROJECT': project
}

const development = {
  'API': '',
  'DEVELOPMENT': true,
  'PROJECT': project
}

export default {
  plugins: [
    replace(process.env.NODE_ENV === 'development' ? development : production),
    resolve({ mainFields: ['module', 'main'] }) // 2
  ]
}
