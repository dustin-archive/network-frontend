
const fetchComments = main => {
  const options = {
    method: 'POST',
    body: JSON.stringify({})
  }

  window.fetch('http://localhost:8080/fetchComments', options)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      main.appendComments({
        comments: json.comments
      })
    })
}

export default fetchComments
