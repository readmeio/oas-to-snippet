module.exports =
  "const options = {method: 'GET', headers: {Accept: 'application/xml'}};\n" +
  '\n' +
  "fetch('http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark', options)\n" +
  '  .then(response => response.json())\n' +
  '  .then(response => console.log(response))\n' +
  '  .catch(err => console.error(err));';
