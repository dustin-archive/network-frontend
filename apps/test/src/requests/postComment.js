
const postComment = data => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      clientID: data.clientID,
      comment: data.comment,
      name: data.name
    })
  }

  window.fetch('http://localhost:8080/postComment', options)
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
}

export default postComment
