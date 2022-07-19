module.exports = `const settings = {
  async: true,
  crossDomain: true,
  url: 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark',
  method: 'GET',
  headers: {
    Accept: 'application/xml'
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});`;
