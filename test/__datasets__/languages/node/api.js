module.exports = `const sdk = require('api')('https://example.com/openapi.json');

sdk.loginUser({username: 'woof', password: 'barkbarkbark', Accept: 'application/xml'})
  .then(res => console.log(res))
  .catch(err => console.error(err));`;
