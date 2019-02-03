
const postComment = data => main => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
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
