module.exports = 'import axios from "axios";\n' +
    '\n' +
    'const options = {\n' +
    "  method: 'GET',\n" +
    "  url: 'http://petstore.swagger.io/v2/user/login',\n" +
    "  params: {username: 'woof', password: 'barkbarkbark'},\n" +
    "  headers: {Accept: 'application/xml'}\n" +
    '};\n' +
    '\n' +
    'axios.request(options).then(function (response) {\n' +
    '  console.log(response.data);\n' +
    '}).catch(function (error) {\n' +
    '  console.error(error);\n' +
    '});';
