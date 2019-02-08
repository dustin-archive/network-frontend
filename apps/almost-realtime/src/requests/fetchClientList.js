
const fetchClientList = main => {
  const options = {
    method: 'POST',
    body: JSON.stringify({})
  }

  window.fetch('API/fetchClientList', options)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      main.appendComments({
        clientList: json.clientList
      })
    })
}

export default fetchClientList
