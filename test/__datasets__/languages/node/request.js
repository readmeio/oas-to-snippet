module.exports = `const request = require('request');

const options = {
  method: 'GET',
  url: 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark',
  headers: {Accept: 'application/xml'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});`;
