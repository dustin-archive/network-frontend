
const postComment = data => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      clientID: data.clientID,
      comment: data.comment
    })
  }

  window.fetch('API/postComment', options)
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
}

export default postComment
