
if (DEVELOPMENT) {
  const reloadSource = new EventSource('/reload') // eslint-disable-line

  reloadSource.onmessage = body => {
    console.log(body)

    if (body.data === 'connect') {
      return console.log('Automatic Reload: connected')
    }

    if (body.data === 'reload') {
      window.location.reload()
    }

    if (body.data === void 0) {
      return console.log('Automatic Reload: empty message')
    }

    console.log('Automatic Reload: impossible')
  }
}
