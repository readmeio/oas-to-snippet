module.exports =
  'const settings = {\n' +
  '  "async": true,\n' +
  '  "crossDomain": true,\n' +
  '  "url": "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark",\n' +
  '  "method": "GET",\n' +
  '  "headers": {\n' +
  '    "Accept": "application/xml"\n' +
  '  }\n' +
  '};\n' +
  '\n' +
  '$.ajax(settings).done(function (response) {\n' +
  '  console.log(response);\n' +
  '});';
