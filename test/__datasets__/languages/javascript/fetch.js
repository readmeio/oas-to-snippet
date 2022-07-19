module.exports = `const options = {method: 'GET', headers: {Accept: 'application/xml'}};

fetch('http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));`;
