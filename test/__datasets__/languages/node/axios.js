module.exports = `const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark',
  headers: {Accept: 'application/xml'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });`;
