
const postComment = data => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      clientID: data.clientID,
      comment: data.comment
    })
  }

  return window.fetch('API/postComment', options)
    .then(res => res.json())
    .catch(error => {
      console.error(error)
      return error
    })
}

export default postComment
