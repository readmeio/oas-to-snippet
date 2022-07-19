module.exports = `const http = require('http');

const options = {
  method: 'GET',
  hostname: 'petstore.swagger.io',
  port: null,
  path: '/v2/user/login?username=woof&password=barkbarkbark',
  headers: {
    Accept: 'application/xml'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();`;
