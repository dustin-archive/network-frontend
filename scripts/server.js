
const { createServer } = require('http')
const { randomBytes } = require('crypto')
const { spawn } = require('child_process')
const { watch } = require('fs')
const handler = require('serve-handler')

const clientMap = new Map()

const server = createServer((request, response) => {
  if (request.url !== '/reload') {
    return handler(request, response, {
      public: 'public',
      rewrites: [
        { source: '/**', destination: '/index.html' }
      ]
    })
  }

  response.setHeader('Cache-Control', 'no-cache, no-transform')
  response.setHeader('Content-Type', 'text/event-stream')
  response.setHeader('Keep-Alive', 'timeout=3600')
  response.setHeader('Transfer-Encoding', 'identity')

  const clientID = randomBytes(6).toString('hex')

  clientMap.set(clientID, response)

  const connectMessage = JSON.stringify({
    status: true,
    type: 'connect'
  })

  response.write('data:' + connectMessage + '\n\n')

  request.on('aborted', () => {
    clientMap.delete(clientID)
  })
})

const execute = flag => {
  const args = process.argv[process.argv.indexOf(flag) + 1].split(' ')
  const command = spawn(args[0], args.slice(1), { stdio: 'inherit' })

  command.on('close', () => {
    for (let [key] of clientMap) {
      const reloadMessage = JSON.stringify({
        status: true,
        type: 'reload'
      })

      clientMap.get(key).write('data:' + reloadMessage + '\n\n')
    }
  })
}

const action = (e, filename) => {
  if (filename.endsWith('.scss')) {
    return execute('--css')
  }

  if (filename.endsWith('.js')) {
    return execute('--js')
  }
}

watch('src', { recursive: true }, action)
watch('src/shared', { recursive: true }, action)

server.listen(3001, () => {
  console.log('\nRunning at http://localhost:3001')
})
