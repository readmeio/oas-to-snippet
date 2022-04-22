module.exports = 'import requests\n' +
    '\n' +
    'url = "http://petstore.swagger.io/v2/pet"\n' +
    '\n' +
    'headers = {"Content-Type": "application/json"}\n' +
    '\n' +
    'response = requests.post(url, headers=headers)\n' +
    '\n' +
    'print(response.text)';
