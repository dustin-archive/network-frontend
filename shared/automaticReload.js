
if (DEVELOPMENT) {
  const reloadSource = new EventSource('/reload') // eslint-disable-line

  reloadSource.onmessage = body => {
    const data = JSON.parse(body.data)

    console.log(data)

    if (data.type === 'connect') {
      return console.log('Successfully connected to automatic reload')
    }

    window.location.reload()
  }
}
