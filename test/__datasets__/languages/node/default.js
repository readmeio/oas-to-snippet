module.exports = `const fetch = require('node-fetch');

const url = 'http://petstore.swagger.io/v2/pet';
const options = {method: 'POST', headers: {'Content-Type': 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));`;
