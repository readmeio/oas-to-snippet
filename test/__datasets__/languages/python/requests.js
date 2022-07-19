module.exports = `import requests

url = "http://petstore.swagger.io/v2/user/login?username=woof&password=barkbarkbark"

headers = {"Accept": "application/xml"}

response = requests.get(url, headers=headers)

print(response.text)`;
