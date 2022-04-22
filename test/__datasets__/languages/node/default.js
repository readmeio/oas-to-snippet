module.exports = "const fetch = require('node-fetch');\n" +
    '\n' +
    "const url = 'http://petstore.swagger.io/v2/pet';\n" +
    "const options = {method: 'POST', headers: {'Content-Type': 'application/json'}};\n" +
    '\n' +
    'fetch(url, options)\n' +
    '  .then(res => res.json())\n' +
    '  .then(json => console.log(json))\n' +
    "  .catch(err => console.error('error:' + err));";
