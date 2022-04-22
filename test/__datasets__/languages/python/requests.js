module.exports = 'import requests\n' +
    '\n' +
    'url = "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark"\n' +
    '\n' +
    'headers = {"Accept": "application/xml"}\n' +
    '\n' +
    'response = requests.get(url, headers=headers)\n' +
    '\n' +
    'print(response.text)';
