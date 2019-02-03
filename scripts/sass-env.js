
const env = process.env

let result = ''

for (let key in env) {
  result += '$' + key + ': \'' + env[key] + '\';\n'
}

process.stdout.write(result)
