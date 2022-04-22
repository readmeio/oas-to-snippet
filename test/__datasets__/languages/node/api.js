module.exports =
  "const sdk = require('api')('https://example.com/openapi.json');\n" +
  '\n' +
  "sdk.loginUser({username: 'woof', password: 'barkbarkbark', Accept: 'application/xml'})\n" +
  '  .then(res => console.log(res))\n' +
  '  .catch(err => console.error(err));';
