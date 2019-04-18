
// NOTE: lighthouse complains about maximum-scale=1 and user-scalable=0, but we
// need it for a responsive scaling

const viewport = width => {
  if (width < 376) {
    return 'width=375, maximum-scale=1, user-scalable=0'
  }

  if (width > 959) {
    return 'width=960, minimum-scale=1, user-scalable=0'
  }

  return 'width=device-width, maximum-scale=1, user-scalable=0'
}

const handler = () => {
  const content = viewport(window.screen.width)

  document.getElementById('viewport').setAttribute('content', content)
}

handler()

let timeout

window.addEventListener('resize', () => {
  if (timeout) {
    window.cancelAnimationFrame(timeout)
  }

  timeout = window.requestAnimationFrame(handler)
})
