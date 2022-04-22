module.exports = "require 'uri'\n" +
    "require 'net/http'\n" +
    '\n' +
    'url = URI("http://petstore.swagger.io/v2/pet")\n' +
    '\n' +
    'http = Net::HTTP.new(url.host, url.port)\n' +
    '\n' +
    'request = Net::HTTP::Post.new(url)\n' +
    `request["Content-Type"] = 'application/json'\n` +
    '\n' +
    'response = http.request(request)\n' +
    'puts response.read_body';
