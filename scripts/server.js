
const clients = {}
let id = 0

// ...

const handler = require('serve-handler')
const http = require('http')

const server = http.createServer((request, response) => {
  if (request.url !== '/reload') {
    return handler(request, response, {
      public: 'public',
      rewrites: [
        { source: '/**', destination: '/index.html' }
      ]
    })
  }

  response.setHeader('Content-Type', 'text/event-stream')

  clients[id] = response
  request.on('close', () => { delete clients[id] })
  ++id
})

server.listen(3001, () => {
  console.log('\nRunning at http://localhost:3001')
})

// ...

const spawn = require('child_process').spawn
const fs = require('fs')

const execute = flag => {
  const args = process.argv[process.argv.indexOf(flag) + 1].split(' ')
  const command = spawn(args[0], args.slice(1), { stdio: 'inherit' })

  command.on('close', () => {
    for (let id in clients) {
      clients[id].write('data\n\n')
    }
  })
}

const action = (e, filename) => {
  if (filename.endsWith('.scss')) {
    execute('--css')
  }

  if (filename.endsWith('.js')) {
    execute('--js')
  }
}

fs.watch('src', { recursive: true }, action)
fs.watch('src/shared', { recursive: true }, action)
