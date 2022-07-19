module.exports = `const options = {method: 'POST', headers: {'Content-Type': 'application/json'}};

fetch('http://petstore.swagger.io/v2/pet', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));`;
