module.exports = 'const http = require("http");\n' +
    '\n' +
    'const options = {\n' +
    '  "method": "GET",\n' +
    '  "hostname": "petstore.swagger.io",\n' +
    '  "port": null,\n' +
    '  "path": "/v2/user/login?username=woof&password=barkbarkbark",\n' +
    '  "headers": {\n' +
    '    "Accept": "application/xml"\n' +
    '  }\n' +
    '};\n' +
    '\n' +
    'const req = http.request(options, function (res) {\n' +
    '  const chunks = [];\n' +
    '\n' +
    '  res.on("data", function (chunk) {\n' +
    '    chunks.push(chunk);\n' +
    '  });\n' +
    '\n' +
    '  res.on("end", function () {\n' +
    '    const body = Buffer.concat(chunks);\n' +
    '    console.log(body.toString());\n' +
    '  });\n' +
    '});\n' +
    '\n' +
    'req.end();';
