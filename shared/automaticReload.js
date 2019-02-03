
if (DEVELOPMENT) {
  const source = new EventSource('/reload') // eslint-disable-line

  source.onmessage = () => {
    window.location.reload()
  }
}
