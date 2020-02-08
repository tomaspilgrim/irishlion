

fetch("https://swapi.co/api/people/1") // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => { // display data in the browser
    document.body.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })

  function getPerson(){
    fetch("https://swapi.co/api/people/4/") // make the request
    .then(response => response.json()) // convert response to json
    .then(myJson => { // display data in the browser
      document.body.innerHTML =
        "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
    })
  }