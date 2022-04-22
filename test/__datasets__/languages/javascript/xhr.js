module.exports = 'const data = null;\n' +
    '\n' +
    'const xhr = new XMLHttpRequest();\n' +
    'xhr.withCredentials = true;\n' +
    '\n' +
    'xhr.addEventListener("readystatechange", function () {\n' +
    '  if (this.readyState === this.DONE) {\n' +
    '    console.log(this.responseText);\n' +
    '  }\n' +
    '});\n' +
    '\n' +
    'xhr.open("GET", "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark");\n' +
    'xhr.setRequestHeader("Accept", "application/xml");\n' +
    '\n' +
    'xhr.send(data);';
