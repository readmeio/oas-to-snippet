module.exports = "const request = require('request');\n" +
    '\n' +
    'const options = {\n' +
    "  method: 'GET',\n" +
    "  url: 'http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark',\n" +
    "  headers: {Accept: 'application/xml'}\n" +
    '};\n' +
    '\n' +
    'request(options, function (error, response, body) {\n' +
    '  if (error) throw new Error(error);\n' +
    '\n' +
    '  console.log(body);\n' +
    '});\n';
