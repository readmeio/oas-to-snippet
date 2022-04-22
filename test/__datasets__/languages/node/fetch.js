module.exports =
  "const fetch = require('node-fetch');\n" +
  '\n' +
  "const url = 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark';\n" +
  "const options = {method: 'GET', headers: {Accept: 'application/xml'}};\n" +
  '\n' +
  'fetch(url, options)\n' +
  '  .then(res => res.json())\n' +
  '  .then(json => console.log(json))\n' +
  "  .catch(err => console.error('error:' + err));";
