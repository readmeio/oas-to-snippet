module.exports = `const fetch = require('node-fetch');

const url = 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark';
const options = {method: 'GET', headers: {Accept: 'application/xml'}};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));`;
