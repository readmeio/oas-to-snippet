module.exports = "const options = {method: 'POST', headers: {'Content-Type': 'application/json'}};\n" +
    '\n' +
    "fetch('http://petstore.swagger.io/v2/pet', options)\n" +
    '  .then(response => response.json())\n' +
    '  .then(response => console.log(response))\n' +
    '  .catch(err => console.error(err));';
