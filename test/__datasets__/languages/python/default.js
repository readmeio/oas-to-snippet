module.exports = `import requests

url = "http://petstore.swagger.io/v2/pet"

headers = {"Content-Type": "application/json"}

response = requests.post(url, headers=headers)

print(response.text)`;
